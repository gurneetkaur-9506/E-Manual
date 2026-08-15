import React, { useState } from 'react';
import { Calculator, Sliders, Wrench, Eye, Globe, Layers, BookOpen, Sparkles, Cpu } from 'lucide-react';
import { CableCalculator } from './CableCalculator';
import { SpacingCalculator } from './SpacingCalculator';
import { TerminationGuide } from './TerminationGuide';
import { CaseStudiesComparator } from './CaseStudiesComparator';
import { CoverageMapExplorer } from './CoverageMapExplorer';

export const ToolsView: React.FC = () => {
  const [activeTool, setActiveTool] = useState<'cable' | 'spacing' | 'termination' | 'cases' | 'coverage'>('cable');

  const tools = [
    {
      id: 'cable',
      name: 'Cable Loss Calculator',
      description: 'Attenuation & length budget check',
      icon: Calculator,
      badge: 'RF LOSS'
    },
    {
      id: 'spacing',
      name: 'Antenna Spacing Matrix',
      description: 'Safe radar & transmitter clearance',
      icon: Sliders,
      badge: 'CLEARANCE'
    },
    {
      id: 'termination',
      name: 'Termination Checklist',
      description: 'Step-by-step connector crimping',
      icon: Wrench,
      badge: 'ASSEMBLY'
    },
    {
      id: 'cases',
      name: 'Good vs Bad Practices',
      description: 'Installation failure analysis',
      icon: Eye,
      badge: 'INSPECTOR'
    },
    {
      id: 'coverage',
      name: 'L-Band Satellite Map',
      description: 'Inmarsat beam & footprint explorer',
      icon: Globe,
      badge: 'ORBITS'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-slate-100">
      
      {/* Top Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/10 px-4 py-1.5 text-xs font-semibold text-cyber-cyan font-mono uppercase tracking-widest shadow-[0_0_15px_rgba(0,240,255,0.15)]">
          <Cpu className="h-3.5 w-3.5" />
          <span>Interactive Engineering Suite</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
          Marine Antenna & RF Engineering Tools
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Field-ready calculations, interactive checklists, safe separation models, and failure analysis algorithms directly derived from Veripos installation specifications.
        </p>
      </div>

      {/* Tool Navigation Sub-Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {tools.map((tool) => {
          const Icon = tool.icon;
          const isSelected = activeTool === tool.id;

          return (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id as any)}
              className={`p-4.5 rounded-3xl border text-left transition-all duration-300 flex flex-col justify-between group ${
                isSelected
                  ? 'border-cyber-cyan/50 bg-gradient-to-b from-dark-surface to-dark-elevated text-white shadow-glow-cyan transform -translate-y-1'
                  : 'border-white/10 bg-dark-panel/80 text-slate-400 hover:border-white/20 hover:bg-dark-surface hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-3">
                <div className={`p-2.5 rounded-2xl transition-colors ${
                  isSelected ? 'bg-gradient-to-r from-cyber-cyan to-cyber-blue text-dark-void shadow-glow-cyan' : 'bg-dark-elevated text-cyber-cyan group-hover:bg-dark-highlight'
                }`}>
                  <Icon className="h-4 w-4" />
                </div>
                <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                  isSelected ? 'bg-cyber-cyan/20 text-cyber-cyan border-cyber-cyan/40' : 'bg-dark-void text-slate-500 border-white/[0.06]'
                }`}>
                  {tool.badge}
                </span>
              </div>
              <div>
                <div className="text-xs font-bold text-white font-display group-hover:text-cyber-cyan transition-colors">{tool.name}</div>
                <div className="text-[11px] text-slate-400 mt-1 leading-snug">{tool.description}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Tool Viewport */}
      <div>
        {activeTool === 'cable' && <CableCalculator />}
        {activeTool === 'spacing' && <SpacingCalculator />}
        {activeTool === 'termination' && <TerminationGuide />}
        {activeTool === 'cases' && <CaseStudiesComparator />}
        {activeTool === 'coverage' && <CoverageMapExplorer />}
      </div>

    </div>
  );
};
