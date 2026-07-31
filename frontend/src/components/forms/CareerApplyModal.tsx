import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal } from "../common/Modal";
import { Button } from "../common/Button";
import { JobOpening } from "../../types";
import {
  CheckCircle2,
  Upload,
  AlertCircle,
} from "lucide-react";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

interface CareerApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: JobOpening | null;
}

interface ApplicationFormInputs {
  fullName: string;
  email: string;
  phone: string;
  experienceYears: string;
  linkedinUrl: string;
  coverNote: string;
}

export const CareerApplyModal: React.FC<CareerApplyModalProps> = ({
  isOpen,
  onClose,
  job,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [fileName, setFileName] = useState<string | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationFormInputs>();

  if (!job) return null;

  const onSubmit = async (data: ApplicationFormInputs) => {
    setLoading(true);
    setSubmitError(null);

    try {
      if (!resumeFile) {
        throw new Error("Please upload your resume.");
      }

      const formData = new FormData();

      formData.append("name", data.fullName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("position", job.title);

      formData.append(
        "message",
        `Experience: ${data.experienceYears}

LinkedIn: ${data.linkedinUrl || "-"}

Cover Note:

${data.coverNote || "-"}`
      );

      formData.append("resume", resumeFile);

      const response = await fetch(
        `${API_BASE_URL}/api/careers`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to submit application."
        );
      }

      setSubmitted(true);
      reset();
      setResumeFile(null);
      setFileName(null);
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

  const handleReset = () => {
    setSubmitted(false);
    setSubmitError(null);
    setResumeFile(null);
    setFileName(null);
    reset();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title={`Apply: ${job.title}`}
      subtitle={`${job.department} • ${job.location}`}
      maxWidth="xl"
    >
      {submitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-16 h-16 bg-[#EAF4FF] text-[#0A66C2] rounded-full flex items-center justify-center mx-auto mb-2">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h4 className="text-2xl font-heading font-bold text-[#1E293B]">
            Application Submitted Successfully!
          </h4>

          <p className="text-[#475569] font-body text-base max-w-md mx-auto">
            Our Talent Acquisition team will review your
            application for <b>{job.title}</b> and contact
            you if your qualifications match our
            requirement.
          </p>

          <div className="pt-4">
            <Button
              variant="primary"
              onClick={handleReset}
            >
              Close
            </Button>
          </div>
        </div>
      ) : (
        <>
          {submitError && (
            <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3 mb-4">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{submitError}</span>
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  placeholder="e.g. Priya Sharma"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
                />
                {errors.fullName && (
                  <span className="text-xs text-red-500 mt-1 block">
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  placeholder="priya.sharma@gmail.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
                />
                {errors.email && (
                  <span className="text-xs text-red-500 mt-1 block">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  placeholder="+91 98765 12345"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
                />
                {errors.phone && (
                  <span className="text-xs text-red-500 mt-1 block">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                  Total Years Experience *
                </label>
                <input
                  type="text"
                  {...register("experienceYears", {
                    required: "Experience required",
                  })}
                  placeholder="e.g. 6 Years"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
                />
                {errors.experienceYears && (
                  <span className="text-xs text-red-500 mt-1 block">
                    {errors.experienceYears.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                LinkedIn Profile URL
              </label>
              <input
                type="url"
                {...register("linkedinUrl")}
                placeholder="https://linkedin.com/in/priyasharma"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                Attach Resume (PDF / DOCX) *
              </label>

              <div className="border-2 border-dashed border-[#CBD5E1] hover:border-[#0A66C2] rounded-lg p-4 text-center cursor-pointer transition-colors bg-[#F8FAFC]">

                <input
                  type="file"
                  id="resumeUpload"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];

                    if (file) {
                      setResumeFile(file);
                      setFileName(file.name);
                    }
                  }}
                />

                <label
                  htmlFor="resumeUpload"
                  className="cursor-pointer flex flex-col items-center gap-1"
                >
                  <Upload className="w-6 h-6 text-[#0A66C2]" />

                  <span className="text-sm font-medium text-[#1E293B]">
                    {fileName
                      ? `Uploaded: ${fileName}`
                      : "Click to select or drag resume file"}
                  </span>

                  <span className="text-xs text-slate-400">
                    PDF, DOC, DOCX up to 10MB
                  </span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                Cover Note / Highlights
              </label>

              <textarea
                rows={3}
                {...register("coverNote")}
                placeholder="Highlight key OEM certifications or major project experience..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] focus:border-[#0A66C2] focus:ring-1 focus:ring-[#0A66C2] text-sm text-[#1E293B] outline-none resize-none"
              />
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <Button
                variant="outline"
                type="button"
                onClick={handleReset}
              >
                Cancel
              </Button>

              <Button
                variant="primary"
                type="submit"
                isLoading={loading}
              >
                Submit Application
              </Button>
            </div>
          </form>
        </>
      )}
    </Modal>
  );
};