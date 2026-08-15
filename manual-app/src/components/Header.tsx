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
  X,
  Sparkles,
  Activity
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
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-dark-base/85 backdrop-blur-2xl transition-all shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left: Logo & Doc Telemetry Badge */}
        <div 
          className="flex items-center space-x-3 cursor-pointer group select-none" 
          onClick={() => setActiveTab('landing')}
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-dark-surface to-dark-elevated border border-white/10 group-hover:border-cyber-cyan/50 shadow-glow-cyan transition-all duration-300">
            <Radio className="h-5 w-5 text-cyber-cyan group-hover:scale-110 transition-transform duration-300 animate-pulse-slow" />
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyber-cyan/30 to-cyber-violet/30 blur-sm -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-display font-black text-lg tracking-wider text-white group-hover:text-cyber-cyan transition-colors">
                VERIPOS
              </span>
              <span className="rounded-full bg-cyber-cyan/10 px-2 py-0.5 font-mono text-[10px] font-bold text-cyber-cyan border border-cyber-cyan/30 tracking-wider">
                {manualMetadata.revision}
              </span>
              <span className="hidden xl:inline-flex items-center space-x-1 rounded-full bg-cyber-emerald/10 px-2 py-0.5 text-[9px] font-mono text-cyber-emerald border border-cyber-emerald/20">
                <span className="h-1.5 w-1.5 rounded-full bg-cyber-emerald animate-ping" />
                <span>ONLINE SPEC</span>
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium hidden sm:block tracking-tight">
              Marine Antenna & Coaxial Cable Installation
            </p>
          </div>
        </div>

        {/* Center: Main Futuristic Navigation Tabs */}
        <nav className="hidden md:flex items-center space-x-1.5 rounded-2xl bg-dark-surface/90 p-1.5 border border-white/[0.08] backdrop-blur-xl shadow-inner">
          <button
            onClick={() => setActiveTab('landing')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeTab === 'landing'
                ? 'bg-gradient-to-r from-cyber-cyan to-cyber-blue text-dark-void font-bold shadow-glow-cyan'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            <Compass className="h-3.5 w-3.5" />
            <span>Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('manual')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeTab === 'manual'
                ? 'bg-gradient-to-r from-cyber-cyan to-cyber-blue text-dark-void font-bold shadow-glow-cyan'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>E-Manual</span>
          </button>

          <button
            onClick={() => setActiveTab('tools')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeTab === 'tools'
                ? 'bg-gradient-to-r from-cyber-cyan to-cyber-blue text-dark-void font-bold shadow-glow-cyan'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            <Wrench className="h-3.5 w-3.5" />
            <span>Calculators</span>
          </button>

          <button
            onClick={() => setActiveTab('glossary')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeTab === 'glossary'
                ? 'bg-gradient-to-r from-cyber-cyan to-cyber-blue text-dark-void font-bold shadow-glow-cyan'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
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
            className="flex items-center space-x-2 rounded-xl border border-white/[0.08] bg-dark-surface/90 px-3 py-1.5 text-xs text-slate-300 hover:border-cyber-cyan/40 hover:text-white hover:bg-dark-elevated transition-all shadow-inner group"
            title="Search manual (Ctrl+K)"
          >
            <Search className="h-3.5 w-3.5 text-cyber-cyan group-hover:scale-110 transition-transform" />
            <span className="hidden lg:inline text-[11px] text-slate-400 group-hover:text-slate-200">Search...</span>
            <kbd className="hidden sm:inline-block rounded-md bg-dark-void/80 px-1.5 py-0.5 font-mono text-[9px] text-slate-400 border border-white/10">
              Ctrl K
            </kbd>
          </button>

          {/* PDF Side-by-Side Sync Toggle */}
          <button
            onClick={togglePdfSplitView}
            className={`flex items-center space-x-1.5 rounded-xl px-3 py-1.5 text-xs font-medium border transition-all duration-200 ${
              pdfSplitView
                ? 'bg-cyber-cyan/15 text-cyber-cyan border-cyber-cyan/40 shadow-glow-cyan'
                : 'bg-dark-surface/80 text-slate-300 border-white/[0.08] hover:border-white/20 hover:text-white'
            }`}
            title="Toggle Split-Screen Original PDF View"
          >
            <Columns className="h-3.5 w-3.5 text-cyber-cyan" />
            <span className="hidden xl:inline text-[11px]">PDF Sync</span>
          </button>

          {/* Bookmarks Drawer Trigger */}
          <div className="relative">
            <button
              onClick={() => setIsBookmarkOpen(!isBookmarkOpen)}
              className="relative rounded-xl border border-white/[0.08] bg-dark-surface/80 p-2 text-slate-300 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-all"
              title="Saved Bookmarks"
            >
              <Bookmark className="h-3.5 w-3.5" />
              {bookmarkedSections.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-cyber-cyan text-[9px] font-black text-dark-void animate-pulse">
                  {bookmarkedSections.length}
                </span>
              )}
            </button>

            {/* Bookmarks dropdown */}
            {isBookmarkOpen && (
              <div className="absolute right-0 mt-2 w-72 rounded-2xl border border-white/10 bg-dark-panel/95 p-3.5 shadow-2xl backdrop-blur-2xl z-50 animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                  <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                    <Bookmark className="h-3.5 w-3.5 text-cyber-cyan" />
                    <span>Saved Bookmarks</span>
                  </span>
                  <span className="text-[10px] text-cyber-cyan font-mono bg-cyber-cyan/10 px-2 py-0.5 rounded-full">
                    {bookmarkedSections.length} saved
                  </span>
                </div>
                {bookmarkedSections.length === 0 ? (
                  <p className="text-xs text-slate-400 py-4 text-center">
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
                          className="w-full text-left px-2.5 py-1.5 rounded-xl text-xs text-slate-300 hover:bg-cyber-cyan/10 hover:text-cyber-cyan transition-colors flex items-center justify-between group"
                        >
                          <span className="truncate pr-2">{title}</span>
                          <span className="text-[10px] font-mono text-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity">Jump →</span>
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
            className="rounded-xl border border-white/[0.08] bg-dark-surface/80 p-2 text-slate-300 hover:text-amber-400 hover:border-amber-400/40 transition-all"
            title={`Current theme: ${theme}. Click to cycle.`}
          >
            {theme === 'light' ? <Sun className="h-3.5 w-3.5 text-amber-400" /> : <Moon className="h-3.5 w-3.5 text-cyber-cyan" />}
          </button>

          {/* Support Phone Quick Link */}
          <a
            href={`tel:${manualMetadata.supportPhone.replace(/\s+/g, '')}`}
            className="hidden sm:flex items-center space-x-1.5 rounded-xl bg-cyber-emerald/10 border border-cyber-emerald/30 px-3 py-1.5 text-xs text-cyber-emerald hover:bg-cyber-emerald/20 transition-all shadow-[0_0_15px_rgba(16,185,129,0.15)]"
            title="24/7 Global Support Hotline"
          >
            <PhoneCall className="h-3 w-3" />
            <span className="text-[11px] font-bold font-mono hidden md:inline">24/7 Hotline</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden rounded-xl border border-white/[0.08] bg-dark-surface p-2 text-slate-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-dark-panel p-4 space-y-2 animate-in fade-in slide-in-from-top-2">
          <button
            onClick={() => {
              setActiveTab('landing');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center space-x-2 px-3.5 py-2.5 rounded-xl text-sm font-semibold ${
              activeTab === 'landing' ? 'bg-gradient-to-r from-cyber-cyan to-cyber-blue text-dark-void font-bold shadow-glow-cyan' : 'text-slate-300 hover:bg-dark-surface'
            }`}
          >
            <Compass className="h-4 w-4" />
            <span>Overview & Architecture</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('manual');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center space-x-2 px-3.5 py-2.5 rounded-xl text-sm font-semibold ${
              activeTab === 'manual' ? 'bg-gradient-to-r from-cyber-cyan to-cyber-blue text-dark-void font-bold shadow-glow-cyan' : 'text-slate-300 hover:bg-dark-surface'
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
            className={`w-full flex items-center space-x-2 px-3.5 py-2.5 rounded-xl text-sm font-semibold ${
              activeTab === 'tools' ? 'bg-gradient-to-r from-cyber-cyan to-cyber-blue text-dark-void font-bold shadow-glow-cyan' : 'text-slate-300 hover:bg-dark-surface'
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
            className={`w-full flex items-center space-x-2 px-3.5 py-2.5 rounded-xl text-sm font-semibold ${
              activeTab === 'glossary' ? 'bg-gradient-to-r from-cyber-cyan to-cyber-blue text-dark-void font-bold shadow-glow-cyan' : 'text-slate-300 hover:bg-dark-surface'
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
