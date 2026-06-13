"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import GrainOverlay from "@/components/ui/GrainOverlay";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];
const EASE_SOFT: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

function LineReveal({ children, delay, className = "" }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.05, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </div>
  );
}

const STATS = [
  "Wholesale Enquiries Welcome",
  "Retailers & Distributors",
  "New Zealand Origin",
  "4 MGO Grades",
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1F3B2E]"
      aria-label="Hero"
    >
      {/* ─── Background ─── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[#1F3B2E]" />

        {/* Subtle vignette edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 40%, rgba(10,20,12,0.55) 100%)",
          }}
        />

        {/* Pulsing radial gold glow */}
        <div
          className="absolute hero-glow pointer-events-none"
          style={{
            inset: "-20%",
            background:
              "radial-gradient(ellipse 55% 50% at 50% 44%, rgba(200,164,90,0.09) 0%, transparent 70%)",
          }}
        />

        {/* Ghost O — barely visible, breathes */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="font-[var(--font-cormorant)] text-[#F2EFE6] font-light hero-breathe"
            style={{
              fontSize: "clamp(20rem, 50vw, 68rem)",
              opacity: 0.022,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              transform: "translateY(5%)",
            }}
          >
            O
          </span>
        </div>

        <GrainOverlay opacity={1.5} />
      </div>

      {/* ─── Content ─── */}
      <div className="relative z-10 text-center px-6 max-w-4xl pb-20">

        {/* Eyebrow */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: EASE_SOFT, delay: 0.2 }}
        >
          <motion.div
            className="bg-[#C8A45A]"
            style={{ height: "1px" }}
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE_SOFT }}
          />
          <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.3em] uppercase">
            New Zealand · Mānuka Honey · Wholesale
          </span>
          <motion.div
            className="bg-[#C8A45A]"
            style={{ height: "1px" }}
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE_SOFT }}
          />
        </motion.div>

        {/* Headline — two clean lines */}
        <h1
          className="font-[var(--font-cormorant)] text-[#F2EFE6] font-light mb-8"
          style={{
            fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
          }}
        >
          <LineReveal delay={0.45}>Premium New Zealand</LineReveal>
          <LineReveal delay={0.62}>
            <em className="italic text-[#C8A45A]">Mānuka Honey.</em>
          </LineReveal>
        </h1>

        {/* Gold rule — grows from centre */}
        <motion.div
          className="bg-[#C8A45A]/30 mx-auto mb-9"
          style={{ height: "1px" }}
          initial={{ width: 0 }}
          animate={{ width: "9rem" }}
          transition={{ duration: 1.3, delay: 0.95, ease: EASE_SOFT }}
        />

        {/* Subtext */}
        <motion.p
          className="text-[#F2EFE6]/55 text-sm lg:text-base font-light leading-relaxed max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_SOFT, delay: 1.1 }}
        >
          Authentic New Zealand Mānuka honey for retailers, distributors,
          gifting partners, hospitality businesses, and bulk buyers.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_SOFT, delay: 1.25 }}
        >
          <Link
            href="/wholesale#enquiry"
            className="btn-slide btn-slide--gold bg-[#C8A45A] text-[#1F3B2E] text-[0.6875rem] font-semibold tracking-[0.16em] uppercase px-10 py-4 min-w-[240px] text-center transition-colors"
          >
            Request Wholesale Pricing
          </Link>
          <Link
            href="/shop"
            className="btn-slide btn-slide--ghost border border-[#F2EFE6]/30 text-[#F2EFE6] text-[0.6875rem] font-semibold tracking-[0.16em] uppercase px-10 py-4 min-w-[240px] text-center hover:border-[#F2EFE6]/60 transition-all"
          >
            View Product Range
          </Link>
        </motion.div>

        <motion.p
          className="text-[#F2EFE6]/25 text-[0.56rem] tracking-[0.22em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          Wholesale · Bulk Orders · Distribution · Corporate Gifting
        </motion.p>
      </div>

      {/* Vertical side label — desktop only */}
      <div
        className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-3"
        aria-hidden="true"
      >
        <div className="h-12 w-px bg-[#C8A45A]/22" />
        <span
          className="text-[#C8A45A]/32 text-[0.5rem] font-semibold tracking-[0.38em] uppercase"
          style={{ writingMode: "vertical-lr" }}
        >
          New Zealand
        </span>
        <div className="h-12 w-px bg-[#C8A45A]/22" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 1 }}
        className="absolute bottom-[60px] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[#F2EFE6]/20 text-[0.47rem] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          className="bg-[#C8A45A]/45"
          style={{ width: "1px" }}
          initial={{ height: 0 }}
          animate={{ height: 40 }}
          transition={{
            delay: 2.2,
            duration: 1.2,
            ease: EASE_SOFT,
            repeat: Infinity,
            repeatDelay: 2.8,
          }}
        />
      </motion.div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-[#F2EFE6]/8 py-3.5 px-6 lg:px-14">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-center lg:justify-between gap-x-8 gap-y-1.5">
          {STATS.map((s, i) => (
            <motion.span
              key={s}
              className="text-[#F2EFE6]/25 text-[0.54rem] font-semibold tracking-[0.25em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 + i * 0.1, duration: 0.7 }}
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
