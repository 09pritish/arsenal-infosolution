import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../common/Button';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface DemoRequestFormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  solutionLocation: string;
  areaOfInterest: string;
  subject: string;
  message: string;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export const DemoRequestForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DemoRequestFormData>({
    defaultValues: {
      fullName: '',
      mobileNumber: '',
      email: '',
      solutionLocation: '',
      areaOfInterest: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: DemoRequestFormData) => {
    setLoading(true);
    setSubmitError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/request-demo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.fullName,
          phone: data.mobileNumber,
          email: data.email,
          solutionLocation: data.solutionLocation,
          areaOfInterest: data.areaOfInterest,
          subject: data.subject,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        // Backend validation errors come back as result.errors (array of
        // { field, message }) — surface the first one, or the general message.
        const firstFieldError = result.errors?.[0]?.message;
        throw new Error(firstFieldError || result.message || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Failed to submit your request. Please try again.');
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
        <h3 className="text-2xl font-heading font-bold text-[#1E293B] mb-3">
          Request Sent Successfully!
        </h3>
        <p className="text-[#475569] font-body text-base max-w-md mx-auto mb-6">
          Thank you for reaching out to Arsenal Infosolutions. Our team will contact you shortly to discuss your requirements.
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
        Request a Demo
      </h3>
      <p className="text-[#475569] font-body text-sm mb-6">
        Complete the form below and our solution specialists will reach out to you.
      </p>

      {submitError && (
        <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3 mb-6">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1.5">
              Name *
            </label>
            <input
              type="text"
              {...register('fullName', { required: 'Name is required' })}
              placeholder="Enter Your Name"
              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
            />
            {errors.fullName && (
              <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1.5">
              Mobile Number *
            </label>
            <input
              type="tel"
              {...register('mobileNumber', { required: 'Mobile number is required' })}
              placeholder="Enter Mobile Number"
              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
            />
            {errors.mobileNumber && (
              <p className="text-xs text-red-500 mt-1">{errors.mobileNumber.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1.5">
            Email *
          </label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
            })}
            placeholder="Enter Email"
            className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1.5">
            Solution to be Deployed at *
          </label>
          <input
            type="text"
            {...register('solutionLocation', { required: 'Solution location is required' })}
            placeholder="Enter Solution to be Deployed at"
            className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
          />
          {errors.solutionLocation && (
            <p className="text-xs text-red-500 mt-1">{errors.solutionLocation.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1.5">
            Area of Interest *
          </label>
          <input
            type="text"
            {...register('areaOfInterest', { required: 'Area of interest is required' })}
            placeholder="Enter Area of Interest"
            className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
          />
          {errors.areaOfInterest && (
            <p className="text-xs text-red-500 mt-1">{errors.areaOfInterest.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1.5">
            Subject *
          </label>
          <input
            type="text"
            {...register('subject', { required: 'Subject is required' })}
            placeholder="Enter Subject"
            className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
          />
          {errors.subject && (
            <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1.5">
            Message *
          </label>
          <textarea
            rows={5}
            {...register('message', { required: 'Message is required' })}
            placeholder="Enter Message"
            className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none resize-none"
          />
          {errors.message && (
            <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          isLoading={loading}
          icon={<Send className="w-4 h-4" />}
        >
          Send Messages
        </Button>
      </form>
    </div>
  );
};