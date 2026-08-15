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
  FileCheck
} from 'lucide-react';
import { useManual } from '../context/ManualContext';
import { manualMetadata } from '../data/manualMetadata';

export const LandingHero: React.FC = () => {
  const { navigateToSection, setActiveTab } = useManual();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // High-tech interactive Canvas radar / constellation visualizer in sleek monochrome/matrix colors
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

    // Particle nodes representing GNSS & L-band satellites
    const satellites = Array.from({ length: 24 }, (_, i) => ({
      angle: (i / 24) * Math.PI * 2,
      orbitRadius: 100 + (i % 3) * 60,
      speed: 0.002 + (i % 3) * 0.001,
      size: 2.5 + (i % 2),
      color: i % 4 === 0 ? '#ffffff' : i % 4 === 1 ? '#a1a1aa' : i % 4 === 2 ? '#10b981' : '#f59e0b',
      pulse: Math.random() * Math.PI
    }));

    let radarAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw orbital rings
      ctx.lineWidth = 1;
      [100, 160, 220].forEach((r) => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.stroke();
      });

      // Radar sweep cone
      radarAngle += 0.015;
      const gradient = ctx.createConicGradient(radarAngle, centerX, centerY);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
      gradient.addColorStop(0.15, 'rgba(255, 255, 255, 0.0)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 240, 0, Math.PI * 2);
      ctx.fill();

      // Center Antenna Node (V560)
      ctx.beginPath();
      ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#ffffff';
      ctx.shadowBlur = 15;
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
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.06 + Math.sin(sat.pulse) * 0.03})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Satellite body
        ctx.beginPath();
        ctx.arc(x, y, sat.size, 0, Math.PI * 2);
        ctx.fillStyle = sat.color;
        ctx.shadowColor = sat.color;
        ctx.shadowBlur = 10;
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
    <div className="relative overflow-hidden bg-black text-white">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial-gradient pointer-events-none" />

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left z-10">
            
            {/* Document badge */}
            <div className="inline-flex items-center space-x-2 rounded-full border border-neutral-700 bg-neutral-900 px-3.5 py-1 text-xs font-semibold text-neutral-200 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Official Technical Manual • {manualMetadata.documentRef}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
              Marine Antenna & <br />
              <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                Coaxial Cable Installation
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
              Complete, interactive technical specification and field deployment manual for Veripos GNSS, L-band, and MF marine positioning systems. Master antenna placement, RF loss calculation, cable termination, and 3-layer weatherproofing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => navigateToSection('chapter-1', 'section-1-1')}
                className="flex items-center space-x-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black shadow-lg hover:bg-neutral-200 transition-all transform hover:-translate-y-0.5"
              >
                <BookOpen className="h-4 w-4" />
                <span>Read Full E-Manual</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => setActiveTab('tools')}
                className="flex items-center space-x-2 rounded-xl border border-neutral-800 bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white hover:border-neutral-600 hover:bg-neutral-800 transition-all backdrop-blur-md"
              >
                <Wrench className="h-4 w-4 text-neutral-300" />
                <span>Interactive Calculators</span>
              </button>
            </div>

            {/* Quick stats pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-neutral-800">
              <div className="glass-panel p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                <div className="text-2xl font-bold font-mono text-white">43</div>
                <div className="text-[11px] text-neutral-400">Complete Pages</div>
              </div>
              <div className="glass-panel p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                <div className="text-2xl font-bold font-mono text-white">4 GNSS</div>
                <div className="text-[11px] text-neutral-400">GPS, GLO, GAL, BDS</div>
              </div>
              <div className="glass-panel p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                <div className="text-2xl font-bold font-mono text-emerald-400">10 dB</div>
                <div className="text-[11px] text-neutral-400">Max Loss at 1.5 GHz</div>
              </div>
              <div className="glass-panel p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                <div className="text-2xl font-bold font-mono text-amber-400">3-Layer</div>
                <div className="text-[11px] text-neutral-400">Weatherproof Seal</div>
              </div>
            </div>
          </div>

          {/* Right Visual 3D / Interactive Canvas Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[420px] rounded-2xl border border-neutral-800 bg-neutral-950/90 p-4 backdrop-blur-xl overflow-hidden shadow-2xl">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
            
            {/* Overlay card info */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl border border-neutral-800 backdrop-blur-xl bg-black/90">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Veripos V560 Multi-GNSS Node
                  </span>
                </div>
                <span className="text-[10px] font-mono text-neutral-300 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-700">
                  50Ω • IP69K
                </span>
              </div>
              <p className="text-[11px] text-neutral-300 mt-1.5">
                Simultaneous GPS L1/L2/L5, GLONASS, Galileo, BeiDou & L-band tracking with integrated 40 dB LNA.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Pillar Showcase */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-neutral-800">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
            Installation Architecture
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2">
            The 4 Pillars of Marine RF Excellence
          </h3>
          <p className="text-sm sm:text-base text-neutral-400 mt-3">
            Every step of antenna positioning, cable selection, connector crimping, and weatherproofing must adhere to Veripos specifications to guarantee high-precision dynamic positioning.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Antenna Mast Placement */}
          <div 
            onClick={() => navigateToSection('chapter-6', 'section-6-1')}
            className="group rounded-2xl border border-neutral-800 bg-neutral-950 hover:border-neutral-600 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
          >
            <div className="relative h-48 overflow-hidden bg-black">
              <img 
                src="/assets/hero/hero_antenna_mast.png" 
                alt="Antenna Mast Installation" 
                className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-3 left-3 bg-black/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-neutral-700 text-[10px] font-bold text-white">
                Chapter 6
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-white group-hover:text-neutral-200 transition-colors">
                  1. Antenna Placement
                </h4>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  360° unobstructed horizon view down to 5° elevation, rigid stainless steel brackets, and safe separation from marine radar scanners.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-semibold text-neutral-300">
                <span>View Guidelines</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 2: Coaxial Cable Engineering */}
          <div 
            onClick={() => navigateToSection('chapter-8', 'section-8-1')}
            className="group rounded-2xl border border-neutral-800 bg-neutral-950 hover:border-neutral-600 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
          >
            <div className="relative h-48 overflow-hidden bg-black">
              <img 
                src="/assets/hero/hero_cable_cutaway.png" 
                alt="Coaxial Cable Cutaway" 
                className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-3 left-3 bg-black/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-neutral-700 text-[10px] font-bold text-white">
                Chapter 8
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-white group-hover:text-neutral-200 transition-colors">
                  2. Coaxial Cabling
                </h4>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Times Microwave LMR-400, LMR-240 & CommScope Heliax LDF4-50A. Adhering strictly to the 10 dB maximum loss limit at 1.5 GHz.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-semibold text-neutral-300">
                <span>Loss Specs</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 3: Connector Termination */}
          <div 
            onClick={() => navigateToSection('chapter-8', 'section-8-6-1')}
            className="group rounded-2xl border border-neutral-800 bg-neutral-950 hover:border-neutral-600 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
          >
            <div className="relative h-48 overflow-hidden bg-black">
              <img 
                src="/assets/hero/hero_coaxial_connector.png" 
                alt="Coaxial Connectors" 
                className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-3 left-3 bg-black/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-neutral-700 text-[10px] font-bold text-white">
                Chapter 8.6
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-white group-hover:text-neutral-200 transition-colors">
                  3. Precision Termination
                </h4>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Step-by-step procedures for EZ-400-NMH-X crimp connectors, CST prep tools, center conductor deburring, and Heliax positive stop.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-semibold text-neutral-300">
                <span>Step-by-Step Guide</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 4: Marine Installation Overview */}
          <div 
            onClick={() => navigateToSection('chapter-8', 'section-8-6-5')}
            className="group rounded-2xl border border-neutral-800 bg-neutral-950 hover:border-neutral-600 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
          >
            <div className="relative h-48 overflow-hidden bg-black">
              <img 
                src="/assets/hero/hero_installation_overview.jpg" 
                alt="Marine Installation Workflow" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-3 left-3 bg-black/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-neutral-700 text-[10px] font-bold text-white">
                Workflow
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-white group-hover:text-neutral-200 transition-colors">
                  4. Weatherproofing & Seal
                </h4>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  3-layer waterproofing technique (Scotch 33+ & Scotch 23 self-amalgamating tape) with drip loops and Roxtec transit frame glands.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-semibold text-neutral-300">
                <span>Weatherproofing</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Quick Jump & Tools Banner */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold font-mono text-neutral-400 uppercase tracking-wider">
                Interactive Engineering Tools
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Calculate Attenuation, Safe Distances & Test Cables Live
              </h3>
              <p className="text-sm text-neutral-300 max-w-2xl">
                Use our built-in RF loss calculator, safe radar separation matrix, interactive termination checklist, and synchronized PDF page split-viewer.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => setActiveTab('tools')}
                className="w-full flex items-center justify-center space-x-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-black hover:bg-neutral-200 transition shadow-lg"
              >
                <Wrench className="h-4 w-4" />
                <span>Launch Engineering Tools</span>
              </button>

              <button
                onClick={() => setActiveTab('glossary')}
                className="w-full flex items-center justify-center space-x-2 rounded-xl border border-neutral-800 bg-neutral-900 px-5 py-3 text-sm font-semibold text-neutral-200 hover:bg-neutral-800 transition"
              >
                <Layers className="h-4 w-4 text-neutral-300" />
                <span>Search Glossary (50+ Terms)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
