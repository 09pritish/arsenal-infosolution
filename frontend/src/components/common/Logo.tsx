import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark' | 'auto';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

const logoFooter = '/images/logo-footer.png';

const sizeClasses = {
  sm: 'h-4',
  md: 'h-5',
  lg: 'h-7',
};

export const Logo: React.FC<LogoProps> = ({ size = 'md', showTagline = true }) => {
  return (
    <Link to="/" className="inline-flex flex-col items-start group focus:outline-none" aria-label="Arsenal Infosolutions Home">
      <img
        src={logoFooter}
        alt="Arsenal Infosolutions logo"
        className={`${sizeClasses[size]} h-auto object-contain`}
      />
      {showTagline && (
        <span className="mt-0.5 text-[11px] font-bold text-[#0A66C2] leading-none">
          Inspiring Innovation &amp; Transformation
        </span>
      )}
    </Link>
  );
};