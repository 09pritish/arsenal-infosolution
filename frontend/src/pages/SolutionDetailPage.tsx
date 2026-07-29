import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SOLUTION_DETAIL_MAP } from '../data/solutions/solutionData';
import { Button } from '../components/common/Button';

interface SolutionDetailPageProps { onOpenQuoteModal?: (solutionId?: string) => void; }

export const SolutionDetailPage: React.FC<SolutionDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { slug } = useParams();
  const solution = slug ? SOLUTION_DETAIL_MAP[slug] : undefined;

  if (!solution) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-3xl font-heading font-extrabold text-[#1E293B]">Solution not found</h1>
        <p className="mt-4 text-sm text-[#475569]">Please return to the solutions overview or select another solution.</p>
        <div className="mt-6">
          <Link to="/solutions">
            <Button variant="primary">View All Solutions</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16 pb-20">
      <section className="bg-gradient-to-b from-[#EAF4FF]/60 via-[#F8FAFC] to-[#F8FAFC] py-16 sm:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0A66C2] bg-[#EAF4FF] px-3 py-1 rounded-full border border-blue-200">
              Solutions
            </span>
            <h1 className="mt-4 text-3xl sm:text-5xl font-heading font-extrabold text-[#1E293B]">
              {solution.title}
            </h1>
            <p className="mt-5 text-base sm:text-lg font-body text-[#475569] leading-relaxed">
              {solution.intro}
            </p>
            <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link to="/request-demo" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                className="w-full"
              >
                Request a Demo
              </Button>
            </Link>
              <Link to="/solutions">
                <Button variant="outline" size="lg">
                  All Solutions
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 shadow-sm">
            <img src={solution.heroImage} alt={solution.title} className="w-full h-64 object-contain" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {solution.services.length > 0 ? (
          <div className="bg-white rounded-3xl border border-[#E2E8F0] p-8 shadow-sm">
            <h2 className="text-2xl font-heading font-extrabold text-[#1E293B] mb-6">Core Services</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {solution.services.map((service) => (
                <div key={service.title} className="rounded-3xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:border-[#0A66C2] transition-colors">
                  <div className="h-32 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-[#0A66C2] mb-3">{service.title}</h3>
                    <p className="text-sm text-[#475569] leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-[#E2E8F0] p-8 shadow-sm">
            <p className="text-sm text-[#475569]">This solution has no core service points available at the moment.</p>
          </div>
        )}
      </section>
    </div>
  );
};
