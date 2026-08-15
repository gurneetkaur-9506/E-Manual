import React, { useState } from 'react';
import { Eye, AlertTriangle, CheckCircle2, ShieldAlert, Check, ZoomIn, Activity, Sparkles } from 'lucide-react';
import { useManual } from '../../context/ManualContext';

interface CaseStudy {
  id: string;
  type: 'bad' | 'good';
  title: string;
  sectionRef: string;
  pageRef: number;
  figureSrc: string;
  figureNumber: string;
  caption: string;
  issueOrFeature: string;
  impactOrBenefit: string;
  correctiveAction?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "bad-1",
    type: "bad",
    title: "Bad Example 1: Mounted in Radar Scanner Sweep Zone",
    sectionRef: "7.1.1",
    pageRef: 20,
    figureSrc: "/assets/figures/page_20_fig_1.png",
    figureNumber: "Figure 7.1",
    caption: "Bad Example 1: Antenna Installed in Direct Radar Beam Zone",
    issueOrFeature: "A GNSS antenna is installed directly on the yardarm beneath the rotating marine radar scanner.",
    impactOrBenefit: "Severe RF pulse front-end overload, burnout of LNA, and intermittent satellite tracking drops.",
    correctiveAction: "Move antenna to a dedicated raised stub mast located above the radar horizontal sweep plane (outside ±15° beam zone)."
  },
  {
    id: "bad-2",
    type: "bad",
    title: "Bad Example 2: Masking by Large VSAT Comms Dome",
    sectionRef: "7.1.2",
    pageRef: 20,
    figureSrc: "/assets/figures/page_20_fig_2.png",
    figureNumber: "Figure 7.2",
    caption: "Bad Example 2: Severe Masking Caused by Adjacent VSAT Dome",
    issueOrFeature: "Antenna mounted in close proximity behind a large VSAT satellite communications dome.",
    impactOrBenefit: "Physical blockage of low-elevation GNSS and L-band satellites over a 60° azimuth sector with high-power transmitter desensitization.",
    correctiveAction: "Relocate antenna to the opposite yardarm or onto a dedicated top mast platform."
  },
  {
    id: "bad-3",
    type: "bad",
    title: "Bad Example 3: Low Handrail Mount Behind Funnel & Crane",
    sectionRef: "7.1.3",
    pageRef: 21,
    figureSrc: "/assets/figures/page_21_fig_1.png",
    figureNumber: "Figure 7.3",
    caption: "Bad Example 3: Low Rail Mount Obstructed by Funnel and Crane",
    issueOrFeature: "GNSS antenna mounted low on a deck handrail directly behind the vessel exhaust funnel and crane housing.",
    impactOrBenefit: "Continuous multipath reflections from the metallic crane boom and soot accumulation on the radome degrading RF reception.",
    correctiveAction: "Elevate antenna onto the main masthead platform clear of all vessel machinery."
  },
  {
    id: "bad-4",
    type: "bad",
    title: "Bad Example 4: Clustered Antennas & Unsecured Hanging Cables",
    sectionRef: "7.1.4",
    pageRef: 21,
    figureSrc: "/assets/figures/page_21_fig_2.png",
    figureNumber: "Figure 7.4",
    caption: "Bad Example 4: Clustered Antennas with Loose Cable Loops",
    issueOrFeature: "Multiple antennas mounted in a tight cluster less than 0.2 m apart with loose, unstrapped coaxial cables hanging in the wind.",
    impactOrBenefit: "Severe mutual RF coupling and cable fatigue failure caused by wind vibration.",
    correctiveAction: "Stagger antennas at minimum 0.5 m spacing and clamp all cables securely to cable trays every 30 cm."
  },
  {
    id: "good-1",
    type: "good",
    title: "Good Example 1: Masthead Pedestal Mount",
    sectionRef: "7.2.1",
    pageRef: 22,
    figureSrc: "/assets/figures/page_22_fig_1.png",
    figureNumber: "Figure 7.5",
    caption: "Good Example 1: Masthead Pedestal with Full 360° Horizon View",
    issueOrFeature: "Antenna installed on a rigid stainless steel masthead pedestal extending well above all surrounding vessel equipment.",
    impactOrBenefit: "360° unobstructed sky view down to 5° elevation, zero multipath reflective surfaces, and fully enclosed cable conduit."
  },
  {
    id: "good-2",
    type: "good",
    title: "Good Example 2: Staggered Yardarm Mount with Drip Loops",
    sectionRef: "7.2.2",
    pageRef: 22,
    figureSrc: "/assets/figures/page_22_fig_2.png",
    figureNumber: "Figure 7.6",
    caption: "Good Example 2: Staggered Outrigger Mount with Drip Loops and Clamping",
    issueOrFeature: "Dual antennas mounted on yardarm outriggers with 2.0 m baseline separation, stainless marine brackets, and downward drip loops.",
    impactOrBenefit: "Excellent spatial baseline for heading receivers, complete weather isolation, and zero mechanical cable vibration."
  },
  {
    id: "good-3",
    type: "good",
    title: "Good Example 3: Dedicated Triangulated Survey Tower",
    sectionRef: "7.2.3",
    pageRef: 22,
    figureSrc: "/assets/figures/page_22_fig_3.png",
    figureNumber: "Figure 7.7",
    caption: "Good Example 3: Dedicated Triangulated Survey Tower",
    issueOrFeature: "Heavy-duty triangulated survey tower designed specifically for high-precision GNSS positioning with time domain tested cables.",
    impactOrBenefit: "Maximum structural rigidity in heavy seas, zero mast flexing, and clean grounding to vessel hull."
  }
];

export const CaseStudiesComparator: React.FC = () => {
  const [filterType, setFilterType] = useState<'all' | 'bad' | 'good'>('all');
  const { setLightboxFigure } = useManual();

  const filteredStudies = caseStudies.filter((c) => filterType === 'all' || c.type === filterType);

  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-dark-panel to-dark-surface backdrop-blur-2xl p-6 sm:p-8 shadow-panel space-y-8 text-slate-200">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-cyber-amber/10 border border-cyber-amber/30 text-cyber-amber shadow-glow-amber">
              <Eye className="h-5 w-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white">
              Installation Quality Inspector (Good vs Bad Practice)
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
            Visual inspection and failure analysis of real-world vessel installations (Chapter 7).
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-1.5 bg-dark-void p-1.5 rounded-2xl border border-white/10 self-start sm:self-auto font-mono">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
              filterType === 'all' ? 'bg-gradient-to-r from-cyber-cyan to-cyber-blue text-dark-void shadow-glow-cyan' : 'text-slate-400 hover:text-white'
            }`}
          >
            ALL (7)
          </button>
          <button
            onClick={() => setFilterType('bad')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
              filterType === 'bad' ? 'bg-cyber-rose text-white shadow-[0_0_15px_#F43F5E]' : 'text-slate-400 hover:text-white'
            }`}
          >
            DEFECTS (4)
          </button>
          <button
            onClick={() => setFilterType('good')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
              filterType === 'good' ? 'bg-cyber-emerald text-dark-void shadow-[0_0_15px_#10B981]' : 'text-slate-400 hover:text-white'
            }`}
          >
            APPROVED (3)
          </button>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredStudies.map((study) => {
          const isBad = study.type === 'bad';

          return (
            <div
              key={study.id}
              className={`rounded-3xl border p-6 transition-all duration-300 flex flex-col justify-between backdrop-blur-xl ${
                isBad
                  ? 'border-cyber-rose/30 bg-gradient-to-b from-dark-panel to-cyber-rose/5 hover:border-cyber-rose/60 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]'
                  : 'border-cyber-emerald/30 bg-gradient-to-b from-dark-panel to-cyber-emerald/5 hover:border-cyber-emerald/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]'
              }`}
            >
              <div>
                
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-3.5">
                  <span className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-xl text-xs font-bold font-mono tracking-wider ${
                    isBad ? 'bg-cyber-rose/20 text-rose-300 border border-cyber-rose/40' : 'bg-cyber-emerald/20 text-emerald-300 border border-cyber-emerald/40'
                  }`}>
                    {isBad ? <AlertTriangle className="h-3.5 w-3.5 text-cyber-rose" /> : <CheckCircle2 className="h-3.5 w-3.5 text-cyber-emerald" />}
                    <span>{isBad ? 'CRITICAL DEFECT' : 'APPROVED STANDARD'}</span>
                  </span>

                  <span className="text-[10px] font-mono text-slate-400 bg-dark-void px-2.5 py-1 rounded-lg border border-white/10">
                    Sec {study.sectionRef} • p.{study.pageRef}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-3 font-display">
                  {study.title}
                </h3>

                {/* Image preview */}
                <div
                  onClick={() => setLightboxFigure({
                    src: study.figureSrc,
                    caption: study.caption,
                    figureNumber: study.figureNumber,
                    pageRef: study.pageRef
                  })}
                  className="cursor-zoom-in relative rounded-2xl overflow-hidden bg-dark-void p-3 mb-4 group border border-white/10"
                >
                  <img
                    src={study.figureSrc}
                    alt={study.caption}
                    className="max-h-48 w-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-dark-base/90 p-2 rounded-xl text-cyber-cyan opacity-0 group-hover:opacity-100 transition border border-cyber-cyan/30 shadow-glow-cyan">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div>
                    <span className="font-bold text-slate-400 font-mono text-[11px] uppercase block text-slate-300">{isBad ? 'Observed Defect:' : 'Design Feature:'}</span>
                    <p className="leading-relaxed mt-0.5">{study.issueOrFeature}</p>
                  </div>

                  <div>
                    <span className="font-bold text-slate-400 font-mono text-[11px] uppercase block text-slate-300">{isBad ? 'Operational Impact:' : 'Operational Advantage:'}</span>
                    <p className="leading-relaxed mt-0.5">{study.impactOrBenefit}</p>
                  </div>

                  {study.correctiveAction && (
                    <div className="mt-3 p-3.5 rounded-2xl bg-dark-void/90 border border-cyber-cyan/30 text-cyan-200">
                      <span className="font-bold text-cyber-cyan font-mono text-[11px] uppercase block">Required Engineering Remedy:</span>
                      <p className="mt-0.5 leading-relaxed">{study.correctiveAction}</p>
                    </div>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
