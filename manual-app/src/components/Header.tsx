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
    <header className="sticky top-0 z-40 w-full border-b border-cyan-500/20 bg-slate-950/85 backdrop-blur-xl transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left: Logo & Doc Title */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('landing')}>
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-marine-600 shadow-glow-cyan">
            <Radio className="h-5 w-5 text-white animate-pulse" />
            <div className="absolute -inset-0.5 rounded-xl bg-cyan-400/30 blur-sm -z-10" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-display font-bold text-lg text-white tracking-tight">
                VERIPOS
              </span>
              <span className="rounded bg-cyan-500/20 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-cyan-300 border border-cyan-500/30">
                {manualMetadata.revision}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
              Antenna & Coaxial Cable Installation Manual
            </p>
          </div>
        </div>

        {/* Center: Main Navigation Tabs */}
        <nav className="hidden md:flex items-center space-x-1 rounded-xl bg-slate-900/80 p-1 border border-slate-800">
          <button
            onClick={() => setActiveTab('landing')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'landing'
                ? 'bg-cyan-500 text-slate-950 shadow-sm font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Compass className="h-3.5 w-3.5" />
            <span>Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('manual')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'manual'
                ? 'bg-cyan-500 text-slate-950 shadow-sm font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>E-Manual</span>
          </button>

          <button
            onClick={() => setActiveTab('tools')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'tools'
                ? 'bg-cyan-500 text-slate-950 shadow-sm font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Wrench className="h-3.5 w-3.5" />
            <span>Calculators & Tools</span>
          </button>

          <button
            onClick={() => setActiveTab('glossary')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'glossary'
                ? 'bg-cyan-500 text-slate-950 shadow-sm font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
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
            className="flex items-center space-x-2 rounded-lg border border-slate-800 bg-slate-900/90 px-2.5 py-1.5 text-xs text-slate-300 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all shadow-inner"
            title="Search manual (Ctrl+K)"
          >
            <Search className="h-3.5 w-3.5 text-cyan-400" />
            <span className="hidden lg:inline text-[11px] text-slate-400">Search Manual...</span>
            <kbd className="hidden sm:inline-block rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[9px] text-slate-400 border border-slate-700">
              Ctrl K
            </kbd>
          </button>

          {/* PDF Side-by-Side Sync Toggle */}
          <button
            onClick={togglePdfSplitView}
            className={`flex items-center space-x-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium border transition-all ${
              pdfSplitView
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-glow-cyan'
                : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700'
            }`}
            title="Toggle Split-Screen Original PDF View"
          >
            <Columns className="h-3.5 w-3.5 text-cyan-400" />
            <span className="hidden xl:inline text-[11px]">PDF Sync</span>
          </button>

          {/* Bookmarks Drawer Trigger */}
          <div className="relative">
            <button
              onClick={() => setIsBookmarkOpen(!isBookmarkOpen)}
              className="relative rounded-lg border border-slate-800 bg-slate-900/80 p-2 text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-all"
              title="Saved Bookmarks"
            >
              <Bookmark className="h-3.5 w-3.5" />
              {bookmarkedSections.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500 text-[9px] font-bold text-slate-950">
                  {bookmarkedSections.length}
                </span>
              )}
            </button>

            {/* Bookmarks dropdown */}
            {isBookmarkOpen && (
              <div className="absolute right-0 mt-2 w-72 rounded-xl border border-slate-800 bg-slate-900/95 p-3 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2">
                  <span className="text-xs font-semibold text-white flex items-center space-x-1">
                    <Bookmark className="h-3 w-3 text-cyan-400" />
                    <span>Saved Sections</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {bookmarkedSections.length} saved
                  </span>
                </div>
                {bookmarkedSections.length === 0 ? (
                  <p className="text-xs text-slate-500 py-3 text-center">
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
                          className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors flex items-center justify-between"
                        >
                          <span className="truncate">{title}</span>
                          <span className="text-[10px] text-cyan-400 ml-2">Jump</span>
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
            className="rounded-lg border border-slate-800 bg-slate-900/80 p-2 text-slate-300 hover:text-amber-400 hover:border-slate-700 transition-all"
            title={`Current theme: ${theme}. Click to cycle.`}
          >
            {theme === 'light' ? <Sun className="h-3.5 w-3.5 text-amber-400" /> : <Moon className="h-3.5 w-3.5 text-cyan-400" />}
          </button>

          {/* Support Phone Quick Link */}
          <a
            href={`tel:${manualMetadata.supportPhone.replace(/\s+/g, '')}`}
            className="hidden sm:flex items-center space-x-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1.5 text-xs text-emerald-400 hover:bg-emerald-500/20 transition-all"
            title="24/7 Global Support Hotline"
          >
            <PhoneCall className="h-3 w-3" />
            <span className="text-[11px] font-medium font-mono hidden md:inline">24/7 Support</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden rounded-lg border border-slate-800 bg-slate-900/80 p-2 text-slate-300"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 p-4 space-y-2">
          <button
            onClick={() => {
              setActiveTab('landing');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-sm ${
              activeTab === 'landing' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-300 hover:bg-slate-900'
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
              activeTab === 'manual' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-300 hover:bg-slate-900'
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
              activeTab === 'tools' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-300 hover:bg-slate-900'
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
              activeTab === 'glossary' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-300 hover:bg-slate-900'
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
