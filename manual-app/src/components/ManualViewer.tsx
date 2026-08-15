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
  Maximize2
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
        className={`my-5 rounded-xl border p-4.5 transition-all ${
          isWarning
            ? 'border-amber-500/40 bg-amber-500/10 text-amber-200'
            : isImportant
            ? 'border-neutral-700 bg-neutral-900 text-neutral-200'
            : 'border-neutral-800 bg-neutral-950 text-neutral-300'
        }`}
      >
        <div className="flex items-start space-x-3">
          <div className="mt-0.5 flex-shrink-0">
            {isWarning ? (
              <ShieldAlert className="h-5 w-5 text-amber-400" />
            ) : isImportant ? (
              <AlertTriangle className="h-5 w-5 text-white" />
            ) : (
              <Info className="h-5 w-5 text-neutral-400" />
            )}
          </div>
          <div className="space-y-1">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              {callout.title || (isWarning ? 'WARNING' : isImportant ? 'IMPORTANT' : 'NOTE')}
            </h5>
            <p className="text-xs leading-relaxed opacity-90">{callout.text}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderTable = (table: { id: string; caption?: string; headers: string[]; rows: string[][]; footnotes?: string[] }) => {
    const isCopied = copiedTableId === table.id;

    return (
      <div key={table.id} className="my-6 rounded-2xl border border-neutral-800 bg-neutral-950 overflow-hidden shadow-lg">
        <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-neutral-900">
          <div className="flex items-center space-x-2">
            <FileText className="h-4 w-4 text-neutral-300" />
            <span className="text-xs font-bold text-white font-display">{table.caption}</span>
          </div>
          <button
            onClick={() => handleCopyTable(table.id, table.headers, table.rows)}
            className="flex items-center space-x-1 rounded-md bg-neutral-800 px-2 py-1 text-[10px] font-medium text-neutral-300 hover:text-white hover:bg-neutral-700 transition"
            title="Copy Table Data (TSV)"
          >
            {isCopied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
            <span>{isCopied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-neutral-800 bg-black">
                {table.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 font-semibold text-neutral-200">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60">
              {table.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-neutral-900/50 transition-colors">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="px-4 py-2.5 text-neutral-300 font-mono text-[11px] leading-relaxed">
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
        className="my-6 rounded-2xl border border-neutral-800 bg-neutral-950 overflow-hidden p-3 group transition-all hover:border-neutral-600"
      >
        <div 
          onClick={() => setLightboxFigure(fig)}
          className="relative bg-black rounded-xl overflow-hidden cursor-zoom-in flex items-center justify-center min-h-[220px]"
        >
          <img 
            src={fig.src} 
            alt={fig.alt} 
            className="max-h-[380px] w-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute top-3 right-3 bg-neutral-900/90 backdrop-blur-md p-1.5 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity border border-neutral-700">
            <Maximize2 className="h-4 w-4" />
          </div>
        </div>

        <div className="mt-3 px-1 flex items-start justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-white mr-2">
              {fig.figureNumber}
            </span>
            <span className="text-xs text-neutral-300 font-medium">
              {fig.caption}
            </span>
            {fig.details && (
              <p className="text-[11px] text-neutral-500 mt-1">{fig.details}</p>
            )}
          </div>
          {fig.pageRef && (
            <span className="text-[10px] font-mono text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800 flex-shrink-0 ml-2">
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
        <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 flex items-center space-x-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>Interactive Procedure Checklist</span>
          </h4>
          <span className="text-[11px] text-neutral-400 font-mono">
            {steps.length} Sequential Steps
          </span>
        </div>

        <div className="space-y-4">
          {steps.map((step) => {
            const stepKey = `${currentSection.id}-step-${step.stepNumber}`;
            const isCompleted = !!checklistState[stepKey];

            return (
              <div
                key={step.stepNumber}
                className={`rounded-2xl border transition-all p-4.5 ${
                  isCompleted
                    ? 'border-emerald-500/40 bg-emerald-950/20'
                    : 'border-neutral-800 bg-neutral-950 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3.5">
                    <button
                      onClick={() => toggleChecklistStep(stepKey)}
                      className={`mt-0.5 flex h-6 w-6 items-center justify-center rounded-lg border transition-all ${
                        isCompleted
                          ? 'border-emerald-400 bg-emerald-500 text-black font-bold'
                          : 'border-neutral-700 bg-neutral-900 text-neutral-400 hover:border-white hover:text-white'
                      }`}
                      title={isCompleted ? 'Mark step as incomplete' : 'Mark step as completed'}
                    >
                      {isCompleted ? <Check className="h-3.5 w-3.5" /> : <span className="text-xs font-bold">{step.stepNumber}</span>}
                    </button>

                    <div className="space-y-1.5">
                      <h5 className={`text-sm font-bold ${isCompleted ? 'text-emerald-300 line-through opacity-80' : 'text-white'}`}>
                        Step {step.stepNumber}: {step.title}
                      </h5>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {step.instruction}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step Figure if present */}
                {step.figureSrc && (
                  <div className="mt-4 pt-3 border-t border-neutral-800">
                    <div 
                      onClick={() => setLightboxFigure({
                        src: step.figureSrc!,
                        caption: step.figureCaption || `Step ${step.stepNumber}: ${step.title}`,
                        figureNumber: `Step ${step.stepNumber}`
                      })}
                      className="cursor-zoom-in group relative rounded-xl overflow-hidden bg-black p-2 max-w-lg border border-neutral-800"
                    >
                      <img 
                        src={step.figureSrc} 
                        alt={step.title} 
                        className="max-h-48 w-auto object-contain rounded-lg group-hover:scale-105 transition-transform"
                      />
                      <div className="text-[10px] text-neutral-400 mt-1 font-mono text-center">
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
    <div className="flex-1 min-w-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-black text-neutral-200">
      
      {/* Sticky Top Breadcrumbs & Page Reference */}
      <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6 text-xs text-neutral-400">
        <div className="flex items-center space-x-2 truncate">
          <span className="text-white font-semibold truncate">
            Chapter {currentChapter.chapterNumber}
          </span>
          <span>/</span>
          <span className="text-neutral-300 font-medium truncate">
            {currentSection.sectionNumber} {currentSection.title}
          </span>
        </div>

        <div className="flex items-center space-x-2 flex-shrink-0">
          <span className="font-mono text-[11px] text-neutral-200 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-700">
            PDF Page {currentSection.pageNumber}
          </span>
          <button
            onClick={() => toggleBookmark(currentSection.id)}
            className={`p-1.5 rounded-lg border transition ${
              isBookmarked(currentSection.id)
                ? 'border-white bg-white text-black'
                : 'border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white'
            }`}
            title="Bookmark Section"
          >
            <Bookmark className={`h-3.5 w-3.5 ${isBookmarked(currentSection.id) ? 'fill-black text-black' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Section Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 text-neutral-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
          <span>SECTION {currentSection.sectionNumber}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
          {currentSection.title}
        </h2>
      </div>

      {/* Section Paragraphs */}
      <div className="space-y-4 text-neutral-300 leading-relaxed text-sm sm:text-base">
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
        <div className="mt-12 space-y-12 border-t border-neutral-800 pt-8">
          {currentSection.subsections.map((sub) => (
            <div key={sub.id} id={sub.id} className="scroll-mt-24 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  <span className="font-mono text-neutral-400 mr-2">{sub.sectionNumber}</span>
                  {sub.title}
                </h3>
                <span className="text-[10px] font-mono text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                  p.{sub.pageNumber}
                </span>
              </div>

              <div className="space-y-3 text-neutral-300 text-sm leading-relaxed">
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
      <div className="mt-16 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        {prevItem ? (
          <button
            onClick={() => navigateToSection(prevItem.chapter.id, prevItem.section.id)}
            className="w-full sm:w-auto flex items-center space-x-3 rounded-xl border border-neutral-800 bg-neutral-950 p-3.5 text-left hover:border-neutral-600 hover:bg-neutral-900 transition group"
          >
            <ChevronLeft className="h-5 w-5 text-white group-hover:-translate-x-1 transition-transform" />
            <div>
              <div className="text-[10px] uppercase font-bold text-neutral-500">Previous</div>
              <div className="text-xs font-semibold text-neutral-200 truncate max-w-[200px]">
                {prevItem.section.sectionNumber} {prevItem.section.title}
              </div>
            </div>
          </button>
        ) : <div />}

        {nextItem && (
          <button
            onClick={() => navigateToSection(nextItem.chapter.id, nextItem.section.id)}
            className="w-full sm:w-auto flex items-center justify-end space-x-3 rounded-xl border border-neutral-800 bg-neutral-950 p-3.5 text-right hover:border-neutral-600 hover:bg-neutral-900 transition group"
          >
            <div>
              <div className="text-[10px] uppercase font-bold text-neutral-500">Next</div>
              <div className="text-xs font-semibold text-neutral-200 truncate max-w-[200px]">
                {nextItem.section.sectionNumber} {nextItem.section.title}
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>

    </div>
  );
};
