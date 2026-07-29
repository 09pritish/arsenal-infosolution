import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/common/SectionTitle';
import { PartnerCard } from '../components/cards/PartnerCard';
import { Button } from '../components/common/Button';
import { TECH_PARTNERS } from '../data/companyData';
import { ShieldCheck, Award, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

interface PartnersPageProps {
  onOpenQuoteModal?: (solutionId?: string) => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="space-y-28 pb-28">
      {/* PAGE HERO */}
      <section className="bg-gradient-to-b from-[#EAF4FF]/60 via-[#F8FAFC] to-[#F8FAFC] py-16 sm:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0A66C2] bg-[#EAF4FF] px-3 py-1 rounded-full border border-blue-200">
            Arsenal Infosolutions
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#1E293B] tracking-tight">
            <span className="text-[#0A66C2]">Partners</span>
          </h1>
          <p className="text-base sm:text-lg font-body text-[#475569] max-w-3xl mx-auto leading-relaxed">
            Our technology partners.
          </p>

        </div>
      </section>

      {/* PARTNER CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECH_PARTNERS.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
      </section>

      {/* OEM ADVANTAGE HIGHLIGHTS */}
      <section className="bg-white py-16 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Tier-1 OEM Value"
            title="What Our Certified Partnerships Mean for"
            highlightText="Your Organization."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#EAF4FF] text-[#0A66C2] flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1E293B] mb-2">
                Priority OEM Supply Chain
              </h3>
              <p className="text-sm font-body text-[#475569] leading-relaxed">
                Direct allocation channels with Dell, Cisco, HPE, and Fortinet minimize lead times for mission-critical enterprise hardware deployments.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#EAF4FF] text-[#0A66C2] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1E293B] mb-2">
                100% Genuine OEM Warranty
              </h3>
              <p className="text-sm font-body text-[#475569] leading-relaxed">
                All components are sourced directly from authorized distribution with valid OEM enterprise support contracts and SLA guarantees.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#EAF4FF] text-[#0A66C2] flex items-center justify-center mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1E293B] mb-2">
                Joint Architectural Validation
              </h3>
              <p className="text-sm font-body text-[#475569] leading-relaxed">
                Our pre-sales engineers collaborate directly with OEM principal architects to validate High-Level Designs (HLD) prior to purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A192F] text-white rounded-2xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold">
            Need Multi-Vendor Hardware Sourcing & Integration?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">
            Consult with our pre-sales architects to combine Cisco networking, Dell compute, and Fortinet security into a single unified BOM.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/request-demo">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Request Multi-Vendor Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
