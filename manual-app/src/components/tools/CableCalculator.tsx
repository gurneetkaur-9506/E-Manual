import React, { useState } from 'react';
import { Cable, Calculator, CheckCircle2, AlertTriangle, XCircle, Info, Zap, Sparkles, Activity } from 'lucide-react';
import { cableSpecsData, CableSpec } from '../../data/toolsData';

export const CableCalculator: React.FC = () => {
  const [selectedCableId, setSelectedCableId] = useState<string>('lmr400');
  const [lengthM, setLengthM] = useState<number>(35);
  const [unit, setUnit] = useState<'m' | 'ft'>('m');
  const [freqMhz, setFreqMhz] = useState<number>(1500); // 1500 MHz (GNSS L1 / L-band standard)
  const [numConnectors, setNumConnectors] = useState<number>(2); // 2 connectors standard (0.15 dB each)

  const selectedCable = cableSpecsData.find((c) => c.id === selectedCableId) || cableSpecsData[0];

  // Convert length to meters for calculation
  const lengthInMeters = unit === 'm' ? lengthM : lengthM * 0.3048;
  const lengthInFeet = unit === 'ft' ? lengthM : lengthM * 3.28084;

  // Get base attenuation per 100m at chosen frequency (or interpolate)
  const attPer100m = selectedCable.attenuationPer100m[freqMhz] || selectedCable.attenuationPer100m[1500] || 16.8;
  
  // Cable loss calculation
  const rawCableLossDb = (lengthInMeters / 100) * attPer100m;
  const connectorLossDb = numConnectors * 0.15;
  const totalLossDb = rawCableLossDb + connectorLossDb;

  // Veripos threshold: 10.0 dB maximum allowable attenuation
  const maxAllowableDb = 10.0;
  const isPass = totalLossDb <= maxAllowableDb;
  const isWarning = totalLossDb > 8.5 && totalLossDb <= maxAllowableDb;
  const lossPercentage = Math.min(100, (totalLossDb / maxAllowableDb) * 100);

  // Frequency options
  const frequencyOptions = [
    { label: "GPS L1 / Galileo E1 / BeiDou B1 (1575.42 MHz)", value: 1500 },
    { label: "GPS L2 / GLONASS G2 (1227.60 MHz / 1246 MHz)", value: 900 },
    { label: "Veripos L-Band Corrections (1525 - 1559 MHz)", value: 1500 },
    { label: "GPS L5 / Galileo E5 (1176.45 MHz)", value: 900 },
    { label: "MF Coastal Beacon (300 kHz)", value: 30 },
    { label: "UHF Marine Data Link (450 MHz)", value: 450 }
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-dark-panel to-dark-surface backdrop-blur-2xl p-6 sm:p-8 shadow-panel space-y-8 text-slate-200">
      
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan shadow-glow-cyan">
              <Calculator className="h-5 w-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white">
              RF Coaxial Cable Attenuation & Max Length Simulator
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
            Calculate total signal loss and verify compliance with the official Veripos 10.0 dB attenuation threshold (Section 8.1).
          </p>
        </div>

        <div className="flex items-center space-x-1.5 bg-dark-void p-1.5 rounded-2xl border border-white/10 self-start sm:self-auto font-mono">
          <button
            onClick={() => setUnit('m')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
              unit === 'm' ? 'bg-gradient-to-r from-cyber-cyan to-cyber-blue text-dark-void shadow-glow-cyan' : 'text-slate-400 hover:text-white'
            }`}
          >
            METERS (m)
          </button>
          <button
            onClick={() => setUnit('ft')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
              unit === 'ft' ? 'bg-gradient-to-r from-cyber-cyan to-cyber-blue text-dark-void shadow-glow-cyan' : 'text-slate-400 hover:text-white'
            }`}
          >
            FEET (ft)
          </button>
        </div>
      </div>

      {/* Input Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* 1. Select Cable Type */}
        <div className="space-y-2.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono flex items-center justify-between">
            <span>Coaxial Cable Model</span>
            <span className="text-cyber-cyan text-[11px]">{selectedCable.diameterMm} mm Ø</span>
          </label>
          <select
            value={selectedCableId}
            onChange={(e) => setSelectedCableId(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-dark-void/90 p-3.5 text-xs text-cyber-cyan font-bold font-display focus:border-cyber-cyan focus:outline-none shadow-inner"
          >
            {cableSpecsData.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} (Max {c.maxRecommendedLengthM}m / {c.maxRecommendedLengthFt}ft)
              </option>
            ))}
          </select>
          <p className="text-[11px] text-slate-400 font-medium">
            {selectedCable.type} • {selectedCable.manufacturer} ({selectedCable.impedance}Ω)
          </p>
        </div>

        {/* 2. Cable Length Input */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
              Total Route Length
            </label>
            <span className="font-mono text-xs font-bold text-cyber-cyan bg-cyber-cyan/10 px-2 py-0.5 rounded border border-cyber-cyan/20">
              {lengthM} {unit} ({unit === 'm' ? `${lengthInFeet.toFixed(0)} ft` : `${lengthInMeters.toFixed(1)} m`})
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={unit === 'm' ? 120 : 400}
            step={1}
            value={lengthM}
            onChange={(e) => setLengthM(Number(e.target.value))}
            className="w-full accent-cyber-cyan h-2 bg-dark-void rounded-lg cursor-pointer"
          />
          <div className="flex items-center space-x-2">
            <input
              type="number"
              min={1}
              max={500}
              value={lengthM}
              onChange={(e) => setLengthM(Math.max(1, Number(e.target.value)))}
              className="w-28 rounded-xl border border-white/10 bg-dark-void px-3 py-1.5 text-xs text-white font-mono font-bold focus:border-cyber-cyan focus:outline-none"
            />
            <span className="text-xs text-slate-400 font-mono">{unit} total run</span>
          </div>
        </div>

        {/* 3. Frequency & Connectors */}
        <div className="space-y-2.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
            Operating Frequency Band
          </label>
          <select
            value={freqMhz}
            onChange={(e) => setFreqMhz(Number(e.target.value))}
            className="w-full rounded-2xl border border-white/10 bg-dark-void/90 p-3.5 text-xs text-slate-200 focus:border-cyber-cyan focus:outline-none"
          >
            {frequencyOptions.map((f, i) => (
              <option key={i} value={f.value}>
                {f.label}
              </option>
            ))}
          </select>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-slate-400 font-mono">Connector Pairs:</span>
            <select
              value={numConnectors}
              onChange={(e) => setNumConnectors(Number(e.target.value))}
              className="rounded-xl border border-white/10 bg-dark-void px-2.5 py-1 text-xs text-slate-300 font-mono"
            >
              <option value={2}>2 (Antenna + Receiver)</option>
              <option value={4}>4 (With Arrestor & Jumper)</option>
              <option value={6}>6 (Complex Multi-Patch)</option>
            </select>
          </div>
        </div>

      </div>

      {/* Result Display Box */}
      <div className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 shadow-2xl ${
        isPass 
          ? isWarning
            ? 'border-cyber-amber/50 bg-cyber-amber/10 shadow-[0_0_30px_rgba(245,158,11,0.15)]'
            : 'border-cyber-emerald/50 bg-cyber-emerald/10 shadow-[0_0_30px_rgba(16,185,129,0.15)]'
          : 'border-cyber-rose/50 bg-cyber-rose/10 shadow-[0_0_30px_rgba(244,63,94,0.2)]'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2.5">
              {isPass ? (
                isWarning ? (
                  <AlertTriangle className="h-6 w-6 text-cyber-amber animate-pulse" />
                ) : (
                  <CheckCircle2 className="h-6 w-6 text-cyber-emerald" />
                )
              ) : (
                <XCircle className="h-6 w-6 text-cyber-rose animate-pulse" />
              )}
              <h3 className={`text-lg font-bold font-display ${
                isPass ? (isWarning ? 'text-cyber-amber' : 'text-cyber-emerald') : 'text-cyber-rose'
              }`}>
                {isPass 
                  ? isWarning 
                    ? 'ACCEPTABLE (NEAR THRESHOLD LIMIT)' 
                    : 'VERIFIED: COMPLIES WITH VERIPOS SPECIFICATION'
                  : 'EXCEEDS 10.0 dB LOSS LIMIT – DO NOT USE'}
              </h3>
            </div>

            <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
              {isPass
                ? isWarning
                  ? `Total attenuation is ${totalLossDb.toFixed(2)} dB, which is approaching the 10.0 dB limit. Consider stepping up to Heliax LDF4-50A if extra jumper tails or surge arrestors are added.`
                  : `Total attenuation is ${totalLossDb.toFixed(2)} dB, well within the 10.0 dB budget. Provides optimal carrier-to-noise ratio (C/N0) and fast RTK/PPP lock times.`
                : `Total attenuation of ${totalLossDb.toFixed(2)} dB exceeds the maximum 10.0 dB limit for Veripos receivers by ${(totalLossDb - 10).toFixed(2)} dB. Use CommScope 1/2" Heliax LDF4-50A or reduce route length.`
              }
            </p>
          </div>

          {/* Big Number Summary */}
          <div className="flex items-center space-x-6 bg-dark-void/90 p-5 rounded-2xl border border-white/10 self-start md:self-auto shadow-inner">
            <div>
              <span className="text-[10px] uppercase font-bold font-mono text-slate-400 block">Total RF Loss</span>
              <span className={`text-3xl font-mono font-black ${
                isPass ? (isWarning ? 'text-cyber-amber' : 'text-cyber-emerald') : 'text-cyber-rose'
              }`}>
                {totalLossDb.toFixed(2)} <span className="text-sm font-normal text-slate-400">dB</span>
              </span>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div>
              <span className="text-[10px] uppercase font-bold font-mono text-slate-400 block">Max Limit</span>
              <span className="text-3xl font-mono font-black text-cyber-cyan">
                10.0 <span className="text-sm font-normal text-slate-400">dB</span>
              </span>
            </div>
          </div>

        </div>

        {/* Progress bar */}
        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-[11px] font-mono">
            <span className="text-slate-400">Loss Budget Consumption:</span>
            <span className={isPass ? 'text-cyber-cyan font-bold' : 'text-cyber-rose font-bold'}>
              {lossPercentage.toFixed(1)}% of 10.0 dB Threshold
            </span>
          </div>
          <div className="h-3 w-full rounded-full bg-dark-void overflow-hidden border border-white/10 p-0.5">
            <div
              style={{ width: `${Math.min(100, lossPercentage)}%` }}
              className={`h-full rounded-full transition-all duration-500 ${
                isPass 
                  ? isWarning 
                    ? 'bg-gradient-to-r from-cyber-cyan via-cyber-sky to-cyber-amber' 
                    : 'bg-gradient-to-r from-cyber-cyan via-cyber-sky to-cyber-emerald shadow-[0_0_12px_#10B981]'
                  : 'bg-gradient-to-r from-cyber-amber to-cyber-rose shadow-[0_0_12px_#F43F5E]'
              }`}
            />
          </div>
        </div>

      </div>

      {/* Specifications Breakdown Table */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
        <div className="bg-dark-void/80 p-4 rounded-2xl border border-white/10">
          <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Cable Attenuation</span>
          <span className="text-white font-bold text-sm mt-0.5 block">{rawCableLossDb.toFixed(2)} dB</span>
        </div>
        <div className="bg-dark-void/80 p-4 rounded-2xl border border-white/10">
          <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Connectors Loss</span>
          <span className="text-white font-bold text-sm mt-0.5 block">{connectorLossDb.toFixed(2)} dB</span>
        </div>
        <div className="bg-dark-void/80 p-4 rounded-2xl border border-white/10">
          <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Min Bend Radius</span>
          <span className="text-white font-bold text-sm mt-0.5 block">{selectedCable.minBendRadiusDynamicMm} mm</span>
        </div>
        <div className="bg-dark-void/80 p-4 rounded-2xl border border-white/10">
          <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Total Route Weight</span>
          <span className="text-white font-bold text-sm mt-0.5 block">{(selectedCable.weightKgM * lengthInMeters).toFixed(1)} kg</span>
        </div>
      </div>

    </div>
  );
};
