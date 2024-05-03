'use client';

import { createContext, ReactNode, useState } from 'react'

interface LanguageContextProviderProps {
  children: ReactNode
}

interface LanguageContextType {
  language: string;
  changeLanguage: (newLanguage: string) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  changeLanguage: () => { },
})

export const LanguageProvider = ({ children }: LanguageContextProviderProps) => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};