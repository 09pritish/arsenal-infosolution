import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  badge?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  darkBg?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  highlightText,
  subtitle,
  align = 'center',
  darkBg = false,
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`flex flex-col ${isCenter ? 'items-center text-center max-w-3xl mx-auto' : 'items-start text-left max-w-2xl'} mb-12 md:mb-16 ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase font-body mb-4 ${
            darkBg 
              ? 'bg-blue-900/60 text-blue-200 border border-blue-700/50' 
              : 'bg-[#EAF4FF] text-[#0A66C2] border border-blue-100'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0A66C2] animate-pulse"></span>
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
          darkBg ? 'text-white' : 'text-[#1E293B]'
        }`}
      >
        {title}{' '}
        {highlightText && (
          <span className="text-[#0A66C2] relative inline-block">
            {highlightText}
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-base sm:text-lg font-body leading-relaxed ${
            darkBg ? 'text-slate-300' : 'text-[#475569]'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
