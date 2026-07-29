import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../../types';

interface FAQProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`border rounded-xl transition-all duration-200 overflow-hidden ${
              isOpen ? 'border-[#0A66C2] bg-white shadow-sm' : 'border-[#E2E8F0] bg-white hover:border-[#CBD5E1]'
            }`}
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-heading font-semibold text-lg text-[#1E293B] focus:outline-none focus:text-[#0A66C2]"
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <div className={`p-1.5 rounded-full shrink-0 transition-transform duration-300 ${isOpen ? 'bg-[#EAF4FF] text-[#0A66C2] rotate-180' : 'bg-[#F1F5F9] text-[#475569]'}`}>
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-6 pt-1 text-[#475569] font-body text-base leading-relaxed border-t border-[#F1F5F9]">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
