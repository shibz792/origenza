"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { Search } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TracePage() {
  const [batch, setBatch] = useState("");
  const [searched, setSearched] = useState(false);

  return (
    <div className="min-h-screen bg-[#F2EFE6]" style={{ paddingTop: "calc(34px + 80px)" }}>
      <div className="bg-[#1F3B2E] py-20 px-6 text-center">
        <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.3em] uppercase block mb-4">Traceability</span>
        <h1 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-5xl font-light mb-4">Trace Your Jar</h1>
        <p className="text-[#F2EFE6]/55 text-sm max-w-md mx-auto">
          Enter the batch code printed on the base of your Origenza jar to trace its journey from harvest to your table.
        </p>
      </div>

      <div className="max-w-[600px] mx-auto px-6 py-16">
        <ScrollReveal>
          <form
            onSubmit={(e) => { e.preventDefault(); setSearched(true); }}
            className="flex gap-0 mb-6"
            aria-label="Batch trace lookup"
          >
            <input
              type="text"
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
              placeholder="Enter batch code (e.g. NZ-2024-0142)"
              className="flex-1 border border-[#1F3B2E]/20 px-5 py-4 text-sm focus:outline-none focus:border-[#C8A45A] text-[#1F3B2E] placeholder-[#1A1A1A]/30 bg-white"
              aria-label="Batch code"
            />
            <button type="submit" className="bg-[#1F3B2E] text-[#F2EFE6] px-6 py-4 hover:bg-[#2d5240] transition-colors">
              <Search size={18} />
            </button>
          </form>

          {searched && (
            <div className="bg-[#C8A45A]/10 border border-[#C8A45A]/30 p-6 text-center">
              <p className="font-[var(--font-cormorant)] text-[#1F3B2E] text-xl font-light mb-2">
                Batch lookup coming soon
              </p>
              <p className="text-[#1A1A1A]/55 text-sm leading-relaxed">
                Full batch traceability is currently in development. When live, you'll be able to trace your honey from harvest region through to testing and packaging. Sign up to our newsletter to be notified when it launches.
              </p>
            </div>
          )}
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-12">
          <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-2xl font-light mb-4">What you'll be able to see</h2>
          <div className="space-y-4">
            {[
              { label: "Harvest Region",   desc: "The New Zealand region where the honey was gathered." },
              { label: "Flowering Season", desc: "The year and season of the Mānuka bloom." },
              { label: "MGO Test Result",  desc: "The independently tested MGO concentration for this batch." },
              { label: "Testing Date",     desc: "When the batch was tested and by which laboratory." },
              { label: "Packaging Date",   desc: "When the honey was packed and sealed." },
            ].map(({ label, desc }) => (
              <div key={label} className="flex gap-4 border-b border-[#1F3B2E]/8 pb-4">
                <div className="w-1 flex-shrink-0 bg-[#C8A45A]/50 rounded-full" />
                <div>
                  <p className="text-[#1F3B2E] text-sm font-semibold">{label}</p>
                  <p className="text-[#1A1A1A]/50 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
