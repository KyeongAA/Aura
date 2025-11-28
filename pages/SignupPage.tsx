import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface SignupPageProps {
  onNavigateHome: () => void;
  onNavigateLogin: () => void;
  onNavigateTab: (tab: 'home' | 'feed' | 'my') => void;
}

export function SignupPage({ onNavigateHome, onNavigateLogin, onNavigateTab }: SignupPageProps) {
  const { signup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password || !passwordConfirm || !name) {
      setError('모든 필드를 입력해주세요.');
      return;
    }

    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (password.length < 6) {
      setError('비밀번호는 최소 6자 이상이어야 합니다.');
      return;
    }

    setLoading(true);
    try {
      await signup(email, password, name);
      // 회원가입 성공 시 홈으로 이동
      onNavigateTab('home');
    } catch (err: any) {
      console.error('Signup error:', err);
      setError(err.message || '회원가입에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen relative">
      {/* GNB */}
      <div className="fixed top-0 left-0 right-0 bg-[#fffce0] box-border flex items-center justify-between px-[60px] h-[90px] border-b-2 border-[#ebedf0] z-40">
        <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
          {/* Logo */}
          <div className="h-[43px] w-[243px] flex items-center">
            <p className="font-['Fractul_Variable:Semi_Bold',sans-serif] leading-[normal] not-italic text-[#f24e4e] text-[36px] text-nowrap whitespace-pre">
              AURA of Seoul
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-[140px]">
            <button
              onClick={() => onNavigateTab('home')}
              className="box-border flex gap-[10px] items-center justify-center p-[10px] h-[70px] w-[90px] text-[#313132]"
            >
              <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic text-[24px] text-nowrap whitespace-pre">
                Home
              </p>
            </button>
            
            <button
              onClick={() => onNavigateTab('feed')}
              className="box-border flex gap-[10px] items-center justify-center p-[10px] h-[70px] w-[90px] text-[#313132]"
            >
              <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic text-[24px] text-nowrap whitespace-pre">
                Feed
              </p>
            </button>
            
            <button
              onClick={() => onNavigateTab('my')}
              className="box-border flex gap-[10px] items-center justify-center p-[10px] h-[70px] w-[90px] text-[#313132]"
            >
              <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic text-[24px] text-nowrap whitespace-pre">
                My
              </p>
            </button>
          </div>

          {/* Login Button */}
          <div className="box-border flex gap-[10px] h-[90px] items-end justify-center px-0 py-[12px]">
            <div className="flex gap-[12px] items-center justify-center">
              <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic text-[#f24e4e] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">
                로그인/회원가입
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-[170px] flex items-center justify-center px-[60px]">
        <div className="flex flex-col gap-[40px] items-center w-[597px]">
          {/* Title */}
          <div className="flex flex-col gap-[12px] items-center leading-[1.2] not-italic text-[#181819] w-full text-center">
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[36px]">회원가입</p>
            <p className="font-['Pretendard:Regular',sans-serif] text-[13px]">
              새 계정을 만들어 서울의 Aura를 기록하세요
            </p>
          </div>

          {/* Form */}
          <div className="bg-[#fcfcfc] box-border flex flex-col gap-[10px] items-start p-[40px] rounded-[20px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)] w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-[32px] items-start w-full">
              {/* Email Input */}
              <div className="flex flex-col gap-[8px] items-start w-full">
                <div className="box-border flex gap-[10px] items-center justify-center px-[24px] py-0">
                  <p className="font-['Pretendard:Regular',sans-serif] leading-[1.2] not-italic text-[#181819] text-[13px] text-nowrap whitespace-pre">
                    이메일
                  </p>
                </div>
                <div className="bg-[#fffce0] relative rounded-[999px] w-full border border-[#dcdee1]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="box-border w-full px-[28px] py-[20px] font-['Pretendard:Regular',sans-serif] leading-[1.2] not-italic text-[#181819] text-[20px] bg-transparent rounded-[999px] outline-none placeholder:text-[#abacaf]"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="flex flex-col gap-[8px] items-start w-full">
                <div className="box-border flex gap-[10px] items-center justify-center px-[24px] py-0">
                  <p className="font-['Pretendard:Regular',sans-serif] leading-[1.2] not-italic text-[#181819] text-[13px] text-nowrap whitespace-pre">
                    비밀번호
                  </p>
                </div>
                <div className="bg-[#fffce0] relative rounded-[999px] w-full border border-[#dcdee1]">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호를 입력하세요"
                    className="box-border w-full px-[28px] py-[20px] font-['Pretendard:Regular',sans-serif] leading-[1.2] not-italic text-[#181819] text-[20px] bg-transparent rounded-[999px] outline-none placeholder:text-[#abacaf]"
                  />
                </div>
              </div>

              {/* Password Confirm Input */}
              <div className="flex flex-col gap-[8px] items-start w-full">
                <div className="box-border flex gap-[10px] items-center justify-center px-[24px] py-0">
                  <p className="font-['Pretendard:Regular',sans-serif] leading-[1.2] not-italic text-[#181819] text-[13px] text-nowrap whitespace-pre">
                    비밀번호 확인
                  </p>
                </div>
                <div className="bg-[#fffce0] relative rounded-[999px] w-full border border-[#dcdee1]">
                  <input
                    type="password"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    placeholder="비밀번호를 다시 입력하세요"
                    className="box-border w-full px-[28px] py-[20px] font-['Pretendard:Regular',sans-serif] leading-[1.2] not-italic text-[#181819] text-[20px] bg-transparent rounded-[999px] outline-none placeholder:text-[#abacaf]"
                  />
                </div>
              </div>

              {/* Name Input */}
              <div className="flex flex-col gap-[8px] items-start w-full">
                <div className="box-border flex gap-[10px] items-center justify-center px-[24px] py-0">
                  <p className="font-['Pretendard:Regular',sans-serif] leading-[1.2] not-italic text-[#181819] text-[13px] text-nowrap whitespace-pre">
                    이름(닉네임)
                  </p>
                </div>
                <div className="bg-[#fffce0] relative rounded-[999px] w-full border border-[#dcdee1]">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="닉네임을 입력하세요"
                    className="box-border w-full px-[28px] py-[20px] font-['Pretendard:Regular',sans-serif] leading-[1.2] not-italic text-[#181819] text-[20px] bg-transparent rounded-[999px] outline-none placeholder:text-[#abacaf]"
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="w-full px-[24px]">
                  <p className="font-['Pretendard:Regular',sans-serif] text-[13px] text-[#f24e4e]">
                    {error}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="bg-[#f46964] rounded-[999px] w-full hover:bg-[#f24e4e] transition-colors disabled:opacity-50"
              >
                <div className="box-border flex gap-[10px] items-center justify-center px-[20px] py-[16px] w-full">
                  <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.2] not-italic text-[24px] text-nowrap text-white whitespace-pre">
                    {loading ? '가입 중...' : '회원가입'}
                  </p>
                </div>
              </button>
            </form>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col font-['Pretendard:Regular',sans-serif] gap-[12px] items-center leading-[1.2] not-italic text-[13px] text-center">
            <p className="text-[#181819]">
              <span>이미 계정이 있으신가요? </span>
              <button
                onClick={onNavigateLogin}
                className="text-[#f24e4e] hover:underline"
              >
                로그인
              </button>
            </p>
            <button
              onClick={onNavigateHome}
              className="text-[#939496] hover:text-[#313132] transition-colors"
            >
              ← 홈으로 돌아가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
