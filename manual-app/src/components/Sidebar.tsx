import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  BookOpen, 
  Radio, 
  Satellite, 
  Wifi, 
  AlertTriangle, 
  Sliders, 
  Eye, 
  Cable, 
  FileText, 
  Search, 
  Bookmark,
  CheckCircle2,
  Layers,
  Sparkles
} from 'lucide-react';
import { useManual } from '../context/ManualContext';
import { chaptersData } from '../data/manualContent';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  BookOpen,
  Radio,
  Satellite,
  Wifi,
  AlertTriangle,
  Sliders,
  Eye,
  Cable,
  FileText
};

export const Sidebar: React.FC = () => {
  const { 
    currentChapterId, 
    currentSectionId, 
    navigateToSection, 
    bookmarkedSections 
  } = useManual();

  const [tocFilter, setTocFilter] = useState('');
  const [expandedChapters, setExpandedChapters] = useState<{ [key: string]: boolean }>({
    'chapter-1': true,
    'chapter-2': true,
    'chapter-3': true,
    'chapter-4': true,
    'chapter-5': true,
    'chapter-6': true,
    'chapter-7': true,
    'chapter-8': true,
    'chapter-9': true,
  });

  const toggleChapterExpand = (chapterId: string) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId]
    }));
  };

  const expandAll = () => {
    const allExp: { [key: string]: boolean } = {};
    chaptersData.forEach((c) => (allExp[c.id] = true));
    setExpandedChapters(allExp);
  };

  const collapseAll = () => {
    setExpandedChapters({});
  };

  return (
    <aside className="w-full lg:w-80 flex-shrink-0 border-r border-white/[0.08] bg-dark-base/95 backdrop-blur-xl flex flex-col h-[calc(100vh-4rem)] sticky top-16 select-none z-20">
      
      {/* Sidebar Header & Search Filter */}
      <div className="p-4 border-b border-white/[0.08] space-y-3 bg-dark-surface/60">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center space-x-2">
            <span className="flex h-2 w-2 rounded-full bg-cyber-cyan shadow-[0_0_8px_#00F0FF]" />
            <span className="font-tech tracking-wider">TABLE OF CONTENTS</span>
          </span>
          <div className="flex items-center space-x-1 text-[11px] font-mono">
            <button
              onClick={expandAll}
              className="text-slate-400 hover:text-cyber-cyan px-2 py-0.5 rounded-md hover:bg-white/[0.06] transition"
            >
              EXPAND
            </button>
            <span className="text-slate-600">/</span>
            <button
              onClick={collapseAll}
              className="text-slate-400 hover:text-cyber-cyan px-2 py-0.5 rounded-md hover:bg-white/[0.06] transition"
            >
              COLLAPSE
            </button>
          </div>
        </div>

        {/* Live Filter in TOC */}
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-500" />
          <input
            type="text"
            placeholder="Quick filter sections..."
            value={tocFilter}
            onChange={(e) => setTocFilter(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-dark-panel/90 py-2 pl-9 pr-3 text-xs text-slate-200 placeholder-slate-500 focus:border-cyber-cyan/50 focus:outline-none focus:ring-1 focus:ring-cyber-cyan/50 transition font-medium"
          />
        </div>
      </div>

      {/* Chapters & Sections List */}
      <div className="flex-1 overflow-y-auto px-2.5 py-3 space-y-1.5 custom-scrollbar">
        {chaptersData.map((chapter) => {
          const Icon = iconMap[chapter.iconName] || BookOpen;
          const isExpanded = expandedChapters[chapter.id] || tocFilter.length > 0;
          const isCurrentChapter = currentChapterId === chapter.id;

          // Filter sections if filter active
          const filteredSections = chapter.sections.filter((s) => {
            if (!tocFilter) return true;
            const q = tocFilter.toLowerCase();
            const matchMain = s.title.toLowerCase().includes(q) || s.sectionNumber.includes(q);
            const matchSub = s.subsections?.some(
              (sub) => sub.title.toLowerCase().includes(q) || sub.sectionNumber.includes(q)
            );
            return matchMain || matchSub;
          });

          if (tocFilter && filteredSections.length === 0 && !chapter.title.toLowerCase().includes(tocFilter.toLowerCase())) {
            return null;
          }

          return (
            <div 
              key={chapter.id} 
              className={`rounded-2xl border transition-all duration-200 ${
                isCurrentChapter 
                  ? 'border-cyber-cyan/30 bg-dark-surface/90 shadow-[0_4px_20px_rgba(0,240,255,0.05)]' 
                  : 'border-transparent hover:border-white/[0.06] hover:bg-white/[0.02]'
              }`}
            >
              
              {/* Chapter Header Button */}
              <button
                onClick={() => {
                  toggleChapterExpand(chapter.id);
                  navigateToSection(chapter.id, chapter.sections[0]?.id);
                }}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all group ${
                  isCurrentChapter
                    ? 'text-white font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-2.5 truncate">
                  <div className={`p-1.5 rounded-lg transition-colors ${
                    isCurrentChapter 
                      ? 'bg-cyber-cyan text-dark-void shadow-glow-cyan font-bold' 
                      : 'bg-dark-elevated text-slate-400 group-hover:text-cyber-cyan group-hover:bg-dark-highlight'
                  }`}>
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <div className="truncate">
                    <div className="text-xs font-bold tracking-tight truncate font-display">
                      {chapter.chapterNumber}. {chapter.title}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-1.5 flex-shrink-0 ml-2">
                  <span className="text-[10px] font-mono text-slate-400 bg-dark-void px-2 py-0.5 rounded-md border border-white/[0.08]">
                    p.{chapter.startPage}
                  </span>
                  {isExpanded ? (
                    <ChevronDown className="h-3.5 w-3.5 text-cyber-cyan transition-transform" />
                  ) : (
                    <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-slate-300 transition-transform" />
                  )}
                </div>
              </button>

              {/* Sections Accordion */}
              {isExpanded && (
                <div className="mt-1 pl-4 pr-1.5 pb-2 space-y-1 border-l-2 border-white/10 ml-5">
                  {filteredSections.map((sec) => {
                    const isCurrentSec = currentSectionId === sec.id;
                    const isBookmarkedSec = bookmarkedSections.includes(sec.id);

                    return (
                      <div key={sec.id}>
                        <button
                          onClick={() => navigateToSection(chapter.id, sec.id)}
                          className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs transition-all duration-200 ${
                            isCurrentSec
                              ? 'bg-gradient-to-r from-cyber-cyan/20 to-cyber-violet/10 text-cyber-cyan font-semibold border border-cyber-cyan/40 shadow-glow-cyan'
                              : 'text-slate-400 hover:text-slate-100 hover:bg-white/[0.05]'
                          }`}
                        >
                          <span className="truncate pr-2 text-left">
                            <span className="font-mono text-[11px] text-cyber-sky font-semibold mr-1.5">
                              {sec.sectionNumber}
                            </span>
                            {sec.title}
                          </span>

                          <div className="flex items-center space-x-1 flex-shrink-0">
                            {isBookmarkedSec && (
                              <Bookmark className="h-3 w-3 fill-cyber-cyan text-cyber-cyan" />
                            )}
                            <span className="text-[9px] font-mono text-slate-500">
                              {sec.pageNumber}
                            </span>
                          </div>
                        </button>

                        {/* Subsections if available */}
                        {sec.subsections && sec.subsections.length > 0 && (
                          <div className="pl-4 space-y-0.5 my-1 border-l border-white/[0.06] ml-2">
                            {sec.subsections.map((sub) => {
                              const isCurrentSub = currentSectionId === sub.id;
                              return (
                                <button
                                  key={sub.id}
                                  onClick={() => navigateToSection(chapter.id, sub.id)}
                                  className={`w-full text-left px-2 py-1 rounded-lg text-[11px] truncate transition-colors ${
                                    isCurrentSub
                                      ? 'text-cyber-cyan font-medium bg-cyber-cyan/10'
                                      : 'text-slate-500 hover:text-slate-300 hover:bg-white/[0.04]'
                                  }`}
                                >
                                  <span className="font-mono text-[10px] text-slate-400 mr-1">
                                    {sub.sectionNumber}
                                  </span>
                                  {sub.title}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Sidebar Telemetry Footer */}
      <div className="p-3.5 border-t border-white/[0.08] bg-dark-panel/90 text-[11px] text-slate-400 flex items-center justify-between font-mono">
        <span className="text-slate-400">AB-V-MA-00601_RevA5</span>
        <span className="text-cyber-cyan font-bold bg-cyber-cyan/10 px-2 py-0.5 rounded-full border border-cyber-cyan/20">43 PGS</span>
      </div>
    </aside>
  );
};
