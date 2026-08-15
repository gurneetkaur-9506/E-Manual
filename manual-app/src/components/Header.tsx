import React, { useState } from 'react';
import { 
  Radio, 
  Search, 
  Columns, 
  Sun, 
  Moon, 
  Compass, 
  Wrench, 
  BookOpen, 
  FileText, 
  PhoneCall, 
  Bookmark, 
  Layers,
  Menu,
  X
} from 'lucide-react';
import { useManual } from '../context/ManualContext';
import { manualMetadata } from '../data/manualMetadata';
import { chaptersData } from '../data/manualContent';

export const Header: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab, 
    pdfSplitView, 
    togglePdfSplitView, 
    setIsSearchOpen, 
    theme, 
    toggleTheme,
    bookmarkedSections,
    navigateToSection
  } = useManual();

  const [isBookmarkOpen, setIsBookmarkOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-black/90 backdrop-blur-xl transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left: Logo & Doc Title */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('landing')}>
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 border border-neutral-700/80 text-white shadow-lg">
            <Radio className="h-5 w-5 text-white animate-pulse" />
            <div className="absolute -inset-0.5 rounded-xl bg-white/10 blur-sm -z-10" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-display font-bold text-lg text-white tracking-tight">
                VERIPOS
              </span>
              <span className="rounded bg-neutral-800 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-neutral-300 border border-neutral-700">
                {manualMetadata.revision}
              </span>
            </div>
            <p className="text-[11px] text-neutral-400 font-medium hidden sm:block">
              Antenna & Coaxial Cable Installation Manual
            </p>
          </div>
        </div>

        {/* Center: Main Navigation Tabs */}
        <nav className="hidden md:flex items-center space-x-1 rounded-xl bg-neutral-900/90 p-1 border border-neutral-800">
          <button
            onClick={() => setActiveTab('landing')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'landing'
                ? 'bg-white text-black shadow-sm font-bold'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
            }`}
          >
            <Compass className="h-3.5 w-3.5" />
            <span>Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('manual')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'manual'
                ? 'bg-white text-black shadow-sm font-bold'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>E-Manual</span>
          </button>

          <button
            onClick={() => setActiveTab('tools')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'tools'
                ? 'bg-white text-black shadow-sm font-bold'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
            }`}
          >
            <Wrench className="h-3.5 w-3.5" />
            <span>Calculators & Tools</span>
          </button>

          <button
            onClick={() => setActiveTab('glossary')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'glossary'
                ? 'bg-white text-black shadow-sm font-bold'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>Glossary</span>
          </button>
        </nav>

        {/* Right: Actions (Search, PDF Sync, Bookmarks, Theme, Support) */}
        <div className="flex items-center space-x-2">
          
          {/* Search Trigger Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center space-x-2 rounded-lg border border-neutral-800 bg-neutral-900/90 px-2.5 py-1.5 text-xs text-neutral-300 hover:border-neutral-600 hover:bg-neutral-800 transition-all shadow-inner"
            title="Search manual (Ctrl+K)"
          >
            <Search className="h-3.5 w-3.5 text-neutral-400" />
            <span className="hidden lg:inline text-[11px] text-neutral-400">Search Manual...</span>
            <kbd className="hidden sm:inline-block rounded bg-neutral-800 px-1.5 py-0.5 font-mono text-[9px] text-neutral-400 border border-neutral-700">
              Ctrl K
            </kbd>
          </button>

          {/* PDF Side-by-Side Sync Toggle */}
          <button
            onClick={togglePdfSplitView}
            className={`flex items-center space-x-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium border transition-all ${
              pdfSplitView
                ? 'bg-white text-black border-white shadow-sm font-bold'
                : 'bg-neutral-900/90 text-neutral-300 border-neutral-800 hover:border-neutral-700 hover:text-white'
            }`}
            title="Toggle Split-Screen Original PDF View"
          >
            <Columns className="h-3.5 w-3.5" />
            <span className="hidden xl:inline text-[11px]">PDF Sync</span>
          </button>

          {/* Bookmarks Drawer Trigger */}
          <div className="relative">
            <button
              onClick={() => setIsBookmarkOpen(!isBookmarkOpen)}
              className="relative rounded-lg border border-neutral-800 bg-neutral-900/90 p-2 text-neutral-300 hover:text-white hover:border-neutral-700 transition-all"
              title="Saved Bookmarks"
            >
              <Bookmark className="h-3.5 w-3.5" />
              {bookmarkedSections.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[9px] font-bold text-black">
                  {bookmarkedSections.length}
                </span>
              )}
            </button>

            {/* Bookmarks dropdown */}
            {isBookmarkOpen && (
              <div className="absolute right-0 mt-2 w-72 rounded-xl border border-neutral-800 bg-neutral-950 p-3 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center justify-between pb-2 border-b border-neutral-800 mb-2">
                  <span className="text-xs font-semibold text-white flex items-center space-x-1">
                    <Bookmark className="h-3 w-3 text-neutral-300" />
                    <span>Saved Sections</span>
                  </span>
                  <span className="text-[10px] text-neutral-400 font-mono">
                    {bookmarkedSections.length} saved
                  </span>
                </div>
                {bookmarkedSections.length === 0 ? (
                  <p className="text-xs text-neutral-500 py-3 text-center">
                    No bookmarks saved yet. Click the bookmark icon next to any section to save it.
                  </p>
                ) : (
                  <div className="max-h-60 overflow-y-auto space-y-1">
                    {bookmarkedSections.map((secId) => {
                      let title = secId;
                      let chId = 'chapter-1';
                      for (const ch of chaptersData) {
                        const s = ch.sections.find((sec) => sec.id === secId);
                        if (s) {
                          title = `${s.sectionNumber} ${s.title}`;
                          chId = ch.id;
                          break;
                        }
                      }
                      return (
                        <button
                          key={secId}
                          onClick={() => {
                            navigateToSection(chId, secId);
                            setIsBookmarkOpen(false);
                          }}
                          className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors flex items-center justify-between"
                        >
                          <span className="truncate">{title}</span>
                          <span className="text-[10px] text-neutral-400 ml-2">Jump</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Theme switcher */}
          <button
            onClick={toggleTheme}
            className="rounded-lg border border-neutral-800 bg-neutral-900/90 p-2 text-neutral-300 hover:text-white hover:border-neutral-700 transition-all"
            title={`Current theme: ${theme}. Click to cycle.`}
          >
            {theme === 'light' ? <Sun className="h-3.5 w-3.5 text-amber-400" /> : <Moon className="h-3.5 w-3.5 text-neutral-200" />}
          </button>

          {/* Support Phone Quick Link */}
          <a
            href={`tel:${manualMetadata.supportPhone.replace(/\s+/g, '')}`}
            className="hidden sm:flex items-center space-x-1.5 rounded-lg bg-neutral-900 border border-neutral-800 px-2.5 py-1.5 text-xs text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all"
            title="24/7 Global Support Hotline"
          >
            <PhoneCall className="h-3 w-3 text-emerald-400" />
            <span className="text-[11px] font-medium font-mono hidden md:inline">24/7 Support</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden rounded-lg border border-neutral-800 bg-neutral-900 p-2 text-neutral-300"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-black p-4 space-y-2">
          <button
            onClick={() => {
              setActiveTab('landing');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-sm ${
              activeTab === 'landing' ? 'bg-white text-black font-bold' : 'text-neutral-300 hover:bg-neutral-900'
            }`}
          >
            <Compass className="h-4 w-4" />
            <span>Overview & Showcase</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('manual');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-sm ${
              activeTab === 'manual' ? 'bg-white text-black font-bold' : 'text-neutral-300 hover:bg-neutral-900'
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>Interactive E-Manual</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('tools');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-sm ${
              activeTab === 'tools' ? 'bg-white text-black font-bold' : 'text-neutral-300 hover:bg-neutral-900'
            }`}
          >
            <Wrench className="h-4 w-4" />
            <span>Calculators & Tools</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('glossary');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-sm ${
              activeTab === 'glossary' ? 'bg-white text-black font-bold' : 'text-neutral-300 hover:bg-neutral-900'
            }`}
          >
            <Layers className="h-4 w-4" />
            <span>Glossary & Abbreviations</span>
          </button>
        </div>
      )}
    </header>
  );
};
