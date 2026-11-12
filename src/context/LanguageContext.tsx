import { createContext, useContext, useEffect, ReactNode } from 'react';

type Language = 'EN' | 'AR';

interface LanguageContextType {
  language: Language;
  isArabic: boolean;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language: Language = 'AR';

  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        isArabic: true,
        toggleLanguage: () => {},
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }

  return context;
}
