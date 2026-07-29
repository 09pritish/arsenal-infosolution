import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../common/Button';
import { ContactFormData } from '../../types';
import { SOLUTIONS } from '../../data/companyData';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      solutionInterest: 'Data Center & Cloud Infrastructure',
      agreeToTerms: true,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    setSubmitError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.fullName,
          email: data.workEmail,
          phone: data.phone,
          company: data.companyName,
          subject: data.solutionInterest,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        const firstFieldError = result.errors?.[0]?.message;
        throw new Error(firstFieldError || result.message || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Failed to send your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 sm:p-10 text-center shadow-sm">
        <div className="w-16 h-16 bg-[#EAF4FF] text-[#0A66C2] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-[#1E293B] mb-2">
          Thank You for Contacting Arsenal Infosolutions!
        </h3>
        <p className="text-[#475569] font-body text-base max-w-md mx-auto mb-6">
          Your inquiry has been routed to our Enterprise Consulting team. An IT Specialist will get in touch with you shortly.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setSubmitted(false);
            reset();
          }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-10 shadow-sm">
      <h3 className="text-2xl font-heading font-bold text-[#1E293B] mb-1">
        Request Technical Discovery Call
      </h3>
      <p className="text-[#475569] font-body text-sm mb-6">
        Fill out the form below to speak directly with an enterprise architect.
      </p>

      {submitError && (
        <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3 mb-6">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              {...register('fullName', { required: 'Full name is required' })}
              placeholder="e.g. Vikram Malhotra"
              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
            />
            {errors.fullName && (
              <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1.5">
              Work Email *
            </label>
            <input
              type="email"
              {...register('workEmail', {
                required: 'Work email is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
              })}
              placeholder="v.malhotra@company.com"
              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
            />
            {errors.workEmail && (
              <p className="text-xs text-red-500 mt-1">{errors.workEmail.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1.5">
              Phone Number *
            </label>
            <input
              type="tel"
              {...register('phone', { required: 'Phone number is required' })}
              placeholder="+91 98100 12345"
              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1.5">
              Company Name *
            </label>
            <input
              type="text"
              {...register('companyName', { required: 'Company name is required' })}
              placeholder="Apex Tech Systems"
              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
            />
            {errors.companyName && (
              <p className="text-xs text-red-500 mt-1">{errors.companyName.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1.5">
            Primary Solution Area *
          </label>
          <select
            {...register('solutionInterest')}
            className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none bg-white"
          >
            {SOLUTIONS.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Custom Infrastructure Hardware Procurement">
              Custom Infrastructure Hardware Procurement
            </option>
            <option value="24/7 Managed NOC/SOC Services">24/7 Managed NOC/SOC Services</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1.5">
            Detailed Inquiry / Project Summary *
          </label>
          <textarea
            rows={4}
            {...register('message', { required: 'Inquiry details are required' })}
            placeholder="Share details regarding your server count, storage capacity requirements, or current IT infrastructure challenges..."
            className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none resize-none"
          />
          {errors.message && (
            <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="agreeToTerms"
            {...register('agreeToTerms', { required: 'Please accept privacy terms' })}
            className="w-4 h-4 text-[#0A66C2] rounded border-[#CBD5E1] focus:ring-[#0A66C2]"
          />
          <label htmlFor="agreeToTerms" className="text-xs text-[#475569] font-body">
            I agree to allow Arsenal Infosolutions to store and process my corporate information.
          </label>
        </div>
        {errors.agreeToTerms && (
          <p className="text-xs text-red-500">{errors.agreeToTerms.message}</p>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full mt-2"
          isLoading={loading}
          icon={<Send className="w-5 h-5" />}
        >
          Submit Discovery Request
        </Button>
      </form>
    </div>
  );
};