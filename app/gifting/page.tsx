import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Newsletter from "@/components/sections/Newsletter";

export const metadata: Metadata = {
  title: "Gifting",
  description: "Give the gift of premium New Zealand Mānuka honey — beautifully presented and thoughtfully sourced.",
};

const giftOptions = [
  { title: "Classic Gift",       desc: "A single jar of your chosen grade, beautifully wrapped.", price: "From $29" },
  { title: "Duo Gift Set",       desc: "Two grades presented together — ideal for exploring Mānuka.", price: "From $80" },
  { title: "Premium Collection", desc: "All four grades in a premium gift box.", price: "From $340" },
  { title: "Corporate Gifting",  desc: "Custom orders for businesses, events, and hospitality.", price: "Enquire" },
];

export default function GiftingPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: "calc(34px + 80px)" }}>
      <div className="bg-[#1A1A1A] py-20 px-6 text-center">
        <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.3em] uppercase block mb-4">
          Gifting
        </span>
        <h1 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-5xl sm:text-6xl font-light mb-4">
          A gift of New Zealand,{" "}
          <em className="italic text-[#C8A45A]">beautifully presented.</em>
        </h1>
        <p className="text-[#F2EFE6]/55 text-sm max-w-md mx-auto">
          From personal occasions to corporate expressions of appreciation, Origenza makes a gift that is considered and genuinely from New Zealand.
        </p>
      </div>

      {/* Packaging placeholder */}
      <div
        className="w-full h-64 bg-[#1F3B2E]/15 flex items-center justify-center text-[#1F3B2E]/25 text-sm italic"
        role="img"
        aria-label="[PLACEHOLDER: Premium Origenza gift packaging — forest green box, gold ribbon, amber jar visible inside]"
      >
        [PLACEHOLDER: Premium gift box — dark editorial, forest green, honey gold]
      </div>

      <div className="bg-[#F2EFE6] py-16 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-4xl font-light">
              Choose your gift
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {giftOptions.map((g, i) => (
              <ScrollReveal key={g.title} delay={i * 0.08}>
                <div className="border border-[#1F3B2E]/12 p-8 flex flex-col h-full hover:border-[#C8A45A]/40 transition-colors">
                  {/* Placeholder */}
                  <div className="w-full h-36 bg-[#1F3B2E]/6 flex items-center justify-center text-[#1F3B2E]/20 text-xs italic mb-5">
                    [gift image]
                  </div>
                  <h3 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-xl font-light mb-2">{g.title}</h3>
                  <p className="text-[#1A1A1A]/55 text-sm leading-relaxed flex-1 mb-4">{g.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-[var(--font-cormorant)] text-[#1F3B2E] text-xl">{g.price}</span>
                    {g.title === "Corporate Gifting" ? (
                      <Link href="/gifting/corporate" className="text-[0.625rem] font-semibold tracking-widest uppercase text-[#C8A45A] border-b border-[#C8A45A]">
                        Enquire
                      </Link>
                    ) : (
                      <Link href="/shop" className="text-[0.625rem] font-semibold tracking-widest uppercase text-[#1F3B2E] border-b border-[#C8A45A]">
                        Shop
                      </Link>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2} className="mt-14 bg-[#1F3B2E] p-10 text-center">
            <h3 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-3xl font-light mb-3">
              Need a corporate or custom gift?
            </h3>
            <p className="text-[#F2EFE6]/55 text-sm max-w-sm mx-auto mb-6">
              We work with businesses, event planners, and hospitality teams to create tailored gifting experiences.
            </p>
            <Link
              href="/gifting/corporate"
              className="inline-block bg-[#C8A45A] text-[#1F3B2E] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase px-8 py-4 hover:bg-[#d4b578] transition-colors"
            >
              Corporate Enquiries
            </Link>
          </ScrollReveal>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}
