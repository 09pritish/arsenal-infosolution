import React from 'react';
import { Industry } from '../../types';
import {
  Shield,
  Building2,
  FlaskConical,
  Plane,
  HardHat,
  Ship,
  Gavel,
  Landmark,
  Users,
  GraduationCap,
  Wallet,
  HeartPulse,
  Cpu,
  Factory,
} from 'lucide-react';

interface IndustryCardProps {
  industry: Industry;
}

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  FlaskConical: <FlaskConical className="w-6 h-6" />,
  Plane: <Plane className="w-6 h-6" />,
  HardHat: <HardHat className="w-6 h-6" />,
  Ship: <Ship className="w-6 h-6" />,
  Gavel: <Gavel className="w-6 h-6" />,
  Landmark: <Landmark className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Wallet: <Wallet className="w-6 h-6" />,
  HeartPulse: <HeartPulse className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Factory: <Factory className="w-6 h-6" />,
};

export const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {
  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 hover:border-[#0A66C2] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="w-12 h-12 rounded-lg bg-[#EAF4FF] text-[#0A66C2] flex items-center justify-center mb-5">
        {iconMap[industry.iconName] || <Building2 className="w-6 h-6" />}
      </div>

      <h3 className="text-xl font-heading font-bold text-[#1E293B] mb-2">
        {industry.title}
      </h3>

      {industry.description && (
        <p className="text-sm font-body text-[#475569] leading-relaxed">
          {industry.description}
        </p>
      )}

      {/* Only render this block if there's a real stat to show — an empty
          "Proven Impact" box with no value is what was causing the broken
          look in your screenshot */}
      {industry.stats && (
        <div className="bg-[#F8FAFC] p-3 rounded-lg border border-[#E2E8F0] mt-4">
          <span className="text-xs font-semibold text-[#0A66C2] block uppercase tracking-wider">
            Proven Impact
          </span>
          <span className="text-sm font-heading font-bold text-[#1E293B]">
            {industry.stats}
          </span>
        </div>
      )}

      {industry.highlights.length > 0 && (
        <ul className="space-y-1.5 mt-4">
          {industry.highlights.map((h, i) => (
            <li key={i} className="flex items-center gap-2 text-xs font-body text-[#1E293B]">
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};