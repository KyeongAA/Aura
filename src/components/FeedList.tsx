import React, { useState } from 'react';
import { FeedCard } from './FeedCard';
import { Pagination } from './Pagination';
import { EMOTION_KEYWORDS } from '../utils/constants';
import type { AuraRecord } from '../types';

interface FeedListProps {
  records: AuraRecord[];
  showFilters?: boolean;
  title?: string;
  subtitle?: string;
}

const ITEMS_PER_PAGE = 3;

export function FeedList({ records, showFilters, title, subtitle }: FeedListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);
  const [isKeywordDropdownOpen, setIsKeywordDropdownOpen] = useState(false);

  // Filter records by selected keyword
  const filteredRecords = selectedKeyword
    ? records.filter(record => 
        (record.emotionKeywords || []).includes(selectedKeyword)
      )
    : records;

  // Pagination
  const totalPages = Math.ceil(filteredRecords.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentRecords = filteredRecords.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleKeywordSelect = (keyword: string | null) => {
    setSelectedKeyword(keyword);
    setCurrentPage(1);
    setIsKeywordDropdownOpen(false);
  };

  // 감정 키워드 레이블 맵 생성
  const emotionLabels: Record<string, string> = Object.fromEntries(
    EMOTION_KEYWORDS.map(e => [e.id, e.label])
  );

  return (
    <div className="flex flex-col gap-[52px] w-full">
      {/* Feed Header */}
      {showFilters && (
        <div className="flex items-end justify-between w-full">
          {/* Title */}
          <div className="flex flex-col gap-[20px] items-start not-italic text-[#181819]">
            {title && (
              <p className="font-['Pretendard:Medium',sans-serif] leading-[1.2] text-[48px]">
                {title}
              </p>
            )}
            {subtitle && (
              <p className="font-['Pretendard:Light',sans-serif] leading-[normal] text-[24px]">
                {subtitle}
              </p>
            )}
          </div>

          {/* Filters */}
          <div className="flex gap-[36px] items-center">
            {/* Keyword Filter */}
            <div className="relative">
              <button
                onClick={() => setIsKeywordDropdownOpen(!isKeywordDropdownOpen)}
                className="bg-white h-[60px] rounded-[20px] w-[184px] border-2 border-[#f68f84] hover:bg-[#fef9f8] transition-colors"
              >
                <div className="box-border flex h-[60px] items-center justify-between px-[20px] py-[12px]">
                  <p className="font-['Pretendard:Medium',sans-serif] leading-[1.5] not-italic text-[#4f4b4b] text-[16px] text-nowrap whitespace-pre">
                    {selectedKeyword ? emotionLabels[selectedKeyword] : '전체 키워드'}
                  </p>
                  <div className="overflow-clip shrink-0 size-[24px] flex items-center justify-center">
                    <svg className="w-[14px] h-[7px]" fill="none" viewBox="0 0 16 9">
                      <path 
                        d="M1 1L8 7L15 1" 
                        stroke="#313132" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1.5"
                        style={{
                          transform: isKeywordDropdownOpen ? 'rotate(180deg)' : 'none',
                          transformOrigin: 'center',
                          transition: 'transform 0.2s'
                        }}
                      />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Dropdown Menu */}
              {isKeywordDropdownOpen && (
                <div className="absolute top-[68px] left-0 bg-white rounded-[20px] w-[184px] border-2 border-[#f68f84] shadow-lg z-50 overflow-hidden">
                  <button
                    onClick={() => handleKeywordSelect(null)}
                    className={`w-full px-[20px] py-[12px] text-left hover:bg-[#fef9f8] transition-colors ${
                      !selectedKeyword ? 'bg-[#fff5f4]' : ''
                    }`}
                  >
                    <p className="font-['Pretendard:Medium',sans-serif] leading-[1.5] not-italic text-[#4f4b4b] text-[16px]">
                      전체 키워드
                    </p>
                  </button>
                  {Object.entries(emotionLabels).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => handleKeywordSelect(key)}
                      className={`w-full px-[20px] py-[12px] text-left hover:bg-[#fef9f8] transition-colors ${
                        selectedKeyword === key ? 'bg-[#fff5f4]' : ''
                      }`}
                    >
                      <p className="font-['Pretendard:Medium',sans-serif] leading-[1.5] not-italic text-[#4f4b4b] text-[16px]">
                        {label}
                      </p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Feed Content */}
      {currentRecords.length > 0 ? (
        <div className="flex flex-col gap-[40px] w-full">
          {currentRecords.map((record) => (
            <FeedCard key={record.id} record={record} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center py-20">
          <p className="font-['Pretendard:Light',sans-serif] leading-[normal] not-italic text-[#181819] text-[32px] text-nowrap whitespace-pre">
            아직 기록된 Aura가 없어요!
          </p>
        </div>
      )}

      {/* Pagination */}
      {currentRecords.length > 0 && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
