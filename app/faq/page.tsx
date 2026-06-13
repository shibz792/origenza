import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProductFAQ from "@/components/product/ProductFAQ";
import Newsletter from "@/components/sections/Newsletter";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Origenza Mānuka honey — MGO grading, storage, crystallisation, and more.",
};

const additionalFaqs = [
  { q: "Where is Origenza honey sourced?", a: "From New Zealand producers. Specific harvest regions are noted on product labels, and full batch traceability is being developed." },
  { q: "Do you ship internationally?", a: "Yes. International shipping is available. Rates and estimated delivery times are calculated at checkout." },
  { q: "Is your packaging recyclable?", a: "We use glass jars, which are fully recyclable. Outer packaging uses minimal materials. We're continuously reviewing our packaging to reduce impact." },
  { q: "Can I subscribe and save?", a: "Subscription options are in development and will be available soon. Sign up to our newsletter to be notified." },
  { q: "What is your returns policy?", a: "We accept returns of unopened products within 30 days of purchase. Please see our Shipping & Returns page for full details." },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: "calc(34px + 80px)" }}>
      <div className="bg-[#1F3B2E] py-20 px-6 text-center">
        <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.3em] uppercase block mb-4">Support</span>
        <h1 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-5xl font-light mb-4">Frequently Asked Questions</h1>
        <p className="text-[#F2EFE6]/55 text-sm max-w-md mx-auto">Everything you need to know about our products, ordering, and how to get the most from your Mānuka honey.</p>
      </div>

      <div className="bg-[#F2EFE6] py-16 px-6 lg:px-12">
        <div className="max-w-[700px] mx-auto">
          <ScrollReveal>
            <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-3xl font-light mb-2">Product Questions</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ProductFAQ />
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="mt-12">
            <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-3xl font-light mb-5">Ordering & Delivery</h2>
            <div className="divide-y divide-[#1F3B2E]/10">
              {additionalFaqs.map((faq, i) => (
                <div key={i} className="py-5">
                  <h3 className="font-medium text-sm text-[#1F3B2E] mb-2">{faq.q}</h3>
                  <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="mt-10 bg-[#1F3B2E]/5 p-6 text-center">
            <p className="text-[#1A1A1A]/60 text-sm mb-3">Still have a question?</p>
            <a href="/contact" className="text-[#C8A45A] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase border-b border-[#C8A45A] pb-0.5">
              Contact Us
            </a>
          </ScrollReveal>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}
