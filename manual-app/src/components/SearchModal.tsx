import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X, BookOpen, Layers, ArrowRight, FileText, Sparkles, Hash, CornerDownLeft } from 'lucide-react';
import { useManual } from '../context/ManualContext';
import { buildSearchIndex, searchManual } from '../data/searchIndex';
import { SearchResult } from '../types/manual';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, navigateToSection } = useManual();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const searchIndex = useMemo(() => buildSearchIndex(), []);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  // Global Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(!isSearchOpen);
      } else if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const rawResults: SearchResult[] = searchManual(query, searchIndex);

  const filteredResults = rawResults.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.matchType === selectedCategory;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
      
      {/* Backdrop */}
      <div 
        onClick={() => setIsSearchOpen(false)} 
        className="fixed inset-0 bg-dark-void/85 backdrop-blur-xl transition-opacity animate-in fade-in" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-b from-dark-panel to-dark-surface shadow-2xl overflow-hidden z-10 my-8 animate-in zoom-in-95 duration-200">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-4.5 border-b border-white/10 bg-dark-panel/90">
          <Search className="h-5 w-5 text-cyber-cyan mr-3.5 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search keywords, connector types, radar clearance, attenuation..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none font-medium font-sans"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 rounded-lg text-slate-400 hover:text-white mr-2"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block rounded-lg bg-dark-void px-2 py-1 font-mono text-[10px] text-slate-400 border border-white/10">
            ESC
          </kbd>
        </div>

        {/* Category Filter Pills */}
        <div className="px-6 py-3 border-b border-white/[0.06] bg-dark-surface/60 flex items-center space-x-2 overflow-x-auto custom-scrollbar font-mono text-xs">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider mr-1">Filter:</span>
          {['all', 'title', 'content', 'table', 'callout', 'step'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-xl text-[11px] font-semibold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-cyber-cyan text-dark-void font-bold shadow-glow-cyan'
                  : 'bg-dark-void text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2.5 custom-scrollbar">
          {query.length < 2 ? (
            <div className="py-14 text-center text-slate-400 space-y-2">
              <Search className="h-8 w-8 mx-auto text-slate-600" />
              <p className="text-sm font-medium">Type at least 2 characters to search...</p>
              <p className="text-xs text-slate-500">Search for "LMR-400", "Radar", "Weatherproofing", or "Heliax".</p>
            </div>
          ) : filteredResults.length === 0 ? (
            <div className="py-16 text-center text-slate-400 space-y-2">
              <Search className="h-8 w-8 mx-auto text-slate-600" />
              <p className="text-sm">No results found for "{query}".</p>
              <p className="text-xs text-slate-500">Try searching for "antenna", "crimp", "loss", or "separation".</p>
            </div>
          ) : (
            filteredResults.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  navigateToSection(item.chapterId, item.sectionId);
                  setIsSearchOpen(false);
                }}
                className="w-full text-left p-4 rounded-2xl border border-white/[0.06] bg-dark-void/70 hover:border-cyber-cyan/40 hover:bg-dark-elevated transition-all flex flex-col justify-between group shadow-sm"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs font-bold text-cyber-cyan bg-cyber-cyan/10 px-2 py-0.5 rounded border border-cyber-cyan/20">
                      {item.sectionNumber}
                    </span>
                    <span className="text-xs font-bold text-white font-display group-hover:text-cyber-cyan transition-colors">
                      {item.sectionTitle}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-dark-panel px-2 py-0.5 rounded border border-white/10">
                    p.{item.pageNumber}
                  </span>
                </div>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {item.snippet}
                </p>

                <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="text-slate-500 uppercase">{item.chapterTitle}</span>
                  <span className="text-cyber-cyan flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                    <span>Open Section</span>
                    <CornerDownLeft className="h-3 w-3" />
                  </span>
                </div>
              </button>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 border-t border-white/10 bg-dark-panel/90 text-xs text-slate-400 flex items-center justify-between font-mono">
          <span className="text-[11px]">Found {filteredResults.length} matching entries</span>
          <span className="text-cyber-cyan">AB-V-MA-00601_RevA5</span>
        </div>

      </div>

    </div>
  );
};
