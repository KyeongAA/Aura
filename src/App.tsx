import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Gnb } from './components/Gnb';
import { MainLayout } from './pages/MainLayout';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';

type Tab = 'home' | 'feed' | 'my';
type Page = 'main' | 'login' | 'signup';

function AppContent() {
  const { user, loading } = useAuth();
  const [currentTab, setCurrentTab] = useState<Tab>('home');
  const [currentPage, setCurrentPage] = useState<Page>('main');

  const handleNavigate = (tab: Tab) => {
    if (tab === 'my' && !user) {
      setCurrentPage('login');
      return;
    }
    setCurrentTab(tab);
    setCurrentPage('main');
  };

  const handleLoginClick = () => {
    setCurrentPage('login');
  };

  const handleLoginRequired = () => {
    setCurrentPage('login');
  };

  const handleNavigateHome = () => {
    setCurrentPage('main');
    setCurrentTab('home');
  };

  const handleNavigateSignup = () => {
    setCurrentPage('signup');
  };

  const handleNavigateLogin = () => {
    setCurrentPage('login');
  };

  const handleNavigateTab = (tab: Tab) => {
    setCurrentTab(tab);
    setCurrentPage('main');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#fcfcfc]">
        <div className="w-12 h-12 border-4 border-[#ebedf0] border-t-[#313132] rounded-full animate-spin" />
      </div>
    );
  }

  // Show Login Page
  if (currentPage === 'login') {
    return (
      <LoginPage
        onNavigateHome={handleNavigateHome}
        onNavigateSignup={handleNavigateSignup}
        onNavigateTab={handleNavigateTab}
      />
    );
  }

  // Show Signup Page
  if (currentPage === 'signup') {
    return (
      <SignupPage
        onNavigateHome={handleNavigateHome}
        onNavigateLogin={handleNavigateLogin}
        onNavigateTab={handleNavigateTab}
      />
    );
  }

  // Show Main App
  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      {/* Global Navigation Bar */}
      <Gnb
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onLoginClick={handleLoginClick}
      />

      {/* Main Content */}
      {currentTab === 'home' && (
        <MainLayout
          mode="all"
          showFilters={false}
          title="지도에서 서울의 감정을 확인하세요!"
          onLoginRequired={handleLoginRequired}
        />
      )}

      {currentTab === 'feed' && (
        <MainLayout
          mode="all"
          showFilters={true}
          title="Feeds"
          subtitle="작성된 Aura들을 확인해보세요!"
          onLoginRequired={handleLoginRequired}
        />
      )}

      {currentTab === 'my' && user && (
        <MainLayout
          mode="my"
          showFilters={true}
          title="My"
          subtitle="내가 작성한 Aura들이에요!"
          onLoginRequired={handleLoginRequired}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
