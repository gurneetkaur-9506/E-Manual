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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-black text-white">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 rounded-full border border-neutral-700 bg-neutral-900 px-3.5 py-1 text-xs font-semibold text-neutral-200">
          <Layers className="h-3.5 w-3.5" />
          <span>Section 1.3 Official Reference</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
          Technical Terms & Abbreviations
        </h2>
        <p className="text-xs sm:text-sm text-neutral-400">
          Complete marine engineering glossary of RF connectors, satellite acronyms, navigation standards, and regulatory organizations.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-neutral-950 p-4 rounded-2xl border border-neutral-800">
        
        {/* Search input */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-3 h-4 w-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Search acronym or definition..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-neutral-700 bg-black py-2 pl-9 pr-4 text-xs text-white placeholder-neutral-500 focus:border-neutral-500 focus:outline-none"
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
                  ? 'bg-white text-black shadow-sm font-bold'
                  : 'bg-black text-neutral-400 hover:text-white border border-neutral-800'
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
            className="p-4.5 rounded-2xl border border-neutral-800 bg-neutral-950 hover:border-neutral-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-mono font-bold text-white">
                  {item.term}
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-wider text-neutral-400 bg-black px-2 py-0.5 rounded border border-neutral-800">
                  {item.category}
                </span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {item.definition}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredGlossary.length === 0 && (
        <div className="py-16 text-center text-neutral-500 text-sm">
          No glossary terms match your search filter.
        </div>
      )}

      {/* Summary Footer */}
      <div className="p-4 rounded-xl border border-neutral-800 bg-black text-xs text-neutral-400 flex items-center justify-between">
        <span>Showing {filteredGlossary.length} of {glossaryData.length} terms</span>
        <span className="font-mono text-neutral-300">Veripos AB-V-MA-00601_RevA5</span>
      </div>

    </div>
  );
};
