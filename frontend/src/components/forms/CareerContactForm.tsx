import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../common/Button';
import { CheckCircle2, Send, Upload, AlertCircle } from 'lucide-react';
import { CareerFormData } from '../../types';

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const CareerContactForm: React.FC = () => {

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
  } = useForm<CareerFormData>({
      defaultValues: {
          positionInterested: "Systems Engineer",
          agreeToTerms: true,
      },
  });

  const [resumeName, setResumeName] = useState<string | null>(null);

  const onSubmit = async (data: CareerFormData) => {
  setLoading(true);
  setSubmitError(null);

  try {
    const formData = new FormData();

    formData.append("name", data.fullName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("position", data.positionInterested);
    formData.append("message", data.message);

    if (data.resume && data.resume.length > 0) {
      formData.append("resume", data.resume[0]);
    }

    const response = await fetch(`${API_BASE_URL}/api/careers`, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to submit application.");
    }

    setSubmitted(true);
    reset();
    setResumeName(null);

  } catch (err) {
    setSubmitError(
      err instanceof Error
        ? err.message
        : "Failed to submit application."
    );
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
          Thank you for your speculative application!
        </h3>
        <p className="text-[#475569] font-body text-base max-w-md mx-auto mb-6">
          Your resume and profile have been received. Our Talent Acquisition team will contact you with relevant opportunities.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setSubmitted(false);
            reset();
          }}
        >
          Submit another inquiry
        </Button>
      </div>
    );
  }

  return (
  <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-10 shadow-sm">
    <h3 className="text-2xl font-heading font-bold text-[#1E293B] mb-1">
      Speculative Application
    </h3>

    <p className="text-[#475569] font-body text-sm mb-6">
      Not interested in the current openings? Share your resume and profile so we can reach out when the right role appears.
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
              placeholder="e.g. Priya Sharma"
              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
            />
            {errors.fullName && (
              <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
              })}
              placeholder="priya.sharma@gmail.com"
              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
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
              placeholder="+91 98765 12345"
              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1.5">
              Current Organization
            </label>
            <input
              type="text"
              {...register('currentOrganization')}
              placeholder="Apex Tech Systems"
              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1.5">
              Position interested in *
            </label>
            <input
              type="text"
              {...register('positionInterested', { required: 'Position is required' })}
              placeholder="e.g. Solution Architect"
              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
            />
            {errors.positionInterested && (
              <p className="text-xs text-red-500 mt-1">{errors.positionInterested.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1.5">
              Years of experience *
            </label>
            <input
              type="text"
              {...register('experienceYears', { required: 'Experience is required' })}
              placeholder="e.g. 5 Years"
              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
            />
            {errors.experienceYears && (
              <p className="text-xs text-red-500 mt-1">{errors.experienceYears.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1.5">
            Upload Resume *
          </label>
          <div className="border border-[#E2E8F0] rounded-lg p-4 bg-[#F8FAFC]">
            <label
              htmlFor="resumeUpload"
              className="cursor-pointer inline-flex items-center gap-2 text-sm text-[#1E293B]"
            >
              <Upload className="w-4 h-4 text-[#0A66C2]" />
              <span>{resumeName || 'Click to upload your resume (PDF, DOC, DOCX)'}</span>
            </label>
            <input
              id="resumeUpload"
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              {...register('resume', {
                required: 'Resume is required',
                onChange: (event) => {
                  const file = event.target.files?.[0];
                  setResumeName(file ? file.name : null);
                },
              })}
            />
          </div>
          {errors.resume && (
            <p className="text-xs text-red-500 mt-1">{errors.resume.message as string}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1.5">
            Message *
          </label>
          <textarea
            rows={4}
            {...register('message', { required: 'Message is required' })}
            placeholder="Tell us about your skills, certifications, and what you are looking for in your next role."
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
            I agree to allow Arsenal Infosolutions to store and process my personal information.
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
          Submit Application
        </Button>
      </form>
    </div>
  );
};
