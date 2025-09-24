import { createContext, useContext, useState } from 'react';

export interface Section {
  id: string;
  title: string;
  component: React.ReactNode;
}

interface AppContextType {
  currentSection: number;
  sections: Section[];
  totalSections: number;
  nextSection: () => void;
  previousSection: () => void;
  goToSection: (index: number) => void;
  isAnimating: boolean;
  setIsAnimating: (animating: boolean) => void;
  progress: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: React.ReactNode;
  sections: Section[];
}

export function AppProvider({ children, sections }: AppProviderProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSection = () => {
    if (!isAnimating && currentSection < sections.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSection(prev => prev + 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const previousSection = () => {
    if (!isAnimating && currentSection > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSection(prev => prev - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const goToSection = (index: number) => {
    if (!isAnimating && index >= 0 && index < sections.length && index !== currentSection) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSection(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  const progress = ((currentSection + 1) / sections.length) * 100;

  return (
    <AppContext.Provider
      value={{
        currentSection,
        sections,
        totalSections: sections.length,
        nextSection,
        previousSection,
        goToSection,
        isAnimating,
        setIsAnimating,
        progress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
