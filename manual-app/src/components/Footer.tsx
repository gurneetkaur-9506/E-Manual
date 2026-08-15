import React from 'react';
import { Radio, PhoneCall, Mail, Globe, Shield, ExternalLink, Sparkles, Cpu, BookOpen, Layers, Wrench } from 'lucide-react';
import { manualMetadata } from '../data/manualMetadata';
import { useManual } from '../context/ManualContext';

export const Footer: React.FC = () => {
  const { setActiveTab, navigateToSection } = useManual();

  return (
    <footer className="border-t border-white/10 bg-dark-base text-slate-400 text-xs select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/[0.08]">
          
          {/* Col 1: System Info & Revision */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-dark-surface to-dark-elevated border border-white/10 text-cyber-cyan shadow-glow-cyan">
                <Radio className="h-4 w-4" />
              </div>
              <span className="font-display font-extrabold text-base text-white tracking-wider">
                VERIPOS
              </span>
              <span className="text-[10px] font-mono text-cyber-cyan bg-cyber-cyan/10 px-2 py-0.5 rounded-full border border-cyber-cyan/30">
                {manualMetadata.revision}
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Official technical standard for the installation of marine GNSS, L-band, and MF antennas, coaxial cabling, and RF termination on DP vessels.
            </p>
            <div className="text-[11px] font-mono text-slate-500">
              Doc Ref: {manualMetadata.documentRef}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center space-x-2">
              <BookOpen className="h-3.5 w-3.5 text-cyber-cyan" />
              <span>Core Sections</span>
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigateToSection('chapter-1', 'section-1-1')}
                  className="hover:text-cyber-cyan transition-colors"
                >
                  Chapter 1: Introduction & Standards
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection('chapter-6', 'section-6-1')}
                  className="hover:text-cyber-cyan transition-colors"
                >
                  Chapter 6: Antenna Siting & Radar Separation
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection('chapter-8', 'section-8-1')}
                  className="hover:text-cyber-cyan transition-colors"
                >
                  Chapter 8: Coaxial Cable Selection & Loss
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection('chapter-8', 'section-8-6-1')}
                  className="hover:text-cyber-cyan transition-colors"
                >
                  Chapter 8.6: Connector Termination Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection('chapter-7', 'section-7-1-1')}
                  className="hover:text-cyber-cyan transition-colors"
                >
                  Chapter 7: Real-World Installation Defects
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Interactive Engineering Tools */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center space-x-2">
              <Wrench className="h-3.5 w-3.5 text-cyber-violet" />
              <span>Engineering Tools</span>
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab('tools')}
                  className="hover:text-cyber-violet transition-colors"
                >
                  RF Cable Loss & Length Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('tools')}
                  className="hover:text-cyber-violet transition-colors"
                >
                  Transmitter Clearance Distance Matrix
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('tools')}
                  className="hover:text-cyber-violet transition-colors"
                >
                  Connector Crimping Checklist
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('glossary')}
                  className="hover:text-cyber-violet transition-colors"
                >
                  Technical Glossary & Abbreviations
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: 24/7 Global Field Support Hotline */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center space-x-2">
              <PhoneCall className="h-3.5 w-3.5 text-cyber-emerald" />
              <span>24/7 Global Support</span>
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              For active vessel troubleshooting, line-of-sight analysis, and RF verification:
            </p>
            <div className="space-y-2 font-mono">
              <a
                href={`tel:${manualMetadata.supportPhone.replace(/\s+/g, '')}`}
                className="flex items-center space-x-2 text-cyber-emerald font-bold hover:underline"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                <span>{manualMetadata.supportPhone}</span>
              </a>
              <a
                href={`mailto:${manualMetadata.supportEmail}`}
                className="flex items-center space-x-2 text-slate-300 hover:text-white hover:underline"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>{manualMetadata.supportEmail}</span>
              </a>
              <a
                href="https://www.veripos.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-slate-400 hover:text-cyber-cyan hover:underline"
              >
                <Globe className="h-3.5 w-3.5" />
                <span>www.veripos.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © 2024 {manualMetadata.publisher}. All rights reserved. Precision Marine Navigation.
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 text-cyber-emerald">
              <span className="h-2 w-2 rounded-full bg-cyber-emerald animate-pulse" />
              <span>STANDARDS COMPLIANT (IEC 60945 / IMO A.694)</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
