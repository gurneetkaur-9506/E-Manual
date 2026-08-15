import React from 'react';
import { Radio, PhoneCall, Mail, Globe, Shield, BookOpen, ExternalLink, FileCheck } from 'lucide-react';
import { manualMetadata } from '../data/manualMetadata';
import { useManual } from '../context/ManualContext';
import { chaptersData } from '../data/manualContent';

export const Footer: React.FC = () => {
  const { navigateToSection, setActiveTab } = useManual();

  return (
    <footer className="border-t border-neutral-800 bg-black text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Document Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black font-bold">
                <Radio className="h-4 w-4" />
              </div>
              <span className="font-display font-bold text-base text-white">
                VERIPOS
              </span>
            </div>
            <p className="text-[11px] text-neutral-400 leading-relaxed">
              Official Interactive E-Manual for Antenna and Coaxial Cable Installation on marine and offshore dynamic positioning vessels.
            </p>
            <div className="pt-1 font-mono text-[10px] text-neutral-500 space-y-0.5">
              <div>Doc Ref: {manualMetadata.documentRef}</div>
              <div>Revision: {manualMetadata.revision} • {manualMetadata.date}</div>
              <div>Total Pages: {manualMetadata.totalPages} Pages</div>
            </div>
          </div>

          {/* Col 2: Quick Chapters (1-5) */}
          <div className="space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Manual Sections (1-5)
            </span>
            <ul className="space-y-1 text-[11px]">
              {chaptersData.slice(0, 5).map((ch) => (
                <li key={ch.id}>
                  <button
                    onClick={() => navigateToSection(ch.id, ch.sections[0]?.id)}
                    className="hover:text-white transition text-left truncate max-w-full"
                  >
                    Ch {ch.chapterNumber}: {ch.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Chapters (6-9) & Tools */}
          <div className="space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Manual Sections (6-9) & Tools
            </span>
            <ul className="space-y-1 text-[11px]">
              {chaptersData.slice(5).map((ch) => (
                <li key={ch.id}>
                  <button
                    onClick={() => navigateToSection(ch.id, ch.sections[0]?.id)}
                    className="hover:text-white transition text-left truncate max-w-full"
                  >
                    Ch {ch.chapterNumber}: {ch.title}
                  </button>
                </li>
              ))}
              <li className="pt-1.5 border-t border-neutral-800">
                <button
                  onClick={() => setActiveTab('tools')}
                  className="text-neutral-300 hover:text-white font-semibold flex items-center space-x-1"
                >
                  <span>RF Engineering Calculators</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: 24/7 Global Support */}
          <div className="space-y-2.5 bg-neutral-950 p-4 rounded-2xl border border-neutral-800">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center space-x-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>24/7 Global Support</span>
            </span>
            <div className="space-y-2 text-[11px]">
              <a
                href={`tel:${manualMetadata.supportPhone.replace(/\s+/g, '')}`}
                className="flex items-center space-x-2 text-neutral-300 hover:text-white font-mono"
              >
                <PhoneCall className="h-3.5 w-3.5 text-neutral-400" />
                <span>{manualMetadata.supportPhone}</span>
              </a>
              <a
                href={`mailto:${manualMetadata.supportEmail}`}
                className="flex items-center space-x-2 text-neutral-300 hover:text-white font-mono"
              >
                <Mail className="h-3.5 w-3.5 text-neutral-400" />
                <span>{manualMetadata.supportEmail}</span>
              </a>
              <a
                href={manualMetadata.supportHelpdesk}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-neutral-300 hover:text-white"
              >
                <Globe className="h-3.5 w-3.5 text-neutral-400" />
                <span>help.veripos.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Compliance */}
        <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} {manualMetadata.publisher}. All rights reserved. Single source of truth preserved from AB-V-MA-00601_RevA5.
          </div>
          <div className="flex items-center space-x-4">
            <span>IEC 60092-352</span>
            <span>•</span>
            <span>IEC 60945</span>
            <span>•</span>
            <span>NMEA 0400</span>
            <span>•</span>
            <span>IMO A.813(19)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
