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
  CheckCircle2
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
    <aside className="w-full lg:w-80 flex-shrink-0 border-r border-slate-800 bg-slate-950/60 backdrop-blur-md flex flex-col h-[calc(100vh-4rem)] sticky top-16 select-none">
      
      {/* Sidebar Header & Search Filter */}
      <div className="p-3.5 border-b border-slate-800/80 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
            <BookOpen className="h-3.5 w-3.5 text-cyan-400" />
            <span>Table of Contents</span>
          </span>
          <div className="flex items-center space-x-1 text-[10px]">
            <button
              onClick={expandAll}
              className="text-slate-400 hover:text-cyan-300 px-1.5 py-0.5 rounded hover:bg-slate-800 transition"
            >
              Expand
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={collapseAll}
              className="text-slate-400 hover:text-cyan-300 px-1.5 py-0.5 rounded hover:bg-slate-800 transition"
            >
              Collapse
            </button>
          </div>
        </div>

        {/* Live Filter in TOC */}
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-500" />
          <input
            type="text"
            placeholder="Filter sections..."
            value={tocFilter}
            onChange={(e) => setTocFilter(e.target.value)}
            className="w-full rounded-lg border border-slate-800 bg-slate-900/90 py-1.5 pl-8 pr-3 text-xs text-slate-200 placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition"
          />
        </div>
      </div>

      {/* Chapters & Sections List */}
      <div className="flex-1 overflow-y-auto px-2 py-3 space-y-1">
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
            <div key={chapter.id} className="rounded-xl border border-transparent hover:border-slate-800/80 transition-all">
              
              {/* Chapter Header Button */}
              <button
                onClick={() => {
                  toggleChapterExpand(chapter.id);
                  navigateToSection(chapter.id, chapter.sections[0]?.id);
                }}
                className={`w-full flex items-center justify-between p-2 rounded-lg text-left transition-all ${
                  isCurrentChapter
                    ? 'bg-gradient-to-r from-cyan-500/15 to-transparent text-cyan-300 border-l-2 border-cyan-400 font-semibold'
                    : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-2.5 truncate">
                  <div className={`p-1 rounded-md ${isCurrentChapter ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-400'}`}>
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <div className="truncate">
                    <div className="text-xs font-semibold tracking-tight truncate">
                      {chapter.chapterNumber}. {chapter.title}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-1 flex-shrink-0 ml-2">
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                    p.{chapter.startPage}
                  </span>
                  {isExpanded ? (
                    <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
                  ) : (
                    <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                  )}
                </div>
              </button>

              {/* Sections Accordion */}
              {isExpanded && (
                <div className="mt-1 pl-4 pr-1 space-y-0.5 border-l border-slate-800/80 ml-4">
                  {filteredSections.map((sec) => {
                    const isCurrentSec = currentSectionId === sec.id;
                    const isBookmarkedSec = bookmarkedSections.includes(sec.id);

                    return (
                      <div key={sec.id}>
                        <button
                          onClick={() => navigateToSection(chapter.id, sec.id)}
                          className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-all ${
                            isCurrentSec
                              ? 'bg-cyan-500/20 text-cyan-300 font-medium border border-cyan-500/30 shadow-glow-cyan'
                              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                          }`}
                        >
                          <span className="truncate pr-2">
                            <span className="font-mono text-[11px] text-cyan-400 mr-1.5">
                              {sec.sectionNumber}
                            </span>
                            {sec.title}
                          </span>

                          <div className="flex items-center space-x-1 flex-shrink-0">
                            {isBookmarkedSec && (
                              <Bookmark className="h-3 w-3 fill-cyan-400 text-cyan-400" />
                            )}
                            <span className="text-[9px] font-mono text-slate-600">
                              {sec.pageNumber}
                            </span>
                          </div>
                        </button>

                        {/* Subsections if available */}
                        {sec.subsections && sec.subsections.length > 0 && (
                          <div className="pl-4 space-y-0.5 my-0.5">
                            {sec.subsections.map((sub) => {
                              const isCurrentSub = currentSectionId === sub.id;
                              return (
                                <button
                                  key={sub.id}
                                  onClick={() => navigateToSection(chapter.id, sub.id)}
                                  className={`w-full text-left px-2 py-1 rounded text-[11px] truncate transition-colors ${
                                    isCurrentSub
                                      ? 'text-cyan-300 font-medium bg-cyan-500/10'
                                      : 'text-slate-500 hover:text-slate-300 hover:bg-slate-900/40'
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

      {/* Sidebar Footer */}
      <div className="p-3 border-t border-slate-800 bg-slate-950/80 text-[11px] text-slate-400 flex items-center justify-between">
        <span className="font-mono">AB-V-MA-00601_RevA5</span>
        <span className="text-cyan-400 font-semibold">43 Pages Total</span>
      </div>
    </aside>
  );
};
