import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";

const values = [
  { title: "Responsible Sourcing",       desc: "Working with producers who care for their hives and the surrounding native ecosystems." },
  { title: "Native Ecosystem Respect",   desc: "Mānuka grows wild. We source from environments where natural balance is preserved." },
  { title: "Considered Packaging",       desc: "Recyclable glass jars, minimal materials, and packaging choices made with purpose." },
  { title: "Long-Term Partnerships",     desc: "Relationships with producers built on consistency, transparency, and mutual respect." },
];

export default function Sustainability() {
  return (
    <section className="bg-[#1F3B2E] py-24 lg:py-32 px-6 lg:px-12 overflow-hidden" aria-label="Sustainability">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Editorial visual panel */}
          <ScrollReveal>
            <div className="relative w-full aspect-[4/5] bg-[#162e22] border border-[#F2EFE6]/8 overflow-hidden flex items-center justify-center">
              {/* Corner marks */}
              {["top-5 left-5 border-t border-l","top-5 right-5 border-t border-r","bottom-5 left-5 border-b border-l","bottom-5 right-5 border-b border-r"]
                .map(pos => <div key={pos} className={`absolute ${pos} w-8 h-8 border-[#C8A45A]/20`} aria-hidden="true" />)}
              {/* Large background text */}
              <span
                aria-hidden="true"
                className="font-[var(--font-cormorant)] text-[#F2EFE6] font-light select-none absolute leading-none"
                style={{ fontSize: "clamp(5rem, 16vw, 13rem)", opacity: 0.04, letterSpacing: "-0.02em" }}
              >
                NZ
              </span>
              {/* Centre lockup */}
              <div className="relative z-10 text-center">
                <div className="w-px h-12 bg-[#C8A45A]/30 mx-auto mb-5" aria-hidden="true" />
                <span className="text-[#C8A45A] text-[0.5rem] font-semibold tracking-[0.35em] uppercase">Aotearoa</span>
                <p className="font-[var(--font-cormorant)] text-[#F2EFE6] text-2xl font-light tracking-wide mt-2">New Zealand</p>
                <div className="w-px h-12 bg-[#C8A45A]/30 mx-auto mt-5" aria-hidden="true" />
              </div>
            </div>
          </ScrollReveal>

          {/* Copy */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#C8A45A]" />
                <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.25em] uppercase">
                  Sustainability
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-4xl sm:text-5xl font-light leading-tight mb-8">
                Respecting the landscape that{" "}
                <em className="italic text-[#C8A45A]">makes Origenza possible.</em>
              </h2>
            </ScrollReveal>

            <div className="space-y-6">
              {values.map((v, i) => (
                <ScrollReveal key={v.title} delay={0.1 + i * 0.08}>
                  <div className="border-l border-[#C8A45A]/30 pl-5">
                    <h3 className="text-[#F2EFE6] text-sm font-semibold mb-1">{v.title}</h3>
                    <p className="text-[#F2EFE6]/50 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4} className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-[#F2EFE6]/25 text-[#F2EFE6] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase px-7 py-3.5 hover:border-[#C8A45A] hover:text-[#C8A45A] transition-all duration-200"
              >
                About Our Approach
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
