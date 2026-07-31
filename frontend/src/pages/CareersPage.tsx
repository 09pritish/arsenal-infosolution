import React, { useState } from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { CareerApplyModal } from '../components/forms/CareerApplyModal';
import { CareerContactForm } from '../components/forms/CareerContactForm';
import { JobOpening } from '../types';
import { PageBackgroundEffects } from '../components/common/PageBackgroundEffects';

export const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const handleApplyClick = (job: JobOpening) => {
    setSelectedJob(job);
    setIsApplyModalOpen(true);
  };

  return (
    <div className="space-y-20 pb-20">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#EAF4FF]/40 to-[#F8FAFC] py-16 sm:py-20 border-b border-[#E2E8F0]">

        <PageBackgroundEffects />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.18em] text-[#0A66C2] bg-[#EAF4FF] border border-blue-200 mb-6">
            Careers at Arsenal Infosolutions
          </span>

          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight leading-tight text-[#1E293B] mb-6">
            Build Your Career With{" "}
            <span className="text-[#0A66C2]">
              Arsenal Infosolutions
            </span>
          </h1>

          <p className="text-base sm:text-lg font-body text-[#475569] max-w-3xl mx-auto leading-relaxed">
            Join our team of technology professionals working across Cloud,
            Enterprise Networks, Cyber Security, Collaboration and Digital
            Infrastructure. Grow your career while solving enterprise-scale
            challenges.
          </p>
        </div>
      </section>

      {/* Career Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionTitle
          badge="Apply Today"
          title="Join Arsenal"
          highlightText="Apply Now"
          subtitle="Please fill out the form below to submit your interest and resume."
        />

        <div className="mt-10">
          <CareerContactForm />
        </div>

      </section>

      <CareerApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        job={selectedJob}
      />

    </div>
  );
};
