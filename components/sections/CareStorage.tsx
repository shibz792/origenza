"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const tips = [
  {
    icon: "🌡",
    title: "Keep it cool",
    short: "Store below 25°C",
    detail:
      "A cool pantry or kitchen cupboard is ideal. Consistent, moderate temperatures help preserve the honey's natural consistency and character.",
  },
  {
    icon: "☀",
    title: "Away from direct light",
    short: "Dark cupboard or pantry",
    detail:
      "UV exposure can affect honey over time. Store your Origenza jar away from direct sunlight. A closed pantry shelf is perfect.",
  },
  {
    icon: "❄",
    title: "Crystallisation is natural",
    short: "Pure honey often crystallises",
    detail:
      "If your honey becomes grainy or lighter, it has crystallised — this is entirely natural for pure honey. To soften, place the jar in warm (not hot) water and stir gently. Do not microwave.",
  },
  {
    icon: "🔥",
    title: "Avoid excessive heat",
    short: "Keep below 40°C",
    detail:
      "High heat can affect the naturally occurring compounds in Mānuka honey. Avoid microwaving directly and keep away from hot surfaces.",
  },
];

export default function CareStorage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#F2EFE6] py-24 lg:py-32 px-6 lg:px-12 border-t border-[#1F3B2E]/8" aria-label="Care and storage">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal className="text-center mb-14">
          <div className="flex justify-center mb-6">
            <div className="gold-rule w-40">Care Guide</div>
          </div>
          <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-4xl sm:text-5xl font-light">
            Preserve every{" "}
            <em className="italic text-[#C8A45A]">remarkable spoonful.</em>
          </h2>
          <p className="mt-3 text-[#1A1A1A]/50 text-sm max-w-md mx-auto">
            A few simple habits will help you get the most from every jar.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tips.map((tip, i) => {
            const isOpen = open === i;
            return (
              <ScrollReveal key={tip.title} delay={i * 0.08}>
                <button
                  className="w-full text-left bg-[#1F3B2E]/5 border border-[#1F3B2E]/10 p-7 hover:border-[#C8A45A]/40 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45A]"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`tip-detail-${i}`}
                >
                  <span className="text-3xl block mb-4" aria-hidden="true">{tip.icon}</span>
                  <h3 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-xl font-light mb-1 leading-tight">
                    {tip.title}
                  </h3>
                  <p className="text-[#C8A45A] text-xs font-semibold tracking-wide uppercase mb-3">
                    {tip.short}
                  </p>
                  <div
                    id={`tip-detail-${i}`}
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <p className="text-[#1A1A1A]/55 text-sm leading-relaxed pt-2">
                      {tip.detail}
                    </p>
                  </div>
                  <p className={`text-[0.625rem] text-[#1A1A1A]/30 tracking-widest uppercase mt-3 transition-all duration-200 ${isOpen ? "opacity-0" : "opacity-100"}`}>
                    Tap to expand
                  </p>
                </button>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
