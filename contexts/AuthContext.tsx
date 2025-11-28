import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import type { User } from '../types';

interface AuthContextType {
  user: User | null;
  accessToken: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, nickname: string) => Promise<void>;
  logout: () => Promise<void>;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const supabase = createClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 세션 확인
  useEffect(() => {
    checkSession();
  }, []);

  async function checkSession() {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        console.error('Session error:', error);
        setLoading(false);
        return;
      }
      
      if (session?.access_token && session?.user) {
        setAccessToken(session.access_token);
        
        // 사용자 정보 조회
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-925a5454/users/${session.user.id}`,
          {
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
            },
          }
        );
        
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        }
      }
    } catch (error) {
      console.error('Check session error:', error);
    } finally {
      setLoading(false);
    }
  }

  async function signup(email: string, password: string, nickname: string) {
    try {
      setError(null);
      
      // 클라이언트 유효성 검증
      if (!email || !password || !nickname) {
        throw new Error('모든 필드를 입력해주세요.');
      }
      
      if (password.length < 6) {
        throw new Error('비밀번호는 최소 6자 이상이어야 합니다.');
      }
      
      // 서버에 회원가입 요청
      console.log('Sending signup request:', { email, nickname });
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-925a5454/signup`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ email, password, nickname }),
        }
      );
      
      const data = await response.json();
      console.log('Signup response:', { ok: response.ok, status: response.status, data });
      
      if (!response.ok) {
        if (data.error === 'EMAIL_DUPLICATE') {
          throw new Error('이미 사용 중인 이메일입니다.');
        }
        const errorMsg = data.details ? `${data.error}: ${data.details}` : (data.error || '회원가입에 실패했습니다.');
        throw new Error(errorMsg);
      }
      
      // 회원가입 성공 후 자동 로그인
      await login(email, password);
    } catch (error: any) {
      const errorMessage = error.message || '회원가입에 실패했습니다.';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }

  async function login(email: string, password: string) {
    try {
      setError(null);
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        console.error('Login error:', error);
        throw new Error('이메일 또는 비밀번호가 올바르지 않습니다.');
      }
      
      if (data.session?.access_token && data.user) {
        setAccessToken(data.session.access_token);
        
        // 사용자 정보 조회
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-925a5454/users/${data.user.id}`,
          {
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
            },
          }
        );
        
        if (response.ok) {
          const userData = await response.json();
          setUser(userData.user);
        }
      }
    } catch (error: any) {
      const errorCode = error.message || 'UNKNOWN_ERROR';
      setError(errorCode);
      throw error;
    }
  }

  async function logout() {
    try {
      await supabase.auth.signOut();
      setUser(null);
      setAccessToken(null);
      setError(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, accessToken, loading, login, signup, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
