import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <div className="flex items-center justify-between w-full">
      {/* Previous Button */}
      <button
        onClick={() => canGoPrev && onPageChange(currentPage - 1)}
        disabled={!canGoPrev}
        className="flex items-center justify-center size-[36px] disabled:opacity-40 hover:opacity-60 transition-opacity"
        aria-label="이전 페이지"
      >
        <div className="scale-y-[-100%]">
          <svg className="w-[12px] h-[26px]" fill="none" viewBox="0 0 12 26">
            <path 
              d="M0.791231 15.1296C-0.263742 13.9046 -0.263741 12.0954 0.791231 10.8705L9.7764 0.439005L9.86528 0.345633C10.3293 -0.093992 11.0621 -0.120838 11.5589 0.303041C12.0888 0.755258 12.1498 1.54966 11.6956 2.07711L2.71204 12.5086C2.46858 12.7913 2.46858 13.2088 2.71204 13.4915L11.6956 23.9229C12.1498 24.4504 12.0888 25.2448 11.559 25.697C11.029 26.1491 10.2308 26.0883 9.7764 25.561L0.791231 15.1296Z"
              fill={canGoPrev ? "#313132" : "#DCDEE1"}
            />
          </svg>
        </div>
      </button>

      {/* Page Numbers */}
      <div className="flex gap-[12px] items-center">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-[36px] h-[36px] rounded-full flex items-center justify-center transition-all ${
              page === currentPage
                ? 'bg-[#f46964] text-white'
                : 'bg-white text-[#313132] hover:bg-[#fef9f8]'
            }`}
          >
            <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic text-[16px]">
              {page}
            </p>
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => canGoNext && onPageChange(currentPage + 1)}
        disabled={!canGoNext}
        className="flex items-center justify-center size-[36px] disabled:opacity-40 hover:opacity-60 transition-opacity"
        aria-label="다음 페이지"
      >
        <div className="scale-y-[-100%]">
          <svg className="w-[12px] h-[26px]" fill="none" viewBox="0 0 12 26">
            <path 
              d="M0.791231 15.1296C-0.263742 13.9046 -0.263741 12.0954 0.791231 10.8705L9.7764 0.439005L9.86528 0.345632C10.3293 -0.0939921 11.0621 -0.120837 11.5589 0.303042C12.0888 0.755258 12.1498 1.54966 11.6956 2.07711L2.71204 12.5086C2.46858 12.7913 2.46858 13.2088 2.71204 13.4915L11.6956 23.9229C12.1498 24.4504 12.0888 25.2448 11.559 25.697C11.029 26.1491 10.2308 26.0883 9.7764 25.561L0.791231 15.1296Z"
              fill={canGoNext ? "#313132" : "#DCDEE1"}
              transform="scale(-1, 1) translate(-12, 0)"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}
