import React from 'react';

interface KeywordChipProps {
  keyword: string;
  color: string;
}

export function KeywordChip({ keyword, color }: KeywordChipProps) {
  return (
    <div
      className="box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0"
      style={{ backgroundColor: color }}
    >
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap tracking-[0.8px] whitespace-pre">
        {keyword}
      </p>
    </div>
  );
}
