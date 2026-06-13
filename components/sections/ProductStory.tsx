import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";

export default function ProductStory() {
  return (
    <section
      className="bg-[#1A1A1A] py-24 lg:py-36 px-6 lg:px-12 overflow-hidden"
      aria-label="Product story"
    >
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: editorial visual panel */}
        <ScrollReveal>
          <div className="relative w-full aspect-[3/4] bg-[#1F3B2E] border border-[#F2EFE6]/8 overflow-hidden flex flex-col items-center justify-center">
            {/* Corner marks */}
            {["top-5 left-5 border-t border-l","top-5 right-5 border-t border-r","bottom-5 left-5 border-b border-l","bottom-5 right-5 border-b border-r"]
              .map(pos => <div key={pos} className={`absolute ${pos} w-8 h-8 border-[#C8A45A]/20`} aria-hidden="true" />)}
            {/* Large decorative MGO */}
            <span
              aria-hidden="true"
              className="font-[var(--font-cormorant)] text-[#F2EFE6] font-light select-none leading-none"
              style={{ fontSize: "clamp(4rem, 12vw, 9rem)", opacity: 0.055, letterSpacing: "-0.02em" }}
            >
              829+
            </span>
            <span className="text-[#C8A45A]/40 text-[0.5rem] font-semibold tracking-[0.35em] uppercase mt-2">
              MGO Reserve
            </span>
            {/* Vertical rule + label */}
            <div className="absolute bottom-10 flex flex-col items-center gap-3">
              <div className="w-px h-16 bg-[#C8A45A]/25" aria-hidden="true" />
              <span className="text-[#F2EFE6]/20 text-[0.5rem] tracking-[0.3em] uppercase">Origenza</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Right: copy */}
        <div>
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#C8A45A]" />
              <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.25em] uppercase">
                A Rare Harvest
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-8">
              A rare harvest.{" "}
              <em className="italic text-[#C8A45A]">A remarkable concentration.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-[#F2EFE6]/60 text-base font-light leading-relaxed max-w-md">
              Mānuka flowers for only a few weeks each year. From that brief window, each batch is independently tested and handled with care — from hive to jar, nothing more.
            </p>
          </ScrollReveal>

          {/* Specs */}
          <ScrollReveal delay={0.3} className="mt-10 grid grid-cols-2 gap-6">
            {[
              { label: "Harvest", value: "Seasonal bloom" },
              { label: "Extraction", value: "Careful, minimal" },
              { label: "Testing",  value: "Independently verified" },
              { label: "Origin",   value: "New Zealand" },
            ].map(({ label, value }) => (
              <div key={label} className="border-l border-[#C8A45A]/30 pl-4">
                <p className="text-[0.6rem] text-[#C8A45A] font-semibold tracking-widest uppercase mb-1">{label}</p>
                <p className="text-[#F2EFE6]/70 text-sm">{value}</p>
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="mt-10">
            <Link
              href="/origin"
              className="inline-flex items-center gap-2 border border-[#F2EFE6]/30 text-[#F2EFE6] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase px-7 py-3.5 hover:border-[#C8A45A] hover:text-[#C8A45A] transition-all duration-200"
            >
              Our New Zealand Origin
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
