import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ProductCatalogue() {
  return (
    <section id="catalogue" className="bg-[#1F3B2E] py-24 lg:py-32 px-6 lg:px-12" aria-label="Product catalogue">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Copy */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#C8A45A]" />
                <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.25em] uppercase">
                  Product Catalogue
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-4xl sm:text-5xl font-light leading-tight mb-6">
                View the complete{" "}
                <em className="italic text-[#C8A45A]">Origenza range.</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-[#F2EFE6]/55 text-sm leading-relaxed mb-10 max-w-md">
                Explore available MGO levels, jar sizes, flavours, product positioning, and storage information.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="space-y-3 mb-10">
              {[
                "All four MGO grades",
                "250g and 500g jar sizes",
                "Flavour and texture profiles",
                "Suggested product positioning",
                "Storage and shelf life information",
                "[ Digital catalogue available — contact us ]",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-[#F2EFE6]/60 text-sm">
                  <div className="w-1 h-1 rounded-full bg-[#C8A45A] flex-shrink-0 mt-1.5" />
                  <span className={item.startsWith("[") ? "italic text-[#F2EFE6]/30" : ""}>{item}</span>
                </div>
              ))}
            </ScrollReveal>

            <ScrollReveal delay={0.25} className="flex flex-wrap gap-4">
              <Link
                href="/wholesale#enquiry"
                className="btn-slide btn-slide--gold inline-flex items-center gap-2 bg-[#C8A45A] text-[#1F3B2E] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase px-8 py-4 hover:bg-[#d4b578] transition-colors"
              >
                Download Product Catalogue
              </Link>
              <Link
                href="/wholesale#enquiry"
                className="btn-slide btn-slide--ghost inline-flex items-center gap-2 border border-[#F2EFE6]/25 text-[#F2EFE6] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase px-8 py-4 hover:border-[#C8A45A] hover:text-[#C8A45A] transition-all"
              >
                Request Pricing
              </Link>
            </ScrollReveal>
          </div>

          {/* Editorial panel */}
          <ScrollReveal delay={0.2}>
            <div className="relative w-full aspect-[4/3] bg-[#162e22] border border-[#F2EFE6]/8 overflow-hidden">
              {["top-5 left-5 border-t border-l","top-5 right-5 border-t border-r","bottom-5 left-5 border-b border-l","bottom-5 right-5 border-b border-r"]
                .map(pos => <div key={pos} className={`absolute ${pos} w-8 h-8 border-[#C8A45A]/20`} aria-hidden="true" />)}

              {/* Four tier panels */}
              <div className="absolute inset-8 grid grid-cols-2 grid-rows-2 gap-2">
                {[
                  { label: "83+",  bg: "bg-[#F2EFE6]/10" },
                  { label: "263+", bg: "bg-[#C8A45A]/15" },
                  { label: "514+", bg: "bg-[#C8A45A]/25" },
                  { label: "829+", bg: "bg-[#F2EFE6]/5" },
                ].map(({ label, bg }) => (
                  <div key={label} className={`${bg} flex items-center justify-center border border-[#F2EFE6]/8`}>
                    <span className="font-[var(--font-cormorant)] text-[#C8A45A] font-light" style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", opacity: 0.8 }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="text-[#F2EFE6]/25 text-[0.5rem] font-semibold tracking-[0.3em] uppercase">MGO Range</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
