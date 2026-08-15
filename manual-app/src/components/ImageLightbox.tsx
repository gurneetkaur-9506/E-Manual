import React, { useState } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Download, X, Maximize2 } from 'lucide-react';
import { useManual } from '../context/ManualContext';

export const ImageLightbox: React.FC = () => {
  const { lightboxFigure, setLightboxFigure } = useManual();
  const [scale, setScale] = useState(1);

  if (!lightboxFigure) return null;

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.3, 3.5));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.3, 0.6));
  const handleReset = () => setScale(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={() => setLightboxFigure(null)} />

      <div className="relative w-full max-w-5xl rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] z-10">
        
        {/* Lightbox Toolbar Header */}
        <div className="p-3.5 border-b border-neutral-800 bg-black flex items-center justify-between">
          <div className="flex items-center space-x-2 truncate">
            <span className="font-mono text-xs font-bold text-white">
              {lightboxFigure.figureNumber || 'FIGURE'}
            </span>
            <span className="text-xs font-semibold text-neutral-300 truncate max-w-md">
              {lightboxFigure.caption}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleZoomOut}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900"
              title="Zoom Out"
            >
              <ZoomOut className="h-4 w-4" />
            </button>
            <span className="text-xs font-mono text-neutral-200 w-12 text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900"
              title="Zoom In"
            >
              <ZoomIn className="h-4 w-4" />
            </button>
            <button
              onClick={handleReset}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900"
              title="Reset Zoom"
            >
              <RotateCcw className="h-4 w-4" />
            </button>

            <a
              href={lightboxFigure.src}
              download={lightboxFigure.caption.replace(/[^a-zA-Z0-9]/g, '_') + '.png'}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-emerald-400 hover:bg-neutral-900"
              title="Download High-Res Image"
            >
              <Download className="h-4 w-4" />
            </a>

            <div className="h-4 w-px bg-neutral-800 mx-1" />

            <button
              onClick={() => setLightboxFigure(null)}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-rose-400 hover:bg-neutral-900"
              title="Close (Esc)"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Zoomable Image Viewport */}
        <div className="flex-1 overflow-auto p-6 bg-black flex items-center justify-center min-h-[350px]">
          <div
            style={{ transform: `scale(${scale})` }}
            className="transition-transform duration-200 origin-center max-w-full"
          >
            <img
              src={lightboxFigure.src}
              alt={lightboxFigure.alt || lightboxFigure.caption}
              className="max-h-[65vh] w-auto object-contain rounded-lg shadow-2xl border border-neutral-800 bg-neutral-950"
            />
          </div>
        </div>

        {/* Lightbox Caption Footer */}
        <div className="p-4 border-t border-neutral-800 bg-black text-xs text-neutral-300 flex items-center justify-between">
          <div>
            <span className="font-semibold text-white mr-1.5">{lightboxFigure.caption}</span>
            {lightboxFigure.details && (
              <span className="text-neutral-400">{lightboxFigure.details}</span>
            )}
          </div>

          {lightboxFigure.pageRef && (
            <span className="text-[11px] font-mono text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800 flex-shrink-0 ml-2">
              Source: PDF Page {lightboxFigure.pageRef}
            </span>
          )}
        </div>

      </div>
    </div>
  );
};
