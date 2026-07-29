import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { QuoteModal } from '../common/QuoteModal';
import ScrollToTop from '../common/ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedSolutionId, setSelectedSolutionId] = useState<string | undefined>('datacenter-cloud');

  const handleOpenQuoteModal = (solutionId?: string) => {
    if (solutionId) {
      setSelectedSolutionId(solutionId);
    }
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#475569] font-body selection:bg-[#0A66C2]/15 selection:text-[#0A66C2]">
      <ScrollToTop />
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      <main className="flex-grow pt-24 sm:pt-28">
        {React.cloneElement(children as React.ReactElement<any>, {
          onOpenQuoteModal: handleOpenQuoteModal,
        })}
      </main>

      <Footer />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedSolutionId={selectedSolutionId}
      />
    </div>
  );
};
