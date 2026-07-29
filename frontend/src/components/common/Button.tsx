import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Link, LinkProps } from 'react-router-dom';

type ButtonOwnProps = {
  variant?: 'primary' | 'dark' | 'secondary' | 'outline' | 'white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  children: React.ReactNode;
  as?: React.ElementType;
  to?: string;
};

export type ButtonProps = ButtonOwnProps &
  Omit<HTMLMotionProps<'button'>, 'children' | keyof ButtonOwnProps> &
  Partial<Omit<LinkProps, 'children'>>;

// Wrapping react-router's Link with framer-motion so it supports the same
// whileTap animation as a regular <button>, and can share one style function.
const MotionLink = motion(Link);

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  isLoading = false,
  children,
  className = '',
  disabled,
  as,
  to,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium font-body rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none cursor-pointer';

  const variants = {
    primary: 'bg-[#0A66C2] text-white hover:bg-[#0F3D91] shadow-sm hover:shadow-md focus:ring-[#0A66C2]',
    dark: 'bg-[#0F3D91] text-white hover:bg-[#0A66C2] shadow-sm hover:shadow-md focus:ring-[#0F3D91]',
    secondary: 'bg-[#EAF4FF] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white focus:ring-[#0A66C2]',
    outline: 'border border-[#CBD5E1] text-[#1E293B] bg-white hover:bg-[#F8FAFC] hover:border-[#0A66C2] hover:text-[#0A66C2] focus:ring-[#0A66C2]',
    white: 'bg-white text-[#0A66C2] hover:bg-[#EAF4FF] shadow-sm hover:shadow-md focus:ring-white',
    ghost: 'text-[#475569] hover:text-[#0A66C2] hover:bg-[#F1F5F9] focus:ring-[#0A66C2]',
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5 font-semibold',
  };

  const content = (
    <>
      {isLoading && (
        <svg className="animate-spin h-4 w-4 text-current mr-2" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  // Polymorphic branch: renders as a router Link (for "as={Link} to=...")
  // instead of a native <button>, but keeps identical styling + tap animation.
  if (as === Link || to) {
    return (
      <MotionLink
        to={to || '#'}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...(props as any)}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...(props as any)}
    >
      {content}
    </motion.button>
  );
};