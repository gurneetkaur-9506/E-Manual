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
  RotateCcw
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
    <div className="w-full lg:w-[480px] xl:w-[560px] flex-shrink-0 border-l border-neutral-800 bg-black flex flex-col h-[calc(100vh-4rem)] sticky top-16 shadow-2xl z-30">
      
      {/* Split View Header */}
      <div className="p-3 border-b border-neutral-800 bg-neutral-950 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-1 rounded bg-neutral-800 text-white">
            <FileText className="h-4 w-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-white block">
              Original PDF Synchronizer
            </span>
            <span className="text-[10px] font-mono text-neutral-400">
              Source: {manualMetadata.documentRef}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-1">
          {/* Zoom controls */}
          <button
            onClick={() => setZoomLevel((prev) => Math.max(50, prev - 15))}
            className="p-1 rounded text-neutral-400 hover:text-white hover:bg-neutral-800"
            title="Zoom Out"
          >
            <ZoomOut className="h-3.5 w-3.5" />
          </button>
          <span className="text-[10px] font-mono text-neutral-200 w-10 text-center">
            {zoomLevel}%
          </span>
          <button
            onClick={() => setZoomLevel((prev) => Math.min(200, prev + 15))}
            className="p-1 rounded text-neutral-400 hover:text-white hover:bg-neutral-800"
            title="Zoom In"
          >
            <ZoomIn className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => setZoomLevel(100)}
            className="p-1 rounded text-neutral-400 hover:text-white hover:bg-neutral-800"
            title="Reset Zoom"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
          
          <div className="h-4 w-px bg-neutral-800 mx-1" />

          {/* Close split view */}
          <button
            onClick={() => setPdfSplitView(false)}
            className="p-1 rounded text-neutral-400 hover:text-rose-400 hover:bg-neutral-800"
            title="Close Split View"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Page Navigation Toolbar */}
      <div className="px-3 py-2 border-b border-neutral-800 bg-black flex items-center justify-between text-xs">
        <button
          onClick={handlePrevPage}
          disabled={selectedPage <= 1}
          className="flex items-center space-x-1 px-2 py-1 rounded bg-neutral-900 border border-neutral-800 disabled:opacity-30 hover:bg-neutral-800 text-neutral-300 transition"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
          <span>Prev</span>
        </button>

        <div className="flex items-center space-x-1.5 font-mono text-xs">
          <span>Page</span>
          <select
            value={selectedPage}
            onChange={(e) => {
              const p = Number(e.target.value);
              setSelectedPage(p);
              navigateToPage(p);
            }}
            className="bg-neutral-900 border border-neutral-700 rounded px-1.5 py-0.5 text-white font-bold focus:outline-none focus:border-neutral-500"
          >
            {Array.from({ length: manualMetadata.totalPages }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <span className="text-neutral-500">of {manualMetadata.totalPages}</span>
        </div>

        <button
          onClick={handleNextPage}
          disabled={selectedPage >= manualMetadata.totalPages}
          className="flex items-center space-x-1 px-2 py-1 rounded bg-neutral-900 border border-neutral-800 disabled:opacity-30 hover:bg-neutral-800 text-neutral-300 transition"
        >
          <span>Next</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Rendered PDF Page Viewport */}
      <div className="flex-1 overflow-auto p-4 bg-neutral-950 flex items-start justify-center">
        <div 
          style={{ width: `${zoomLevel}%` }}
          className="transition-all duration-200 shadow-2xl rounded-lg overflow-hidden border border-neutral-800 bg-white"
        >
          <img
            src={`/assets/pdf_pages/page_${selectedPage}.webp`}
            alt={`Original PDF Page ${selectedPage}`}
            className="w-full h-auto object-contain block"
          />
        </div>
      </div>

      {/* Split View Footer */}
      <div className="p-2.5 border-t border-neutral-800 bg-black text-[11px] text-neutral-400 flex items-center justify-between">
        <span className="text-emerald-400 flex items-center space-x-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block" />
          <span>Synchronized with E-Manual</span>
        </span>
        <span className="font-mono text-neutral-500">Page {selectedPage} / 43</span>
      </div>
    </div>
  );
};
