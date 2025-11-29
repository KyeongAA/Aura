import React from 'react';
import { useAuth } from '../contexts/AuthContext';

interface GnbProps {
  currentTab: 'home' | 'feed' | 'my';
  onNavigate: (tab: 'home' | 'feed' | 'my') => void;
  onLoginClick: () => void;
}

export function Gnb({ currentTab, onNavigate, onLoginClick }: GnbProps) {
  const { user, logout } = useAuth();

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#fffce0] box-border flex items-center justify-between px-[60px] h-[90px] border-b-2 border-[#ebedf0] z-40">
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
        {/* Logo */}
        <div className="h-[43px] w-[243px] flex items-center">
          <p className="font-['Fractul_Variable:Semi_Bold',sans-serif] leading-[normal] not-italic text-[#f24e4e] text-[36px] text-nowrap whitespace-pre font-[Fractul_Variable]">
            AURA of Seoul
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-[140px]">
          <button
            onClick={() => onNavigate('home')}
            className={`box-border flex gap-[10px] items-center justify-center p-[10px] h-[70px] w-[90px] transition-colors ${
              currentTab === 'home' ? 'text-[#f24e4e]' : 'text-[#313132]'
            }`}
          >
            <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic text-[24px] text-nowrap whitespace-pre">
              Home
            </p>
          </button>
          
          <button
            onClick={() => onNavigate('feed')}
            className={`box-border flex gap-[10px] items-center justify-center p-[10px] h-[70px] w-[90px] transition-colors ${
              currentTab === 'feed' ? 'text-[#f24e4e]' : 'text-[#313132]'
            }`}
          >
            <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic text-[24px] text-nowrap whitespace-pre">
              Feed
            </p>
          </button>
          
          <button
            onClick={() => onNavigate('my')}
            className={`box-border flex gap-[10px] items-center justify-center p-[10px] h-[70px] w-[90px] transition-colors ${
              currentTab === 'my' ? 'text-[#f24e4e]' : 'text-[#313132]'
            }`}
          >
            <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic text-[24px] text-nowrap whitespace-pre">
              My
            </p>
          </button>
        </div>

        {/* Login/Logout Button */}
        <div className="box-border flex gap-[10px] h-[90px] items-end justify-center px-0 py-[12px]">
          {user ? (
            <button
              onClick={logout}
              className="flex gap-[12px] items-center justify-center hover:opacity-80 transition-opacity"
            >
              <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic text-[#f68f84] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">
                로그아웃
              </p>
            </button>
          ) : (
            <button
              onClick={onLoginClick}
              className="flex gap-[12px] items-center justify-center hover:opacity-80 transition-opacity"
            >
              <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic text-[#f68f84] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">
                로그인/회원가입
              </p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
