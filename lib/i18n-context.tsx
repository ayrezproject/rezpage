'use client';

import React, { createContext, useContext, useState } from 'react';
import id from '@/public/locales/id.json';
import en from '@/public/locales/en.json';

type Language = 'id' | 'en';
type Translations = typeof id;

interface LanguageContextType {
  lang: Language;
  t: Translations;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations: Record<Language, Translations> = { id, en };

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('lang');
        if (saved === 'id' || saved === 'en') {
          return saved;
        }
      } catch {
        // ignore
      }
    }
    return 'id';
  });

  const toggle = () => {
    setLang((prev) => {
      const next = prev === 'id' ? 'en' : 'id';
      try {
        localStorage.setItem('lang', next);
      } catch {
        // ignore
      }
      return next;
    });
  };

  return (
    <LanguageContext.Provider
      value={{ lang, t: translations[lang], toggle }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
