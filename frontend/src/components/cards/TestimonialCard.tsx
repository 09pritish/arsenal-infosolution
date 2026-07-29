import React from 'react';
import { Testimonial } from '../../types';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 relative flex flex-col justify-between shadow-xs hover:border-[#CBD5E1] transition-all">
      <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6 pointer-events-none" />

      <div>
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-4 text-amber-400">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-[#1E293B] font-body text-base leading-relaxed italic mb-6 relative z-10">
          "{testimonial.quote}"
        </p>
      </div>

      <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
        <div>
          <h4 className="font-heading font-bold text-[#1E293B] text-base">
            {testimonial.author}
          </h4>
          <p className="text-xs text-[#475569] font-body">
            {testimonial.role} • <span className="font-medium text-[#0A66C2]">{testimonial.company}</span>
          </p>
        </div>
        <span className="text-[11px] font-semibold tracking-wider text-[#0A66C2] bg-[#EAF4FF] px-2.5 py-1 rounded-full uppercase">
          {testimonial.industry}
        </span>
      </div>
    </div>
  );
};
