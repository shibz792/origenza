import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const tiers = [
  {
    label: "Everyday",
    mgo: "83+",
    flavour: "Mild, light floral sweetness",
    suggested: "Tea, toast, cooking, and everyday use",
    sizes: "250g / 500g",
    position: "Entry-level Mānuka — approachable and versatile",
    bestFor: "Supermarkets, cafés, gift stores, and general retail",
    color: "bg-gradient-to-br from-[#F2EFE6] to-[#e4dfd2]",
    textDark: true,
  },
  {
    label: "Potent & Pure",
    mgo: "263+",
    flavour: "Rich, rounded with earthy depth",
    suggested: "Daily wellness rituals and morning routines",
    sizes: "250g / 500g",
    position: "Mid-range wellness — concentrated and considered",
    bestFor: "Wellness stores, pharmacies, and premium retailers",
    color: "bg-gradient-to-br from-[#C8A45A]/20 to-[#d4b578]/28",
    textDark: true,
  },
  {
    label: "High Grade",
    mgo: "514+",
    flavour: "Intense, complex, herbal notes",
    suggested: "Deliberate daily wellness use",
    sizes: "250g",
    position: "High potency — for experienced Mānuka customers",
    bestFor: "Premium wellness stores and gifting",
    color: "bg-gradient-to-br from-[#a8863e]/28 to-[#C8A45A]/18",
    textDark: true,
  },
  {
    label: "Ultra Premium",
    mgo: "829+",
    flavour: "Bold, distinctive, deeply complex",
    suggested: "Taken directly — one teaspoon daily",
    sizes: "250g",
    position: "Rare and exceptional — for connoisseurs",
    bestFor: "Luxury gifting, specialist retailers, and export markets",
    color: "bg-gradient-to-br from-[#1A1A1A] to-[#1F3B2E]",
    textDark: false,
  },
];

export default function ProductComparison() {
  return (
    <section className="bg-[#F2EFE6] py-24 lg:py-32 px-6 lg:px-12" aria-label="Product comparison">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal className="text-center mb-14">
          <div className="flex justify-center mb-6">
            <div className="gold-rule w-48">Product Positioning</div>
          </div>
          <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-4xl sm:text-5xl font-light">
            The right product{" "}
            <em className="italic text-[#C8A45A]">for every customer.</em>
          </h2>
        </ScrollReveal>

        {/* Desktop comparison grid */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mb-8">
          {tiers.map((t, i) => (
            <ScrollReveal key={t.label} delay={i * 0.08}>
              <div className={`${t.color} border border-[#1F3B2E]/10 overflow-hidden`}>
                {/* Header panel */}
                <div className="p-6 border-b border-[#1F3B2E]/10">
                  <span className={`text-[0.55rem] font-semibold tracking-[0.25em] uppercase block mb-1 ${t.textDark ? "text-[#C8A45A]" : "text-[#C8A45A]"}`}>
                    {t.label}
                  </span>
                  <p className={`font-[var(--font-cormorant)] text-3xl font-light ${t.textDark ? "text-[#1F3B2E]" : "text-[#F2EFE6]"}`}>
                    MGO {t.mgo}
                  </p>
                  <p className={`text-xs mt-1 ${t.textDark ? "text-[#1A1A1A]/55" : "text-[#F2EFE6]/55"}`}>{t.sizes}</p>
                </div>
                {/* Details */}
                <div className="p-6 space-y-4">
                  {[
                    { key: "Flavour",      val: t.flavour },
                    { key: "Use",          val: t.suggested },
                    { key: "Position",     val: t.position },
                    { key: "Best suited",  val: t.bestFor },
                  ].map(({ key, val }) => (
                    <div key={key}>
                      <p className="text-[#C8A45A] text-[0.55rem] font-semibold tracking-[0.2em] uppercase mb-0.5">{key}</p>
                      <p className={`text-xs leading-relaxed ${t.textDark ? "text-[#1A1A1A]/65" : "text-[#F2EFE6]/65"}`}>{val}</p>
                    </div>
                  ))}
                  <Link
                    href="/wholesale#enquiry"
                    className={`inline-block text-[0.6rem] font-semibold tracking-[0.18em] uppercase border-b pb-0.5 mt-2 transition-colors ${
                      t.textDark
                        ? "text-[#1F3B2E] border-[#C8A45A] hover:text-[#C8A45A]"
                        : "text-[#C8A45A] border-[#C8A45A]/50 hover:text-[#F2EFE6]"
                    }`}
                  >
                    Request Pricing →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile: stacked cards */}
        <div className="lg:hidden space-y-4 mb-8">
          {tiers.map((t) => (
            <div key={t.label} className={`${t.color} border border-[#1F3B2E]/10 p-6`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-[#C8A45A] text-[0.55rem] font-semibold tracking-[0.25em] uppercase block mb-1">{t.label}</span>
                  <p className={`font-[var(--font-cormorant)] text-2xl font-light ${t.textDark ? "text-[#1F3B2E]" : "text-[#F2EFE6]"}`}>
                    MGO {t.mgo}
                  </p>
                </div>
                <span className={`text-xs ${t.textDark ? "text-[#1A1A1A]/50" : "text-[#F2EFE6]/50"}`}>{t.sizes}</span>
              </div>
              <p className={`text-xs mb-2 ${t.textDark ? "text-[#1A1A1A]/60" : "text-[#F2EFE6]/60"}`}>{t.bestFor}</p>
              <Link
                href="/wholesale#enquiry"
                className={`text-[0.6rem] font-semibold tracking-[0.18em] uppercase border-b pb-0.5 ${
                  t.textDark ? "text-[#1F3B2E] border-[#C8A45A]" : "text-[#C8A45A] border-[#C8A45A]/50"
                }`}
              >
                Request Pricing →
              </Link>
            </div>
          ))}
        </div>

        <ScrollReveal delay={0.1} className="text-center">
          <Link
            href="/wholesale#enquiry"
            className="btn-slide btn-slide--green inline-flex items-center gap-2 bg-[#1F3B2E] text-[#F2EFE6] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase px-8 py-4 hover:bg-[#2d5240] transition-colors"
          >
            Enquire About the Full Range
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
