import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getErrorMessage } from '../utils/constants';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'login' | 'signup';
}

export function AuthModal({ isOpen, onClose, defaultMode = 'login' }: AuthModalProps) {
  const { login, signup, error: authError } = useAuth();
  const [mode, setMode] = useState<'login' | 'signup'>(defaultMode);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // 로그인 폼
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // 회원가입 폼
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupPasswordConfirm, setSignupPasswordConfirm] = useState('');
  const [signupNickname, setSignupNickname] = useState('');

  const resetForm = () => {
    setLoginEmail('');
    setLoginPassword('');
    setSignupEmail('');
    setSignupPassword('');
    setSignupPasswordConfirm('');
    setSignupNickname('');
    setError(null);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await login(loginEmail, loginPassword);
      resetForm();
      onClose();
    } catch (error: any) {
      setError(getErrorMessage(error.message));
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // 유효성 검증
    if (!signupEmail || !signupPassword || !signupPasswordConfirm || !signupNickname) {
      setError('모든 필드를 입력해주세요.');
      setLoading(false);
      return;
    }

    if (signupPassword !== signupPasswordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signupEmail)) {
      setError('올바른 이메일 형식을 입력해주세요.');
      setLoading(false);
      return;
    }

    try {
      await signup(signupEmail, signupPassword, signupPasswordConfirm, signupNickname);
      resetForm();
      onClose();
    } catch (error: any) {
      setError(getErrorMessage(error.message));
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-gray-900">
              {mode === 'login' ? '로그인' : '회원가입'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* 탭 전환 */}
          <div className="flex gap-2 mb-6 border-b border-gray-200">
            <button
              onClick={() => {
                setMode('login');
                resetForm();
              }}
              className={`flex-1 pb-3 transition-colors ${
                mode === 'login'
                  ? 'text-[#1a1a1a] border-b-2 border-[#1a1a1a]'
                  : 'text-gray-500 hover:text-[#1a1a1a]'
              }`}
            >
              로그인
            </button>
            <button
              onClick={() => {
                setMode('signup');
                resetForm();
              }}
              className={`flex-1 pb-3 transition-colors ${
                mode === 'signup'
                  ? 'text-[#1a1a1a] border-b-2 border-[#1a1a1a]'
                  : 'text-gray-500 hover:text-[#1a1a1a]'
              }`}
            >
              회원가입
            </button>
          </div>

          {/* 로그인 폼 */}
          {mode === 'login' && (
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-sm mb-2 text-gray-700">이메일</label>
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm mb-2 text-gray-700">비밀번호</label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="비밀번호를 입력하세요"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !loginEmail || !loginPassword}
                className={`w-full px-6 py-3 rounded-lg transition-colors ${
                  !loading && loginEmail && loginPassword
                    ? 'bg-[#1a1a1a] text-white hover:bg-[#333]'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {loading ? '로그인 중...' : '로그인'}
              </button>
            </form>
          )}

          {/* 회원가입 폼 */}
          {mode === 'signup' && (
            <form onSubmit={handleSignup}>
              <div className="mb-4">
                <label className="block text-sm mb-2 text-gray-700">이메일</label>
                <input
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm mb-2 text-gray-700">비밀번호</label>
                <input
                  type="password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  placeholder="비밀번호를 입력하세요"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm mb-2 text-gray-700">비밀번호 확인</label>
                <input
                  type="password"
                  value={signupPasswordConfirm}
                  onChange={(e) => setSignupPasswordConfirm(e.target.value)}
                  placeholder="비밀번호를 다시 입력하세요"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm mb-2 text-gray-700">닉네임</label>
                <input
                  type="text"
                  value={signupNickname}
                  onChange={(e) => setSignupNickname(e.target.value)}
                  placeholder="닉네임을 입력하세요"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !signupEmail || !signupPassword || !signupPasswordConfirm || !signupNickname}
                className={`w-full px-6 py-3 rounded-lg transition-colors ${
                  !loading && signupEmail && signupPassword && signupPasswordConfirm && signupNickname
                    ? 'bg-[#1a1a1a] text-white hover:bg-[#333]'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {loading ? '회원가입 중...' : '회원가입'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
