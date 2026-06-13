"use client";

import MarqueeStrip from "@/components/ui/MarqueeStrip";

const items = [
  "Wholesale Enquiries Welcome",
  "New Zealand Origin",
  "4 MGO Grades Available",
  "Retailers & Distributors",
  "Corporate Gifting",
  "Independently Tested",
  "Batch Traceable",
  "Premium Packaging",
  "Hospitality Supply",
  "Bulk Orders Welcome",
];

export default function TrustStrip() {
  return (
    <section className="bg-[#1F3B2E] py-4 overflow-hidden" aria-label="Trust indicators">
      <MarqueeStrip items={items} />
    </section>
  );
}
