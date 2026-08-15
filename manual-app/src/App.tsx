import React from 'react';
import { ManualProvider, useManual } from './context/ManualContext';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { LandingHero } from './components/LandingHero';
import { ManualViewer } from './components/ManualViewer';
import { PdfSplitView } from './components/PdfSplitView';
import { ToolsView } from './components/tools/ToolsView';
import { GlossaryViewer } from './components/tools/GlossaryViewer';
import { SearchModal } from './components/SearchModal';
import { ImageLightbox } from './components/ImageLightbox';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  const { activeTab, pdfSplitView } = useManual();

  return (
    <div className="min-h-screen flex flex-col bg-dark-void text-slate-100 font-sans selection:bg-cyber-cyan selection:text-dark-void relative overflow-x-hidden">
      
      {/* Ambient background light orbs */}
      <div className="fixed inset-0 bg-cyber-grid pointer-events-none opacity-40 z-0" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-ambient-aurora pointer-events-none z-0 blur-3xl" />
      <div className="fixed top-1/3 -right-60 w-[500px] h-[500px] bg-cyber-violet/5 rounded-full pointer-events-none z-0 blur-3xl" />
      <div className="fixed bottom-10 -left-60 w-[500px] h-[500px] bg-cyber-cyan/5 rounded-full pointer-events-none z-0 blur-3xl" />

      {/* Top Navbar */}
      <div className="relative z-40">
        <Header />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        {activeTab === 'landing' && <LandingHero />}

        {activeTab === 'manual' && (
          <div className="flex flex-col lg:flex-row w-full min-h-[calc(100vh-4rem)]">
            <Sidebar />
            <ManualViewer />
            {pdfSplitView && <PdfSplitView />}
          </div>
        )}

        {activeTab === 'tools' && <ToolsView />}

        {activeTab === 'glossary' && <GlossaryViewer />}
      </main>

      {/* Footer */}
      <div className="relative z-20">
        <Footer />
      </div>

      {/* Global Modals */}
      <SearchModal />
      <ImageLightbox />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ManualProvider>
      <AppContent />
    </ManualProvider>
  );
};

export default App;
