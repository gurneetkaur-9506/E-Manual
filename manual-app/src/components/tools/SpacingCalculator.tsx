import React, { useState } from 'react';
import { Sliders, ShieldCheck, AlertTriangle, Radio, Navigation, CheckCircle2 } from 'lucide-react';
import { spacingRulesData, SpacingRule } from '../../data/toolsData';

export const SpacingCalculator: React.FC = () => {
  const [selectedRuleIdx, setSelectedRuleIdx] = useState<number>(0);
  const [userVertM, setUserVertM] = useState<number>(3.5);
  const [userHorizM, setUserHorizM] = useState<number>(11.0);
  const [isInDirectBeam, setIsInDirectBeam] = useState<boolean>(false);

  const currentRule = spacingRulesData[selectedRuleIdx];

  const requiredHoriz = isInDirectBeam && currentRule.inBeamHorizontalDistanceM 
    ? currentRule.inBeamHorizontalDistanceM 
    : currentRule.minHorizontalDistanceM;

  const isVertOk = userVertM >= currentRule.minVerticalDistanceM;
  const isHorizOk = userHorizM >= requiredHoriz;
  const isOverallSafe = isVertOk && isHorizOk;

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-6 sm:p-8 shadow-2xl space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
              <Sliders className="h-5 w-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              Antenna Safe Separation Distance Calculator
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Determine safe installation clearances from marine radars, satellite dishes, and communications transmitters (Section 6.1).
          </p>
        </div>
      </div>

      {/* Selector & Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Left Column: Transmitter Type Selection */}
        <div className="md:col-span-5 space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
            Select Vessel Transmitter Type
          </label>
          <div className="space-y-2">
            {spacingRulesData.map((rule, idx) => {
              const isSelected = idx === selectedRuleIdx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedRuleIdx(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'border-cyan-500/50 bg-cyan-500/15 text-white shadow-glow-cyan'
                      : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  <span className="text-xs font-semibold">{rule.transmitterType}</span>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800 flex-shrink-0 ml-2">
                    &gt; {rule.minHorizontalDistanceM}m
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Distance Test Inputs & Visual Clearance */}
        <div className="md:col-span-7 space-y-6 bg-slate-950/60 p-6 rounded-2xl border border-slate-800">
          
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Test Planned Vessel Clearance
            </h4>

            {/* Horizontal Distance slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Planned Horizontal Separation:</span>
                <span className="font-mono font-bold text-cyan-400">{userHorizM.toFixed(1)} m ({ (userHorizM * 3.28084).toFixed(1) } ft)</span>
              </div>
              <input
                type="range"
                min={0.5}
                max={25}
                step={0.5}
                value={userHorizM}
                onChange={(e) => setUserHorizM(Number(e.target.value))}
                className="w-full accent-cyan-400 h-2 bg-slate-900 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>Min Required: {requiredHoriz} m</span>
                <span>Status: {isHorizOk ? '✓ PASS' : '✗ TOO CLOSE'}</span>
              </div>
            </div>

            {/* Vertical Distance slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Planned Vertical Height Separation:</span>
                <span className="font-mono font-bold text-cyan-400">{userVertM.toFixed(1)} m ({ (userVertM * 3.28084).toFixed(1) } ft)</span>
              </div>
              <input
                type="range"
                min={0.2}
                max={10}
                step={0.2}
                value={userVertM}
                onChange={(e) => setUserVertM(Number(e.target.value))}
                className="w-full accent-cyan-400 h-2 bg-slate-900 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>Min Required: {currentRule.minVerticalDistanceM} m</span>
                <span>Status: {isVertOk ? '✓ PASS' : '✗ TOO CLOSE'}</span>
              </div>
            </div>

            {/* In beam check if applicable */}
            {currentRule.beamZoneAngleDeg && (
              <label className="flex items-center space-x-2.5 p-3 rounded-xl border border-slate-800 bg-slate-900/80 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isInDirectBeam}
                  onChange={(e) => setIsInDirectBeam(e.target.checked)}
                  className="rounded text-cyan-500 focus:ring-cyan-500 h-4 w-4 bg-slate-950 border-slate-700"
                />
                <span className="text-xs text-slate-200">
                  Antenna is located within the active scanner beam elevation zone (±{currentRule.beamZoneAngleDeg}°)
                </span>
              </label>
            )}
          </div>

          {/* Verdict Box */}
          <div className={`p-4 rounded-xl border transition-all ${
            isOverallSafe
              ? 'border-emerald-500/40 bg-emerald-950/20 text-emerald-200'
              : 'border-rose-500/40 bg-rose-950/25 text-rose-200'
          }`}>
            <div className="flex items-start space-x-3">
              {isOverallSafe ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertTriangle className="h-5 w-5 text-rose-400 flex-shrink-0 mt-0.5" />
              )}
              <div className="space-y-1">
                <h5 className="text-xs font-bold uppercase tracking-wider text-white">
                  {isOverallSafe ? 'SAFE SEPARATION CRITERIA SATISFIED' : 'CLEARANCE HAZARD DETECTED'}
                </h5>
                <p className="text-xs leading-relaxed opacity-90">
                  {isOverallSafe
                    ? `The planned separation of ${userHorizM}m horizontal and ${userVertM}m vertical exceeds the minimum requirements. RF saturation and pulse jamming risks are mitigated.`
                    : currentRule.recommendation
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Risk Information */}
          <div className="text-xs text-slate-400 space-y-1 bg-slate-900/40 p-3 rounded-xl border border-slate-800">
            <span className="font-bold text-slate-300 block">Specific RF Risk:</span>
            <p>{currentRule.riskDescription}</p>
          </div>

        </div>

      </div>

    </div>
  );
};
