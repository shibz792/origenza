import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const businesses = [
  { label: "Retail Stores",          desc: "Everyday and premium grocery, health food, and lifestyle stores." },
  { label: "Pharmacies",             desc: "Wellness and health-focused pharmacy ranges." },
  { label: "Wellness Stores",        desc: "Natural health, supplement, and wellbeing retailers." },
  { label: "Supermarkets",           desc: "Premium honey category for mainstream grocery." },
  { label: "Gift Shops",             desc: "New Zealand gifts and premium retail stores." },
  { label: "Hotels & Restaurants",   desc: "Hospitality settings, minibar supply, and in-room gifting." },
  { label: "Corporate Gifting",      desc: "Client gifts, employee gifts, and event gifting." },
  { label: "Distributors",           desc: "Established distributors seeking a premium NZ honey brand." },
  { label: "Importers & Exporters",  desc: "International buyers looking to introduce Origenza to new markets." },
];

export default function WhoWeWorkWith() {
  return (
    <section className="bg-[#F2EFE6] py-24 lg:py-32 px-6 lg:px-12" aria-label="Who we work with">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="gold-rule w-48">Who We Work With</div>
          </div>
          <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-4xl sm:text-5xl font-light leading-tight">
            Made for businesses{" "}
            <em className="italic text-[#C8A45A]">of every size.</em>
          </h2>
          <p className="mt-4 text-[#1A1A1A]/55 text-sm max-w-md mx-auto leading-relaxed">
            Origenza welcomes wholesale enquiries from retailers, distributors, gifting buyers, hospitality businesses, and international partners.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {businesses.map((b, i) => (
            <ScrollReveal key={b.label} delay={i * 0.06}>
              <div className="group bg-white border border-[#1F3B2E]/10 p-7 hover:border-[#C8A45A]/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full">
                <div className="w-6 h-px bg-[#C8A45A] mb-4" aria-hidden="true" />
                <h3 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-xl font-light mb-2 leading-tight">
                  {b.label}
                </h3>
                <p className="text-[#1A1A1A]/50 text-xs leading-relaxed flex-1 mb-5">
                  {b.desc}
                </p>
                <Link
                  href="/wholesale#enquiry"
                  className="text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-[#C8A45A] hover:text-[#1F3B2E] transition-colors border-b border-[#C8A45A]/30 pb-0.5 self-start"
                >
                  Enquire →
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2} className="text-center mt-12">
          <Link
            href="/wholesale#enquiry"
            className="btn-slide btn-slide--green inline-flex items-center gap-2 bg-[#1F3B2E] text-[#F2EFE6] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase px-8 py-4 hover:bg-[#2d5240] transition-colors"
          >
            Send a Wholesale Enquiry
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
