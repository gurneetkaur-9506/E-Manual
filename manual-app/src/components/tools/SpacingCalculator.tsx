import React, { useState } from 'react';
import { Sliders, ShieldCheck, AlertTriangle, Radio, Navigation, CheckCircle2, XCircle } from 'lucide-react';
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
    <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-dark-panel to-dark-surface backdrop-blur-2xl p-6 sm:p-8 shadow-panel space-y-8 text-slate-200">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-cyber-violet/10 border border-cyber-violet/30 text-cyber-violet shadow-glow-violet">
              <Sliders className="h-5 w-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white">
              Antenna Safe Separation Distance Matrix
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
            Determine safe installation clearances from marine radars, satellite dishes, and communications transmitters (Section 6.1).
          </p>
        </div>
      </div>

      {/* Selector & Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Left Column: Transmitter Type Selection */}
        <div className="md:col-span-5 space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono block">
            Select Vessel Transmitter Type
          </label>
          <div className="space-y-2">
            {spacingRulesData.map((rule, idx) => {
              const isSelected = idx === selectedRuleIdx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedRuleIdx(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'border-cyber-cyan/50 bg-gradient-to-r from-cyber-cyan/20 to-cyber-blue/10 text-white shadow-glow-cyan font-semibold'
                      : 'border-white/10 bg-dark-void/80 text-slate-400 hover:border-white/20 hover:bg-dark-surface hover:text-slate-200'
                  }`}
                >
                  <span className="text-xs font-bold font-display group-hover:text-white transition-colors">{rule.transmitterType}</span>
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border flex-shrink-0 ml-2 ${
                    isSelected ? 'bg-cyber-cyan text-dark-void border-cyber-cyan' : 'bg-dark-surface text-cyber-cyan border-cyber-cyan/20'
                  }`}>
                    &gt; {rule.minHorizontalDistanceM}m
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Distance Test Inputs & Visual Clearance */}
        <div className="md:col-span-7 space-y-6 bg-dark-void/90 p-6 rounded-3xl border border-white/10 shadow-inner">
          
          <div className="space-y-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyber-cyan font-mono flex items-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyber-cyan shadow-[0_0_8px_#00F0FF]" />
              <span>Test Planned Vessel Clearance</span>
            </h3>

            {/* Horizontal Distance slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Planned Horizontal Separation:</span>
                <span className="font-mono font-bold text-cyber-cyan bg-cyber-cyan/10 px-2 py-0.5 rounded border border-cyber-cyan/20">
                  {userHorizM.toFixed(1)} m ({ (userHorizM * 3.28084).toFixed(1) } ft)
                </span>
              </div>
              <input
                type="range"
                min={0.5}
                max={25}
                step={0.5}
                value={userHorizM}
                onChange={(e) => setUserHorizM(Number(e.target.value))}
                className="w-full accent-cyber-cyan h-2 bg-dark-base rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>Min Required: {requiredHoriz} m</span>
                <span className={isHorizOk ? 'text-cyber-emerald font-bold' : 'text-cyber-rose font-bold'}>
                  {isHorizOk ? '✓ CLEARANCE OK' : '✗ TOO CLOSE'}
                </span>
              </div>
            </div>

            {/* Vertical Distance slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Planned Vertical Height Separation:</span>
                <span className="font-mono font-bold text-cyber-violet bg-cyber-violet/10 px-2 py-0.5 rounded border border-cyber-violet/20">
                  {userVertM.toFixed(1)} m ({ (userVertM * 3.28084).toFixed(1) } ft)
                </span>
              </div>
              <input
                type="range"
                min={0.2}
                max={10}
                step={0.2}
                value={userVertM}
                onChange={(e) => setUserVertM(Number(e.target.value))}
                className="w-full accent-cyber-violet h-2 bg-dark-base rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>Min Required: {currentRule.minVerticalDistanceM} m</span>
                <span className={isVertOk ? 'text-cyber-emerald font-bold' : 'text-cyber-rose font-bold'}>
                  {isVertOk ? '✓ CLEARANCE OK' : '✗ TOO CLOSE'}
                </span>
              </div>
            </div>

            {/* In beam check if applicable */}
            {currentRule.beamZoneAngleDeg && (
              <label className="flex items-center space-x-3 p-3.5 rounded-2xl border border-white/10 bg-dark-surface cursor-pointer hover:border-cyber-cyan/30 transition">
                <input
                  type="checkbox"
                  checked={isInDirectBeam}
                  onChange={(e) => setIsInDirectBeam(e.target.checked)}
                  className="rounded text-cyber-cyan focus:ring-cyber-cyan h-4 w-4 bg-dark-void border-white/20"
                />
                <span className="text-xs text-slate-200 font-medium">
                  Antenna is located within the active scanner beam elevation zone (±{currentRule.beamZoneAngleDeg}°)
                </span>
              </label>
            )}
          </div>

          {/* Verdict Box */}
          <div className={`p-5 rounded-2xl border transition-all duration-300 shadow-xl ${
            isOverallSafe
              ? 'border-cyber-emerald/40 bg-cyber-emerald/10 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
              : 'border-cyber-rose/40 bg-cyber-rose/10 text-rose-200 shadow-[0_0_20px_rgba(244,63,94,0.15)]'
          }`}>
            <div className="flex items-start space-x-3.5">
              {isOverallSafe ? (
                <CheckCircle2 className="h-6 w-6 text-cyber-emerald flex-shrink-0 mt-0.5" />
              ) : (
                <AlertTriangle className="h-6 w-6 text-cyber-rose flex-shrink-0 mt-0.5 animate-pulse" />
              )}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-white">
                  {isOverallSafe ? 'SAFE SEPARATION CRITERIA SATISFIED' : 'CLEARANCE HAZARD DETECTED'}
                </h4>
                <p className="text-xs leading-relaxed opacity-95">
                  {isOverallSafe
                    ? `The planned separation of ${userHorizM}m horizontal and ${userVertM}m vertical exceeds the minimum requirements. RF saturation and pulse jamming risks are mitigated.`
                    : currentRule.recommendation
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Risk Information */}
          <div className="text-xs text-slate-400 space-y-1.5 bg-dark-surface/80 p-4 rounded-2xl border border-white/[0.06]">
            <span className="font-bold text-slate-300 font-mono text-[11px] block text-cyber-cyan uppercase">Specific RF Risk:</span>
            <p className="leading-relaxed">{currentRule.riskDescription}</p>
          </div>

        </div>

      </div>

    </div>
  );
};
