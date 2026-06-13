import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";

const CORNER_POSITIONS = [
  "top-4 left-4 border-t border-l",
  "top-4 right-4 border-t border-r",
  "bottom-4 left-4 border-b border-l",
  "bottom-4 right-4 border-b border-r",
];

export default function GiftingSection() {
  return (
    <section className="bg-[#1A1A1A] py-24 lg:py-32 px-6 lg:px-12" aria-label="Gifting">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#C8A45A]" />
                <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.25em] uppercase">
                  Gifting
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-4xl sm:text-5xl font-light leading-tight mb-6">
                Premium New Zealand gifting{" "}
                <em className="italic text-[#C8A45A]">for clients and teams.</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-[#F2EFE6]/55 text-sm leading-relaxed mb-8 max-w-md">
                Origenza Mānuka honey makes a premium corporate gift — authentic New Zealand origin, beautiful presentation, and a product that speaks for itself.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="space-y-2 mb-8">
              {[
                "Client and employee gifts",
                "Event and holiday gifting",
                "Premium gift boxes",
                "Custom messages welcome",
                "Larger order quantities available",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-[#F2EFE6]/60 text-sm">
                  <div className="w-1 h-1 rounded-full bg-[#C8A45A] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </ScrollReveal>

            <ScrollReveal delay={0.25} className="flex flex-wrap gap-4">
              <Link
                href="/wholesale#enquiry"
                className="btn-slide btn-slide--gold bg-[#C8A45A] text-[#1F3B2E] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase px-7 py-3.5 hover:bg-[#d4b578] transition-colors"
              >
                Request Gifting Information
              </Link>
              <Link
                href="/gifting/corporate"
                className="btn-slide btn-slide--ghost border border-[#F2EFE6]/25 text-[#F2EFE6] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase px-7 py-3.5 hover:border-[#C8A45A] hover:text-[#C8A45A] transition-all"
              >
                Corporate Gifting
              </Link>
            </ScrollReveal>
          </div>

          {/* Editorial visual panel */}
          <ScrollReveal delay={0.2}>
            <div className="relative w-full aspect-square bg-[#1A1A1A] border border-[#F2EFE6]/8 overflow-hidden flex items-center justify-center">
              {/* Decorative background word */}
              <span
                aria-hidden="true"
                className="font-[var(--font-cormorant)] text-[#F2EFE6] font-light absolute select-none"
                style={{ fontSize: "clamp(5rem, 13vw, 11rem)", opacity: 0.035, letterSpacing: "-0.02em" }}
              >
                GIFT
              </span>
              {/* Corner marks */}
              {CORNER_POSITIONS.map((pos) => (
                <div key={pos} className={`absolute ${pos} w-7 h-7 border-[#C8A45A]/25`} aria-hidden="true" />
              ))}
              {/* Centre wordmark */}
              <div className="relative z-10 text-center">
                <div className="w-px h-14 bg-[#C8A45A]/35 mx-auto mb-5" aria-hidden="true" />
                <p className="font-[var(--font-cormorant)] text-[#F2EFE6] text-4xl font-light tracking-wide">
                  Origenza
                </p>
                <p className="text-[#C8A45A] text-[0.55rem] font-semibold tracking-[0.35em] uppercase mt-1">
                  New Zealand
                </p>
                <div className="w-px h-14 bg-[#C8A45A]/35 mx-auto mt-5" aria-hidden="true" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
