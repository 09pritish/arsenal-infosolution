import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { COMPANY_INFO, SOLUTIONS } from '../../data/companyData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribedEmail) {
      setSubscribeSuccess(true);
      setTimeout(() => setSubscribeSuccess(false), 4000);
      setSubscribedEmail('');
    }
  };

  return (
    <footer className="bg-[#0A192F] text-slate-300 font-body pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Arsenal Infosolutions is one of the leading and the fastest growing system integration firm in India. Customer satisfaction is the key to all our endeavours.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-[#0A66C2] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-[#0A66C2] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-[#0A66C2] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4 tracking-wide uppercase text-xs text-blue-400">
              Technology Solutions
            </h4>
            <ul className="space-y-2.5 text-sm font-body">
              {SOLUTIONS.map((sol) => (
                <li key={sol.id}>
                  <Link
                to={`/solutions/${sol.slug}`}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {sol.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4 tracking-wide uppercase text-xs text-blue-400">
              Corporate Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-body">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Arsenal
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-slate-400 hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-slate-400 hover:text-white transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link to="/request-demo" className="text-slate-400 hover:text-white transition-colors">
                  Request a Demo
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & HQ Info */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4 tracking-wide uppercase text-xs text-blue-400">
              Corporate Headquarters
            </h4>
            <ul className="space-y-3 text-xs font-body text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0A66C2] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0A66C2] shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0A66C2] shrink-0" />
                <span>Toll Free: {COMPANY_INFO.tollFree}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0A66C2] shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: OEM Partner Badges & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-body">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0A66C2]" />
            <span>Arsenal Infosolutions Pvt. Ltd.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>© AIPL 2017-2024 | Arsenal Infosolutions Pvt. Ltd.</span>
            
          </div>
        </div>
      </div>
    </footer>
  );
};
