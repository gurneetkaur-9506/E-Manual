import React, { useState } from 'react';
import { Wrench, CheckCircle2, Check, RotateCcw, AlertTriangle, ShieldCheck, Flame, Cpu, Sparkles } from 'lucide-react';
import { terminationProceduresData, TerminationProcedure } from '../../data/toolsData';
import { useManual } from '../../context/ManualContext';

export const TerminationGuide: React.FC = () => {
  const [selectedProcId, setSelectedProcId] = useState<string>('lmr400_termination');
  const { checklistState, toggleChecklistStep, resetChecklist } = useManual();

  const currentProc = terminationProceduresData.find((p) => p.id === selectedProcId) || terminationProceduresData[0];

  const completedCount = currentProc.steps.filter((s) => checklistState[`${currentProc.id}-step-${s.stepNumber}`]).length;
  const progressPercent = Math.round((completedCount / currentProc.steps.length) * 100);

  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-dark-panel to-dark-surface backdrop-blur-2xl p-6 sm:p-8 shadow-panel space-y-8 text-slate-200">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald shadow-glow-emerald">
              <Wrench className="h-5 w-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white">
              Interactive Connector Termination & Checklist
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
            Step-by-step assembly instructions, required specialized tooling, and quality checkpoints (Section 8.6).
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={resetChecklist}
            className="flex items-center space-x-2 px-3.5 py-2 rounded-xl border border-white/10 bg-dark-void text-xs font-mono text-slate-400 hover:text-white hover:border-white/20 transition"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>RESET CHECKLIST</span>
          </button>
        </div>
      </div>

      {/* Procedure Selector Tabs */}
      <div className="flex flex-wrap gap-2.5 border-b border-white/10 pb-4">
        {terminationProceduresData.map((proc) => {
          const isSelected = proc.id === selectedProcId;
          return (
            <button
              key={proc.id}
              onClick={() => setSelectedProcId(proc.id)}
              className={`px-4.5 py-2.5 rounded-2xl text-xs font-bold font-display transition-all duration-200 ${
                isSelected
                  ? 'bg-gradient-to-r from-cyber-cyan to-cyber-blue text-dark-void shadow-glow-cyan font-bold scale-[1.02]'
                  : 'bg-dark-void text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {proc.cableType} ({proc.connectorType})
            </button>
          );
        })}
      </div>

      {/* Overview & Tool Requirements Banner */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Left: Tools & Materials */}
        <div className="md:col-span-5 space-y-4 bg-dark-void/90 p-5 rounded-3xl border border-white/10 shadow-inner">
          <div>
            <span className="text-[10px] uppercase font-bold text-cyber-cyan tracking-wider font-mono block">
              REQUIRED SPECIALIZED TOOLING
            </span>
            <ul className="mt-2.5 space-y-2 text-xs text-slate-300 font-medium">
              {currentProc.toolsRequired.map((tool, idx) => (
                <li key={idx} className="flex items-center space-x-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyber-cyan shadow-[0_0_6px_#00F0FF]" />
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-white/[0.06]">
            <span className="text-[10px] uppercase font-bold text-cyber-violet tracking-wider font-mono block">
              MATERIALS & SEALING KITS
            </span>
            <ul className="mt-2.5 space-y-2 text-xs text-slate-300 font-medium">
              {currentProc.materialsRequired.map((mat, idx) => (
                <li key={idx} className="flex items-center space-x-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyber-violet shadow-[0_0_6px_#8B5CF6]" />
                  <span>{mat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-white/[0.06]">
            <div className="flex justify-between text-xs font-mono mb-1.5">
              <span className="text-slate-400">Procedure Completion:</span>
              <span className="text-cyber-cyan font-bold">{completedCount} / {currentProc.steps.length} Steps</span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-dark-base overflow-hidden border border-white/10 p-0.5">
              <div
                style={{ width: `${progressPercent}%` }}
                className="h-full rounded-full bg-gradient-to-r from-cyber-cyan to-cyber-emerald transition-all duration-300 shadow-[0_0_10px_#10B981]"
              />
            </div>
          </div>
        </div>

        {/* Right: Step Sequence */}
        <div className="md:col-span-7 space-y-3.5">
          {currentProc.steps.map((step) => {
            const stepKey = `${currentProc.id}-step-${step.stepNumber}`;
            const isCompleted = !!checklistState[stepKey];

            return (
              <div
                key={step.stepNumber}
                className={`p-4.5 rounded-2xl border transition-all duration-200 ${
                  isCompleted
                    ? 'border-cyber-emerald/40 bg-cyber-emerald/10 shadow-[0_0_20px_rgba(16,185,129,0.1)]'
                    : 'border-white/10 bg-dark-void/70 hover:border-white/20'
                }`}
              >
                <div className="flex items-start space-x-3.5">
                  <button
                    onClick={() => toggleChecklistStep(stepKey)}
                    className={`mt-0.5 flex h-6 w-6 items-center justify-center rounded-xl border transition-all flex-shrink-0 ${
                      isCompleted
                        ? 'border-cyber-emerald bg-cyber-emerald text-dark-void font-bold shadow-[0_0_10px_#10B981]'
                        : 'border-white/20 bg-dark-surface text-slate-300 hover:border-cyber-cyan hover:text-cyber-cyan'
                    }`}
                  >
                    {isCompleted ? <Check className="h-3.5 w-3.5" /> : <span className="text-xs font-mono font-bold">{step.stepNumber}</span>}
                  </button>

                  <div className="space-y-1.5">
                    <h3 className={`text-xs font-bold font-display ${isCompleted ? 'text-cyber-emerald line-through opacity-80' : 'text-white'}`}>
                      Step {step.stepNumber}: {step.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-[11px] text-slate-400 font-mono">
                      {step.details}
                    </p>
                    {step.criticalNotes && (
                      <div className="mt-2 text-[11px] text-amber-300 flex items-center space-x-2 bg-cyber-amber/15 p-2.5 rounded-xl border border-cyber-amber/30">
                        <AlertTriangle className="h-4 w-4 flex-shrink-0 text-cyber-amber" />
                        <span>{step.criticalNotes.join(' ')}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};
