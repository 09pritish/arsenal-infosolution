import React from 'react';
import { DemoRequestForm } from '../components/forms/DemoRequestForm';

export const RequestDemoPage: React.FC = () => (
  <div className="space-y-16 pb-20">
    <section className="bg-gradient-to-b from-[#EAF4FF]/60 via-[#F8FAFC] to-[#F8FAFC] py-16 sm:py-20 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0A66C2] bg-[#EAF4FF] px-3 py-1 rounded-full border border-blue-200">
          Arsenal Infosolutions
        </span>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#1E293B]">
          Request a Demo
        </h1>
        <p className="text-base sm:text-lg font-body text-[#475569] max-w-3xl mx-auto leading-relaxed">
          Fill out the form below and our specialists will contact you to discuss your deployment requirements.
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <DemoRequestForm />
    </section>
  </div>
);
