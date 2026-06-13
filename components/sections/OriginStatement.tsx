"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

// ─── Step icons ─────────────────────────────────────────────
const MountainIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
    <path d="M2 24 L10 8 L18 24" stroke="#C8A45A" strokeWidth="1.5" />
    <path d="M14 24 L20 13 L26 24" stroke="#C8A45A" strokeWidth="1.5" />
    <path d="M2 24 L26 24" stroke="#C8A45A" strokeWidth="0.8" strokeOpacity="0.4" />
  </svg>
);

const FlowerIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
    <ellipse cx="14" cy="6"  rx="2.8" ry="4.8" stroke="#C8A45A" strokeWidth="1.3" />
    <ellipse cx="14" cy="6"  rx="2.8" ry="4.8" stroke="#C8A45A" strokeWidth="1.3" transform="rotate(72  14 14)" />
    <ellipse cx="14" cy="6"  rx="2.8" ry="4.8" stroke="#C8A45A" strokeWidth="1.3" transform="rotate(144 14 14)" />
    <ellipse cx="14" cy="6"  rx="2.8" ry="4.8" stroke="#C8A45A" strokeWidth="1.3" transform="rotate(216 14 14)" />
    <ellipse cx="14" cy="6"  rx="2.8" ry="4.8" stroke="#C8A45A" strokeWidth="1.3" transform="rotate(288 14 14)" />
    <circle  cx="14" cy="14" r="3.2"  fill="#C8A45A" fillOpacity="0.25" stroke="#C8A45A" strokeWidth="1.3" />
  </svg>
);

const BeeIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
    {/* Wings */}
    <ellipse cx="9"  cy="10" rx="4.5" ry="2.8" stroke="#C8A45A" strokeWidth="1.3" transform="rotate(-28 9 10)" />
    <ellipse cx="19" cy="10" rx="4.5" ry="2.8" stroke="#C8A45A" strokeWidth="1.3" transform="rotate(28 19 10)" />
    {/* Body */}
    <ellipse cx="14" cy="19" rx="5" ry="6.5" stroke="#C8A45A" strokeWidth="1.5" />
    {/* Stripes */}
    <path d="M9.6 16.5 Q14 15.8 18.4 16.5" stroke="#C8A45A" strokeWidth="1.2" />
    <path d="M9.2 20   Q14 19.2 18.8 20"   stroke="#C8A45A" strokeWidth="1.2" />
    {/* Antennae */}
    <path d="M12 13 Q10.5 10 9 8"  stroke="#C8A45A" strokeWidth="1.2" />
    <path d="M16 13 Q17.5 10 19 8" stroke="#C8A45A" strokeWidth="1.2" />
    <circle cx="9"  cy="8" r="1" fill="#C8A45A" stroke="none" />
    <circle cx="19" cy="8" r="1" fill="#C8A45A" stroke="none" />
  </svg>
);

const HiveIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
    {/* Central hexagon */}
    <polygon points="14,2 22,7 22,17 14,22 6,17 6,7" stroke="#C8A45A" strokeWidth="1.5" />
    {/* Smaller inner cell hint */}
    <polygon points="14,7 19,10 19,16 14,19 9,16 9,10" stroke="#C8A45A" strokeWidth="0.8" strokeOpacity="0.4" />
    {/* Radiating spokes */}
    <line x1="14" y1="2"  x2="14" y2="0"  stroke="#C8A45A" strokeWidth="0.9" strokeOpacity="0.5" />
    <line x1="22" y1="7"  x2="24" y2="6"  stroke="#C8A45A" strokeWidth="0.9" strokeOpacity="0.5" />
    <line x1="22" y1="17" x2="24" y2="18" stroke="#C8A45A" strokeWidth="0.9" strokeOpacity="0.5" />
    <line x1="14" y1="22" x2="14" y2="25" stroke="#C8A45A" strokeWidth="0.9" strokeOpacity="0.5" />
    <line x1="6"  y1="17" x2="4"  y2="18" stroke="#C8A45A" strokeWidth="0.9" strokeOpacity="0.5" />
    <line x1="6"  y1="7"  x2="4"  y2="6"  stroke="#C8A45A" strokeWidth="0.9" strokeOpacity="0.5" />
  </svg>
);

const JarIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
    {/* Lid */}
    <rect x="8" y="4" width="12" height="3.5" rx="1.8" stroke="#C8A45A" strokeWidth="1.4" />
    {/* Jar body — narrows at neck, widens at shoulder */}
    <path d="M9 7.5 L9 24 Q9 26 11 26 L17 26 Q19 26 19 24 L19 7.5" stroke="#C8A45A" strokeWidth="1.5" />
    {/* Honey drip from lid */}
    <path d="M14 7.5 Q13.2 9.5 13.2 11.5 Q13.2 13 14 13 Q14.8 13 14.8 11.5 Q14.8 9.5 14 7.5" stroke="#C8A45A" strokeWidth="1.1" />
    {/* Label area */}
    <rect x="10.5" y="15" width="7" height="6" rx="1" stroke="#C8A45A" strokeWidth="0.9" strokeOpacity="0.5" />
    {/* Honey level line */}
    <path d="M9.5 13.5 L18.5 13.5" stroke="#C8A45A" strokeWidth="0.8" strokeOpacity="0.45" />
  </svg>
);

const STEP_ICONS = [MountainIcon, FlowerIcon, BeeIcon, HiveIcon, JarIcon];

const journey = [
  { label: "Landscape",     desc: "Remote New Zealand valleys and coastal hills" },
  { label: "Mānuka Flower", desc: "Brief seasonal bloom of Leptospermum scoparium" },
  { label: "Bee",           desc: "Nectar gathered during the short flowering window" },
  { label: "Hive",          desc: "Honey matures and is carefully extracted" },
  { label: "Your Jar",      desc: "Tested, traceable, and ready for your table" },
];

export default function OriginStatement() {
  return (
    <section className="bg-[#F2EFE6] py-24 lg:py-36 px-6 lg:px-12" aria-label="Origin statement">
      <div className="max-w-[1440px] mx-auto">

        <ScrollReveal className="flex justify-center mb-8">
          <div className="gold-rule w-40">Pure Origin</div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="text-center">
          <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-4xl sm:text-5xl font-light leading-tight max-w-3xl mx-auto">
            New Zealand origin that{" "}
            <em className="italic">adds value to your range.</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="text-center mt-6 max-w-2xl mx-auto">
          <p className="text-[#1A1A1A]/60 text-base lg:text-lg font-light leading-relaxed">
            Origenza offers a clear New Zealand story, premium product presentation,
            MGO-based product choice, strong gifting appeal, and easy customer education.
          </p>
        </ScrollReveal>

        {/* Journey */}
        <div className="mt-20 relative">
          {/* Animated connecting line — desktop */}
          <motion.div
            className="hidden lg:block absolute top-7 pointer-events-none"
            style={{
              left: "10%", right: "10%",
              transformOrigin: "left",
              background: "rgba(200,164,90,0.35)",
              height: "1px",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: EASE }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {journey.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <ScrollReveal key={step.label} delay={i * 0.1} className="flex flex-col items-center text-center">
                  {/* Icon circle */}
                  <div className="w-14 h-14 mb-5 relative flex-shrink-0 mx-auto flex items-center justify-center">
                    <svg viewBox="0 0 56 56" fill="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
                      <circle cx="28" cy="28" r="27" stroke="#C8A45A" strokeWidth="0.75" strokeOpacity="0.45" />
                      <circle cx="28" cy="28" r="19" stroke="#C8A45A" strokeWidth="0.5"  strokeOpacity="0.22" />
                    </svg>
                    <Icon />
                  </div>
                  <p className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-[#C8A45A] mb-1.5">
                    {step.label}
                  </p>
                  <p className="text-xs text-[#1A1A1A]/50 leading-relaxed max-w-[120px]">
                    {step.desc}
                  </p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        <div className="mt-16 h-px bg-[#C8A45A]/15 max-w-[200px] mx-auto" aria-hidden="true" />
      </div>
    </section>
  );
}
