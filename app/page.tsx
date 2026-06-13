import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ProductCollection from "@/components/sections/ProductCollection";
import WhyManuka from "@/components/sections/WhyManuka";
import WhoWeWorkWith from "@/components/sections/WhoWeWorkWith";
import Newsletter from "@/components/sections/Newsletter";
import OriginStatement from "@/components/sections/OriginStatement";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Origenza — Premium New Zealand Mānuka Honey Wholesale",
  description:
    "Premium New Zealand Mānuka honey for retailers, distributors, gifting partners, hospitality businesses, and bulk buyers. Request wholesale pricing, samples, and the product catalogue.",
  openGraph: {
    title: "Origenza — New Zealand Mānuka Honey Wholesale",
    description: "Authentic New Zealand Mānuka honey for wholesale, bulk orders, and distribution.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />              {/* dark   #1F3B2E */}
      <ProductCollection /> {/* ivory  #F2EFE6 */}
      <WhyManuka />         {/* dark   #1F3B2E */}
      <WhoWeWorkWith />     {/* ivory  #F2EFE6 */}
      <Newsletter />        {/* dark   #1F3B2E */}
      <OriginStatement />   {/* ivory  #F2EFE6 */}
      <FinalCTA />          {/* dark   #1F3B2E */}
    </>
  );
}
