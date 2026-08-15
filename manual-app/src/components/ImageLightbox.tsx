import React, { useEffect } from 'react';
import { X, ZoomIn, Download, Maximize2, FileText, Sparkles } from 'lucide-react';
import { useManual } from '../context/ManualContext';

export const ImageLightbox: React.FC = () => {
  const { lightboxFigure, setLightboxFigure } = useManual();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxFigure(null);
      }
    };
    if (lightboxFigure) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxFigure, setLightboxFigure]);

  if (!lightboxFigure) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200">
      
      {/* Dark blur backdrop */}
      <div 
        onClick={() => setLightboxFigure(null)} 
        className="fixed inset-0 bg-dark-void/90 backdrop-blur-2xl transition-opacity" 
      />

      {/* Lightbox Container */}
      <div className="relative max-w-5xl w-full rounded-3xl border border-white/10 bg-dark-panel p-6 shadow-2xl z-10 space-y-4 animate-in zoom-in-95 duration-200">
        
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3">
            {lightboxFigure.figureNumber && (
              <span className="font-mono text-xs font-bold text-cyber-cyan bg-cyber-cyan/10 px-3 py-1 rounded-xl border border-cyber-cyan/30 shadow-sm">
                {lightboxFigure.figureNumber}
              </span>
            )}
            <h3 className="text-sm font-bold text-white font-display">
              {lightboxFigure.caption}
            </h3>
          </div>

          <button
            onClick={() => setLightboxFigure(null)}
            className="p-2 rounded-2xl bg-dark-surface border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* High Resolution Image Frame */}
        <div className="relative rounded-2xl bg-dark-void/95 p-4 flex items-center justify-center min-h-[350px] max-h-[70vh] overflow-hidden border border-white/[0.06]">
          <img
            src={lightboxFigure.src}
            alt={lightboxFigure.caption}
            className="max-h-[65vh] max-w-full object-contain rounded-xl shadow-2xl"
          />
        </div>

        {/* Details and Page Reference Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 text-xs text-slate-400 font-mono">
          <p className="leading-relaxed font-sans text-slate-300">
            {lightboxFigure.details || lightboxFigure.caption}
          </p>
          {lightboxFigure.pageRef && (
            <span className="bg-dark-void px-3 py-1 rounded-xl border border-white/10 flex-shrink-0 text-cyber-cyan font-bold">
              PDF Page {lightboxFigure.pageRef}
            </span>
          )}
        </div>

      </div>

    </div>
  );
};
