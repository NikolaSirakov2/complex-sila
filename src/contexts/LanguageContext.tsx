"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'BG' | 'EN';
  setLanguage: (language: 'BG' | 'EN') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation object
const translations = {
  BG: {
    'nav.services': 'Услуги',
    'nav.gym': 'Фитнес',
    'nav.events': 'Събития',
    'nav.kids': 'Деца',
    'nav.pricing': 'Цени',
    'nav.shop': 'Магазин'
  },
  EN: {
    'nav.services': 'Services',
    'nav.gym': 'Gym',
    'nav.events': 'Events',
    'nav.kids': 'Kids',
    'nav.pricing': 'Pricing',
    'nav.shop': 'Shop'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<'BG' | 'EN'>('BG');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

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
