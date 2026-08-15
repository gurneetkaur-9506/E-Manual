import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, BookOpen, FileText, ArrowRight, CornerDownLeft, Layers, ShieldAlert } from 'lucide-react';
import { useManual } from '../context/ManualContext';
import { buildSearchIndex, searchManual } from '../data/searchIndex';
import { SearchResult } from '../types/manual';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, navigateToSection } = useManual();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const searchIndex = useMemo(() => buildSearchIndex(), []);

  const results: SearchResult[] = useMemo(() => {
    return searchManual(query, searchIndex);
  }, [query, searchIndex]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  if (!isSearchOpen) return null;

  const handleSelectResult = (r: SearchResult) => {
    navigateToSection(r.chapterId, r.sectionId);
    setIsSearchOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      handleSelectResult(results[selectedIndex]);
    }
  };

  const quickSearches = [
    "LMR-400",
    "EZ-400-NMH-X",
    "Heliax LDF4-50",
    "Radar spacing",
    "Weatherproofing",
    "Quantum SNR",
    "V560 Phase Centre",
    "Scotch 23",
    "Maximum cable length"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={() => setIsSearchOpen(false)} />

      <div className="relative w-full max-w-2xl rounded-2xl border border-cyan-500/30 bg-slate-900 shadow-2xl overflow-hidden flex flex-col max-h-[80vh] z-10">
        
        {/* Search Input Box */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-950">
          <Search className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search across all 43 pages, tables, warnings, procedures..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded text-slate-500 hover:text-white mr-2"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="rounded-lg bg-slate-800 px-2 py-1 text-[10px] font-mono text-slate-400 hover:bg-slate-700"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestion Pills if no query */}
        {!query && (
          <div className="p-4 border-b border-slate-800/80 bg-slate-900/50">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Popular Search Topics:
            </span>
            <div className="flex flex-wrap gap-2">
              {quickSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {query && results.length === 0 && (
            <div className="py-12 text-center text-slate-500 text-sm">
              No results found for <span className="text-cyan-400 font-semibold">"{query}"</span>.
              <br />
              <span className="text-xs text-slate-600 mt-1 block">
                Try searching for cable part numbers, satellite constellations, or procedures.
              </span>
            </div>
          )}

          {results.map((res, idx) => {
            const isSelected = idx === selectedIndex;

            return (
              <div
                key={idx}
                onClick={() => handleSelectResult(res)}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`p-3 rounded-xl cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-cyan-500/15 border border-cyan-500/40 shadow-glow-cyan'
                    : 'border border-transparent hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center space-x-2 truncate">
                    <span className="font-mono text-xs font-bold text-cyan-400">
                      {res.sectionNumber}
                    </span>
                    <span className="text-xs font-semibold text-white truncate">
                      {res.sectionTitle}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1.5 flex-shrink-0 ml-2">
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">
                      Page {res.pageNumber}
                    </span>
                    <span className="text-[9px] uppercase font-bold text-cyan-300 bg-cyan-950 px-1.5 py-0.5 rounded border border-cyan-800">
                      {res.matchType}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {res.snippet}
                </p>

                {isSelected && (
                  <div className="mt-2 flex items-center justify-between text-[11px] text-cyan-400 font-medium pt-1 border-t border-cyan-500/20">
                    <span className="text-slate-400">Chapter {res.chapterNumber}: {res.chapterTitle}</span>
                    <span className="flex items-center space-x-1">
                      <span>Jump to section</span>
                      <CornerDownLeft className="h-3 w-3" />
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="p-3 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center space-x-3">
            <span><kbd className="bg-slate-800 px-1.5 py-0.5 rounded font-mono text-[9px]">↑</kbd> <kbd className="bg-slate-800 px-1.5 py-0.5 rounded font-mono text-[9px]">↓</kbd> Navigate</span>
            <span><kbd className="bg-slate-800 px-1.5 py-0.5 rounded font-mono text-[9px]">Enter</kbd> Open</span>
          </div>
          <span className="font-mono text-cyan-400">
            {results.length} matches found
          </span>
        </div>

      </div>
    </div>
  );
};
