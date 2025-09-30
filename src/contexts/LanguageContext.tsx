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
    'nav.gym': 'Спортна зала',
    'nav.events': 'Събития',
    'nav.kids': 'За деца',
    'nav.pricing': 'Цени',
    'nav.shop': 'Магазин',
    'carousel.innovation.title': 'Иновации',
    'carousel.innovation.subtitle': 'Креативни решения',
    'carousel.innovation.description': 'Иновативни технологии и креативни решения',
    'carousel.excellence.title': 'Превъзходство',
    'carousel.excellence.subtitle': 'Качествено обслужване',
    'carousel.excellence.description': 'Превъзходство във всеки проект, който предприемаме',
    'carousel.partnership.title': 'Партньорство',
    'carousel.partnership.subtitle': 'Доверено сътрудничество',
    'carousel.partnership.description': 'Вашият доверен партньор за иновативни решения',
    'carousel.growth.title': 'Растеж',
    'carousel.growth.subtitle': 'Напред към бъдещето',
    'carousel.growth.description': 'Превръщане на идеите в реалност',
    'carousel.success.title': 'Успех',
    'carousel.success.subtitle': 'Постижения',
    'carousel.success.description': 'Доставяне на изключителни резултати',
    'carousel.photoBy': 'Екип СИЛА'
  },
  EN: {
    'nav.services': 'Services',
    'nav.gym': 'Gym',
    'nav.events': 'Events',
    'nav.kids': 'Kids',
    'nav.pricing': 'Pricing',
    'nav.shop': 'Shop',
    'carousel.innovation.title': 'Innovation',
    'carousel.innovation.subtitle': 'Creative Solutions',
    'carousel.innovation.description': 'Innovative technology and creative solutions',
    'carousel.excellence.title': 'Excellence',
    'carousel.excellence.subtitle': 'Quality Service',
    'carousel.excellence.description': 'Excellence in every project we undertake',
    'carousel.partnership.title': 'Partnership',
    'carousel.partnership.subtitle': 'Trusted Collaboration',
    'carousel.partnership.description': 'Your trusted partner for innovative solutions',
    'carousel.growth.title': 'Growth',
    'carousel.growth.subtitle': 'Future Forward',
    'carousel.growth.description': 'Transforming ideas into reality',
    'carousel.success.title': 'Success',
    'carousel.success.subtitle': 'Achievement',
    'carousel.success.description': 'Delivering exceptional results',
    'carousel.photoBy': 'Sila Team'
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
