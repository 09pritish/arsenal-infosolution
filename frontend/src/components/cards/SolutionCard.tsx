import React from 'react';
import { Link } from 'react-router-dom';
import { Solution } from '../../types';
import {
  Server,
  ShieldCheck,
  Network,
  Headset,
  Laptop,
  Database,
  ArrowRight,
  Check
} from 'lucide-react';
import { Button } from '../common/Button';

interface SolutionCardProps {
  solution: Solution;
  onQuoteClick?: (solutionId: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Network: <Network className="w-6 h-6" />,
  Headset: <Headset className="w-6 h-6" />,
  Laptop: <Laptop className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
};

export const SolutionCard: React.FC<SolutionCardProps> = ({ solution, onQuoteClick }) => {
  return (
    <div className="group bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
      <div>
        {/* Header Icon + Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-xl bg-[#EAF4FF] text-[#0A66C2] flex items-center justify-center group-hover:bg-[#0A66C2] group-hover:text-white transition-colors duration-300 shadow-xs">
            {iconMap[solution.iconName] || <Server className="w-6 h-6" />}
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0A66C2] bg-blue-50 px-2.5 py-1 rounded-full font-body">
            {solution.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-heading font-bold text-[#1E293B] group-hover:text-[#0A66C2] transition-colors mb-3">
          {solution.title}
        </h3>

        {/* Short Description */}
        <p className="text-[#475569] font-body text-sm leading-relaxed mb-6">
          {solution.shortDescription}
        </p>

        {/* Key Features bullet points */}
        <div className="space-y-2 mb-8 border-t border-[#F1F5F9] pt-4">
          {solution.keyFeatures.slice(0, 3).map((feature, i) => (
            <div key={i} className="flex items-start gap-2 text-xs font-body text-[#1E293B]">
              <div className="w-4 h-4 rounded-full bg-[#EAF4FF] text-[#0A66C2] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5" />
              </div>
              <span className="line-clamp-1">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-3">
        <Link
          to={`/solutions/${solution.slug}`}
          className="inline-flex items-center text-xs font-semibold text-[#0A66C2] hover:text-[#0F3D91] transition-colors group/link"
        >
          <span>Explore Architecture</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-1" />
        </Link>

        <Link to="/request-demo">
          <Button
            variant="secondary"
            size="sm"
            className="w-full"
          >
            Get Quote
          </Button>
        </Link>
      </div>
    </div>
  );
};
