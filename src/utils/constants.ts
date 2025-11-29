// 감정 키워드 정의 (8개 팔레트) - globals.css의 emotion colors 사용
export const EMOTION_KEYWORDS = [
  { id: 'still', label: '고요한', color: '#B0C0DD' },
  { id: 'warm', label: '포근한', color: '#D9D4EC' },
  { id: 'familiar', label: '정겨운', color: '#F1C9D4' },
  { id: 'calm', label: '차분한', color: '#BCD3E4' },
  { id: 'fresh', label: '산뜻한', color: '#C5E1D1' },
  { id: 'lively', label: '생기있는', color: '#DCE9B9' },
  { id: 'sparkling', label: '반짝이는', color: '#F7DA96' },
  { id: 'energetic', label: '열정적인', color: '#F3988C' },
] as const;

export type EmotionKeywordId = typeof EMOTION_KEYWORDS[number]['id'];

// 감정 키워드로부터 dotColorType 계산
export function getDotColorType(emotionKeywords: string[]): string {
  if (emotionKeywords.length === 0) return 'default';
  if (emotionKeywords.length === 1) return emotionKeywords[0];
  
  // 2개인 경우 첫 번째 키워드를 우선으로 사용
  return emotionKeywords[0];
}

// dotColorType으로부터 실제 색상 가져오기
export function getColorFromDotType(dotColorType: string): string {
  const emotion = EMOTION_KEYWORDS.find(e => e.id === dotColorType);
  return emotion?.color || '#999999';
}

// 서울 중심 좌표
export const SEOUL_CENTER = {
  lat: 37.5665,
  lng: 126.9780,
};

// 서울 영역 bounds
export const SEOUL_BOUNDS = {
  north: 37.7000,
  south: 37.4300,
  east: 127.1800,
  west: 126.7640,
};

// 페이지네이션 설정
export const ITEMS_PER_PAGE = 6;

// 기록 텍스트 제한
export const NOTE_MIN_LENGTH = 5;
export const NOTE_MAX_LENGTH = 500;

// 주소/텍스트 말줄임 길이
export const ADDRESS_MAX_LENGTH = 60;
export const NOTE_PREVIEW_LENGTH = 120;

// 날짜 포맷팅 함수
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
}

// 텍스트 말줄임 함수
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

// 에러 메시지 매핑
export const ERROR_MESSAGES: Record<string, string> = {
  EMAIL_DUPLICATE: '이미 사용 중인 이메일입니다.',
  AUTH_FAILED: '이메일 또는 비밀번호가 올바르지 않습니다.',
  PLACE_NOT_FOUND: '장소를 찾을 수 없습니다.',
  VALIDATION_FAILED: '입력 정보를 확인해 주세요.',
  INTERNAL_SERVER_ERROR: '일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.',
  NETWORK_ERROR: '네트워크 연결을 확인해 주세요.',
  UNAUTHORIZED: '로그인이 만료되었습니다. 다시 로그인해 주세요.',
  UNKNOWN_ERROR: '알 수 없는 오류가 발생했습니다.',
};

export function getErrorMessage(errorCode: string): string {
  return ERROR_MESSAGES[errorCode] || ERROR_MESSAGES.UNKNOWN_ERROR;
}
