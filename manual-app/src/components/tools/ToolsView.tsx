import React, { useState } from 'react';
import { Calculator, Sliders, Wrench, Eye, Globe, Layers, BookOpen } from 'lucide-react';
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
      icon: Calculator
    },
    {
      id: 'spacing',
      name: 'Antenna Spacing Matrix',
      description: 'Safe radar & transmitter clearance',
      icon: Sliders
    },
    {
      id: 'termination',
      name: 'Termination Checklist',
      description: 'Step-by-step connector crimping',
      icon: Wrench
    },
    {
      id: 'cases',
      name: 'Good vs Bad Practices',
      description: 'Installation failure analysis',
      icon: Eye
    },
    {
      id: 'coverage',
      name: 'L-Band Satellite Map',
      description: 'Inmarsat beam & footprint explorer',
      icon: Globe
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Top Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300">
          <Wrench className="h-3.5 w-3.5" />
          <span>Interactive Engineering Suite</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
          Marine Antenna & RF Engineering Tools
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Field-ready calculations, interactive checklists, safe separation models, and failure analysis algorithms directly derived from Veripos installation specifications.
        </p>
      </div>

      {/* Tool Navigation Sub-Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {tools.map((tool) => {
          const Icon = tool.icon;
          const isSelected = activeTool === tool.id;

          return (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id as any)}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'border-cyan-500/50 bg-gradient-to-b from-cyan-500/20 to-slate-900 text-white shadow-glow-cyan'
                  : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:bg-slate-900 hover:text-slate-200'
              }`}
            >
              <div className={`p-2 rounded-xl w-fit mb-3 ${isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-850 text-cyan-400'}`}>
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">{tool.name}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{tool.description}</div>
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
