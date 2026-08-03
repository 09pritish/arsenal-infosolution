import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { SectionTitle } from '../components/common/SectionTitle';
import { Counter } from '../components/common/Counter';
import { SolutionCard } from '../components/cards/SolutionCard';
import { IndustryCard } from '../components/cards/IndustryCard';
import { TestimonialCard } from '../components/cards/TestimonialCard';
import { FAQAccordion } from '../components/common/FAQ';
import { PageBackgroundEffects } from '../components/common/PageBackgroundEffects';
import {
  SOLUTIONS,
  INDUSTRIES,
  STATISTICS,
  VALUE_PROPOSITIONS,
  TESTIMONIALS,
  TECH_PARTNERS,
  FAQS,
  COMPANY_INFO
} from '../data/companyData';
import {
  ArrowRight,
  ShieldCheck,
  Server,
  Layers,
  Award,
  Compass,
  CheckCircle2,
  Headset,
  Check,
  Building2,
  Zap,
  Sparkles
} from 'lucide-react';

interface HomePageProps {
  onOpenQuoteModal?: (solutionId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  const [isPartnerPaused, setIsPartnerPaused] = useState(false);
  const [isClientPaused, setIsClientPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const CLIENTS = [
    { id: 'becil', name: 'BECIL', logo: 'becil.png' },
    { id: 'cbitc', name: 'CBITC', logo: 'cbitc.png' },
    { id: 'cci', name: 'CCI', logo: 'cci.png' },
    { id: 'dtpi', name: 'DTPI', logo: 'dtpi.png' },
    { id: 'gem', name: 'GEM', logo: 'gem.png' },
    { id: 'gmda', name: 'GMDA', logo: 'gmda.png' },
    { id: 'iasri', name: 'IASRI', logo: 'iasri.png' },
    { id: 'iims', name: 'IIMS', logo: 'iims.png' },
    { id: 'iitd', name: 'IIT Delhi', logo: 'iitd.png' },
    { id: 'iiti', name: 'IIT Indore', logo: 'iiti.png' },
    { id: 'iitr', name: 'IIT Roorkee', logo: 'iitr.png' },
    { id: 'imd', name: 'IMD', logo: 'imd.png' },
    { id: 'maitb', name: 'MAITB', logo: 'maitb.png' }
  ];

  const partnerItems = [...TECH_PARTNERS, ...TECH_PARTNERS];
  const clientItems = [...CLIENTS, ...CLIENTS];
  const partnerMarqueeDuration = 38 * (partnerItems.length / clientItems.length);

  const titleAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="space-y-20 pb-20">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#EAF4FF]/40 to-[#F8FAFC] pt-8 pb-20 md:py-20 border-b border-[#E2E8F0]">
        <PageBackgroundEffects />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-12">
            {/* Left Content */}
            <div className="space-y-6 text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#EAF4FF] text-[#0A66C2] border border-blue-200"
              >
                <Zap className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>Arsenal Infosolutions Pvt. Ltd.</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[#1E293B] tracking-tight leading-[1.15]"
              >
                Empowering Business by{' '}
                <span className="text-[#0A66C2] underline decoration-blue-200 underline-offset-8">
                  Balancing Today
                </span>{' '}
                & Preparing for Tomorrow.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg font-body text-[#475569] leading-relaxed max-w-2xl"
              >
                System integration for Cloud, Networks, Collaboration, and Workplace Automation.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
              >
                <Link to="/request-demo" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  className="w-full"
                >
                  Request a Demo
                </Button>
              </Link>

                <Link to="/solutions">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Explore Solutions
                  </Button>
                </Link>
              </motion.div>

              {/* Active Numbers */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8"
              >
                <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 text-center shadow-sm">
                  <p className="text-3xl font-heading font-extrabold text-[#0A66C2]">
                    <Counter value={12} suffix="+" />
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#475569]">Years active</p>
                </div>
                <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 text-center shadow-sm">
                  <p className="text-3xl font-heading font-extrabold text-[#0A66C2]">
                    <Counter value={300} suffix="+" />
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#475569]">Projects delivered</p>
                </div>
                <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 text-center shadow-sm">
                  <p className="text-3xl font-heading font-extrabold text-[#0A66C2]">
                    <Counter value={80} suffix="+" />
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#475569]">Enterprise clients</p>
                </div>
                <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 text-center shadow-sm">
                  <p className="text-3xl font-heading font-extrabold text-[#0A66C2]">
                    <Counter value={24} suffix="/7" />
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#475569]">NOC and SOC</p>
                </div>
              </motion.div>

              {/* Trust Highlights */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="pt-6 border-t border-[#E2E8F0] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-body font-semibold text-[#1E293B]"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A66C2]" />
                  <span>Cloud & Enterprise Networks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A66C2]" />
                  <span>Workplace Automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A66C2]" />
                  <span>Technically Certified Team</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* A SMALL BRIEF ABOUT ARSENAL SECTION */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="relative overflow-hidden rounded-[32px] border border-[#D8E7FA] bg-gradient-to-br from-white via-[#F8FBFF] to-[#EEF6FF] shadow-xl">
    {/* Background Glow */}
    <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
    <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

    <div className="relative z-10 p-8 sm:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-12 text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.18em] text-[#0A66C2] bg-[#EAF4FF] border border-blue-200 mb-6">
            Company Profile
          </span>

          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#1E293B] leading-tight mb-8">
            A Small Brief About Arsenal
          </h2>
          <p className="text-[#475569] font-body text-base sm:text-lg leading-relaxed text-left sm:text-center">
            Arsenal Infosolutions is one of the leading and the fastest growing system integration firm in India. The company provides a solution centric approach built around future ready technology areas of Cloud, Enterprise Networks, Collaboration, Workplace Automation and Knowledge Management. Customer satisfaction is the key to all our endeavours and we strive to exceed customer expectations through our experienced technically certified team.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ARSENAL CORE SOLUTIONS SECTION */}
      <section className="bg-white py-16 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Technology Practice"
            title="Arsenal Core"
            highlightText="Solutions"
            subtitle="Solution-centric approaches built around future-ready technology areas."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOLUTIONS.map((solution) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                onQuoteClick={onOpenQuoteModal}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0A192F] text-white py-20">
        {/* Animated Background */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {/* Left Glow */}
  <div className="bg-glow bg-glow-left" />

  {/* Right Glow */}
  <div className="bg-glow bg-glow-right" />

  {/* Grid */}
  <div className="enterprise-grid" />

  {/* Floating Particles */}

  {[...Array(18)].map((_, i) => (
    <span
      key={i}
      className="floating-particle"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${10 + Math.random() * 10}s`
      }}
    />
  ))}

</div>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-12 -top-12 h-72 w-72 rounded-full bg-blue-500/8 blur-3xl animate-bg-float" />
          <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-sky-500/8 blur-3xl animate-bg-float" style={{ animationDelay: '2s' }} />
          {!shouldReduceMotion && (
            <motion.span
              className="absolute left-1/2 top-16 h-1.5 w-1.5 rounded-full bg-blue-300/70 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              animate={{ x: ['0%', '120%', '0%'], y: [0, -20, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
          )}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={titleAnimation}
>
  <p className="text-xs font-semibold uppercase tracking-widest text-[#0A66C2] mb-4">
    Technology Partners
  </p>
  <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mb-3">
    Trusted Technology Partners
  </h2>
  <p className="text-sm text-slate-300 max-w-3xl">
    World-class OEM technology partners that help us deliver secure, scalable enterprise solutions.
  </p>
</motion.div>

          {shouldReduceMotion ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-4">
              {TECH_PARTNERS.map((partner) => (
                <div
                  key={partner.id}
                  className="relative flex h-[170px] w-[190px] flex-col items-center justify-center rounded-[18px] border border-white/8 bg-white/5 px-3 py-3 text-center backdrop-blur-xl"
                >
                  
                  <div className="flex h-[130px] w-[130px] items-center justify-center rounded-xl bg-white p-4">
                    <img
                      src={`/partners/${partner.logoImage?.split('/').pop() ?? 'default.png'}`}
                      alt={partner.name}
                      className="max-h-[76px] max-w-full object-contain"
                    />
                  </div>
                  <p className="mt-2 text-base font-semibold text-slate-100">{partner.name}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0A192F] to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0A192F] to-transparent pointer-events-none" />
              <div
                className="premium-marquee-track rounded-[24px] border border-white/10 bg-slate-950/60 px-4 py-4 shadow-[0_30px_80px_rgba(15,23,42,0.35)]"
                onMouseEnter={() => setIsPartnerPaused(true)}
                onMouseLeave={() => setIsPartnerPaused(false)}
              >
                <div
                  className={`premium-marquee-inner ${isPartnerPaused ? 'paused' : ''}`}
                  style={{ animation: `marquee ${partnerMarqueeDuration}s linear infinite` }}
                >
                  {partnerItems.map((partner, idx) => (
                    <div
                      key={`partner-${partner.id}-${idx}`}
                      className="group relative flex h-[170px] w-[190px] flex-col items-center justify-center rounded-[18px] border border-white/8 bg-white/5 px-3 py-3 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-2.5 hover:scale-[1.03] hover:border-blue-400/40 hover:shadow-[0_18px_50px_rgba(59,130,246,0.16)]"
                    >
                      
                      <div className="flex h-[130px] w-[130px] items-center justify-center rounded-xl bg-white p-4">
                        <img
                          src={`/partners/${partner.logoImage?.split('/').pop() ?? 'default.png'}`}
                          alt={partner.name}
                          className="max-h-[76px] max-w-full object-contain"
                        />
                      </div>
                      <p className="mt-2 text-base font-semibold text-slate-100">{partner.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={titleAnimation}
>
  <p className="text-xs font-semibold uppercase tracking-widest text-violet-300 mb-4">
    Our Clients
  </p>
  <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mb-3">
    Enterprise Clients
  </h2>
  <p className="text-sm text-slate-300 max-w-3xl">
    A selection of organizations that trust Arsenal Infosolutions for technology modernization and digital transformation.
  </p>
</motion.div>

          {shouldReduceMotion ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-4">
              {CLIENTS.map((client) => (
                <div
                  key={client.id}
                  className="relative flex h-[170px] w-[190px] flex-col items-center justify-center rounded-[18px] border border-white/8 bg-white/5 px-3 py-3 text-center backdrop-blur-xl"
                >
                  
                  <div className="flex h-[130px] w-[130px] items-center justify-center rounded-xl bg-white p-4">
                    <img
                      src={`/clients/${client.logo}`}
                      alt={client.name}
                      className="max-h-[76px] max-w-full object-contain"
                    />
                  </div>
                  <p className="mt-2 text-base font-semibold text-slate-100">{client.name}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0A192F] to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0A192F] to-transparent pointer-events-none" />
              <div
                className="premium-marquee-track rounded-[24px] border border-white/10 bg-slate-950/60 px-4 py-4 shadow-[0_30px_80px_rgba(15,23,42,0.35)]"
                onMouseEnter={() => setIsClientPaused(true)}
                onMouseLeave={() => setIsClientPaused(false)}
              >
                <div className={`premium-marquee-inner reverse ${isClientPaused ? 'paused' : ''}`}>
                  {clientItems.map((client, idx) => (
                    <div
                      key={`client-${client.id}-${idx}`}
                      className="group relative flex h-[170px] w-[190px] flex-col items-center justify-center rounded-[18px] border border-white/8 bg-white/5 px-3 py-3 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-2.5 hover:scale-[1.03] hover:border-blue-400/40 hover:shadow-[0_18px_50px_rgba(59,130,246,0.16)]"
                    >
                      
                      <div className="flex h-[130px] w-[130px] items-center justify-center rounded-xl bg-white p-4">
                        <img
                          src={`/clients/${client.logo}`}
                          alt={client.name}
                          className="max-h-[70px] max-w-full object-contain"
                        />
                      </div>
                      <p className="mt-2 text-base font-semibold text-slate-100">{client.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CUSTOMER SEGMENTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Market Footprint"
          title="Customer Segment That Have"
          highlightText="Benefitted from Arsenal"
          subtitle="Delivering customer satisfaction across diverse industry verticals in India."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind) => (
            <IndustryCard key={ind.id} industry={ind} />
          ))}
        </div>
      </section>

      {/* BOTTOM CONTACT SUMMARY & DEMO REQUEST BANNER */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="relative overflow-hidden rounded-[32px] border border-[#D8E7FA] bg-gradient-to-br from-white via-[#F8FBFF] to-[#EEF6FF] shadow-xl">
    {/* Background Glow */}
    <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
    <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

    <div className="relative z-10 p-8 sm:p-12 text-center space-y-6">
      <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0A66C2] bg-[#EAF4FF] px-3.5 py-1 rounded-full border border-blue-200">
        Get in Touch
      </span>

      <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#1E293B] max-w-3xl mx-auto leading-tight">
        Ready to Partner with Arsenal Infosolutions?
      </h2>

      <div className="text-[#475569] font-body text-sm sm:text-base max-w-2xl mx-auto space-y-1">
        <p className="font-semibold text-[#1E293B]">{COMPANY_INFO.address}</p>
        <p>Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#0A66C2] underline">{COMPANY_INFO.email}</a></p>
        <p>Phone: {COMPANY_INFO.phone} | Toll Free: {COMPANY_INFO.tollFree}</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
        <Link to="/request-demo" className="w-full sm:w-auto">
          <Button
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            className="w-full"
          >
            Request a Demo
          </Button>
        </Link>

        <Link to="/contact">
          <Button variant="outline" size="lg">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};
