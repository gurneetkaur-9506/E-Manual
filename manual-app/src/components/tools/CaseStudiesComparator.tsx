import React, { useState } from 'react';
import { Eye, AlertTriangle, CheckCircle2, ShieldAlert, Check, ZoomIn } from 'lucide-react';
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
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-6 sm:p-8 shadow-2xl space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
              <Eye className="h-5 w-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              Installation Quality Inspector (Good vs Bad Practice)
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Visual inspection and failure analysis of real-world vessel installations (Chapter 7).
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 self-start sm:self-auto">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition ${
              filterType === 'all' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
            }`}
          >
            All Examples
          </button>
          <button
            onClick={() => setFilterType('bad')}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition ${
              filterType === 'bad' ? 'bg-rose-500 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Bad Practices (4)
          </button>
          <button
            onClick={() => setFilterType('good')}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition ${
              filterType === 'good' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
            }`}
          >
            Good Practices (3)
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
              className={`rounded-2xl border p-5 transition-all flex flex-col justify-between ${
                isBad
                  ? 'border-rose-500/30 bg-rose-950/10 hover:border-rose-500/50'
                  : 'border-emerald-500/30 bg-emerald-950/10 hover:border-emerald-500/50'
              }`}
            >
              <div>
                
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-bold ${
                    isBad ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  }`}>
                    {isBad ? <AlertTriangle className="h-3.5 w-3.5 text-rose-400" /> : <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />}
                    <span>{isBad ? 'FAILURE MODE / HAZARD' : 'APPROVED BEST PRACTICE'}</span>
                  </span>

                  <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    Sec {study.sectionRef} • p.{study.pageRef}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-3">
                  {study.title}
                </h4>

                {/* Image preview */}
                <div
                  onClick={() => setLightboxFigure({
                    src: study.figureSrc,
                    caption: study.caption,
                    figureNumber: study.figureNumber,
                    pageRef: study.pageRef
                  })}
                  className="cursor-zoom-in relative rounded-xl overflow-hidden bg-slate-950 p-2 mb-4 group border border-slate-800"
                >
                  <img
                    src={study.figureSrc}
                    alt={study.caption}
                    className="max-h-48 w-full object-contain rounded-lg group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-2 right-2 bg-slate-900/80 p-1 rounded text-cyan-400 opacity-0 group-hover:opacity-100 transition">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 text-xs text-slate-300">
                  <div>
                    <span className="font-bold text-slate-400 block">{isBad ? 'Observed Defect:' : 'Design Feature:'}</span>
                    <p>{study.issueOrFeature}</p>
                  </div>

                  <div>
                    <span className="font-bold text-slate-400 block">{isBad ? 'Operational Impact:' : 'Operational Advantage:'}</span>
                    <p>{study.impactOrBenefit}</p>
                  </div>

                  {study.correctiveAction && (
                    <div className="mt-2 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-cyan-300">
                      <span className="font-bold text-cyan-400 block text-[11px]">Required Remedy:</span>
                      <p>{study.correctiveAction}</p>
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
