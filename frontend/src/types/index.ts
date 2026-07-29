export interface Solution {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  category: 'cloud' | 'security' | 'networking' | 'datacenter' | 'managed' | 'workplace';
  keyFeatures: string[];
  businessBenefits: string[];
  techPartners: string[];
  heroImage: string;
}

export interface SolutionService {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface SolutionPartner {
  src: string;
  alt: string;
}

export interface SolutionSection {
  classes: string[];
  headings: string[];
  paragraphs: string[];
  lists: string[][];
  images: {
    src: string;
    alt: string;
  }[];
}

export interface SolutionDetail {
  id: string;
  slug: string;
  title: string;
  breadcrumb: string[];
  intro: string;
  heroImage: string;
  heroAlt: string;
  services: SolutionService[];
  partners: SolutionPartner[];
  sections: SolutionSection[];
}

export interface TechPartner {
  id: string;
  name: string;
  category: string;
  logoText: string;
  tier: string;
  logoImage?: string;
  description: string;
  website: string;
  specializations: string[];
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  iconName: string;
  stats: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  rating: number;
}

export interface Statistic {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  subtext: string;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CompanyMilestone {
  year: string;
  title: string;
  description: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Hybrid' | 'Remote';
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactFormData {
  fullName: string;
  workEmail: string;
  phone: string;
  companyName: string;
  solutionInterest: string;
  message: string;
  agreeToTerms: boolean;
}

export interface CareerFormData {
  fullName: string;
  email: string;
  phone: string;
  currentOrganization?: string;
  positionInterested: string;
  experienceYears: string;
  resume?: FileList;
  message: string;
  agreeToTerms: boolean;
}

export interface QuoteRequestData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  solutionId: string;
  budgetRange: string;
  timeline: string;
  notes: string;
}
