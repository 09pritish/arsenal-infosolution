import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { SolutionIcon } from '../common/SolutionIcon';
import { SOLUTIONS, COMPANY_INFO } from '../../data/companyData';
import {
  ChevronDown,
  Menu,
  X,
  PhoneCall
} from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: (solutionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const scrollY = useScrollPosition();
  const location = useLocation();
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const isScrolled = scrollY > 20;

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E2E8F0] py-3.5'
          : 'bg-white py-5 border-b border-transparent'
      }`}
    >
      {/* Top Notification / Hotline bar */}
      <div className="hidden lg:block bg-[#0F3D91] text-white text-xs py-1.5 px-4 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-body">
          <div className="flex items-center gap-6">
            <span>Enterprise Helpline: <strong>{COMPANY_INFO.phone}</strong></span>
            <span>Email: <strong>{COMPANY_INFO.salesEmail}</strong></span>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase border border-emerald-500/30">
              24/7 NOC & SOC Active
            </span>
            <span>HQ: New Delhi, India</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-0 lg:mt-6">
        <div className="flex items-center justify-between gap-6">
          <Logo size="md" />

          <nav className="hidden md:flex items-center gap-2 lg:gap-3" aria-label="Main Navigation">
            <Link
              to="/"
              className={`inline-flex h-10 items-center px-4 rounded-lg text-sm font-body font-medium transition-colors ${
                isActive('/') ? 'text-[#0A66C2] font-semibold bg-[#EAF4FF]' : 'text-[#1E293B] hover:text-[#0A66C2] hover:bg-[#F8FAFC]'
              }`}
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <Link
                to="/about"
                className={`px-3.5 py-2 rounded-lg text-sm font-body font-medium transition-colors inline-flex items-center gap-2 ${
                  isActive('/about') || isActive('/partners') || isActive('/clients')
                    ? 'text-[#0A66C2] font-semibold bg-[#EAF4FF]'
                    : 'text-[#1E293B] hover:text-[#0A66C2] hover:bg-[#F8FAFC]'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${aboutOpen ? 'rotate-180 text-[#0A66C2]' : 'text-slate-400'}`} />
              </Link>

              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.16, ease: 'easeOut' }}
                    className="absolute top-full left-0 w-56 bg-white rounded-2xl shadow-xl border border-[#E2E8F0] p-3 mt-2 z-50"
                  >
                    <Link
                      to="/about"
                      onClick={() => setAboutOpen(false)}
                      className="block rounded-xl px-3.5 py-2 text-sm font-medium text-[#1E293B] hover:bg-[#F8FAFC]"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/partners"
                      onClick={() => setAboutOpen(false)}
                      className="block rounded-xl px-3.5 py-2 text-sm font-medium text-[#1E293B] hover:bg-[#F8FAFC]"
                    >
                      Technology Partners
                    </Link>
                    <Link
                      to="/clients"
                      onClick={() => setAboutOpen(false)}
                      className="block rounded-xl px-3.5 py-2 text-sm font-medium text-[#1E293B] hover:bg-[#F8FAFC]"
                    >
                      Clients
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
                <Link
                to="/solutions"
                className={`px-3.5 py-2 rounded-lg text-sm font-body font-medium transition-colors inline-flex items-center gap-2 ${
                  isActive('/solutions') ? 'text-[#0A66C2] font-semibold bg-[#EAF4FF]' : 'text-[#1E293B] hover:text-[#0A66C2] hover:bg-[#F8FAFC]'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180 text-[#0A66C2]' : 'text-slate-400'}`} />
              </Link>

              {/* Mega Dropdown Panel */}
              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute top-full left-0 w-[600px] bg-white rounded-2xl shadow-xl border border-[#E2E8F0] p-6 mt-1 grid grid-cols-2 gap-3 z-50"
                  >
                    <div className="col-span-2 pb-3 mb-1 border-b border-[#F1F5F9] flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#0A66C2] uppercase tracking-wider font-body">
                        Enterprise Technology Practices
                      </span>
                      <Link
                        to="/solutions"
                        onClick={() => setSolutionsOpen(false)}
                        className="text-xs font-medium text-[#0A66C2] hover:underline"
                      >
                        View All Solutions →
                      </Link>
                    </div>

                    {SOLUTIONS.map((sol) => (
                      <Link
                        key={sol.id}
                    to={`/solutions/${sol.slug}`}
                        onClick={() => setSolutionsOpen(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F8FAFC] transition-colors group/item"
                      >
                        <div className="p-2 rounded-lg bg-[#EAF4FF] text-[#0A66C2] group-hover/item:bg-[#0A66C2] group-hover/item:[&>svg]:text-white transition-colors">
                          <SolutionIcon name={sol.iconName} className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-heading font-bold text-[#1E293B] group-hover/item:text-[#0A66C2] transition-colors">
                            {sol.title}
                          </h4>
                          <p className="text-xs text-[#475569] font-body line-clamp-1 mt-0.5">
                            {sol.shortDescription}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/careers"
              className={`inline-flex h-10 items-center px-4 rounded-lg text-sm font-body font-medium transition-colors ${
                isActive('/careers') ? 'text-[#0A66C2] font-semibold bg-[#EAF4FF]' : 'text-[#1E293B] hover:text-[#0A66C2] hover:bg-[#F8FAFC]'
              }`}
            >
              Careers
            </Link>

            <Link
              to="/contact"
              className={`inline-flex h-10 items-center px-4 rounded-lg text-sm font-body font-medium transition-colors ${
                isActive('/contact') ? 'text-[#0A66C2] font-semibold bg-[#EAF4FF]' : 'text-[#1E293B] hover:text-[#0A66C2] hover:bg-[#F8FAFC]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-xs font-semibold text-[#1E293B] hover:text-[#0A66C2] transition-colors px-3 py-2"
            >
              <PhoneCall className="w-4 h-4 text-[#0A66C2]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <Button
              variant="primary"
              size="md"
              className="h-10 px-5"
              as={Link}
              to="/request-demo"
            >
              Request a Demo
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              as={Link}
              to="/request-demo"
            >
              Request a Demo
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1E293B] hover:bg-[#F1F5F9] transition-colors focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-[#E2E8F0] shadow-lg overflow-hidden mt-3"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 font-body text-sm">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg font-medium text-[#1E293B] hover:bg-[#F8FAFC]"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg font-medium text-[#1E293B] hover:bg-[#F8FAFC]"
              >
                About Us
              </Link>

              {/* Mobile Solutions Accordion */}
              <div>
                <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full text-left px-3 py-2.5 rounded-lg font-medium text-[#1E293B] hover:bg-[#F8FAFC] flex items-center justify-between"
              >
                <span>About Us</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180 text-[#0A66C2]' : ''}`} />
              </button>

              {mobileAboutOpen && (
                <div className="pl-6 pr-2 py-2 space-y-1 bg-[#F8FAFC] rounded-lg my-1">
                  <Link
                    to="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-xs font-medium text-[#475569] hover:text-[#0A66C2]"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/partners"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-xs font-medium text-[#475569] hover:text-[#0A66C2]"
                  >
                    Technology Partners
                  </Link>
                  <Link
                    to="/clients"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-xs font-medium text-[#475569] hover:text-[#0A66C2]"
                  >
                    Clients
                  </Link>
                </div>
              )}
            </div>
              <Link
                to="/careers"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg font-medium text-[#1E293B] hover:bg-[#F8FAFC]"
              >
                Careers
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg font-medium text-[#1E293B] hover:bg-[#F8FAFC]"
              >
                Contact Us
              </Link>

              <div className="pt-4 border-t border-[#E2E8F0] space-y-3">
                <div className="text-xs text-[#475569]">
                  Helpline: <strong className="text-[#1E293B]">{COMPANY_INFO.phone}</strong>
                </div>
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  as={Link}
                  to="/request-demo"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Request a Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
