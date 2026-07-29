import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<'div'> {
  hoverEffect?: boolean;
  bordered?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  hoverEffect = true,
  bordered = true,
  padding = 'md',
  children,
  className = '',
  ...props
}) => {
  const paddings = {
    none: 'p-0',
    sm: 'p-4 sm:p-5',
    md: 'p-6 sm:p-7',
    lg: 'p-8 sm:p-10',
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4 } : undefined}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`bg-white rounded-xl ${
        bordered ? 'border border-[#E2E8F0]' : ''
      } ${
        hoverEffect ? 'hover:border-[#CBD5E1] hover:shadow-lg hover:shadow-blue-950/5' : 'shadow-sm'
      } ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
