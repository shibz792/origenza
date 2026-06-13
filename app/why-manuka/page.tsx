import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Newsletter from "@/components/sections/Newsletter";

export const metadata: Metadata = {
  title: "Why Mānuka Honey",
  description: "Discover what makes genuine New Zealand Mānuka honey distinctive — native botanical origin, naturally occurring MGO, measured potency, and New Zealand provenance.",
};

export default function WhyManukaPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: "calc(34px + 80px)" }}>
      {/* Hero */}
      <div className="bg-[#1F3B2E] py-20 px-6 text-center">
        <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.3em] uppercase block mb-4">
          Education
        </span>
        <h1 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-5xl sm:text-6xl font-light mb-4">
          Why Mānuka?
        </h1>
        <p className="text-[#F2EFE6]/55 text-sm max-w-md mx-auto leading-relaxed">
          Not all honey is created equal. Genuine Mānuka honey from New Zealand has a character, composition, and provenance that sets it apart.
        </p>
      </div>

      {/* Content */}
      <div className="bg-[#F2EFE6] py-16 px-6 lg:px-12">
        <div className="max-w-[900px] mx-auto prose-origenza">
          <ScrollReveal>
            <h2>The Mānuka plant</h2>
            <p>
              Mānuka honey is produced from the nectar of the native Mānuka plant, Leptospermum scoparium, which grows wild across Aotearoa New Zealand. This hardy shrub flowers for a brief season each year — typically a few weeks between October and February, varying by region and altitude.
            </p>
            <p>
              During this short flowering window, bees gather the nectar and bring it back to the hive, where it matures into a honey with a composition unlike that of most other floral sources. The brevity of the bloom, the remoteness of many growing environments, and the unique character of the plant itself all contribute to what makes genuine Mānuka honey a rare and distinctive product.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2>What makes it different</h2>
            <p>
              Mānuka honey contains a naturally occurring compound called methylglyoxal (MGO), which forms as the honey matures from dihydroxyacetone (DHA) present in Mānuka nectar. The concentration of MGO varies between batches, regions, and grades — and is used to measure and compare the potency of different products.
            </p>
            <p>
              This is what the MGO number on the label refers to: the measured concentration of methylglyoxal in milligrams per kilogram (mg/kg). Higher numbers indicate higher measured concentrations.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2>New Zealand origin matters</h2>
            <p>
              While Leptospermum scoparium also grows in parts of south-eastern Australia, the term "Mānuka honey" is most closely associated with New Zealand — and there are specific testing and traceability standards that New Zealand producers follow to verify the authenticity and origin of their honey.
            </p>
            <p>
              At Origenza, every product is independently tested for MGO concentration prior to sale, and each jar carries a batch code to support traceability.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2>Flavour and character</h2>
            <p>
              Mānuka honey has a distinctive flavour that varies across grades. Lower MGO grades tend to be smooth, mild, and approachable — similar to other premium honeys but with a gentle herbal note. Higher MGO grades are richer, more complex, and more intense, with a bold, earthy depth that is unmistakably Mānuka.
            </p>
            <p>
              This variation in flavour is part of what makes exploring different grades an interesting experience for those who appreciate fine food products.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="mt-10 p-6 bg-[#1F3B2E]/5 border-l-4 border-[#C8A45A]">
            <p className="text-[#1A1A1A]/55 text-sm italic">
              Origenza Mānuka honey is a food product and is not intended to diagnose, treat, cure, or prevent any disease. All health-related information on this page is general in nature.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="mt-10 flex flex-wrap gap-4">
            <Link href="/mgo-guide" className="bg-[#1F3B2E] text-[#F2EFE6] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase px-7 py-3.5 hover:bg-[#2d5240] transition-colors">
              MGO & UMF Guide
            </Link>
            <Link href="/shop" className="border border-[#1F3B2E]/25 text-[#1F3B2E] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase px-7 py-3.5 hover:border-[#1F3B2E] transition-colors">
              Shop the Collection
            </Link>
          </ScrollReveal>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}
