import React, { useState } from 'react';
import { Cable, Calculator, CheckCircle2, AlertTriangle, XCircle, Info, Zap } from 'lucide-react';
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
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6 sm:p-8 shadow-2xl space-y-8 text-neutral-200">
      
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
        <div>
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-neutral-800 text-white">
              <Calculator className="h-5 w-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              RF Coaxial Cable Attenuation & Max Length Calculator
            </h3>
          </div>
          <p className="text-xs text-neutral-400 mt-1">
            Calculate total signal loss and verify compliance with the official Veripos 10 dB loss threshold (Section 8.1).
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-black p-1 rounded-xl border border-neutral-800 self-start sm:self-auto">
          <button
            onClick={() => setUnit('m')}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition ${
              unit === 'm' ? 'bg-white text-black' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Meters (m)
          </button>
          <button
            onClick={() => setUnit('ft')}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition ${
              unit === 'ft' ? 'bg-white text-black' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Feet (ft)
          </button>
        </div>
      </div>

      {/* Input Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* 1. Select Cable Type */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
            Coaxial Cable Model
          </label>
          <select
            value={selectedCableId}
            onChange={(e) => setSelectedCableId(e.target.value)}
            className="w-full rounded-xl border border-neutral-700 bg-black p-3 text-xs text-white font-semibold focus:border-neutral-500 focus:outline-none"
          >
            {cableSpecsData.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} (Max {c.maxRecommendedLengthM}m / {c.maxRecommendedLengthFt}ft)
              </option>
            ))}
          </select>
          <p className="text-[11px] text-neutral-400">
            {selectedCable.type} • {selectedCable.diameterMm} mm outer dia.
          </p>
        </div>

        {/* 2. Cable Length Input */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Total Route Length
            </label>
            <span className="font-mono text-xs font-bold text-white">
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
            className="w-full accent-white h-2 bg-neutral-900 rounded-lg cursor-pointer"
          />
          <div className="flex items-center space-x-2">
            <input
              type="number"
              min={1}
              max={500}
              value={lengthM}
              onChange={(e) => setLengthM(Math.max(1, Number(e.target.value)))}
              className="w-24 rounded-lg border border-neutral-700 bg-black px-2.5 py-1 text-xs text-white font-mono"
            />
            <span className="text-xs text-neutral-400">{unit} total run</span>
          </div>
        </div>

        {/* 3. Frequency & Connectors */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
            Operating Frequency Band
          </label>
          <select
            value={freqMhz}
            onChange={(e) => setFreqMhz(Number(e.target.value))}
            className="w-full rounded-xl border border-neutral-700 bg-black p-3 text-xs text-white focus:border-neutral-500 focus:outline-none"
          >
            {frequencyOptions.map((f, i) => (
              <option key={i} value={f.value}>
                {f.label}
              </option>
            ))}
          </select>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-neutral-400">Connector Pairs:</span>
            <select
              value={numConnectors}
              onChange={(e) => setNumConnectors(Number(e.target.value))}
              className="rounded-lg border border-neutral-700 bg-black px-2 py-0.5 text-xs text-neutral-300"
            >
              <option value={2}>2 (Antenna + Receiver)</option>
              <option value={4}>4 (With Lightning Arrestor & Jumper)</option>
              <option value={6}>6 (Complex Multi-Patch)</option>
            </select>
          </div>
        </div>

      </div>

      {/* Result Display Box */}
      <div className={`p-6 rounded-2xl border transition-all ${
        isPass 
          ? isWarning
            ? 'border-amber-500/40 bg-amber-950/20'
            : 'border-emerald-500/40 bg-emerald-950/20'
          : 'border-rose-500/40 bg-rose-950/25'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              {isPass ? (
                isWarning ? (
                  <AlertTriangle className="h-6 w-6 text-amber-400" />
                ) : (
                  <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                )
              ) : (
                <XCircle className="h-6 w-6 text-rose-400" />
              )}
              <span className={`text-lg font-bold ${
                isPass ? (isWarning ? 'text-amber-300' : 'text-emerald-300') : 'text-rose-400'
              }`}>
                {isPass 
                  ? isWarning 
                    ? 'ACCEPTABLE (NEAR THRESHOLD LIMIT)' 
                    : 'VERIFIED: COMPLIES WITH VERIPOS STANDARD'
                  : 'EXCEEDS 10 dB LOSS LIMIT – DO NOT USE'}
              </span>
            </div>

            <p className="text-xs text-neutral-300 max-w-xl">
              {isPass
                ? isWarning
                  ? `Total attenuation is ${totalLossDb.toFixed(2)} dB, which is approaching the 10.0 dB limit. Consider stepping up to Heliax LDF4-50A if extra jumper tails or surge arrestors are added.`
                  : `Total attenuation is ${totalLossDb.toFixed(2)} dB, well within the 10.0 dB budget. Provides optimal signal-to-noise ratio and fast carrier tracking lock.`
                : `Total attenuation of ${totalLossDb.toFixed(2)} dB exceeds the maximum 10.0 dB limit for Veripos receivers by ${(totalLossDb - 10).toFixed(2)} dB. Use CommScope 1/2" Heliax LDF4-50A or reduce route length.`
              }
            </p>
          </div>

          {/* Big Number Summary */}
          <div className="flex items-center space-x-6 bg-black p-4 rounded-xl border border-neutral-800 self-start md:self-auto">
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-500 block">Total RF Loss</span>
              <span className={`text-3xl font-mono font-black ${
                isPass ? (isWarning ? 'text-amber-400' : 'text-emerald-400') : 'text-rose-400'
              }`}>
                {totalLossDb.toFixed(2)} <span className="text-sm font-normal">dB</span>
              </span>
            </div>

            <div className="h-10 w-px bg-neutral-800" />

            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-500 block">Max Limit</span>
              <span className="text-3xl font-mono font-black text-white">
                10.0 <span className="text-sm font-normal">dB</span>
              </span>
            </div>
          </div>

        </div>

        {/* Progress bar */}
        <div className="mt-6 space-y-1.5">
          <div className="flex justify-between text-[11px] font-mono">
            <span className="text-neutral-400">Loss Budget Consumption:</span>
            <span className={isPass ? 'text-white font-bold' : 'text-rose-400 font-bold'}>
              {lossPercentage.toFixed(1)}% of 10 dB Limit
            </span>
          </div>
          <div className="h-2.5 w-full rounded-full bg-black overflow-hidden border border-neutral-800 p-0.5">
            <div
              style={{ width: `${Math.min(100, lossPercentage)}%` }}
              className={`h-full rounded-full transition-all duration-300 ${
                isPass 
                  ? isWarning 
                    ? 'bg-gradient-to-r from-neutral-400 to-amber-400' 
                    : 'bg-gradient-to-r from-neutral-400 to-emerald-400'
                  : 'bg-gradient-to-r from-amber-500 to-rose-500'
              }`}
            />
          </div>
        </div>

      </div>

      {/* Specifications Breakdown Table */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
        <div className="bg-black p-3 rounded-xl border border-neutral-800">
          <span className="text-neutral-500 block text-[10px]">Cable Attenuation</span>
          <span className="text-white font-bold">{rawCableLossDb.toFixed(2)} dB</span>
        </div>
        <div className="bg-black p-3 rounded-xl border border-neutral-800">
          <span className="text-neutral-500 block text-[10px]">Connectors Loss</span>
          <span className="text-white font-bold">{connectorLossDb.toFixed(2)} dB</span>
        </div>
        <div className="bg-black p-3 rounded-xl border border-neutral-800">
          <span className="text-neutral-500 block text-[10px]">Min Bend Radius (Dyn)</span>
          <span className="text-white font-bold">{selectedCable.minBendRadiusDynamicMm} mm</span>
        </div>
        <div className="bg-black p-3 rounded-xl border border-neutral-800">
          <span className="text-neutral-500 block text-[10px]">Cable Weight</span>
          <span className="text-white font-bold">{(selectedCable.weightKgM * lengthInMeters).toFixed(1)} kg</span>
        </div>
      </div>

    </div>
  );
};
