import React, { useState, useMemo } from 'react';
import { Search, Layers, BookOpen, Filter } from 'lucide-react';
import { glossaryData } from '../../data/glossaryData';
import { GlossaryTerm } from '../../types/manual';

export const GlossaryViewer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'RF & Hardware', 'Navigation & GNSS', 'Standards & Safety', 'General'];

  const filteredGlossary = useMemo(() => {
    return glossaryData.filter((item) => {
      const matchCat = selectedCategory === 'All' || item.category === selectedCategory;
      const matchQuery = 
        item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300">
          <Layers className="h-3.5 w-3.5" />
          <span>Section 1.3 Official Reference</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
          Technical Terms & Abbreviations
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Complete marine engineering glossary of RF connectors, satellite acronyms, navigation standards, and regulatory organizations.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl">
        
        {/* Search input */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search acronym or definition..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 py-2 pl-9 pr-4 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Glossary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredGlossary.map((item, idx) => (
          <div
            key={idx}
            className="glass-panel glass-panel-hover p-4.5 rounded-2xl border border-slate-800 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-mono font-bold text-cyan-400">
                  {item.term}
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  {item.category}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.definition}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredGlossary.length === 0 && (
        <div className="py-16 text-center text-slate-500 text-sm">
          No glossary terms match your search filter.
        </div>
      )}

      {/* Summary Footer */}
      <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/60 text-xs text-slate-400 flex items-center justify-between">
        <span>Showing {filteredGlossary.length} of {glossaryData.length} terms</span>
        <span className="font-mono text-cyan-400">Veripos AB-V-MA-00601_RevA5</span>
      </div>

    </div>
  );
};
