import React, { useState, useEffect } from 'react';
import { MapView } from '../components/MapView';
import { FeedList } from '../components/FeedList';
import { AuraCreateModal } from '../components/AuraCreateModal';
import { useAuth } from '../contexts/AuthContext';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import type { AuraRecord } from '../types';

interface MainLayoutProps {
  mode: 'all' | 'my';
  showFilters?: boolean;
  title?: string;
  subtitle?: string;
  onLoginRequired?: () => void;
}

export function MainLayout({ mode, showFilters = false, title, subtitle, onLoginRequired }: MainLayoutProps) {
  const { user, accessToken } = useAuth();
  const [records, setRecords] = useState<AuraRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    fetchRecords();
  }, [mode, user]);

  const fetchRecords = async () => {
    setLoading(true);
    try {
      const endpoint = mode === 'my' && user
        ? `https://${projectId}.supabase.co/functions/v1/make-server-925a5454/aura-records/user/${user.id}`
        : `https://${projectId}.supabase.co/functions/v1/make-server-925a5454/aura-records`;

      const response = await fetch(endpoint, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setRecords(data.records || []);
      }
    } catch (error) {
      console.error('Fetch records error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateClick = () => {
    if (!user) {
      onLoginRequired?.();
      return;
    }
    setShowCreateModal(true);
  };

  const handleCreateSuccess = () => {
    fetchRecords();
  };

  return (
    <div className="relative">
      <div className="max-w-[1440px] mx-auto">
        {/* Map Section */}
        <div className="relative px-[60px] pt-[130px]">
          {title && !showFilters && (
            <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic text-[#181819] text-[24px] mb-[16px]">
              {title}
            </p>
          )}
          
          <div className="relative h-[741px] w-full">
            <MapView records={records} mode={mode} />
          </div>
          
          {/* Floating + Button */}
          <button
            onClick={handleCreateClick}
            className="fixed right-[60px] top-[118px] bg-[#f46964] box-border content-stretch flex gap-[10px] items-center justify-center p-[15px] rounded-[999px] shadow-[1px_2px_10px_0px_rgba(0,0,0,0.2)] size-[78px] hover:bg-[#f24e4e] transition-all hover:scale-105 z-50"
            aria-label="새로운 Aura 작성"
          >
            <svg className="block size-[48px]" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
              <path d="M24 13V35M35 24H13" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Feed Section */}
        <div className="px-[60px] pt-[60px] pb-[80px]">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-[#ebedf0] border-t-[#313132] rounded-full animate-spin" />
            </div>
          ) : (
            <FeedList 
              records={records} 
              showFilters={showFilters} 
              title={showFilters ? title : undefined}
              subtitle={showFilters ? subtitle : undefined}
            />
          )}
        </div>
      </div>

      {/* Aura Create Modal */}
      <AuraCreateModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSuccess={handleCreateSuccess}
      />
    </div>
  );
}
