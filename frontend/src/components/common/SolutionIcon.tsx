import React from 'react';
import {
  Activity,
  Building2,
  Cable,
  Camera,
  Cloud,
  CloudCog,
  HardDrive,
  Headset,
  KeyRound,
  Layers3,
  MessagesSquare,
  Monitor,
  Network,
  Server,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

const solutionIcons: Record<string, LucideIcon> = {
  Network,
  ShieldCheck,
  Cloud,
  HardDrive,
  Monitor,
  Headset,
  KeyRound,
  Activity,
  Cable,
  Camera,
  MessagesSquare,
  Building2,
  Layers3,
  CloudCog,
};

interface SolutionIconProps {
  name: string;
  className?: string;
}

/** Keeps each solution's visual identifier consistent across the site. */
export const SolutionIcon: React.FC<SolutionIconProps> = ({ name, className }) => {
  const Icon = solutionIcons[name] ?? Server;
  return <Icon className={className} aria-hidden="true" />;
};
