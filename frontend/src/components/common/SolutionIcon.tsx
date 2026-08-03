import React from 'react';
import {
  Activity,
  Building2,
  Cable,
  Camera,
  CheckCircle2,
  Cloud,
  CloudCog,
  Database,
  HardDrive,
  Headset,
  KeyRound,
  Laptop,
  Layers3,
  MessagesSquare,
  Monitor,
  Network,
  Server,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from 'lucide-react';

const solutionIcons: Record<string, LucideIcon> = {
  Network,
  ShieldCheck,
  Cloud,
  CloudCog,
  Database,
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
  Zap,
  CheckCircle2,
  Laptop,
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
