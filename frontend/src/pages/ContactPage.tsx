import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { ContactForm } from '../components/forms/ContactForm';
import { COMPANY_INFO } from '../data/companyData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="space-y-28 pb-28">

      {/* HERO */}
      <PageHero
        badge="Contact Arsenal Infosolutions"
        title="Contact"
        highlight="Us"
        description="We'd love to hear from you. Whether you're planning a new IT infrastructure, looking for enterprise technology solutions, or need expert guidance, our team is ready to assist you."
      />

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 space-y-6">

            {/* CONTACT CARD */}
            <div className="enterprise-card p-6 sm:p-8 space-y-6">

              <h3 className="text-2xl font-heading font-bold text-[#1E293B] pb-3 border-b border-[#F1F5F9]">
                Contact Information
              </h3>

              <div className="space-y-5">

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#EAF4FF] text-[#0A66C2]">
                    <MapPin className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="font-bold text-[#1E293B]">Office</h4>
                    <p className="text-[#475569] leading-relaxed mt-1">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#EAF4FF] text-[#0A66C2]">
                    <Phone className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="font-bold text-[#1E293B]">
                      Call Us
                    </h4>

                    <p className="mt-1">
                      <a
                        href={`tel:${COMPANY_INFO.phone}`}
                        className="text-[#0A66C2] font-semibold hover:underline"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </p>

                    <p className="text-sm text-[#64748B]">
                      Toll Free : {COMPANY_INFO.tollFree}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#EAF4FF] text-[#0A66C2]">
                    <Mail className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="font-bold text-[#1E293B]">
                      Email
                    </h4>

                    <p className="mt-1">
                      <a
                        href={`mailto:${COMPANY_INFO.salesEmail}`}
                        className="text-[#0A66C2] font-semibold hover:underline"
                      >
                        {COMPANY_INFO.salesEmail}
                      </a>
                    </p>

                    <p className="text-sm text-[#64748B]">
                      {COMPANY_INFO.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#EAF4FF] text-[#0A66C2]">
                    <Clock className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="font-bold text-[#1E293B]">
                      Customer Support
                    </h4>

                    <p className="mt-1 text-[#475569]">
                      {COMPANY_INFO.tollFree}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* INCIDENT CARD */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0A66C2] to-[#0F3D91] p-6 shadow-xl">

              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

              <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl" />

              <div className="relative z-10">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                    <ShieldCheck className="w-6 h-6 text-emerald-300" />
                  </div>

                  <h4 className="text-lg font-heading font-bold text-white">
                    Existing Client Incident Escalation
                  </h4>

                </div>

                <p className="mt-4 text-sm text-blue-100 leading-relaxed">
                  Existing customers can contact our priority support team at
                  <span className="font-bold text-white">
                    {" "}
                    {COMPANY_INFO.tollFree}
                  </span>
                  .
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT COLUMN */}

          <div className="lg:col-span-7">

            <ContactForm />

          </div>

        </div>

      </section>

      {/* MAP */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="enterprise-card overflow-hidden rounded-3xl">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#E2E8F0] px-8 py-6">

            <div>

              <h2 className="text-2xl font-heading font-bold text-[#1E293B]">
                Visit Our Office
              </h2>

              <p className="mt-2 text-[#64748B]">
                {COMPANY_INFO.address}
              </p>

            </div>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(
                COMPANY_INFO.address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-[#0A66C2] px-5 py-3 font-medium text-white hover:bg-[#0859A8] transition"
            >
              Open in Google Maps
            </a>

          </div>

          <iframe
            title="Arsenal Infosolutions Location"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              COMPANY_INFO.address
            )}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
            className="w-full h-[500px] border-0"
            loading="lazy"
            allowFullScreen
          />

        </div>

      </section>

    </div>
  );
};