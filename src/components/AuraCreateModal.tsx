import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { EMOTION_KEYWORDS, NOTE_MIN_LENGTH, NOTE_MAX_LENGTH } from '../utils/constants';
import { Toast } from './Toast';
import { KeywordChip } from './KeywordChip';
import type { NaverPlace } from '../types';
import svgPaths from '../imports/svg-fspzhhsrux';

interface AuraCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function AuraCreateModal({ isOpen, onClose, onSuccess }: AuraCreateModalProps) {
  const { user, accessToken } = useAuth();
  
  // 장소 검색
  const [placeQuery, setPlaceQuery] = useState('');
  const [placeResults, setPlaceResults] = useState<NaverPlace[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<NaverPlace | null>(null);
  const [searchLoading, setSearchLoading] = useState(false);
  
  // 감정 키워드
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  
  // 기록 텍스트
  const [note, setNote] = useState('');
  
  // 에러 및 로딩
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [extracting, setExtracting] = useState(false);
  
  // Toast
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  // 모달이 열릴 때 초기화
  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  // 장소 검색 (디바운스)
  useEffect(() => {
    if (!placeQuery || placeQuery.length < 2) {
      setPlaceResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setSearchLoading(true);
      try {
        console.log('Searching for place:', placeQuery);
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-925a5454/search/places?query=${encodeURIComponent(placeQuery)}`,
          {
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log('Search results:', data);
          setPlaceResults(data.places || []);
        }
      } catch (error) {
        console.error('Place search error:', error);
      } finally {
        setSearchLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [placeQuery]);

  const resetForm = () => {
    setPlaceQuery('');
    setPlaceResults([]);
    setSelectedPlace(null);
    setSelectedKeywords([]);
    setNote('');
    setError(null);
  };

  const toggleKeyword = (keywordId: string) => {
    setSelectedKeywords(prev => {
      if (prev.includes(keywordId)) {
        return prev.filter(k => k !== keywordId);
      }
      if (prev.length >= 2) {
        return prev; // 최대 2개까지만
      }
      return [...prev, keywordId];
    });
  };

  const canSubmit = () => {
    return selectedPlace && selectedKeywords.length >= 1 && note.length >= NOTE_MIN_LENGTH && note.length <= NOTE_MAX_LENGTH;
  };

  const handleExtractKeywords = async () => {
    if (!note || note.length < NOTE_MIN_LENGTH || !accessToken) {
      setToastMessage('먼저 감정 기록을 작성해주세요.');
      setToastType('error');
      setShowToast(true);
      return;
    }

    setExtracting(true);
    setError(null);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-925a5454/extract-keywords`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ note }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'KEYWORD_EXTRACTION_FAILED');
      }

      // AI가 추출한 키워드로 자동 선택
      if (data.keywords && Array.isArray(data.keywords)) {
        setSelectedKeywords(data.keywords);
        setToastMessage('AI가 감정 키워드를 분석했습니다!');
        setToastType('success');
        setShowToast(true);
      }
    } catch (error: any) {
      console.error('Keyword extraction error:', error);
      setError('키워드 추출 중 오류가 발생했습니다.');
    } finally {
      setExtracting(false);
    }
  };

  const handleSubmit = async () => {
    if (!canSubmit() || !accessToken) return;

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-925a5454/aura-records`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            placeName: selectedPlace!.title,
            placeAddress: selectedPlace!.roadAddress || selectedPlace!.address,
            location: {
              lat: parseFloat(selectedPlace!.mapy) / 10000000,
              lng: parseFloat(selectedPlace!.mapx) / 10000000,
            },
            emotionKeywords: selectedKeywords,
            note,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'INTERNAL_SERVER_ERROR');
      }

      setToastMessage('새로운 Aura가 기록되었습니다.');
      setToastType('success');
      setShowToast(true);
      
      onSuccess();
      setTimeout(() => {
        onClose();
      }, 500);
    } catch (error: any) {
      setError(error.message || '오류가 발생했습니다.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="bg-[#fcfcfc] relative rounded-[20px] w-full max-w-[1320px] max-h-[90vh] overflow-y-auto">
          <div className="flex flex-col justify-center size-full">
            <div className="box-border content-stretch flex flex-col gap-[38px] items-start justify-center overflow-clip px-[36px] py-[40px] relative size-full">
              <p className="font-['Pretendard:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#181819] text-[32px] text-center tracking-[1.28px] w-full">
                새로운 Aura 작성하기
              </p>
              
              {/* Content */}
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                {/* 장소 입력 */}
                <div className="relative w-full">
                  <div className="bg-[#fffce0] box-border content-stretch flex gap-[10px] items-center px-[28px] py-[20px] relative rounded-[999px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border border-[#dcdee1] border-solid inset-0 pointer-events-none rounded-[999px]" />
                    <input
                      type="text"
                      value={selectedPlace ? selectedPlace.title : placeQuery}
                      onChange={(e) => {
                        setPlaceQuery(e.target.value);
                        if (selectedPlace) setSelectedPlace(null);
                      }}
                      placeholder="공간 이름을 입력하세요"
                      className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[20px] bg-transparent border-none outline-none placeholder:text-[#abacaf] text-[#313132]"
                    />
                    {searchLoading && (
                      <div className="w-5 h-5 border-2 border-[#dcdee1] border-t-[#313132] rounded-full animate-spin" />
                    )}
                  </div>
                  
                  {/* 검색 결과 드롭다운 */}
                  {placeResults.length > 0 && !selectedPlace && (
                    <div className="absolute top-full mt-2 w-full bg-white box-border content-stretch flex flex-col gap-[12px] items-start px-0 py-[12px] rounded-[12px] shadow-[0px_2px_15px_0px_rgba(0,0,0,0.15)] max-h-[400px] overflow-y-auto z-10">
                      {placeResults.map((place, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedPlace(place);
                            setPlaceQuery('');
                            setPlaceResults([]);
                          }}
                          className="w-full box-border content-stretch flex flex-col gap-[12px] items-start px-[28px] py-0 relative shrink-0 border-b border-[#c4c5c8] last:border-b-0 hover:bg-[#f5f5f5] transition-colors pb-[12px]"
                        >
                          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#181819] text-[20px] tracking-[0.8px] w-full text-left">
                            {place.title}
                          </p>
                          <p className="font-['Pretendard:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#181819] text-[20px] w-full text-left">
                            {place.roadAddress || place.address}
                          </p>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* 주소 자동 생성 */}
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-0 relative w-full">
                      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-black">
                        {selectedPlace ? (selectedPlace.roadAddress || selectedPlace.address) : '주소 자동 생성'}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* 기록 입력 */}
                <div className="bg-[#fffce0] box-border content-stretch flex gap-[10px] h-[376px] items-start px-[28px] py-[20px] relative rounded-[20px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-2 border-[#dcdee1] border-solid inset-0 pointer-events-none rounded-[20px]" />
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="공간에서 느낀 감정을 기록하세요"
                    maxLength={NOTE_MAX_LENGTH}
                    className="basis-0 font-['Pretendard:Regular',sans-serif] grow h-full leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[20px] bg-transparent border-none outline-none resize-none placeholder:text-[#abacaf] text-[#313132]"
                  />
                </div>
              </div>
              
              {/* Bottom */}
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                {/* Keyword */}
                <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
                  {/* 키워드 추출 버튼 */}
                  <button
                    onClick={handleExtractKeywords}
                    disabled={extracting || note.length < NOTE_MIN_LENGTH}
                    className={`box-border content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative rounded-[999px] shrink-0 transition-all ${
                      note.length < NOTE_MIN_LENGTH || extracting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'
                    }`}
                  >
                    <div aria-hidden="true" className="absolute border-2 border-[#939496] border-solid inset-0 pointer-events-none rounded-[999px]" />
                    <div className="overflow-clip relative shrink-0 size-[48px]">
                      {extracting ? (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-8 h-8 border-2 border-[#939496] border-t-[#313132] rounded-full animate-spin" />
                        </div>
                      ) : (
                        <div className="absolute inset-[8.33%_8.33%_0.77%_8.33%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 44">
                            <g>
                              <path d={svgPaths.p35b1f980} fill="url(#paint0_linear_10_1381)" />
                            </g>
                            <defs>
                              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_10_1381" x1="36.5002" x2="20.0002" y1="1" y2="40">
                                <stop stopColor="#B0C0DD" />
                                <stop offset="0.14" stopColor="#D9D4EC" />
                                <stop offset="0.28" stopColor="#F1C9D4" />
                                <stop offset="0.42" stopColor="#BCD3E4" />
                                <stop offset="0.56" stopColor="#C5E1D1" />
                                <stop offset="0.7" stopColor="#DCE9B9" />
                                <stop offset="0.84" stopColor="#F7DA96" />
                                <stop offset="1" stopColor="#F3988C" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      )}
                    </div>
                    <p className="font-['Pretendard:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap whitespace-pre">
                      {extracting ? 'AI 분석 중...' : '키워드 추출하기'}
                    </p>
                  </button>
                  
                  {/* Keywords */}
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 flex-wrap">
                    {selectedKeywords.length === 0 ? (
                      // 키워드가 추출되지 않았을 때 - Keyword 칩 2개 표시
                      <>
                        {[...Array(2).keys()].map((i) => (
                          <div
                            key={i}
                            className="bg-[#ebedf0] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0"
                          >
                            <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap tracking-[0.8px] whitespace-pre">
                              Keyword
                            </p>
                          </div>
                        ))}
                      </>
                    ) : (
                      // 키워드가 추출되었을 때 - 선택된 키워드만 표시
                      selectedKeywords.map((keywordId, index) => {
                        const emotion = EMOTION_KEYWORDS.find(k => k.id === keywordId);
                        if (!emotion) return null;
                        return (
                          <KeywordChip
                            key={index}
                            keyword={emotion.label}
                            color={emotion.color}
                          />
                        );
                      })
                    )}
                  </div>
                </div>
                
                {/* 등록하기 버튼 */}
                <button
                  onClick={handleSubmit}
                  disabled={!canSubmit() || submitting}
                  className={`box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[16px] relative rounded-[999px] shrink-0 transition-all ${
                    canSubmit() && !submitting
                      ? 'bg-[#fffded] cursor-pointer hover:bg-[#fff9d9]'
                      : 'bg-[#fffded] cursor-not-allowed'
                  }`}
                >
                  <div aria-hidden="true" className={`absolute border-2 border-solid inset-0 pointer-events-none rounded-[999px] ${
                    canSubmit() && !submitting ? 'border-[#313132]' : 'border-[#c4c5c8]'
                  }`} />
                  <p className={`font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-nowrap whitespace-pre ${
                    canSubmit() && !submitting ? 'text-[#313132]' : 'text-[#c4c5c8]'
                  }`}>
                    {submitting ? '등록 중...' : '등록하기'}
                  </p>
                </button>
              </div>
              
              {/* 에러 메시지 */}
              {error && (
                <div className="w-full p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        type={toastType}
        isOpen={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}
