import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  ZoomIn, 
  AlertTriangle, 
  Info, 
  CheckCircle2, 
  Copy, 
  Check, 
  FileText, 
  ExternalLink, 
  ShieldAlert, 
  ArrowUpRight, 
  Maximize2,
  Sparkles,
  Layers,
  Compass
} from 'lucide-react';
import { useManual } from '../context/ManualContext';
import { chaptersData } from '../data/manualContent';
import { SectionItem, ChapterItem } from '../types/manual';

export const ManualViewer: React.FC = () => {
  const { 
    currentChapterId, 
    currentSectionId, 
    navigateToSection, 
    toggleBookmark, 
    isBookmarked,
    setLightboxFigure,
    checklistState,
    toggleChecklistStep
  } = useManual();

  const [copiedTableId, setCopiedTableId] = useState<string | null>(null);

  // Find active chapter and section
  const currentChapter = chaptersData.find((c) => c.id === currentChapterId) || chaptersData[0];
  const currentSection = currentChapter.sections.find((s) => s.id === currentSectionId) || currentChapter.sections[0];

  // Calculate Previous and Next sections
  const allSectionsList: { chapter: ChapterItem; section: SectionItem }[] = [];
  chaptersData.forEach((ch) => {
    ch.sections.forEach((sec) => {
      allSectionsList.push({ chapter: ch, section: sec });
    });
  });

  const currentIndex = allSectionsList.findIndex(
    (item) => item.chapter.id === currentChapterId && item.section.id === currentSectionId
  );

  const prevItem = currentIndex > 0 ? allSectionsList[currentIndex - 1] : null;
  const nextItem = currentIndex < allSectionsList.length - 1 ? allSectionsList[currentIndex + 1] : null;

  const handleCopyTable = (tableId: string, headers: string[], rows: string[][]) => {
    const tsv = [headers.join('\t'), ...rows.map((r) => r.join('\t'))].join('\n');
    navigator.clipboard.writeText(tsv);
    setCopiedTableId(tableId);
    setTimeout(() => setCopiedTableId(null), 2000);
  };

  const renderCallout = (callout: { type: string; title?: string; text: string }, idx: number) => {
    const isWarning = callout.type === 'warning';
    const isImportant = callout.type === 'important';

    return (
      <div
        key={idx}
        className={`my-6 rounded-2xl border p-5 transition-all shadow-lg backdrop-blur-xl ${
          isWarning
            ? 'border-cyber-amber/40 bg-cyber-amber/10 text-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.1)]'
            : isImportant
            ? 'border-cyber-cyan/40 bg-cyber-cyan/10 text-cyan-200 shadow-[0_0_20px_rgba(0,240,255,0.1)]'
            : 'border-cyber-violet/40 bg-cyber-violet/10 text-violet-200 shadow-[0_0_20px_rgba(139,92,246,0.1)]'
        }`}
      >
        <div className="flex items-start space-x-3.5">
          <div className="mt-0.5 flex-shrink-0">
            {isWarning ? (
              <ShieldAlert className="h-5 w-5 text-cyber-amber animate-pulse" />
            ) : isImportant ? (
              <AlertTriangle className="h-5 w-5 text-cyber-cyan animate-pulse" />
            ) : (
              <Info className="h-5 w-5 text-cyber-violet" />
            )}
          </div>
          <div className="space-y-1.5">
            <h5 className="text-xs font-bold uppercase tracking-widest font-mono text-white flex items-center space-x-2">
              <span>{callout.title || (isWarning ? 'CRITICAL WARNING' : isImportant ? 'IMPORTANT REQUIREMENT' : 'TECHNICAL NOTE')}</span>
            </h5>
            <p className="text-xs leading-relaxed text-slate-200">{callout.text}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderTable = (table: { id: string; caption?: string; headers: string[]; rows: string[][]; footnotes?: string[] }) => {
    const isCopied = copiedTableId === table.id;

    return (
      <div key={table.id} className="my-7 rounded-2xl border border-white/10 bg-dark-panel/90 backdrop-blur-xl overflow-hidden shadow-panel">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-dark-surface/90">
          <div className="flex items-center space-x-2.5">
            <div className="p-1 rounded-lg bg-cyber-cyan/10 text-cyber-cyan">
              <FileText className="h-3.5 w-3.5" />
            </div>
            <span className="text-xs font-bold text-white font-display tracking-tight">{table.caption}</span>
          </div>
          <button
            onClick={() => handleCopyTable(table.id, table.headers, table.rows)}
            className="flex items-center space-x-1.5 rounded-lg bg-dark-elevated border border-white/10 px-2.5 py-1 text-[11px] font-mono text-slate-300 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition"
            title="Copy Table Data (TSV)"
          >
            {isCopied ? <Check className="h-3 w-3 text-cyber-emerald" /> : <Copy className="h-3 w-3" />}
            <span>{isCopied ? 'COPIED' : 'COPY TSV'}</span>
          </button>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-white/10 bg-dark-void/70 font-mono">
                {table.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 font-bold text-slate-300 uppercase tracking-wider text-[11px]">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {table.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-cyber-cyan/[0.04] transition-colors">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="px-4 py-3 text-slate-300 font-mono text-[11px] leading-relaxed">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderFigure = (fig: { id: string; figureNumber?: string; caption: string; src: string; alt: string; pageRef?: number; details?: string }) => {
    return (
      <div 
        key={fig.id} 
        className="my-7 rounded-2xl border border-white/10 bg-gradient-to-b from-dark-panel to-dark-surface backdrop-blur-xl overflow-hidden p-3.5 group transition-all duration-300 hover:border-cyber-cyan/40 hover:shadow-panel-hover"
      >
        <div 
          onClick={() => setLightboxFigure(fig)}
          className="relative bg-dark-void/90 rounded-xl overflow-hidden cursor-zoom-in flex items-center justify-center min-h-[220px] p-2 border border-white/[0.06]"
        >
          <img 
            src={fig.src} 
            alt={fig.alt} 
            className="max-h-[380px] w-auto object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute top-3 right-3 bg-dark-base/90 backdrop-blur-md p-2 rounded-xl text-cyber-cyan opacity-0 group-hover:opacity-100 transition-all border border-cyber-cyan/30 shadow-glow-cyan">
            <Maximize2 className="h-4 w-4" />
          </div>
        </div>

        <div className="mt-3.5 px-2 flex items-start justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs font-bold text-cyber-cyan bg-cyber-cyan/10 px-2 py-0.5 rounded border border-cyber-cyan/20">
                {fig.figureNumber}
              </span>
              <span className="text-xs text-white font-semibold font-display">
                {fig.caption}
              </span>
            </div>
            {fig.details && (
              <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">{fig.details}</p>
            )}
          </div>
          {fig.pageRef && (
            <span className="text-[10px] font-mono text-slate-400 bg-dark-void px-2.5 py-1 rounded-lg border border-white/10 flex-shrink-0 ml-2">
              PDF p.{fig.pageRef}
            </span>
          )}
        </div>
      </div>
    );
  };

  const renderSteps = (steps: { stepNumber: number; title: string; instruction: string; figureSrc?: string; figureCaption?: string; notes?: string[] }[]) => {
    return (
      <div className="my-8 space-y-6">
        <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
          <h4 className="text-xs font-bold uppercase tracking-wider text-cyber-cyan flex items-center space-x-2 font-mono">
            <CheckCircle2 className="h-4 w-4 text-cyber-emerald" />
            <span>Interactive Procedure Checklist</span>
          </h4>
          <span className="text-[11px] text-slate-400 font-mono">
            {steps.length} Sequential Verification Steps
          </span>
        </div>

        <div className="space-y-4">
          {steps.map((step) => {
            const stepKey = `${currentSection.id}-step-${step.stepNumber}`;
            const isCompleted = !!checklistState[stepKey];

            return (
              <div
                key={step.stepNumber}
                className={`rounded-2xl border transition-all duration-300 p-5 ${
                  isCompleted
                    ? 'border-cyber-emerald/40 bg-cyber-emerald/10 shadow-[0_0_20px_rgba(16,185,129,0.1)]'
                    : 'border-white/10 bg-dark-panel/80 hover:border-white/20'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <button
                      onClick={() => toggleChecklistStep(stepKey)}
                      className={`mt-0.5 flex h-7 w-7 items-center justify-center rounded-xl border transition-all flex-shrink-0 ${
                        isCompleted
                          ? 'border-cyber-emerald bg-cyber-emerald text-dark-void font-bold shadow-[0_0_12px_#10B981]'
                          : 'border-white/20 bg-dark-elevated text-slate-300 hover:border-cyber-cyan hover:text-cyber-cyan'
                      }`}
                      title={isCompleted ? 'Mark step as incomplete' : 'Mark step as completed'}
                    >
                      {isCompleted ? <Check className="h-4 w-4" /> : <span className="text-xs font-mono font-bold">{step.stepNumber}</span>}
                    </button>

                    <div className="space-y-1.5">
                      <h5 className={`text-sm font-bold font-display ${isCompleted ? 'text-cyber-emerald line-through opacity-80' : 'text-white'}`}>
                        Step {step.stepNumber}: {step.title}
                      </h5>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {step.instruction}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step Figure if present */}
                {step.figureSrc && (
                  <div className="mt-4 pt-3.5 border-t border-white/[0.06]">
                    <div 
                      onClick={() => setLightboxFigure({
                        src: step.figureSrc!,
                        caption: step.figureCaption || `Step ${step.stepNumber}: ${step.title}`,
                        figureNumber: `Step ${step.stepNumber}`
                      })}
                      className="cursor-zoom-in group relative rounded-2xl overflow-hidden bg-dark-void p-2 max-w-lg border border-white/10"
                    >
                      <img 
                        src={step.figureSrc} 
                        alt={step.title} 
                        className="max-h-48 w-auto object-contain rounded-xl group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="text-[10px] text-slate-400 mt-2 font-mono text-center">
                        {step.figureCaption}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 min-w-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-slate-200">
      
      {/* Sticky Top Breadcrumbs & Page Reference */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-8 text-xs text-slate-400">
        <div className="flex items-center space-x-2.5 truncate font-medium">
          <span className="text-cyber-cyan font-bold truncate font-display">
            Chapter {currentChapter.chapterNumber}
          </span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-200 font-semibold truncate font-display">
            {currentSection.sectionNumber} {currentSection.title}
          </span>
        </div>

        <div className="flex items-center space-x-2.5 flex-shrink-0">
          <span className="font-mono text-[11px] text-cyber-cyan bg-cyber-cyan/10 px-2.5 py-1 rounded-lg border border-cyber-cyan/30 shadow-sm">
            PDF Page {currentSection.pageNumber}
          </span>
          <button
            onClick={() => toggleBookmark(currentSection.id)}
            className={`p-1.5 rounded-xl border transition-all duration-200 ${
              isBookmarked(currentSection.id)
                ? 'border-cyber-cyan bg-cyber-cyan/20 text-cyber-cyan shadow-glow-cyan'
                : 'border-white/10 bg-dark-surface text-slate-400 hover:text-white hover:border-white/20'
            }`}
            title="Bookmark Section"
          >
            <Bookmark className={`h-4 w-4 ${isBookmarked(currentSection.id) ? 'fill-cyber-cyan text-cyber-cyan' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Section Header */}
      <div className="mb-8 space-y-2">
        <div className="inline-flex items-center space-x-2 text-cyber-cyan text-xs font-mono font-bold uppercase tracking-widest bg-cyber-cyan/10 px-2.5 py-0.5 rounded-md border border-cyber-cyan/20">
          <span>SECTION {currentSection.sectionNumber}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
          {currentSection.title}
        </h1>
      </div>

      {/* Section Paragraphs */}
      <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
        {currentSection.content.map((p, idx) => (
          <p key={idx} className="leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      {/* Callouts */}
      {currentSection.callouts && currentSection.callouts.map(renderCallout)}

      {/* Tables */}
      {currentSection.tables && currentSection.tables.map(renderTable)}

      {/* Figures */}
      {currentSection.figures && currentSection.figures.map(renderFigure)}

      {/* Steps */}
      {currentSection.steps && renderSteps(currentSection.steps)}

      {/* Subsections if any */}
      {currentSection.subsections && (
        <div className="mt-14 space-y-14 border-t border-white/10 pt-10">
          {currentSection.subsections.map((sub) => (
            <div key={sub.id} id={sub.id} className="scroll-mt-24 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                  <span className="font-mono text-cyber-cyan mr-2.5 font-bold">{sub.sectionNumber}</span>
                  {sub.title}
                </h2>
                <span className="text-[10px] font-mono text-slate-400 bg-dark-panel px-2.5 py-0.5 rounded-md border border-white/10">
                  p.{sub.pageNumber}
                </span>
              </div>

              <div className="space-y-3.5 text-slate-300 text-sm leading-relaxed">
                {sub.content.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {sub.callouts && sub.callouts.map(renderCallout)}
              {sub.tables && sub.tables.map(renderTable)}
              {sub.figures && sub.figures.map(renderFigure)}
              {sub.steps && renderSteps(sub.steps)}
            </div>
          ))}
        </div>
      )}

      {/* Bottom Previous & Next Navigation */}
      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        {prevItem ? (
          <button
            onClick={() => navigateToSection(prevItem.chapter.id, prevItem.section.id)}
            className="w-full sm:w-auto flex items-center space-x-3.5 rounded-2xl border border-white/10 bg-dark-panel/90 p-4 text-left hover:border-cyber-cyan/50 hover:bg-dark-surface transition-all group shadow-md"
          >
            <ChevronLeft className="h-5 w-5 text-cyber-cyan group-hover:-translate-x-1 transition-transform" />
            <div>
              <div className="text-[10px] uppercase font-bold font-mono text-slate-500">PREVIOUS</div>
              <div className="text-xs font-semibold text-slate-200 truncate max-w-[200px] font-display">
                {prevItem.section.sectionNumber} {prevItem.section.title}
              </div>
            </div>
          </button>
        ) : <div />}

        {nextItem && (
          <button
            onClick={() => navigateToSection(nextItem.chapter.id, nextItem.section.id)}
            className="w-full sm:w-auto flex items-center justify-end space-x-3.5 rounded-2xl border border-white/10 bg-dark-panel/90 p-4 text-right hover:border-cyber-cyan/50 hover:bg-dark-surface transition-all group shadow-md"
          >
            <div>
              <div className="text-[10px] uppercase font-bold font-mono text-slate-500">NEXT</div>
              <div className="text-xs font-semibold text-slate-200 truncate max-w-[200px] font-display">
                {nextItem.section.sectionNumber} {nextItem.section.title}
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-cyber-cyan group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>

    </div>
  );
};
