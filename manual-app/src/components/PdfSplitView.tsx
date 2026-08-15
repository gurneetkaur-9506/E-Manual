import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Download, 
  FileText, 
  X,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { useManual } from '../context/ManualContext';
import { manualMetadata } from '../data/manualMetadata';

export const PdfSplitView: React.FC = () => {
  const { currentPageNumber, navigateToPage, setPdfSplitView } = useManual();
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [selectedPage, setSelectedPage] = useState<number>(currentPageNumber || 4);

  // Sync selected page when currentPageNumber changes
  React.useEffect(() => {
    if (currentPageNumber) {
      setSelectedPage(currentPageNumber);
    }
  }, [currentPageNumber]);

  const handlePrevPage = () => {
    if (selectedPage > 1) {
      const p = selectedPage - 1;
      setSelectedPage(p);
      navigateToPage(p);
    }
  };

  const handleNextPage = () => {
    if (selectedPage < manualMetadata.totalPages) {
      const p = selectedPage + 1;
      setSelectedPage(p);
      navigateToPage(p);
    }
  };

  return (
    <div className="w-full lg:w-[480px] xl:w-[560px] flex-shrink-0 border-l border-white/10 bg-dark-base flex flex-col h-[calc(100vh-4rem)] sticky top-16 shadow-2xl z-30 backdrop-blur-2xl">
      
      {/* Split View Header */}
      <div className="p-3.5 border-b border-white/10 bg-dark-surface/90 flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="p-1.5 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan shadow-glow-cyan">
            <FileText className="h-4 w-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-white block font-display tracking-tight">
              Original PDF Synchronizer
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              Source: {manualMetadata.documentRef}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-1">
          {/* Zoom controls */}
          <button
            onClick={() => setZoomLevel((prev) => Math.max(50, prev - 15))}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-dark-elevated transition"
            title="Zoom Out"
          >
            <ZoomOut className="h-3.5 w-3.5" />
          </button>
          <span className="text-[10px] font-mono text-cyber-cyan w-10 text-center font-bold">
            {zoomLevel}%
          </span>
          <button
            onClick={() => setZoomLevel((prev) => Math.min(200, prev + 15))}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-dark-elevated transition"
            title="Zoom In"
          >
            <ZoomIn className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => setZoomLevel(100)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-dark-elevated transition"
            title="Reset Zoom"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
          
          <div className="h-4 w-px bg-white/10 mx-1" />

          {/* Close split view */}
          <button
            onClick={() => setPdfSplitView(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-cyber-rose hover:bg-dark-elevated transition"
            title="Close Split View"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Page Navigation Toolbar */}
      <div className="px-3.5 py-2.5 border-b border-white/10 bg-dark-panel/90 flex items-center justify-between text-xs font-mono">
        <button
          onClick={handlePrevPage}
          disabled={selectedPage <= 1}
          className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-dark-elevated border border-white/10 disabled:opacity-30 hover:bg-dark-highlight text-slate-200 hover:text-cyber-cyan transition font-bold"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
          <span>PREV</span>
        </button>

        <div className="flex items-center space-x-2 text-xs">
          <span className="text-slate-400">PAGE</span>
          <select
            value={selectedPage}
            onChange={(e) => {
              const p = Number(e.target.value);
              setSelectedPage(p);
              navigateToPage(p);
            }}
            className="bg-dark-void border border-white/20 rounded-lg px-2 py-1 text-cyber-cyan font-bold focus:outline-none focus:border-cyber-cyan"
          >
            {Array.from({ length: manualMetadata.totalPages }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <span className="text-slate-500">/ {manualMetadata.totalPages}</span>
        </div>

        <button
          onClick={handleNextPage}
          disabled={selectedPage >= manualMetadata.totalPages}
          className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-dark-elevated border border-white/10 disabled:opacity-30 hover:bg-dark-highlight text-slate-200 hover:text-cyber-cyan transition font-bold"
        >
          <span>NEXT</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Rendered PDF Page Viewport */}
      <div className="flex-1 overflow-auto p-4 bg-dark-void flex items-start justify-center custom-scrollbar">
        <div 
          style={{ width: `${zoomLevel}%` }}
          className="transition-all duration-200 shadow-2xl rounded-2xl overflow-hidden border border-white/10 bg-white"
        >
          <img
            src={`/assets/pdf_pages/page_${selectedPage}.webp`}
            alt={`Original PDF Page ${selectedPage}`}
            className="w-full h-auto object-contain block"
          />
        </div>
      </div>

      {/* Split View Footer */}
      <div className="p-3 border-t border-white/10 bg-dark-surface text-[11px] text-slate-400 flex items-center justify-between font-mono">
        <span className="text-cyber-emerald flex items-center space-x-1.5">
          <span className="h-2 w-2 rounded-full bg-cyber-emerald animate-pulse" />
          <span>SYNCHRONIZED WITH E-MANUAL</span>
        </span>
        <span className="text-cyber-cyan font-bold bg-cyber-cyan/10 px-2 py-0.5 rounded border border-cyber-cyan/20">
          PAGE {selectedPage} / 43
        </span>
      </div>
    </div>
  );
};
