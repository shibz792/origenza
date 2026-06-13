import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GrainOverlay from "@/components/ui/GrainOverlay";

export default function FinalCTA() {
  return (
    <section
      className="relative bg-[#1F3B2E] py-32 lg:py-44 px-6 lg:px-12 overflow-hidden text-center"
      aria-label="Final call to action"
    >
      <GrainOverlay opacity={1.2} />

      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(200,164,90,0.08) 0%, transparent 68%)" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Top gold rule */}
        <div className="w-12 h-px bg-[#C8A45A]/35 mx-auto mb-12" aria-hidden="true" />

        <ScrollReveal>
          <div className="flex justify-center mb-8">
            <div className="gold-rule w-36 text-[#C8A45A]">Get Started</div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-4xl sm:text-5xl font-light leading-tight">
            Bring premium New Zealand Mānuka honey{" "}
            <em className="italic text-[#C8A45A]">to your customers.</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-[#F2EFE6]/55 text-sm lg:text-base leading-relaxed max-w-xl mx-auto">
            Contact Origenza for wholesale pricing, bulk orders, product samples, gifting, and distribution enquiries.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/wholesale#enquiry"
            className="btn-slide btn-slide--gold bg-[#C8A45A] text-[#1F3B2E] text-[0.6875rem] font-semibold tracking-[0.16em] uppercase px-10 py-4 hover:bg-[#d4b578] transition-colors min-w-[240px] text-center"
          >
            Request Wholesale Pricing
          </Link>
          <Link
            href="/contact"
            className="btn-slide btn-slide--ghost border border-[#F2EFE6]/35 text-[#F2EFE6] text-[0.6875rem] font-semibold tracking-[0.16em] uppercase px-10 py-4 hover:border-[#F2EFE6] transition-all min-w-[240px] text-center"
          >
            Contact Us
          </Link>
        </ScrollReveal>

        {/* Bottom gold rule */}
        <div className="w-12 h-px bg-[#C8A45A]/35 mx-auto mt-16" aria-hidden="true" />
      </div>
    </section>
  );
}
