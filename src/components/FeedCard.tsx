import React from 'react';
import type { AuraRecord } from '../types';
import { EMOTION_KEYWORDS, getColorFromDotType } from '../utils/constants';
import { KeywordChip } from './KeywordChip';

interface FeedCardProps {
  record: AuraRecord;
}

export function FeedCard({ record }: FeedCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  return (
    <div className="bg-[#fefbf4] rounded-[20px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)] w-full">
      <div className="box-border flex flex-col gap-[24px] items-start p-[40px] w-full">
        {/* Header */}
        <div className="flex gap-[24px] items-center justify-center w-full">
          {/* Name + Keywords */}
          <div className="flex-1 flex gap-[28px] items-center">
            <p className="font-['Pretendard:Light',sans-serif] leading-[1.2] not-italic text-black text-[24px] text-nowrap whitespace-pre">
              {record.writerNickname || '사용자'}
            </p>
            <p className="font-['Pretendard:Light',sans-serif] leading-[normal] not-italic text-black text-[24px] text-nowrap whitespace-pre">
              •
            </p>
            {/* Keywords */}
            <div className="flex gap-[12px] items-center">
              {(record.emotionKeywords || []).map((keywordId, index) => {
                const emotion = EMOTION_KEYWORDS.find(e => e.id === keywordId);
                if (!emotion) return null;
                return (
                  <KeywordChip
                    key={index}
                    keyword={emotion.label}
                    color={emotion.color}
                  />
                );
              })}
            </div>
          </div>
          
          {/* Date */}
          <p className="font-['Pretendard:Light',sans-serif] leading-[1.2] not-italic text-[#313132] text-[20px] text-nowrap tracking-[0.8px] whitespace-pre">
            {formatDate(record.createdAt)}
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-[40px] items-start w-full">
          {/* Place */}
          <div className="flex flex-col gap-[16px] items-start leading-[1.2] not-italic text-[#494a4b]">
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[32px]">
              {record.placeName}
            </p>
            <p className="font-['Pretendard:Regular',sans-serif] text-[20px]">
              {record.placeAddress}
            </p>
          </div>

          {/* Text */}
          <div className="box-border flex flex-col gap-[10px] items-center justify-center px-0 py-[12px] rounded-[20px] w-full">
            <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.2] not-italic text-black text-[20px] tracking-[0.8px] w-full line-clamp-2">
              {record.note.replace(/\n/g, ' ')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
