import type { Metadata } from "next";
import WhyManuka from "@/components/sections/WhyManuka";
import ProductCollection from "@/components/sections/ProductCollection";
import ProductComparison from "@/components/sections/ProductComparison";
import WhoWeWorkWith from "@/components/sections/WhoWeWorkWith";
import WholesaleSimple from "@/components/sections/WholesaleSimple";
import MGOGuide from "@/components/sections/MGOGuide";
import GiftingSection from "@/components/sections/Gifting";
import BulkOrders from "@/components/sections/BulkOrders";
import Distribution from "@/components/sections/Distribution";
import ProductCatalogue from "@/components/sections/ProductCatalogue";
import Newsletter from "@/components/sections/Newsletter";
import FinalCTA from "@/components/sections/FinalCTA";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GrainOverlay from "@/components/ui/GrainOverlay";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wholesale — Origenza New Zealand Mānuka Honey",
  description:
    "Wholesale pricing, bulk orders, samples, distribution, and corporate gifting enquiries for Origenza premium New Zealand Mānuka honey.",
};

function WholesaleHero() {
  return (
    <section
      className="relative min-h-[60vh] flex flex-col items-center justify-center bg-[#1F3B2E] overflow-hidden px-6 lg:px-12 text-center"
      aria-label="Wholesale hero"
    >
      {/* Background layers */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e22] via-[#1F3B2E] to-[#162619]" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(200,164,90,0.07) 0%, transparent 68%)" }}
        />
        <GrainOverlay opacity={1.4} />
      </div>

      <div className="relative z-10 max-w-4xl pt-24 pb-16">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#C8A45A]/70" />
            <span className="text-[#C8A45A] text-[0.6rem] font-semibold tracking-[0.32em] uppercase">
              Wholesale — New Zealand Mānuka Honey
            </span>
            <div className="h-px w-8 bg-[#C8A45A]/70" />
          </div>
        </div>

        <h1
          className="font-[var(--font-cormorant)] text-[#F2EFE6] font-light leading-[1.04] tracking-tight mb-8"
          style={{ fontSize: "clamp(2.4rem, 7vw, 6.5rem)" }}
        >
          Premium New Zealand
          <br />
          <em className="italic text-[#C8A45A]">Mānuka Honey</em>
          <br />
          for Wholesale.
        </h1>

        <p className="text-[#F2EFE6]/65 text-base lg:text-lg font-light leading-relaxed max-w-xl mx-auto mb-10">
          Authentic New Zealand Mānuka honey for retailers, distributors, gifting partners, hospitality businesses, and bulk buyers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#enquiry"
            className="btn-slide btn-slide--gold bg-[#C8A45A] text-[#1F3B2E] text-[0.6875rem] font-semibold tracking-[0.16em] uppercase px-9 py-4 hover:bg-[#d4b578] transition-colors min-w-[220px] text-center"
          >
            Request Wholesale Pricing
          </Link>
          <Link
            href="/shop"
            className="btn-slide btn-slide--ghost border border-[#F2EFE6]/40 text-[#F2EFE6] text-[0.6875rem] font-semibold tracking-[0.16em] uppercase px-9 py-4 hover:border-[#F2EFE6] transition-all min-w-[220px] text-center"
          >
            View Product Range
          </Link>
        </div>

        <p className="mt-6 text-[#F2EFE6]/35 text-[0.6rem] tracking-[0.2em] uppercase">
          Wholesale · Bulk Orders · Distribution · Corporate Gifting
        </p>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-[#F2EFE6]/10 py-4 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-center lg:justify-between gap-x-8 gap-y-1.5">
          {["Wholesale Enquiries Welcome", "Retailers & Distributors", "New Zealand Origin", "4 MGO Grades"].map((s) => (
            <span key={s} className="text-[#F2EFE6]/35 text-[0.55rem] font-semibold tracking-[0.26em] uppercase">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function WholesalePage() {
  return (
    <>
      <WholesaleHero />
      <WhyManuka />
      <ProductCollection />
      <ProductComparison />
      <WhoWeWorkWith />
      <WholesaleSimple />
      <MGOGuide />
      <GiftingSection />
      <BulkOrders />
      <Distribution />
      <ProductCatalogue />
      <Newsletter />
      <FinalCTA />
    </>
  );
}
