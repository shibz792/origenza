"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import GrainOverlay from "@/components/ui/GrainOverlay";

export default function Manifesto() {
  return (
    <section
      className="relative bg-[#1A1A1A] py-40 lg:py-64 px-6 lg:px-12 text-center overflow-hidden"
      aria-label="Brand manifesto"
    >
      {/* Background layers */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(200,164,90,0.09) 0%, transparent 65%)",
          }}
        />
        <GrainOverlay opacity={1.3} />
      </div>

      {/* Large decorative background text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span
          className="font-[var(--font-cormorant)] text-[#F2EFE6] font-light whitespace-nowrap"
          style={{ fontSize: "clamp(5rem, 18vw, 20rem)", opacity: 0.028, letterSpacing: "-0.02em", lineHeight: 1 }}
        >
          ORIGENZA
        </span>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Top gold rule */}
        <div className="w-12 h-px bg-[#C8A45A]/35 mx-auto mb-12" aria-hidden="true" />

        <ScrollReveal>
          <div className="flex justify-center mb-10">
            <div className="gold-rule w-24 text-[#C8A45A]">Origenza</div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <blockquote>
            <p className="font-[var(--font-cormorant)] text-[#F2EFE6] text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.08]">
              Nature does not rush.
              <br />
              <em className="italic text-[#C8A45A]">Neither do we.</em>
            </p>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="text-[#F2EFE6]/55 text-base lg:text-lg font-light leading-relaxed mt-8 max-w-xl mx-auto">
            Origenza is guided by a simple belief: exceptional natural products deserve patience, care, and respect.
            From where our honey begins to how it reaches your home, every decision is shaped by purity, provenance,
            and purpose.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.35} className="mt-10">
          <p className="text-[#C8A45A] text-[0.6rem] font-semibold tracking-[0.3em] uppercase">
            Pure Origin. Powerful Nature.
          </p>
        </ScrollReveal>

        {/* Bottom gold rule */}
        <div className="w-12 h-px bg-[#C8A45A]/35 mx-auto mt-12" aria-hidden="true" />
      </div>
    </section>
  );
}
