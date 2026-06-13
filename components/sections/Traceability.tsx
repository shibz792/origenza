"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Search } from "lucide-react";

export default function Traceability() {
  const [batch, setBatch] = useState("");
  const [searched, setSearched] = useState(false);

  function handleTrace(e: React.FormEvent) {
    e.preventDefault();
    setSearched(true);
  }

  return (
    <section className="bg-[#1F3B2E] py-24 lg:py-32 px-6 lg:px-12" aria-label="Trace your jar">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: copy */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#C8A45A]" />
                <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.25em] uppercase">
                  Full Traceability
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-4xl sm:text-5xl font-light leading-tight mb-6">
                What is inside the jar should{" "}
                <em className="italic text-[#C8A45A]">never be a mystery.</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-[#F2EFE6]/60 text-sm leading-relaxed mb-8">
                Every Origenza jar carries a batch code. Enter it below to trace your honey from harvest region through testing and packaging. Batch lookup is being built and will be available soon.
              </p>
            </ScrollReveal>

            {/* Trace form */}
            <ScrollReveal delay={0.2}>
              <form onSubmit={handleTrace} className="flex gap-0 max-w-sm" aria-label="Batch trace lookup">
                <input
                  type="text"
                  value={batch}
                  onChange={(e) => setBatch(e.target.value)}
                  placeholder="Enter batch code e.g. NZ-2024-0142"
                  className="flex-1 bg-[#F2EFE6]/10 border border-[#F2EFE6]/20 text-[#F2EFE6] placeholder-[#F2EFE6]/30 px-4 py-3 text-sm focus:outline-none focus:border-[#C8A45A]"
                  aria-label="Batch code"
                />
                <button
                  type="submit"
                  className="bg-[#C8A45A] text-[#1F3B2E] px-4 py-3 hover:bg-[#d4b578] transition-colors"
                  aria-label="Search batch"
                >
                  <Search size={16} />
                </button>
              </form>
              {searched && (
                <p className="mt-3 text-[#F2EFE6]/50 text-xs italic">
                  Batch lookup is coming soon — full traceability will be available in a future update.
                </p>
              )}
            </ScrollReveal>

            {/* Data points */}
            <ScrollReveal delay={0.25} className="mt-10 grid grid-cols-2 gap-4">
              {[
                { label: "Harvest Region",   value: "New Zealand (region on label)" },
                { label: "MGO Level",        value: "As tested per batch" },
                { label: "Testing Date",     value: "Independent laboratory" },
                { label: "Batch Number",     value: "Printed on base of jar" },
              ].map(({ label, value }) => (
                <div key={label} className="border-l border-[#C8A45A]/30 pl-3">
                  <p className="text-[0.6rem] text-[#C8A45A] font-semibold tracking-widest uppercase mb-0.5">{label}</p>
                  <p className="text-[#F2EFE6]/55 text-xs">{value}</p>
                </div>
              ))}
            </ScrollReveal>
          </div>

          {/* Right: NZ map placeholder */}
          <ScrollReveal delay={0.2}>
            {/* TODO: replace with SVG/canvas NZ map with animated region highlights */}
            <div
              className="w-full aspect-[3/4] max-w-xs mx-auto lg:max-w-full bg-[#F2EFE6]/5 border border-[#F2EFE6]/10 flex flex-col items-center justify-center text-[#F2EFE6]/20 text-sm italic gap-4"
              role="img"
              aria-label="[PLACEHOLDER: Animated map of New Zealand showing harvest regions with route lines from hive to testing facility]"
            >
              <div className="w-24 h-48 border border-current opacity-30 rounded-sm relative">
                <div className="absolute top-4 right-2 w-2 h-2 rounded-full bg-[#C8A45A]/40" />
                <div className="absolute top-12 left-4 w-2 h-2 rounded-full bg-[#C8A45A]/40" />
                <div className="absolute top-24 right-6 w-2 h-2 rounded-full bg-[#C8A45A]/40" />
                <div className="absolute bottom-8 left-5 w-2 h-2 rounded-full bg-[#C8A45A]/40" />
              </div>
              <p className="text-center text-xs">NZ Harvest Map<br />[placeholder]</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
