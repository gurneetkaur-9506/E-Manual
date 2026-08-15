import React, { useRef, useEffect } from 'react';
import { 
  Radio, 
  Satellite, 
  Cable, 
  ShieldCheck, 
  ArrowRight, 
  Wrench, 
  BookOpen, 
  Zap, 
  Compass, 
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle,
  FileCheck,
  Cpu,
  Activity,
  Maximize2
} from 'lucide-react';
import { useManual } from '../context/ManualContext';
import { manualMetadata } from '../data/manualMetadata';

export const LandingHero: React.FC = () => {
  const { navigateToSection, setActiveTab } = useManual();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // High-tech interactive Canvas radar / constellation visualizer in vibrant electric cyan & cyber violet
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes representing GNSS & L-band satellites with real-time orbits
    const satellites = Array.from({ length: 24 }, (_, i) => ({
      angle: (i / 24) * Math.PI * 2,
      orbitRadius: 90 + (i % 3) * 55,
      speed: 0.002 + (i % 3) * 0.001,
      size: 2.5 + (i % 2),
      color: i % 4 === 0 ? '#00F0FF' : i % 4 === 1 ? '#8B5CF6' : i % 4 === 2 ? '#10B981' : '#F59E0B',
      pulse: Math.random() * Math.PI,
      label: i % 4 === 0 ? 'GPS' : i % 4 === 1 ? 'GAL' : i % 4 === 2 ? 'GLO' : 'BDS'
    }));

    let radarAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw orbital rings
      ctx.lineWidth = 1;
      [90, 145, 200].forEach((r, idx) => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.strokeStyle = idx === 1 ? 'rgba(0, 240, 255, 0.15)' : 'rgba(139, 92, 246, 0.12)';
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Radar sweep cone with cyber cyan gradient
      radarAngle += 0.015;
      const gradient = ctx.createConicGradient(radarAngle, centerX, centerY);
      gradient.addColorStop(0, 'rgba(0, 240, 255, 0.28)');
      gradient.addColorStop(0.12, 'rgba(99, 102, 241, 0.08)');
      gradient.addColorStop(0.25, 'rgba(0, 240, 255, 0.0)');
      gradient.addColorStop(1, 'rgba(0, 240, 255, 0.0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 215, 0, Math.PI * 2);
      ctx.fill();

      // Center Antenna Node (V560 Multi-GNSS Node)
      ctx.beginPath();
      ctx.arc(centerX, centerY, 7, 0, Math.PI * 2);
      ctx.fillStyle = '#00F0FF';
      ctx.shadowColor = '#00F0FF';
      ctx.shadowBlur = 18;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw Satellites & Signal beams
      satellites.forEach((sat) => {
        sat.angle += sat.speed;
        sat.pulse += 0.05;
        const x = centerX + Math.cos(sat.angle) * sat.orbitRadius;
        const y = centerY + Math.sin(sat.angle) * sat.orbitRadius;

        // Signal line to center
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = sat.color === '#00F0FF' 
          ? `rgba(0, 240, 255, ${0.12 + Math.sin(sat.pulse) * 0.06})`
          : `rgba(139, 92, 246, ${0.1 + Math.sin(sat.pulse) * 0.05})`;
        ctx.lineWidth = 0.9;
        ctx.stroke();

        // Satellite body
        ctx.beginPath();
        ctx.arc(x, y, sat.size, 0, Math.PI * 2);
        ctx.fillStyle = sat.color;
        ctx.shadowColor = sat.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-dark-void text-slate-100">
      
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-cyber-cyan/10 via-cyber-violet/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left z-10">
            
            {/* Mission status badge */}
            <div className="inline-flex items-center space-x-2.5 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/10 px-4 py-1.5 text-xs font-semibold text-cyber-cyan backdrop-blur-xl shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <span className="flex h-2 w-2 rounded-full bg-cyber-cyan animate-ping" />
              <span className="font-tech tracking-wider uppercase">Official Technical Specification • {manualMetadata.documentRef}</span>
            </div>

            {/* Futuristic Hero Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
              Marine Antenna & <br />
              <span className="text-gradient-aurora">
                Coaxial Cable Installation
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              High-precision digital engineering manual for Veripos GNSS, L-band, and MF marine positioning infrastructure. Master antenna separation geometry, RF budget calculations, precision N-connector crimping, and 3-layer weatherproofing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => navigateToSection('chapter-1', 'section-1-1')}
                className="flex items-center space-x-2.5 rounded-2xl bg-gradient-to-r from-cyber-cyan via-cyber-sky to-cyber-blue px-7 py-4 text-sm font-bold text-dark-void shadow-glow-cyan hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] hover:scale-[1.02] active:scale-[0.99] transition-all transform"
              >
                <BookOpen className="h-4 w-4" />
                <span className="tracking-wide">Explore E-Manual</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => setActiveTab('tools')}
                className="flex items-center space-x-2.5 rounded-2xl border border-white/10 bg-dark-surface/80 hover:border-cyber-cyan/50 hover:bg-dark-elevated px-7 py-4 text-sm font-semibold text-white transition-all backdrop-blur-xl hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]"
              >
                <Wrench className="h-4 w-4 text-cyber-cyan" />
                <span>RF Calculators & Tools</span>
              </button>
            </div>

            {/* Precision Telemetry Stats Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-6 border-t border-white/[0.08]">
              <div className="cyber-panel p-3.5 rounded-2xl bg-gradient-to-br from-dark-panel to-dark-surface border border-white/10 hover:border-cyber-cyan/30 transition-all">
                <div className="text-2xl font-bold font-mono text-white">43</div>
                <div className="text-[11px] text-slate-400 font-medium">Digital Pages</div>
              </div>
              <div className="cyber-panel p-3.5 rounded-2xl bg-gradient-to-br from-dark-panel to-dark-surface border border-white/10 hover:border-cyber-violet/30 transition-all">
                <div className="text-2xl font-bold font-mono text-cyber-violet">4 GNSS</div>
                <div className="text-[11px] text-slate-400 font-medium">GPS, GLO, GAL, BDS</div>
              </div>
              <div className="cyber-panel p-3.5 rounded-2xl bg-gradient-to-br from-dark-panel to-dark-surface border border-white/10 hover:border-cyber-emerald/30 transition-all">
                <div className="text-2xl font-bold font-mono text-cyber-emerald">10.0 dB</div>
                <div className="text-[11px] text-slate-400 font-medium">Max RF Loss at 1.5 GHz</div>
              </div>
              <div className="cyber-panel p-3.5 rounded-2xl bg-gradient-to-br from-dark-panel to-dark-surface border border-white/10 hover:border-cyber-amber/30 transition-all">
                <div className="text-2xl font-bold font-mono text-cyber-amber">3-Layer</div>
                <div className="text-[11px] text-slate-400 font-medium">Weatherproof Seal</div>
              </div>
            </div>
          </div>

          {/* Right Visual 3D / Constellation Radar Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[440px] rounded-3xl border border-white/10 bg-gradient-to-br from-dark-panel/90 to-dark-surface/90 p-4 backdrop-blur-2xl overflow-hidden shadow-2xl group hover:border-cyber-cyan/40 transition-all duration-300">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
            
            {/* Top right status chip */}
            <div className="absolute top-4 right-4 flex items-center space-x-1.5 rounded-full bg-dark-void/80 border border-white/10 px-3 py-1 text-[10px] font-mono text-cyber-cyan backdrop-blur-md">
              <Activity className="h-3 w-3 animate-pulse text-cyber-cyan" />
              <span>LIVE CONSTELLATION</span>
            </div>

            {/* Overlay card info */}
            <div className="absolute bottom-4 left-4 right-4 cyber-panel p-4 rounded-2xl border border-cyber-cyan/30 backdrop-blur-2xl bg-dark-base/90 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-cyber-emerald shadow-[0_0_8px_#10B981] animate-pulse" />
                  <span className="text-xs font-bold text-white tracking-wider font-display uppercase">
                    Veripos V560 Multi-GNSS Node
                  </span>
                </div>
                <span className="text-[10px] font-mono text-cyber-cyan bg-cyber-cyan/10 px-2.5 py-0.5 rounded-full border border-cyber-cyan/30">
                  50Ω • IP69K
                </span>
              </div>
              <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">
                Simultaneous GPS L1/L2/L5, GLONASS, Galileo, BeiDou & L-band tracking with integrated 40 dB low-noise amplifier.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Pillar Showcase - 4 Core Pillars of Marine RF Excellence */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/[0.08]">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2.5">
          <div className="inline-flex items-center space-x-2 rounded-full border border-cyber-violet/30 bg-cyber-violet/10 px-3.5 py-1 text-xs font-semibold text-cyber-violet uppercase tracking-widest font-mono">
            <Cpu className="h-3 w-3" />
            <span>Architecture & Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            The 4 Pillars of Marine RF Excellence
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Every step of antenna positioning, cable selection, connector crimping, and weatherproofing must adhere to Veripos specifications to guarantee high-precision dynamic positioning.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Antenna Mast Placement */}
          <div 
            onClick={() => navigateToSection('chapter-6', 'section-6-1')}
            className="group cyber-panel cyber-panel-hover rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between border border-white/10 bg-gradient-to-b from-dark-panel to-dark-surface"
          >
            <div className="relative h-48 overflow-hidden bg-dark-void/80 p-3 flex items-center justify-center">
              <img 
                src="/assets/hero/hero_antenna_mast.png" 
                alt="Antenna Mast Installation" 
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-3 left-3 bg-dark-base/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-cyber-cyan/30 text-[10px] font-bold font-mono text-cyber-cyan shadow-sm">
                CHAPTER 6
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between border-t border-white/[0.06]">
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-cyber-cyan transition-colors font-display">
                  1. Antenna Placement
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  360° unobstructed horizon view down to 5° elevation, rigid stainless steel brackets, and safe separation from marine radar scanners.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-cyber-cyan">
                <span className="font-mono">View Guidelines</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 2: Coaxial Cable Engineering */}
          <div 
            onClick={() => navigateToSection('chapter-8', 'section-8-1')}
            className="group cyber-panel cyber-panel-hover rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between border border-white/10 bg-gradient-to-b from-dark-panel to-dark-surface"
          >
            <div className="relative h-48 overflow-hidden bg-dark-void/80 p-3 flex items-center justify-center">
              <img 
                src="/assets/hero/hero_cable_cutaway.png" 
                alt="Coaxial Cable Cutaway" 
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-3 left-3 bg-dark-base/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-cyber-violet/30 text-[10px] font-bold font-mono text-cyber-violet shadow-sm">
                CHAPTER 8
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between border-t border-white/[0.06]">
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-cyber-violet transition-colors font-display">
                  2. Coaxial Cabling
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Times Microwave LMR-400, LMR-240 & CommScope Heliax LDF4-50A. Adhering strictly to the 10 dB maximum loss limit at 1.5 GHz.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-cyber-violet">
                <span className="font-mono">Loss Calculations</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 3: Connector Termination */}
          <div 
            onClick={() => navigateToSection('chapter-8', 'section-8-6-1')}
            className="group cyber-panel cyber-panel-hover rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between border border-white/10 bg-gradient-to-b from-dark-panel to-dark-surface"
          >
            <div className="relative h-48 overflow-hidden bg-dark-void/80 p-3 flex items-center justify-center">
              <img 
                src="/assets/hero/hero_coaxial_connector.png" 
                alt="Coaxial Connectors" 
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-3 left-3 bg-dark-base/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-cyber-cyan/30 text-[10px] font-bold font-mono text-cyber-cyan shadow-sm">
                CHAPTER 8.6
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between border-t border-white/[0.06]">
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-cyber-cyan transition-colors font-display">
                  3. Precision Termination
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Step-by-step procedures for EZ-400-NMH-X crimp connectors, CST prep tools, center conductor deburring, and Heliax positive stop.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-cyber-cyan">
                <span className="font-mono">Assembly Steps</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 4: Marine Installation Overview */}
          <div 
            onClick={() => navigateToSection('chapter-8', 'section-8-6-5')}
            className="group cyber-panel cyber-panel-hover rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between border border-white/10 bg-gradient-to-b from-dark-panel to-dark-surface"
          >
            <div className="relative h-48 overflow-hidden bg-dark-void/80 flex items-center justify-center">
              <img 
                src="/assets/hero/hero_installation_overview.jpg" 
                alt="Marine Installation Workflow" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-3 left-3 bg-dark-base/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-cyber-emerald/30 text-[10px] font-bold font-mono text-cyber-emerald shadow-sm">
                WORKFLOW
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between border-t border-white/[0.06]">
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-cyber-emerald transition-colors font-display">
                  4. Weatherproofing & Seal
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  3-layer waterproofing technique (Scotch 33+ & Scotch 23 self-amalgamating tape) with drip loops and Roxtec transit frame glands.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-cyber-emerald">
                <span className="font-mono">Weatherproofing</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Quick Jump & Tools Banner */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-dark-panel via-dark-surface to-dark-panel p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 bottom-0 w-80 h-80 bg-cyber-violet/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold font-mono text-cyber-cyan uppercase tracking-wider flex items-center space-x-2">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Interactive Field Suite</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Live Attenuation, Radar Separation & Testing Suite
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                Utilize our live RF cable loss simulator, transmitter separation clearance matrix, step-by-step crimping checklists, and synchronized original PDF viewer.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => setActiveTab('tools')}
                className="w-full flex items-center justify-center space-x-2 rounded-2xl bg-gradient-to-r from-cyber-cyan to-cyber-blue px-6 py-3.5 text-sm font-bold text-dark-void shadow-glow-cyan hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all font-display"
              >
                <Wrench className="h-4 w-4" />
                <span>Launch Engineering Tools</span>
              </button>

              <button
                onClick={() => setActiveTab('glossary')}
                className="w-full flex items-center justify-center space-x-2 rounded-2xl border border-white/10 bg-dark-surface/90 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:border-cyber-violet/40 hover:bg-dark-elevated transition-all"
              >
                <Layers className="h-4 w-4 text-cyber-violet" />
                <span>Technical Glossary (50+ Terms)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
