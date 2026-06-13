import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GrainOverlay from "@/components/ui/GrainOverlay";

export default function Distribution() {
  return (
    <section
      id="distribution"
      className="relative bg-[#1A1A1A] py-24 lg:py-32 px-6 lg:px-12 overflow-hidden"
      aria-label="Distribution"
    >
      <GrainOverlay opacity={1.2} />

      {/* Background text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span
          className="font-[var(--font-cormorant)] text-[#F2EFE6] font-light whitespace-nowrap"
          style={{ fontSize: "clamp(4rem, 14vw, 16rem)", opacity: 0.028, letterSpacing: "-0.02em", lineHeight: 1 }}
        >
          DISTRIBUTE
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Copy */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#C8A45A]" />
                <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.25em] uppercase">
                  Distribution
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-4xl sm:text-5xl font-light leading-tight mb-6">
                Interested in{" "}
                <em className="italic text-[#C8A45A]">representing Origenza?</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-[#F2EFE6]/55 text-sm leading-relaxed mb-10 max-w-md">
                We welcome enquiries from distributors, importers, and experienced business partners interested in introducing Origenza to new markets.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="space-y-3 mb-10">
              {[
                "Established distribution relationships welcome",
                "New Zealand and international markets",
                "Importers and exporters welcome",
                "[ Distribution terms and territory details — contact us ]",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-[#F2EFE6]/60 text-sm">
                  <div className="w-1 h-1 rounded-full bg-[#C8A45A] flex-shrink-0 mt-1.5" />
                  <span className={item.startsWith("[") ? "italic text-[#F2EFE6]/30" : ""}>{item}</span>
                </div>
              ))}
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <Link
                href="/wholesale#enquiry"
                className="btn-slide btn-slide--gold inline-flex items-center gap-2 bg-[#C8A45A] text-[#1F3B2E] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase px-8 py-4 hover:bg-[#d4b578] transition-colors"
              >
                Distribution Enquiry
              </Link>
            </ScrollReveal>
          </div>

          {/* Editorial panel */}
          <ScrollReveal delay={0.2}>
            <div className="relative w-full aspect-[4/3] bg-[#1F3B2E]/50 border border-[#F2EFE6]/8 overflow-hidden flex items-center justify-center">
              {["top-5 left-5 border-t border-l","top-5 right-5 border-t border-r","bottom-5 left-5 border-b border-l","bottom-5 right-5 border-b border-r"]
                .map(pos => <div key={pos} className={`absolute ${pos} w-8 h-8 border-[#C8A45A]/20`} aria-hidden="true" />)}
              <div className="text-center relative z-10">
                <div className="w-px h-12 bg-[#C8A45A]/30 mx-auto mb-5" aria-hidden="true" />
                <span className="text-[#C8A45A] text-[0.5rem] font-semibold tracking-[0.35em] uppercase">New Zealand</span>
                <p className="font-[var(--font-cormorant)] text-[#F2EFE6] text-3xl font-light tracking-wide mt-2">Origenza</p>
                <p className="text-[#F2EFE6]/35 text-[0.5rem] font-semibold tracking-[0.3em] uppercase mt-2">Global Distribution</p>
                <div className="w-px h-12 bg-[#C8A45A]/30 mx-auto mt-5" aria-hidden="true" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
