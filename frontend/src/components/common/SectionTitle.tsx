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
  <div
    className={`flex flex-col ${
      isCenter
        ? 'items-center text-center max-w-4xl mx-auto'
        : 'items-start text-left max-w-3xl'
    } mb-16 md:mb-20 ${className}`}
  >
    {badge && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-6 ${
          darkBg
            ? 'bg-blue-900/60 text-blue-200 border border-blue-700/50'
            : 'bg-[#EAF4FF] text-[#0A66C2] border border-blue-200'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#0A66C2]"></span>
        {badge}
      </motion.div>
    )}

    <motion.h2
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-8 ${
        darkBg ? 'text-white' : 'text-[#1E293B]'
      }`}
    >
      {title}{' '}
      {highlightText && (
        <span className="text-[#0A66C2]">
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
        className={`max-w-4xl text-lg sm:text-xl leading-9 ${
          darkBg ? 'text-slate-300' : 'text-[#475569]'
        }`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);
};
