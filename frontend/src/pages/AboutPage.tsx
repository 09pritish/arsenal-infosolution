import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/common/SectionTitle';
import { Button } from '../components/common/Button';
import { COMPANY_INFO,  LEADERSHIP } from '../data/companyData';
import {
  Building2,
  Target,
  Eye,
  ShieldCheck,
  Award,
  CheckCircle2,
  Linkedin,
  MapPin,
  Calendar,
  Users
} from 'lucide-react';

interface AboutPageProps {
  onOpenQuoteModal?: (solutionId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="space-y-20 pb-20">
      {/* PAGE HERO */}
      <section className="bg-gradient-to-b from-[#EAF4FF]/60 via-[#F8FAFC] to-[#F8FAFC] py-16 sm:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0A66C2] bg-[#EAF4FF] px-3 py-1 rounded-full border border-blue-200">
            About Arsenal Infosolutions
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#1E293B] tracking-tight">
            <span className="text-[#0A66C2]">About Us</span>
          </h1>
          <p className="text-base sm:text-lg font-body text-[#475569] max-w-3xl mx-auto leading-relaxed">
            Arsenal Infosolutions is one of the leading and the fastest growing system integration firm in India. The company provides a solution centric approach built around future ready technology areas of Cloud, Enterprise Networks, Collaboration, Workplace Automation and Knowledge Management. Customer satisfaction is the key to all our endeavours and we strive to exceed customer expectations through our experienced technically certified team.
          </p>
        </div>
      </section>

      {/* OVERVIEW & MISSION/VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#1E293B]">
              Why Arsenal
            </h2>
            <p className="text-[#475569] font-body text-base leading-relaxed">
              Arsenal infosolution's key differentiator is the domain knowledge and the experience of having worked on multiple customer projects across these domains such as critical govt led e governance projects, Education campuses, Healthcare, BFSI, Corporates etc. Some of the most complex and prestigious projects have been done by the team and have successfully executed solutions built around next gen networks, converged infrastructure, storage and compute solutions, cyber security and cloud based services. We are one of the top partners in the country for some of the leading OEM's and also have a complete portfolio of managed services with application optimisation and analytics one of our other key areas of focus. Customer centricity and our ability to execute projects is what makes us different. We come out as a trusted partner to our customers.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-4 rounded-xl flex items-center gap-3">
                <Award className="w-8 h-8 text-[#0A66C2]" />
                <div>
                  <span className="text-sm font-bold text-[#1E293B] block">Cloud & Enterprise Networks</span>
                  <span className="text-xs text-[#475569]">Future-ready technology areas</span>
                </div>
              </div>

              <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-4 rounded-xl flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-[#0A66C2]" />
                <div>
                  <span className="text-sm font-bold text-[#1E293B] block">Managed Services</span>
                  <span className="text-xs text-[#475569]">Application optimisation and analytics</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Mission Box */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm hover:border-[#0A66C2] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#EAF4FF] text-[#0A66C2] flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#1E293B] mb-2">
                Mission
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                "Enabling digitization through new age technologies and services to our clients and ensuring a high degree of satisfaction."
              </p>
            </div>

            {/* Vision Box */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm hover:border-[#0A66C2] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#EAF4FF] text-[#0A66C2] flex items-center justify-center mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#1E293B] mb-2">
                Our Focus
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Next gen networks, converged infrastructure, storage and compute solutions, cyber security and cloud based services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-white py-16 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Corporate Ethics & Philosophy"
            title="The Values That Drive"
            highlightText="Our Engineering Standards."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
              <span className="text-[#0A66C2] font-extrabold text-2xl font-heading block mb-2">01</span>
              <h4 className="font-heading font-bold text-[#1E293B] text-lg mb-1">
                Domain Knowledge
              </h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Experience of having worked on multiple customer projects across key domains.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
              <span className="text-[#0A66C2] font-extrabold text-2xl font-heading block mb-2">02</span>
              <h4 className="font-heading font-bold text-[#1E293B] text-lg mb-1">
                Customer Satisfaction
              </h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Customer satisfaction is key to all our endeavours and we strive to exceed expectations.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
              <span className="text-[#0A66C2] font-extrabold text-2xl font-heading block mb-2">03</span>
              <h4 className="font-heading font-bold text-[#1E293B] text-lg mb-1">
                Technology Portfolio
              </h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                A complete portfolio of managed services with application optimisation and analytics.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
              <span className="text-[#0A66C2] font-extrabold text-2xl font-heading block mb-2">04</span>
              <h4 className="font-heading font-bold text-[#1E293B] text-lg mb-1">
                Project Execution
              </h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Complex and prestigious projects successfully executed by the team.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* LEADERSHIP TEAM */}
      <section className="bg-[#F8FAFC] py-16 border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Executive Leadership"
            title="Guided by Experienced"
            highlightText="Enterprise IT Veterans."
            subtitle="Meet the leaders steering Arsenal Infosolutions toward engineering innovation and client success."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERSHIP.map((leader) => (
              <div
                key={leader.id}
                className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-md transition-all group"
              >
                <div className="h-80 overflow-hidden bg-slate-100 relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <a
  href={leader.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={`${leader.name} on LinkedIn`}
  className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-lg text-[#0A66C2] hover:bg-white hover:scale-110 transition-all"
>
  <Linkedin className="w-4 h-4" />
</a>
                </div>

                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-[#1E293B]">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#0A66C2] uppercase tracking-wider mb-3">
                    {leader.role}
                  </p>
                  <p className="text-sm text-[#475569] font-body leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A192F] text-white rounded-2xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold">
            Partner with an Enterprise System Integrator You Can Trust.
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">
            Reach out to our leadership or technical architects to discuss your data center modernization roadmap.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/request-demo">
              <Button
                variant="primary"
                size="lg"
              >
                Get Solution Architecture Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};