import React, { useState } from 'react';
import { Satellite, Globe, ZoomIn, Info, CheckCircle2 } from 'lucide-react';
import { inmarsatSatellitesData, InmarsatSatellite } from '../../data/toolsData';
import { useManual } from '../../context/ManualContext';

export const CoverageMapExplorer: React.FC = () => {
  const [selectedSatIndex, setSelectedSatIndex] = useState<number>(0);
  const { setLightboxFigure } = useManual();

  const selectedSat = inmarsatSatellitesData[selectedSatIndex];

  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6 sm:p-8 shadow-2xl space-y-8 text-neutral-200">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
        <div>
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-neutral-800 text-white">
              <Globe className="h-5 w-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              L-Band Geostationary Satellite Coverage Explorer
            </h3>
          </div>
          <p className="text-xs text-neutral-400 mt-1">
            Explore Inmarsat satellite look angles, orbital slots, and global correction footprints (Section 3.1 & 9.3).
          </p>
        </div>
      </div>

      {/* Grid: Left Satellite Selector & Right Map Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Satellite List Cards */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-300 block">
            Select Inmarsat Orbital Slot
          </span>

          <div className="space-y-2">
            {inmarsatSatellitesData.map((sat, idx) => {
              const isSelected = idx === selectedSatIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedSatIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'border-white bg-neutral-900 text-white shadow-sm font-semibold'
                      : 'border-neutral-800 bg-black text-neutral-400 hover:bg-neutral-900 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{sat.name}</span>
                    <span className="font-mono text-xs font-bold text-neutral-200 bg-neutral-800 px-2 py-0.5 rounded border border-neutral-700">
                      {sat.orbitalSlot}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-1.5 line-clamp-1">
                    {sat.coverageRegion}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Selected Details Box */}
          <div className="p-4 rounded-2xl bg-black border border-neutral-800 text-xs space-y-2">
            <span className="font-bold text-neutral-300 uppercase tracking-wider text-[10px] block">
              Slot Specifications
            </span>
            <div className="flex justify-between border-b border-neutral-800 pb-1.5">
              <span className="text-neutral-400">Frequency Band:</span>
              <span className="font-mono text-white font-semibold">{selectedSat.beamFreqRange}</span>
            </div>
            <div className="flex justify-between border-b border-neutral-800 pb-1.5">
              <span className="text-neutral-400">Elevation Limit:</span>
              <span className="font-mono text-white font-semibold">{selectedSat.elevationLimit}</span>
            </div>
            <div className="pt-1">
              <span className="text-neutral-400 block text-[11px]">Primary Maritime Sector:</span>
              <span className="text-neutral-200 font-medium">{selectedSat.coverageRegion}</span>
            </div>
          </div>
        </div>

        {/* Right: Global Coverage Map Display */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Global Satellite Footprint Map (Figure 9.2)
            </span>
            <span className="text-[10px] font-mono text-neutral-400 bg-black px-2 py-0.5 rounded border border-neutral-800">
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
            className="cursor-zoom-in relative rounded-2xl overflow-hidden bg-black p-3 border border-neutral-800 group shadow-2xl"
          >
            <img
              src="/assets/figures/page_43_fig_1.png"
              alt="Global Inmarsat L-band coverage map"
              className="w-full h-auto object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-300"
            />
            <div className="absolute top-4 right-4 bg-neutral-900/90 backdrop-blur-md p-2 rounded-xl text-white opacity-0 group-hover:opacity-100 transition border border-neutral-700">
              <ZoomIn className="h-4 w-4" />
            </div>
          </div>

          <p className="text-xs text-neutral-400 leading-relaxed bg-black p-3.5 rounded-xl border border-neutral-800">
            Contour lines illustrate satellite elevation look angles down to 0°, 5°, 10°, and 20°. For dynamic positioning vessels, Veripos recommends configuring dual L-band beams from adjacent satellites to ensure continuous failover in the event of vessel roll or line-of-sight masking.
          </p>
        </div>

      </div>

    </div>
  );
};
