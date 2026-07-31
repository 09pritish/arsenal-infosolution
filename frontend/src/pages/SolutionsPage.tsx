import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SectionTitle } from '../components/common/SectionTitle';
import { PageHero } from '../components/common/PageHero';
import { Button } from '../components/common/Button';
import { SolutionCard } from '../components/cards/SolutionCard';
import { motion } from "framer-motion";
import { SOLUTIONS } from '../data/solutions/solutionData';
import {
  Server,
  ShieldCheck,
  Network,
  Headset,
  Laptop,
  Database,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface SolutionsPageProps {
  onOpenQuoteModal?: (solutionId?: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  const categories = [
    { id: 'all', label: 'All Practices' },
    { id: 'datacenter', label: 'Data Center & Storage' },
    { id: 'security', label: 'Cybersecurity' },
    { id: 'networking', label: 'Enterprise Networking' },
    { id: 'managed', label: 'Managed NOC/SOC' },
    { id: 'workplace', label: 'Digital Workplace' },
  ];

  const filteredSolutions = activeCategory === 'all'
    ? SOLUTIONS
    : SOLUTIONS.filter((s) => s.category === activeCategory);

  return (
    <div className="space-y-20 pb-20">
      {/* PAGE HERO */}
      <PageHero
  badge="Enterprise Practice Areas"
  title="Enterprise Technology"
  highlight="Solutions"
  description="From high-density hyperconverged infrastructure and enterprise networking to cybersecurity, managed services, and digital workplace transformation, discover technology solutions engineered for modern enterprises."
/>

{/* Filter Categories */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
  <div className="enterprise-card p-6">

    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setActiveCategory(cat.id)}
          className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
            activeCategory === cat.id
              ? 'bg-[#0A66C2] text-white shadow-md'
              : 'bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:border-[#0A66C2] hover:text-[#0A66C2]'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>

  </div>
</section>

      {/* SOLUTIONS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredSolutions.map((solution) => (
            <SolutionCard
              key={solution.id}
              solution={solution}
              onQuoteClick={onOpenQuoteModal}
            />
          ))}
        </div>
      </section>

      {/* DETAILED ARCHITECTURAL DEEP-DIVES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionTitle
          badge="Architectural Frameworks"
          title="Deep-Dive Into Our Enterprise"
          highlightText="Solution Blueprints."
          subtitle="How Arsenal Infosolutions plans, stages, and deploys mission-critical infrastructure."
        />

        {SOLUTIONS.map((solution, idx) => (
          <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
  duration: 0.7,
  delay: idx * 0.08,
}}
            id={solution.id}
            key={solution.id}
            className={`enterprise-card p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center scroll-mt-32 ${
  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
}`}
          >
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-semibold text-[#0A66C2] bg-blue-50 uppercase tracking-widest px-3 py-1 rounded-full mb-5">
  Practice Area {String(idx + 1).padStart(2, "0")}
</span>

<h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#1E293B] mb-6 leading-tight">
  {solution.title}
</h2>

<p className="text-[#475569] font-body text-base leading-8 mb-8">
  {solution.fullDescription}
</p>

              {/* Key Features */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#1E293B] uppercase tracking-wider">
                  Technical Architecture Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {solution.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-body text-[#1E293B]">
                      <CheckCircle2 className="w-4 h-4 text-[#0A66C2] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Benefits */}
              <div className="rounded-2xl bg-gradient-to-r from-[#F8FAFC] to-[#EEF6FF] border border-[#E2E8F0] p-5">
                <h4 className="text-xs font-bold text-[#0A66C2] uppercase tracking-wider">
                  Enterprise Value Delivered
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-[#475569]">
                  {solution.businessBenefits.map((b, i) => (
                    <li key={i}>• {b}</li>
                  ))}
                </ul>
              </div>

              
            </div>

            {/* Visual Side Banner */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-[#E2E8F0]">
                <img
                  src={solution.heroImage}
                  alt={solution.title}
                  className="w-full h-72 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-medium text-blue-200">
                    OEM Technology Alliance
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {solution.techPartners.map((tp, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-white/20 text-white font-semibold px-2 py-0.5 rounded border border-white/30"
                      >
                        {tp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
