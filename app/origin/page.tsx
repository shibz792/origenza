import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Newsletter from "@/components/sections/Newsletter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our New Zealand Origin",
  description: "Origenza Mānuka honey begins in New Zealand — a remote, pristine landscape where the native Mānuka plant grows wild.",
};

export default function OriginPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: "calc(34px + 80px)" }}>
      <div className="bg-[#1F3B2E] py-20 px-6 text-center">
        <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.3em] uppercase block mb-4">
          Provenance
        </span>
        <h1 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-5xl sm:text-6xl font-light mb-4">
          Our New Zealand Origin
        </h1>
        <p className="text-[#F2EFE6]/55 text-sm max-w-md mx-auto">
          Everything about Origenza begins with where our honey is sourced.
        </p>
      </div>

      {/* Full width image placeholder */}
      <div
        className="w-full h-64 lg:h-96 bg-[#1F3B2E]/15 flex items-center justify-center text-[#1F3B2E]/25 text-sm italic"
        role="img"
        aria-label="[PLACEHOLDER: Aerial photograph of remote New Zealand landscape — rolling hills, mist-covered valleys, Mānuka shrubland in golden morning light]"
      >
        [PLACEHOLDER: Aerial NZ landscape — golden morning light, rolling hills, Mānuka shrubland]
      </div>

      <div className="bg-[#F2EFE6] py-16 px-6 lg:px-12">
        <div className="max-w-[900px] mx-auto prose-origenza">
          <ScrollReveal>
            <h2>Where it begins</h2>
            <p>
              New Zealand is a small country at the bottom of the Pacific Ocean, and it has some of the most pristine and remote natural environments on earth. The native Mānuka shrub (Leptospermum scoparium) grows across many of these landscapes — from coastal hills and river valleys to high-altitude ridgelines.
            </p>
            <p>
              It is from these environments that Origenza sources its honey. The remoteness of many Mānuka growing areas means that the nectar is gathered far from urban centres, industrial activity, and intensive land use.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2>The Mānuka bloom</h2>
            <p>
              Mānuka flowers during a relatively brief window each year — typically October to February in New Zealand, varying by region and elevation. During this time, bees visit the small white flowers and gather the distinctive nectar.
            </p>
            <p>
              The short season means that each harvest is finite and intentional. The quality of each year's honey can vary with the season's conditions — temperature, rainfall, and bloom length all play a role.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2>From hive to jar</h2>
            <p>
              After harvest, the honey is carefully extracted and subjected to independent laboratory testing to confirm its MGO concentration and authenticity. Each batch is assigned a code that will eventually support full traceability through our forthcoming Trace Your Jar feature.
            </p>
            <p>
              Our packaging is designed to protect the honey's natural character during transit, and we use glass jars where possible to minimise environmental impact and avoid unnecessary interaction between the honey and packaging materials.
            </p>
          </ScrollReveal>

          {/* Image placeholder grid */}
          <ScrollReveal delay={0.1} className="grid grid-cols-2 gap-4 my-10">
            {[
              "Mānuka shrub in early bloom, coastal hill, New Zealand",
              "Beehive in remote NZ valley — morning light",
              "Amber honey in glass jar, natural light",
              "NZ landscape — aerial, green hills and river",
            ].map((alt) => (
              <div
                key={alt}
                className="w-full h-40 bg-[#1F3B2E]/8 flex items-center justify-center text-[#1F3B2E]/20 text-xs italic p-3 text-center leading-snug"
                role="img"
                aria-label={`[PLACEHOLDER: ${alt}]`}
              >
                [PLACEHOLDER: {alt}]
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2>Mānuka and Aotearoa</h2>
            <p>
              The Mānuka plant holds a long place in the history and culture of Aotearoa New Zealand. Known to Māori for its many traditional uses — including its wood, bark, and leaves — it is a plant deeply woven into the identity of the country.
            </p>
            <p>
              This connection to place is part of what makes Origenza a genuinely New Zealand product. Our honey is not simply produced in New Zealand — it comes from a plant that is native to New Zealand, gathered by bees that forage in its wild landscapes, and shaped by the seasons and conditions of Aotearoa.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="mt-10 flex flex-wrap gap-4">
            <Link href="/shop" className="bg-[#1F3B2E] text-[#F2EFE6] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase px-7 py-3.5 hover:bg-[#2d5240] transition-colors">
              Shop the Collection
            </Link>
            <Link href="/trace" className="border border-[#1F3B2E]/25 text-[#1F3B2E] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase px-7 py-3.5 hover:border-[#1F3B2E] transition-colors">
              Trace Your Jar
            </Link>
          </ScrollReveal>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}
