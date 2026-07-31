import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/common/SectionTitle';
import { PartnerCard } from '../components/cards/PartnerCard';
import { Button } from '../components/common/Button';
import { TECH_PARTNERS } from '../data/companyData';
import { ShieldCheck, Award, Layers, CheckCircle2, ArrowRight, Headphones } from 'lucide-react';
import { PageBackgroundEffects } from '../components/common/PageBackgroundEffects';

interface PartnersPageProps {
  onOpenQuoteModal?: (solutionId?: string) => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="space-y-28 pb-28">
      {/* PAGE HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#EAF4FF]/40 to-[#F8FAFC] py-16 sm:py-20 border-b border-[#E2E8F0]">
        <PageBackgroundEffects />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
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

  <div className="relative overflow-hidden rounded-[32px] border border-[#D8E7FA] bg-gradient-to-br from-white via-[#F8FBFF] to-[#EEF6FF] shadow-xl">

    {/* Background Glow */}
    <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
    <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-10 sm:p-16">

      {/* LEFT */}
      <div>

        <span className="inline-flex rounded-full bg-[#EAF4FF] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0A66C2]">
          Let's Build Together
        </span>

        <h2 className="mt-6 text-4xl font-black leading-tight text-[#1E293B]">
          Ready to Modernize Your
          <span className="text-[#0A66C2]"> IT Infrastructure?</span>
        </h2>

        <p className="mt-6 text-lg leading-8 text-[#64748B]">
          Partner with Arsenal Infosolutions to design secure, scalable and future-ready enterprise technology solutions tailored for your organization.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">

          <Link to="/request-demo">
            <Button size="lg">
              Request Consultation
            </Button>
          </Link>

          <Link to="/contact">
            <Button variant="outline" size="lg">
              Contact Architects
            </Button>
          </Link>

        </div>

      </div>

      {/* RIGHT */}

      <div className="space-y-5">

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 flex items-center gap-4 shadow-sm">

          <Award className="w-10 h-10 text-[#0A66C2]" />

          <div>
            <h3 className="font-bold text-[#1E293B]">
              Certified Experts
            </h3>

            <p className="text-sm text-[#64748B]">
              Experienced architects and certified deployment specialists.
            </p>
          </div>

        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 flex items-center gap-4 shadow-sm">

          <ShieldCheck className="w-10 h-10 text-[#0A66C2]" />

          <div>
            <h3 className="font-bold text-[#1E293B]">
              Trusted OEM Partnerships
            </h3>

            <p className="text-sm text-[#64748B]">
              Cisco, Dell, Microsoft, HPE, VMware and more.
            </p>
          </div>

        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 flex items-center gap-4 shadow-sm">

          <Headphones className="w-10 h-10 text-[#0A66C2]" />

          <div>
            <h3 className="font-bold text-[#1E293B]">
              Pan-India Enterprise Support
            </h3>

            <p className="text-sm text-[#64748B]">
              24×7 support, deployment and managed services nationwide.
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
    </div>
  );
};
