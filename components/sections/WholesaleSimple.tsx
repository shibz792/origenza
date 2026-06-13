import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GrainOverlay from "@/components/ui/GrainOverlay";

const steps = [
  { num: "01", title: "Choose your products", desc: "Browse the range and select the MGO grades and jar sizes that suit your customers." },
  { num: "02", title: "Send your enquiry",    desc: "Tell us your business type, location, and estimated quantity. No complicated forms." },
  { num: "03", title: "Receive pricing",      desc: "Our team will get back to you with pricing and next steps." },
];

export default function WholesaleSimple() {
  return (
    <section
      className="relative bg-[#1F3B2E] py-24 lg:py-36 px-6 lg:px-12 overflow-hidden"
      aria-label="Wholesale made simple"
    >
      <GrainOverlay opacity={1.2} />

      {/* Background text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span
          className="font-[var(--font-cormorant)] text-[#F2EFE6] font-light whitespace-nowrap"
          style={{ fontSize: "clamp(4rem, 16vw, 18rem)", opacity: 0.025, letterSpacing: "-0.02em", lineHeight: 1 }}
        >
          WHOLESALE
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="gold-rule w-44 text-[#C8A45A]">How It Works</div>
          </div>
          <h2 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-4xl sm:text-5xl lg:text-6xl font-light">
            Wholesale{" "}
            <em className="italic text-[#C8A45A]">made simple.</em>
          </h2>
          <p className="mt-4 text-[#F2EFE6]/55 text-sm max-w-lg mx-auto leading-relaxed">
            Tell us what products you are interested in, your expected order quantity, and your location. Our team will contact you with pricing and product information.
          </p>
        </ScrollReveal>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 0.12}>
              <div className="relative bg-[#F2EFE6]/5 border border-[#F2EFE6]/10 p-8 lg:p-10 hover:border-[#C8A45A]/30 transition-all duration-300">
                <div
                  aria-hidden="true"
                  className="font-[var(--font-cormorant)] text-[#F2EFE6] font-light select-none leading-none mb-4"
                  style={{ fontSize: "4rem", opacity: 0.07 }}
                >
                  {s.num}
                </div>
                <div className="w-6 h-px bg-[#C8A45A] mb-5" aria-hidden="true" />
                <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.2em] uppercase block mb-2">
                  Step {s.num}
                </span>
                <h3 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-2xl font-light mb-3 leading-tight">
                  {s.title}
                </h3>
                <p className="text-[#F2EFE6]/55 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTAs */}
        <ScrollReveal delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/wholesale#enquiry"
            className="btn-slide btn-slide--gold bg-[#C8A45A] text-[#1F3B2E] text-[0.6875rem] font-semibold tracking-[0.16em] uppercase px-8 py-4 hover:bg-[#d4b578] transition-colors min-w-[220px] text-center"
          >
            Request Wholesale Pricing
          </Link>
          <Link
            href="/wholesale#enquiry"
            className="btn-slide btn-slide--ghost border border-[#F2EFE6]/30 text-[#F2EFE6] text-[0.6875rem] font-semibold tracking-[0.16em] uppercase px-8 py-4 hover:border-[#F2EFE6] transition-all min-w-[220px] text-center"
          >
            Request Samples
          </Link>
          <Link
            href="/wholesale#catalogue"
            className="text-[#F2EFE6]/60 text-[0.6875rem] font-semibold tracking-[0.16em] uppercase border-b border-[#F2EFE6]/20 pb-0.5 hover:text-[#C8A45A] hover:border-[#C8A45A] transition-all"
          >
            Download Product Catalogue
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
