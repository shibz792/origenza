import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Origenza team.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F2EFE6]" style={{ paddingTop: "calc(34px + 80px)" }}>
      <div className="bg-[#1F3B2E] py-20 px-6 text-center">
        <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.3em] uppercase block mb-4">Contact</span>
        <h1 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-5xl font-light">Get in Touch</h1>
      </div>

      <div className="max-w-[600px] mx-auto px-6 py-16">
        <ScrollReveal>
          <p className="text-[#1A1A1A]/60 text-sm leading-relaxed mb-10 text-center">
            We&apos;re a small team based in New Zealand. Whether you have a product question, a wholesale enquiry, or simply want to know more about Origenza — we&apos;d love to hear from you.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <ContactForm />
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-10 text-center">
          <p className="text-[#1A1A1A]/40 text-xs">
            We aim to respond within 1–2 business days. New Zealand time (NZST/NZDT).
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
