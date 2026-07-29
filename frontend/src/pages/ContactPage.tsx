import React from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { ContactForm } from '../components/forms/ContactForm';
import { COMPANY_INFO } from '../data/companyData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  Headset,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="space-y-28 pb-28">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#EAF4FF]/60 via-[#F8FAFC] to-[#F8FAFC] py-16 sm:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0A66C2] bg-[#EAF4FF] px-3 py-1 rounded-full border border-blue-200 mb-5">
    Contact Us
  </span>
  <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#1E293B] tracking-tight mb-3">
    <span className="text-[#0A66C2]">Contact Us</span>
  </h1>
  <p className="text-base sm:text-lg font-body text-[#475569] max-w-3xl mx-auto leading-relaxed">
    We Love to Hear From You!
  </p>
</div>
      </section>

      {/* MAIN CONTACT CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-2xl font-heading font-bold text-[#1E293B] pb-3 border-b border-[#F1F5F9]">
                Contact Us
              </h3>

              <div className="space-y-5 text-sm font-body">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#EAF4FF] text-[#0A66C2] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1E293B]">Office</h4>
                    <p className="text-[#475569] leading-relaxed mt-0.5">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#EAF4FF] text-[#0A66C2] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1E293B]">Call Us</h4>
                    <p className="text-[#475569] mt-0.5">
                      Direct: <a href={`tel:${COMPANY_INFO.phone}`} className="text-[#0A66C2] font-semibold hover:underline">{COMPANY_INFO.phone}</a>
                    </p>
                    <p className="text-[#475569] text-xs">
                      Toll-Free: <strong>{COMPANY_INFO.tollFree}</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#EAF4FF] text-[#0A66C2] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1E293B]">Email</h4>
                    <p className="text-[#475569] mt-0.5">
                      Sales & RFPs: <a href={`mailto:${COMPANY_INFO.salesEmail}`} className="text-[#0A66C2] font-semibold hover:underline">{COMPANY_INFO.salesEmail}</a>
                    </p>
                    <p className="text-[#475569] text-xs">
                      General: {COMPANY_INFO.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#EAF4FF] text-[#0A66C2] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1E293B]">Customer Support</h4>
                    <p className="text-[#475569] text-xs mt-0.5">
                      {COMPANY_INFO.tollFree}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 24/7 SOC Emergency Alert Box */}
            <div className="bg-[#0F3D91] text-white rounded-2xl p-6 shadow-md space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
                <h4 className="font-heading font-bold text-lg">
                  Existing Client Incident Escalation?
                </h4>
              </div>
              <p className="text-xs text-blue-100 font-body leading-relaxed">
                Call us at <strong>{COMPANY_INFO.tollFree}</strong>.
              </p>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS / LOCATION PLACEHOLDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E2E8F0] overflow-hidden shadow-sm">
          <div className="p-6 bg-[#F8FAFC] border-b border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-heading font-bold text-lg text-[#1E293B]">
                Office Location
              </h3>
              <p className="text-xs text-[#475569]">
                {COMPANY_INFO.address}
              </p>
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address)}`}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-[#0A66C2] hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>

          {/* Map Preview Graphic */}
          <div className="relative h-80 bg-slate-100 flex items-center justify-center overflow-hidden">
            <img
              src="/images/address.png"
              alt="Office address"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute bg-white/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-xl border border-[#E2E8F0] text-center max-w-sm">
              <div className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center mx-auto mb-2">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-base text-[#1E293B]">
                Arsenal Infosolutions
              </h4>
              <p className="text-xs text-[#475569] mt-1 font-body">
                {COMPANY_INFO.address}
              </p>
              <span className="inline-block mt-3 text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
                Contact Us
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
