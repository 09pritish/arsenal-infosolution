import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/common/SectionTitle';
import { Button } from '../components/common/Button';
import { COMPANY_INFO,  LEADERSHIP } from '../data/companyData';
import { PageHero } from '../components/common/PageHero';
import {
  Target,
  Eye,
  ShieldCheck,
  Award,
  Linkedin,
  Headphones,
} from 'lucide-react';

interface AboutPageProps {
  onOpenQuoteModal?: (solutionId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  const [expandedLeaderId, setExpandedLeaderId] = useState<string | null>(null);

  return (
    <div className="space-y-20 pb-20">

  <PageHero
    badge="About Arsenal Infosolutions"
    title="About"
    highlight="Us"
    description="Arsenal Infosolutions is one of the leading and the fastest growing system integration firm in India. The company provides a solution centric approach built around future ready technology areas of Cloud, Enterprise Networks, Collaboration, Workplace Automation and Knowledge Management. Customer satisfaction is the key to all our endeavours and we strive to exceed customer expectations through our experienced technically certified team."
  />

    

    

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
                  <p
                    className={`text-sm text-[#475569] font-body leading-relaxed ${
                      expandedLeaderId === leader.id ? '' : 'line-clamp-5'
                    }`}
                  >
                    {leader.bio}
                  </p>
                  <button
                    type="button"
                    aria-expanded={expandedLeaderId === leader.id}
                    onClick={() => setExpandedLeaderId((current) => current === leader.id ? null : leader.id)}
                    className="mt-4 text-sm font-semibold text-[#0A66C2] hover:text-[#0F3D91] hover:underline underline-offset-4 transition-colors"
                  >
                    {expandedLeaderId === leader.id ? 'View less' : 'View more'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

  <div className="relative overflow-hidden rounded-[32px] border border-[#D8E7FA] bg-gradient-to-br from-white via-[#F8FBFF] to-[#EEF6FF] shadow-xl">

    {/* Background Glow */}
    <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
    <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-10 sm:p-16">

      {/* LEFT */}
      <div>

        <span className="inline-flex rounded-full bg-[#EAF4FF] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0A66C2]">
          Let's Build Together
        </span>

        <h2 className="mt-6 text-4xl font-black leading-tight text-[#1E293B]">
          Ready to Modernize Your
          <span className="text-[#0A66C2]"> IT Infrastructure?</span>
        </h2>

        <p className="mt-6 text-lg leading-8 text-[#64748B]">
          Partner with Arsenal Infosolutions to design secure, scalable and future-ready enterprise technology solutions tailored for your organization.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">

          <Link to="/request-demo">
            <Button size="lg">
              Request Consultation
            </Button>
          </Link>

          <Link to="/contact">
            <Button variant="outline" size="lg">
              Contact Architects
            </Button>
          </Link>

        </div>

      </div>

      {/* RIGHT */}

      <div className="space-y-5">

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 flex items-center gap-4 shadow-sm">

          <Award className="w-10 h-10 text-[#0A66C2]" />

          <div>
            <h3 className="font-bold text-[#1E293B]">
              Certified Experts
            </h3>

            <p className="text-sm text-[#64748B]">
              Experienced architects and certified deployment specialists.
            </p>
          </div>

        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 flex items-center gap-4 shadow-sm">

          <ShieldCheck className="w-10 h-10 text-[#0A66C2]" />

          <div>
            <h3 className="font-bold text-[#1E293B]">
              Trusted OEM Partnerships
            </h3>

            <p className="text-sm text-[#64748B]">
              Cisco, Dell, Microsoft, HPE, VMware and more.
            </p>
          </div>

        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 flex items-center gap-4 shadow-sm">

          <Headphones className="w-10 h-10 text-[#0A66C2]" />

          <div>
            <h3 className="font-bold text-[#1E293B]">
              Pan-India Enterprise Support
            </h3>

            <p className="text-sm text-[#64748B]">
              24×7 support, deployment and managed services nationwide.
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
    </div>
  );
};
