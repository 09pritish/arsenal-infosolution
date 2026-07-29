import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from './Modal';
import { Button } from './Button';
import { SOLUTIONS } from '../../data/companyData';
import { CheckCircle2, Send } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedSolutionId?: string;
}

interface QuoteFormInputs {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  solutionId: string;
  budgetRange: string;
  timeline: string;
  notes: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedSolutionId = 'datacenter-cloud',
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormInputs>({
    defaultValues: {
      solutionId: preselectedSolutionId,
      budgetRange: '₹10L - ₹50L ($12K - $60K)',
      timeline: 'Immediate (1-3 Months)',
    },
  });

  const onSubmit = async (data: QuoteFormInputs) => {
    setLoading(true);
    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log('Quote Request Submitted:', data);
    setLoading(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    reset();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title="Request Solution Architecture Quote"
      subtitle="Connect with our Senior Enterprise Architects for technical assessment & custom proposal."
      maxWidth="xl"
    >
      {submitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-16 h-16 bg-[#EAF4FF] text-[#0A66C2] rounded-full flex items-center justify-center mx-auto mb-2">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h4 className="text-2xl font-heading font-bold text-[#1E293B]">
            Quote Request Received!
          </h4>
          <p className="text-[#475569] font-body text-base max-w-md mx-auto">
            Thank you for reaching out to Arsenal Infosolutions. An Enterprise Solution Specialist will contact you within <b>4 business hours</b>.
          </p>
          <div className="pt-4">
            <Button variant="primary" onClick={handleReset}>
              Close Window
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                Full Name *
              </label>
              <input
                type="text"
                {...register('fullName', { required: 'Full name is required' })}
                placeholder="e.g. Rajesh Malhotra"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
              />
              {errors.fullName && (
                <span className="text-xs text-red-500 mt-1 block">{errors.fullName.message}</span>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                Corporate Email *
              </label>
              <input
                type="email"
                {...register('email', {
                  required: 'Corporate email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Enter a valid email address' },
                })}
                placeholder="r.malhotra@company.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
              />
              {errors.email && (
                <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                Phone / Mobile *
              </label>
              <input
                type="tel"
                {...register('phone', { required: 'Phone number is required' })}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
              />
              {errors.phone && (
                <span className="text-xs text-red-500 mt-1 block">{errors.phone.message}</span>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                Company Name *
              </label>
              <input
                type="text"
                {...register('company', { required: 'Company name is required' })}
                placeholder="Apex Global Bank"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
              />
              {errors.company && (
                <span className="text-xs text-red-500 mt-1 block">{errors.company.message}</span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
              Select Solution Practice *
            </label>
            <select
              {...register('solutionId')}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none bg-white"
            >
              {SOLUTIONS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                Estimated Budget Range
              </label>
              <select
                {...register('budgetRange')}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none bg-white"
              >
                <option value="Under ₹10L ($12K)">Under ₹10 Lakhs ($12,000)</option>
                <option value="₹10L - ₹50L ($12K - $60K)">₹10 Lakhs - ₹50 Lakhs ($12K - $60K)</option>
                <option value="₹50L - ₹2 Cr ($60K - $250K)">₹50 Lakhs - ₹2 Crores ($60K - $250K)</option>
                <option value="₹2 Cr+ ($250K+)">₹2 Crores+ ($250K+ Enterprise)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                Implementation Timeline
              </label>
              <select
                {...register('timeline')}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none bg-white"
              >
                <option value="Immediate (1-3 Months)">Immediate (1-3 Months)</option>
                <option value="Planning (3-6 Months)">Planning (3-6 Months)</option>
                <option value="RFP / Budgeting phase">RFP / Budgeting phase</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
              Project Requirements / Notes
            </label>
            <textarea
              rows={3}
              {...register('notes')}
              placeholder="Briefly describe your hardware requirements, current setup, user count, or cloud goals..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none resize-none"
            />
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" isLoading={loading} icon={<Send className="w-4 h-4" />}>
              Submit RFP / Quote
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
