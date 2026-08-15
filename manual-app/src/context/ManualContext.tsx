import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { chaptersData } from '../data/manualContent';

export type ActiveTab = 'landing' | 'manual' | 'tools' | 'glossary' | 'pdf-sync';
export type AppTheme = 'dark' | 'marine' | 'light';

export interface LightboxFigure {
  src: string;
  caption: string;
  figureNumber?: string;
  alt?: string;
  details?: string;
  pageRef?: number;
}

interface ManualContextType {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  currentChapterId: string;
  setCurrentChapterId: (id: string) => void;
  currentSectionId: string;
  setCurrentSectionId: (id: string) => void;
  pdfSplitView: boolean;
  setPdfSplitView: (split: boolean) => void;
  togglePdfSplitView: () => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  lightboxFigure: LightboxFigure | null;
  setLightboxFigure: (fig: LightboxFigure | null) => void;
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
  toggleTheme: () => void;
  bookmarkedSections: string[];
  toggleBookmark: (sectionId: string) => void;
  isBookmarked: (sectionId: string) => boolean;
  checklistState: { [stepKey: string]: boolean };
  toggleChecklistStep: (stepKey: string) => void;
  resetChecklist: () => void;
  currentPageNumber: number;
  navigateToSection: (chapterId: string, sectionId?: string) => void;
  navigateToPage: (pageNumber: number) => void;
}

const ManualContext = createContext<ManualContextType | undefined>(undefined);

export const ManualProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('landing');
  const [currentChapterId, setCurrentChapterId] = useState<string>('chapter-1');
  const [currentSectionId, setCurrentSectionId] = useState<string>('section-1-1');
  const [pdfSplitView, setPdfSplitView] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [lightboxFigure, setLightboxFigure] = useState<LightboxFigure | null>(null);
  const [theme, setTheme] = useState<AppTheme>('dark');
  
  const [bookmarkedSections, setBookmarkedSections] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('veripos_manual_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [checklistState, setChecklistState] = useState<{ [stepKey: string]: boolean }>(() => {
    try {
      const saved = localStorage.getItem('veripos_manual_checklist');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Calculate current page number from active chapter and section
  const getCurrentPageNumber = (): number => {
    const chapter = chaptersData.find((c) => c.id === currentChapterId);
    if (!chapter) return 4;
    const sec = chapter.sections.find((s) => s.id === currentSectionId);
    if (sec) return sec.pageNumber;
    return chapter.startPage;
  };

  const currentPageNumber = getCurrentPageNumber();

  useEffect(() => {
    try {
      localStorage.setItem('veripos_manual_bookmarks', JSON.stringify(bookmarkedSections));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedSections]);

  useEffect(() => {
    try {
      localStorage.setItem('veripos_manual_checklist', JSON.stringify(checklistState));
    } catch (e) {
      console.error(e);
    }
  }, [checklistState]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'marine', 'light');
    root.classList.add(theme);
  }, [theme]);

  // Global Keyboard shortcuts (Ctrl+K / Cmd+K for search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setLightboxFigure(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const togglePdfSplitView = () => setPdfSplitView((prev) => !prev);

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === 'dark') return 'marine';
      if (prev === 'marine') return 'light';
      return 'dark';
    });
  };

  const toggleBookmark = (sectionId: string) => {
    setBookmarkedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId]
    );
  };

  const isBookmarked = (sectionId: string) => bookmarkedSections.includes(sectionId);

  const toggleChecklistStep = (stepKey: string) => {
    setChecklistState((prev) => ({
      ...prev,
      [stepKey]: !prev[stepKey]
    }));
  };

  const resetChecklist = () => setChecklistState({});

  const navigateToSection = (chapterId: string, sectionId?: string) => {
    setCurrentChapterId(chapterId);
    if (sectionId) {
      setCurrentSectionId(sectionId);
    } else {
      const ch = chaptersData.find((c) => c.id === chapterId);
      if (ch && ch.sections.length > 0) {
        setCurrentSectionId(ch.sections[0].id);
      }
    }
    setActiveTab('manual');
    // Scroll to top or element
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPage = (pageNumber: number) => {
    for (const ch of chaptersData) {
      if (pageNumber >= ch.startPage && pageNumber <= ch.endPage) {
        setCurrentChapterId(ch.id);
        const matchSec = ch.sections.find((s) => s.pageNumber === pageNumber);
        if (matchSec) {
          setCurrentSectionId(matchSec.id);
        } else if (ch.sections.length > 0) {
          setCurrentSectionId(ch.sections[0].id);
        }
        setActiveTab('manual');
        break;
      }
    }
  };

  return (
    <ManualContext.Provider
      value={{
        activeTab,
        setActiveTab,
        currentChapterId,
        setCurrentChapterId,
        currentSectionId,
        setCurrentSectionId,
        pdfSplitView,
        setPdfSplitView,
        togglePdfSplitView,
        isSearchOpen,
        setIsSearchOpen,
        lightboxFigure,
        setLightboxFigure,
        theme,
        setTheme,
        toggleTheme,
        bookmarkedSections,
        toggleBookmark,
        isBookmarked,
        checklistState,
        toggleChecklistStep,
        resetChecklist,
        currentPageNumber,
        navigateToSection,
        navigateToPage
      }}
    >
      {children}
    </ManualContext.Provider>
  );
};

export const useManual = () => {
  const context = useContext(ManualContext);
  if (!context) {
    throw new Error('useManual must be used within a ManualProvider');
  }
  return context;
};
