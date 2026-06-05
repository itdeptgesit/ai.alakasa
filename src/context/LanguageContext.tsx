"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '@/locales/en';
import { id } from '@/locales/id';

type Language = 'EN' | 'ID';
type Dictionary = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('EN');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Try to load language from localStorage
    const savedLang = localStorage.getItem('alakasa_lang') as Language;
    if (savedLang === 'EN' || savedLang === 'ID') {
      setLanguageState(savedLang);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('alakasa_lang', lang);
  };

  const t = language === 'ID' ? id : en;

  if (!mounted) {
    // Render hidden or empty until mounted to prevent hydration mismatch
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
