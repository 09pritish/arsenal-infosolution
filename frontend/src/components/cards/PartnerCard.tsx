import React from 'react';
import { TechPartner } from '../../types';
import { ExternalLink, CheckCircle } from 'lucide-react';

interface PartnerCardProps {
  partner: TechPartner;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 hover:border-[#0A66C2]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-4"><span className="text-xs text-[#475569] font-body">Partner</span></div>

        {/* Partner Name/Logo text styling */}
        <div className="h-14 flex items-center mb-3">
          {partner.logoImage ? <img src={partner.logoImage} alt={partner.name} className="max-h-14 max-w-48 object-contain" /> : <span className="font-heading font-extrabold text-2xl tracking-tight text-[#1E293B]">{partner.name}</span>}
        </div>

        {/* Partner Description */}
        <p className="text-sm font-body text-[#475569] leading-relaxed mb-4">
          {partner.name}
        </p>

        {/* Specialization Tags */}
      </div>

      <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
        <span className="text-xs font-semibold text-[#0A66C2]">Technology Partner</span>
      </div>
    </div>
  );
};
