import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CorporateForm from "@/components/ui/CorporateForm";

export const metadata: Metadata = {
  title: "Corporate Gifting",
  description: "Premium Mānuka honey corporate gifts from New Zealand — for businesses, events, and hospitality teams.",
};

export default function CorporateGiftingPage() {
  return (
    <div className="min-h-screen bg-[#F2EFE6]" style={{ paddingTop: "calc(34px + 80px)" }}>
      <div className="bg-[#1A1A1A] py-20 px-6 text-center">
        <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.3em] uppercase block mb-4">Corporate</span>
        <h1 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-5xl font-light mb-4">Corporate Gifting</h1>
        <p className="text-[#F2EFE6]/55 text-sm max-w-md mx-auto">Premium New Zealand Mānuka honey for businesses, events, and hospitality teams.</p>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-16">
        <ScrollReveal>
          <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-3xl font-light mb-6">Make your gifting exceptional</h2>
          <p className="text-[#1A1A1A]/60 text-sm leading-relaxed mb-8">
            Origenza Mānuka honey is a gift that communicates care, quality, and genuine New Zealand provenance. We work with businesses and teams to create tailored gifting solutions — from small curated sets to large-volume orders with custom messaging.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="grid sm:grid-cols-3 gap-5 mb-12">
          {[
            { title: "Client Gifts", desc: "Curated jars with custom gift messages for clients and partners." },
            { title: "Event Gifting", desc: "Premium honey sets for conferences, launches, and special events." },
            { title: "Staff Gifting", desc: "A considered gift for your team — New Zealand, naturally." },
          ].map((item) => (
            <div key={item.title} className="border border-[#1F3B2E]/12 p-6">
              <h3 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-xl font-light mb-2">{item.title}</h3>
              <p className="text-[#1A1A1A]/55 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h3 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-2xl font-light mb-5">Enquire about corporate gifting</h3>
          <CorporateForm />
        </ScrollReveal>
      </div>
    </div>
  );
}
