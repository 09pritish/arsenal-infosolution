import React, { useState } from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { CareerApplyModal } from '../components/forms/CareerApplyModal';
import { CareerContactForm } from '../components/forms/CareerContactForm';
import { JobOpening } from '../types';
import { ArrowRight } from 'lucide-react';

export const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const handleApplyClick = (job: JobOpening) => {
    setSelectedJob(job);
    setIsApplyModalOpen(true);
  };

  return (
    <div className="space-y-20 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle
          badge="Careers"
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
