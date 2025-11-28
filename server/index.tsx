import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'npm:@supabase/supabase-js@2';
import * as kv from './kv_store.tsx';

const app = new Hono();

// CORS 및 로거 설정
app.use('*', cors());
app.use('*', logger(console.log));

// Supabase 클라이언트 생성
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

// 옛날 키워드를 새로운 키워드로 매핑
const KEYWORD_MIGRATION_MAP: Record<string, string> = {
  'happy': 'sparkling',      // 행복 -> 반짝이는
  'peaceful': 'still',       // 평화 -> 고요한
  'excited': 'lively',       // 설렘 -> 생기있는
  'nostalgic': 'familiar',   // 그리움 -> 정겨운
  'sad': 'calm',             // 슬픔 -> 차분한
  'anxious': 'calm',         // 불안 -> 차분한
  'angry': 'energetic',      // 화남 -> 열정적인
  'surprised': 'sparkling',  // 놀람 -> 반짝이는
};

// 키워드 마이그레이션 함수
function migrateKeywords(keywords: string[]): string[] {
  return keywords.map(k => KEYWORD_MIGRATION_MAP[k] || k);
}

// 유틸리티: 사용자 인증 확인
async function authenticateUser(authHeader: string | null) {
  if (!authHeader) {
    return { error: 'Unauthorized', user: null };
  }
  
  const accessToken = authHeader.split(' ')[1];
  const { data: { user }, error } = await supabase.auth.getUser(accessToken);
  
  if (error || !user) {
    return { error: 'Unauthorized', user: null };
  }
  
  return { error: null, user };
}

// 회원가입
app.post('/make-server-925a5454/signup', async (c) => {
  try {
    console.log('Signup request received');
    const body = await c.req.json();
    console.log('Request body:', { email: body.email, nickname: body.nickname });
    
    const { email, password, nickname } = body;
    
    // 유효성 검증
    if (!email || !password || !nickname) {
      console.log('Validation failed - missing fields');
      return c.json({ error: 'VALIDATION_FAILED' }, 400);
    }
    
    // KV에서 이메일 중복 체크
    console.log('Checking for existing email in KV:', email);
    const existingUsers = await kv.getByPrefix(`user:email:${email}`);
    console.log('Existing users in KV found:', existingUsers.length);
    if (existingUsers.length > 0) {
      return c.json({ error: 'EMAIL_DUPLICATE' }, 400);
    }
    
    // Supabase Auth로 사용자 생성
    console.log('Creating user in Supabase Auth');
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { nickname },
      // Automatically confirm the user's email since an email server hasn't been configured.
      email_confirm: true,
    });
    
    if (error) {
      console.error('Supabase Auth error:', error);
      // 이메일이 이미 Auth에 존재하는 경우
      if (error.message?.includes('already been registered') || error.code === 'email_exists') {
        return c.json({ error: 'EMAIL_DUPLICATE' }, 400);
      }
      return c.json({ error: 'AUTH_CREATE_FAILED', details: error.message }, 500);
    }
    
    if (!data?.user?.id) {
      console.error('No user ID returned from Supabase');
      return c.json({ error: 'NO_USER_ID' }, 500);
    }
    
    console.log('User created in Auth, ID:', data.user.id);
    
    // KV에 사용자 정보 저장
    const user = {
      id: data.user.id,
      email,
      nickname,
      createdAt: new Date().toISOString(),
    };
    
    console.log('Saving user to KV store');
    await kv.mset(
      [`user:${user.id}`, `user:email:${email}`],
      [user, user.id]
    );
    console.log('User saved successfully');
    
    return c.json({ user }, 201);
  } catch (error) {
    console.error('Signup error (caught):', error);
    console.error('Error stack:', error.stack);
    return c.json({ error: 'INTERNAL_SERVER_ERROR', details: error.message }, 500);
  }
});

// 사용자 프로필 조회
app.get('/make-server-925a5454/users/:userId', async (c) => {
  try {
    const { userId } = c.req.param();
    const user = await kv.get(`user:${userId}`);
    
    if (!user) {
      return c.json({ error: 'USER_NOT_FOUND' }, 404);
    }
    
    return c.json({ user });
  } catch (error) {
    console.error('Get user error:', error);
    return c.json({ error: 'INTERNAL_SERVER_ERROR' }, 500);
  }
});

// Aura 기록 생성
app.post('/make-server-925a5454/aura-records', async (c) => {
  try {
    const authHeader = c.req.header('Authorization');
    const { error: authError, user: authUser } = await authenticateUser(authHeader);
    
    if (authError || !authUser) {
      return c.json({ error: 'UNAUTHORIZED' }, 401);
    }
    
    const { placeName, placeAddress, location, emotionKeywords, note } = await c.req.json();
    
    // 유효성 검증
    if (!placeName || !placeAddress || !location || !emotionKeywords || !note) {
      return c.json({ error: 'VALIDATION_FAILED' }, 400);
    }
    
    if (emotionKeywords.length < 1 || emotionKeywords.length > 2) {
      return c.json({ error: 'VALIDATION_FAILED', message: '감정 키워드는 1~2개를 선택해야 합니다.' }, 400);
    }
    
    if (note.length < 5 || note.length > 500) {
      return c.json({ error: 'VALIDATION_FAILED', message: '기록은 5~500자 사이로 작성해야 합니다.' }, 400);
    }
    
    // 사용자 정보 조회
    const user = await kv.get(`user:${authUser.id}`);
    if (!user) {
      return c.json({ error: 'USER_NOT_FOUND' }, 404);
    }
    
    // Aura 기록 생성
    const recordId = crypto.randomUUID();
    const now = new Date().toISOString();
    
    const dotColorType = emotionKeywords[0]; // 첫 번째 키워드를 dotColorType으로 사용
    
    const auraRecord = {
      id: recordId,
      writerId: authUser.id,
      writerNickname: user.nickname,
      placeName,
      placeAddress,
      location,
      emotionKeywords,
      note,
      createdAt: now,
      updatedAt: now,
      dotColorType,
    };
    
    await kv.mset(
      [
        `aura:${recordId}`,
        `aura:user:${authUser.id}:${recordId}`,
        `aura:created:${now}:${recordId}`
      ],
      [auraRecord, recordId, recordId]
    );
    
    return c.json({ record: auraRecord }, 201);
  } catch (error) {
    console.error('Create aura record error:', error);
    return c.json({ error: 'INTERNAL_SERVER_ERROR' }, 500);
  }
});

// 전체 Aura 기록 조회 (필터링 및 정렬 지원)
app.get('/make-server-925a5454/aura-records', async (c) => {
  try {
    // 모든 aura: 키로 시작하는 기록 조회
    const allRecordIds = await kv.getByPrefix('aura:created:');
    
    // 실제 기록 데이터 조회
    const recordIds = allRecordIds.map((id) => id as string);
    const records = await Promise.all(
      recordIds.map(async (id) => {
        const record = await kv.get(`aura:${id}`);
        return record;
      })
    );
    
    // null 제거 및 타입 필터링
    const validRecords = records.filter((r) => r !== null);
    
    // 키워드 마이그레이션 적용
    validRecords.forEach((record) => {
      if (record.emotionKeywords && Array.isArray(record.emotionKeywords)) {
        record.emotionKeywords = migrateKeywords(record.emotionKeywords);
      }
    });
    
    // 정렬 (기본: 최신순)
    const sortOrder = c.req.query('sortOrder') || 'desc';
    validRecords.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    });
    
    // 키워드 필터링
    const keywords = c.req.query('keywords');
    let filteredRecords = validRecords;
    if (keywords) {
      const keywordArray = keywords.split(',');
      filteredRecords = validRecords.filter((record) =>
        record.emotionKeywords.some((k: string) => keywordArray.includes(k))
      );
    }
    
    return c.json({ records: filteredRecords });
  } catch (error) {
    console.error('Get aura records error:', error);
    return c.json({ error: 'INTERNAL_SERVER_ERROR' }, 500);
  }
});

// 특정 사용자의 Aura 기록 조회
app.get('/make-server-925a5454/aura-records/user/:userId', async (c) => {
  try {
    const { userId } = c.req.param();
    
    // 사용자의 모든 기록 ID 조회
    const userRecordRefs = await kv.getByPrefix(`aura:user:${userId}:`);
    const recordIds = userRecordRefs.map((id) => id as string);
    
    // 실제 기록 데이터 조회
    const records = await Promise.all(
      recordIds.map(async (id) => {
        const record = await kv.get(`aura:${id}`);
        return record;
      })
    );
    
    // null 제거 및 정렬
    const validRecords = records.filter((r) => r !== null);
    
    // 키워드 마이그레이션 적용
    validRecords.forEach((record) => {
      if (record.emotionKeywords && Array.isArray(record.emotionKeywords)) {
        record.emotionKeywords = migrateKeywords(record.emotionKeywords);
      }
    });
    
    const sortOrder = c.req.query('sortOrder') || 'desc';
    validRecords.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    });
    
    // 키워드 필터링
    const keywords = c.req.query('keywords');
    let filteredRecords = validRecords;
    if (keywords) {
      const keywordArray = keywords.split(',');
      filteredRecords = validRecords.filter((record) =>
        record.emotionKeywords.some((k: string) => keywordArray.includes(k))
      );
    }
    
    return c.json({ records: filteredRecords });
  } catch (error) {
    console.error('Get user aura records error:', error);
    return c.json({ error: 'INTERNAL_SERVER_ERROR' }, 500);
  }
});

// GPT API를 사용한 감정 키워드 추출
app.post('/make-server-925a5454/extract-keywords', async (c) => {
  try {
    // 사용자 인증 확인
    const authResult = await authenticateUser(c.req.header('Authorization'));
    if (authResult.error) {
      return c.json({ error: authResult.error }, 401);
    }
    
    const { note } = await c.req.json();
    
    if (!note || note.length < 10) {
      return c.json({ error: 'VALIDATION_FAILED', message: '감정 기록이 너무 짧습니다.' }, 400);
    }
    
    const openaiApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openaiApiKey) {
      console.error('OPENAI_API_KEY not found');
      return c.json({ error: 'API_KEY_NOT_CONFIGURED' }, 500);
    }
    
    // GPT API 호출
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `당신은 감정 분석 전문가입니다. 사용자가 입력한 감정 기록을 분석하여 가장 적합한 감정 키워드를 최대 2개까지 선별해주세요.

사용 가능한 감정 키워드 목록:
- still (고요한): 평온함, 잔잔함, 조용함, 차분한 고요
- warm (포근한): 따뜻함, 편안함, 아늑함, 포근한 느낌
- familiar (정겨운): 친근함, 정감, 익숙함, 정겨운 분위기
- calm (차분한): 평정, 침착함, 차분함, 안정적임
- fresh (산뜻한): 상쾌함, 맑음, 깨끗함, 신선함
- lively (생기있는): 활력, 생동감, 에너지, 생기
- sparkling (반짝이는): 빛남, 반짝임, 눈부심, 화려함
- energetic (열정적인): 열정, 적극성, 강렬함, 힘참

응답 형식:
- JSON 배열로 1~2개의 키워드 ID만 반환 (예: ["still", "warm"])
- 다른 설명이나 텍스트 없이 JSON만 반환`
          },
          {
            role: 'user',
            content: note
          }
        ],
        temperature: 0.7,
        max_tokens: 50,
      }),
    });
    
    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenAI API error:', errorData);
      return c.json({ error: 'AI_API_ERROR' }, 500);
    }
    
    const data = await response.json();
    const content = data.choices?.[0]?.message?.content?.trim();
    
    if (!content) {
      return c.json({ error: 'NO_RESPONSE_FROM_AI' }, 500);
    }
    
    // JSON 파싱
    try {
      const keywords = JSON.parse(content);
      
      // 유효성 검증
      if (!Array.isArray(keywords) || keywords.length === 0 || keywords.length > 2) {
        return c.json({ error: 'INVALID_KEYWORDS_FORMAT' }, 500);
      }
      
      const validKeywords = ['still', 'warm', 'familiar', 'calm', 'fresh', 'lively', 'sparkling', 'energetic'];
      const isValid = keywords.every((k: string) => validKeywords.includes(k));
      
      if (!isValid) {
        console.error('Invalid keywords received from GPT:', keywords);
        return c.json({ error: 'INVALID_KEYWORD_IDS' }, 500);
      }
      
      return c.json({ keywords });
    } catch (parseError) {
      console.error('Failed to parse AI response:', content, parseError);
      return c.json({ error: 'AI_RESPONSE_PARSE_ERROR' }, 500);
    }
  } catch (error) {
    console.error('Extract keywords error:', error);
    return c.json({ error: 'INTERNAL_SERVER_ERROR' }, 500);
  }
});

// 네이버 장소 검색 프록시
app.get('/make-server-925a5454/search/places', async (c) => {
  try {
    const query = c.req.query('query');
    console.log('Place search query:', query);
    
    if (!query) {
      return c.json({ error: 'VALIDATION_FAILED', message: '검색어를 입력해 주세요.' }, 400);
    }
    
    // 실제 프로덕션에서는 네이버 API를 호출해야 하지만,
    // 여기서는 데모용 mock 데이터를 반환합니다.
    // 네이버 API 키가 필요한 경우 environment variable로 설정해야 합니다.
    
    const mockPlaces = [
      {
        title: '경복궁',
        address: '서울특별시 종로구 사직로 161',
        roadAddress: '서울특별시 종로구 사직로 161',
        mapx: '1269780000', // 126.9780 * 10000000
        mapy: '375665000',  // 37.5665 * 10000000
      },
      {
        title: 'N서울타워',
        address: '서울특별시 용산구 남산공원길 105',
        roadAddress: '서울특별시 용산구 남산공원길 105',
        mapx: '1269880000',
        mapy: '375515000',
      },
      {
        title: '한강공원',
        address: '서울특별시 영등포구 여의동로 330',
        roadAddress: '서울특별시 영등포구 여의동로 330',
        mapx: '1269230000',
        mapy: '375250000',
      },
      {
        title: '홍대입구역',
        address: '서울특별시 마포구 양화로 188',
        roadAddress: '서울특별시 마포구 양화로 188',
        mapx: '1269100000',
        mapy: '375570000',
      },
      {
        title: '강남역',
        address: '서울특별시 강남구 강남대로 지하 396',
        roadAddress: '서울특별시 강남구 강남대로 지하 396',
        mapx: '1270270000',
        mapy: '373000000',
      },
      {
        title: '명동성당',
        address: '서울특별시 중구 명동길 74',
        roadAddress: '서울특별시 중구 명동길 74',
        mapx: '1269800000',
        mapy: '375630000',
      },
      {
        title: '잠실종합운동장',
        address: '서울특별시 송파구 올림픽로 25',
        roadAddress: '서울특별시 송파구 올림픽로 25',
        mapx: '1271100000',
        mapy: '374000000',
      },
      {
        title: '이태원',
        address: '서울특별시 용산구 이태원동',
        roadAddress: '서울특별시 용산구 이태원로',
        mapx: '1269930000',
        mapy: '375400000',
      },
    ];
    
    // 검색어로 필터링 (대소문자 구분 없이)
    const searchTerm = query.toLowerCase();
    const filteredPlaces = mockPlaces.filter(place =>
      place.title.toLowerCase().includes(searchTerm) || 
      place.address.toLowerCase().includes(searchTerm) ||
      place.roadAddress.toLowerCase().includes(searchTerm)
    );
    
    console.log('Filtered places:', filteredPlaces.length);
    
    return c.json({ places: filteredPlaces });
  } catch (error) {
    console.error('Search places error:', error);
    return c.json({ error: 'INTERNAL_SERVER_ERROR' }, 500);
  }
});

console.log('Server starting...');
Deno.serve(app.fetch);
