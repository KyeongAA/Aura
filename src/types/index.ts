// AuraRecord 타입 정의
export interface AuraRecord {
  id: string;
  writerId: string;
  writerNickname: string;
  placeName: string;
  placeAddress: string;
  location: {
    lat: number;
    lng: number;
  };
  emotionKeywords: string[];
  note: string;
  createdAt: string;
  updatedAt: string;
  dotColorType: string;
}

// User 타입 정의
export interface User {
  id: string;
  email: string;
  nickname: string;
  createdAt: string;
}

// Naver 장소 검색 결과 타입
export interface NaverPlace {
  title: string;
  address: string;
  roadAddress: string;
  mapx: string; // 네이버는 카텍 X 좌표 (경도 * 10000000)
  mapy: string; // 네이버는 카텍 Y 좌표 (위도 * 10000000)
}

// 로그인/회원가입 입력 타입
export interface SignupInput {
  email: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

// Aura 작성 입력 타입
export interface AuraCreateInput {
  placeName: string;
  placeAddress: string;
  location: {
    lat: number;
    lng: number;
  };
  emotionKeywords: string[];
  note: string;
}
