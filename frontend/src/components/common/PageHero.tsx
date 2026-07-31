import { motion } from "framer-motion";
import { PageBackgroundEffects } from './PageBackgroundEffects';

interface PageHeroProps {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
}

export const PageHero = ({
  badge,
  title,
  highlight,
  description,
}: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#EAF4FF]/40 to-[#F8FAFC] pt-20 pb-24 border-b border-[#E2E8F0]">

      <PageBackgroundEffects />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-white/70 backdrop-blur-md px-6 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0A66C2] shadow-sm">
            {badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-[#1E293B]"
        >
          {title}

          {highlight && (
  <>
    {" "}
    <span className="text-[#0A66C2] underline decoration-blue-200 underline-offset-8">
      {highlight}
    </span>
  </>
)}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mx-auto mt-10 max-w-3xl text-lg md:text-xl text-[#475569] leading-relaxed"
        >
          {description}
        </motion.p>

      </div>

    </section>
  );
};
