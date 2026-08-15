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
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Top Navbar */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
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
      <Footer />

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
