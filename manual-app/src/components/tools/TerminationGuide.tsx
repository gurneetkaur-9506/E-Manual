import React, { useState } from 'react';
import { Wrench, CheckCircle2, Check, RotateCcw, AlertTriangle, ShieldCheck, Flame } from 'lucide-react';
import { terminationProceduresData, TerminationProcedure } from '../../data/toolsData';
import { useManual } from '../../context/ManualContext';

export const TerminationGuide: React.FC = () => {
  const [selectedProcId, setSelectedProcId] = useState<string>('lmr400_termination');
  const { checklistState, toggleChecklistStep, resetChecklist } = useManual();

  const currentProc = terminationProceduresData.find((p) => p.id === selectedProcId) || terminationProceduresData[0];

  const completedCount = currentProc.steps.filter((s) => checklistState[`${currentProc.id}-step-${s.stepNumber}`]).length;
  const progressPercent = Math.round((completedCount / currentProc.steps.length) * 100);

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-6 sm:p-8 shadow-2xl space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
              <Wrench className="h-5 w-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              Interactive Connector Termination & Checklist
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Step-by-step assembly instructions, required specialized tooling, and quality checkpoints (Section 8.6).
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={resetChecklist}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-950 text-xs text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Checklist</span>
          </button>
        </div>
      </div>

      {/* Procedure Selector Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
        {terminationProceduresData.map((proc) => {
          const isSelected = proc.id === selectedProcId;
          return (
            <button
              key={proc.id}
              onClick={() => setSelectedProcId(proc.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                isSelected
                  ? 'bg-cyan-500 text-slate-950 shadow-glow-cyan'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
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
        <div className="md:col-span-5 space-y-4 bg-slate-950/70 p-5 rounded-2xl border border-slate-800">
          <div>
            <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider block">
              Required Tooling
            </span>
            <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
              {currentProc.toolsRequired.map((tool, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-3 border-t border-slate-800">
            <span className="text-[10px] uppercase font-bold text-sky-400 tracking-wider block">
              Materials & Kits
            </span>
            <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
              {currentProc.materialsRequired.map((mat, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>{mat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-3 border-t border-slate-800">
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-slate-400">Procedure Progress:</span>
              <span className="text-cyan-400 font-bold">{completedCount} / {currentProc.steps.length} Steps</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-900 overflow-hidden">
              <div
                style={{ width: `${progressPercent}%` }}
                className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Right: Step Sequence */}
        <div className="md:col-span-7 space-y-3">
          {currentProc.steps.map((step) => {
            const stepKey = `${currentProc.id}-step-${step.stepNumber}`;
            const isCompleted = !!checklistState[stepKey];

            return (
              <div
                key={step.stepNumber}
                className={`p-4 rounded-2xl border transition-all ${
                  isCompleted
                    ? 'border-emerald-500/40 bg-emerald-950/15'
                    : 'border-slate-800 bg-slate-950/40 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start space-x-3.5">
                  <button
                    onClick={() => toggleChecklistStep(stepKey)}
                    className={`mt-0.5 flex h-6 w-6 items-center justify-center rounded-lg border transition-all flex-shrink-0 ${
                      isCompleted
                        ? 'border-emerald-400 bg-emerald-500 text-slate-950 font-bold'
                        : 'border-slate-700 bg-slate-800 text-slate-400 hover:border-cyan-400'
                    }`}
                  >
                    {isCompleted ? <Check className="h-3.5 w-3.5" /> : <span className="text-xs font-bold">{step.stepNumber}</span>}
                  </button>

                  <div className="space-y-1">
                    <h5 className={`text-xs font-bold ${isCompleted ? 'text-emerald-300 line-through' : 'text-white'}`}>
                      Step {step.stepNumber}: {step.title}
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {step.details}
                    </p>
                    {step.criticalNotes && (
                      <div className="mt-2 text-[11px] text-amber-300 flex items-center space-x-1.5 bg-amber-950/30 p-2 rounded-lg border border-amber-800/40">
                        <AlertTriangle className="h-3.5 w-3.5 flex-shrink-0 text-amber-400" />
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
