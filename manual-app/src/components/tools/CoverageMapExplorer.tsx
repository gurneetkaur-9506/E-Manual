import React, { useState } from 'react';
import { Satellite, Globe, ZoomIn, Info, CheckCircle2, Radio, Activity } from 'lucide-react';
import { inmarsatSatellitesData, InmarsatSatellite } from '../../data/toolsData';
import { useManual } from '../../context/ManualContext';

export const CoverageMapExplorer: React.FC = () => {
  const [selectedSatIndex, setSelectedSatIndex] = useState<number>(0);
  const { setLightboxFigure } = useManual();

  const selectedSat = inmarsatSatellitesData[selectedSatIndex];

  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-dark-panel to-dark-surface backdrop-blur-2xl p-6 sm:p-8 shadow-panel space-y-8 text-slate-200">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <Globe className="h-5 w-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white">
              L-Band Geostationary Satellite Coverage Explorer
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
            Explore Inmarsat satellite look angles, orbital slots, and global correction footprints (Section 3.1 & 9.3).
          </p>
        </div>
      </div>

      {/* Grid: Left Satellite Selector & Right Map Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Satellite List Cards */}
        <div className="lg:col-span-5 space-y-3.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono block">
            Select Inmarsat Orbital Slot
          </span>

          <div className="space-y-2.5">
            {inmarsatSatellitesData.map((sat, idx) => {
              const isSelected = idx === selectedSatIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedSatIndex(idx)}
                  className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between group ${
                    isSelected
                      ? 'border-cyber-cyan/50 bg-gradient-to-r from-cyber-cyan/20 to-cyber-blue/10 text-white shadow-glow-cyan font-semibold'
                      : 'border-white/10 bg-dark-void/80 text-slate-400 hover:border-white/20 hover:bg-dark-surface hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-display group-hover:text-cyber-cyan transition-colors">{sat.name}</span>
                    <span className="font-mono text-xs font-bold text-cyber-cyan bg-cyber-cyan/10 px-2.5 py-0.5 rounded-full border border-cyber-cyan/30">
                      {sat.orbitalSlot}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 line-clamp-1">
                    {sat.coverageRegion}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Selected Details Box */}
          <div className="p-5 rounded-3xl bg-dark-void/90 border border-white/10 text-xs space-y-2.5 shadow-inner font-mono">
            <span className="font-bold text-cyber-cyan uppercase tracking-wider text-[11px] block flex items-center space-x-2">
              <Radio className="h-3.5 w-3.5" />
              <span>ORBITAL TELEMETRY SPECIFICATIONS</span>
            </span>
            <div className="flex justify-between border-b border-white/[0.06] pb-2">
              <span className="text-slate-400">Frequency Band:</span>
              <span className="text-white font-bold">{selectedSat.beamFreqRange}</span>
            </div>
            <div className="flex justify-between border-b border-white/[0.06] pb-2">
              <span className="text-slate-400">Elevation Limit:</span>
              <span className="text-white font-bold">{selectedSat.elevationLimit}</span>
            </div>
            <div className="pt-1">
              <span className="text-slate-400 block text-[11px]">Primary Maritime Sector:</span>
              <span className="text-slate-200 font-medium font-sans mt-0.5 block">{selectedSat.coverageRegion}</span>
            </div>
          </div>
        </div>

        {/* Right: Global Coverage Map Display */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan font-mono flex items-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyber-cyan shadow-[0_0_8px_#00F0FF]" />
              <span>GLOBAL SATELLITE FOOTPRINT MAP (FIGURE 9.2)</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400 bg-dark-void px-2.5 py-1 rounded-lg border border-white/10">
              PDF Page 43
            </span>
          </div>

          <div
            onClick={() => setLightboxFigure({
              src: "/assets/figures/page_43_fig_1.png",
              caption: "Global Inmarsat L-band Satellite Coverage Footprint Map",
              figureNumber: "Figure 9.2",
              pageRef: 43
            })}
            className="cursor-zoom-in relative rounded-3xl overflow-hidden bg-dark-void p-3.5 border border-white/10 group shadow-panel hover:border-cyber-cyan/40 transition-all duration-300"
          >
            <img
              src="/assets/figures/page_43_fig_1.png"
              alt="Global Inmarsat L-band coverage map"
              className="w-full h-auto object-contain rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 bg-dark-base/90 backdrop-blur-md p-2.5 rounded-2xl text-cyber-cyan opacity-0 group-hover:opacity-100 transition border border-cyber-cyan/30 shadow-glow-cyan">
              <ZoomIn className="h-5 w-5" />
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed bg-dark-void/70 p-4 rounded-2xl border border-white/[0.06]">
            Contour lines illustrate satellite elevation look angles down to 0°, 5°, 10°, and 20°. For dynamic positioning vessels, Veripos recommends configuring dual L-band beams from adjacent satellites to ensure continuous failover in the event of vessel roll or line-of-sight masking.
          </p>
        </div>

      </div>

    </div>
  );
};
