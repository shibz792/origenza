"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GrainOverlay from "@/components/ui/GrainOverlay";

const ENQUIRY_TYPES = [
  "Wholesale Pricing",
  "Bulk Order",
  "Samples",
  "Distribution",
  "Corporate Gifting",
  "General Enquiry",
];

const BUSINESS_TYPES = [
  "Retail Store",
  "Pharmacy",
  "Wellness Store",
  "Supermarket",
  "Gift Shop",
  "Hotel or Restaurant",
  "Corporate / Business",
  "Distributor",
  "Importer / Exporter",
  "Other",
];

const PRODUCT_OPTIONS = [
  "Everyday Mānuka MGO 83+",
  "Potent & Pure MGO 263+",
  "High Grade MGO 514+",
  "Ultra Premium MGO 829+",
  "Full Range",
];

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="enquiry"
      className="relative bg-[#1F3B2E] py-24 lg:py-36 px-6 lg:px-12 overflow-hidden"
      aria-label="Wholesale enquiry form"
    >
      <GrainOverlay opacity={1.2} />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: copy */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#C8A45A]" />
                <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.25em] uppercase">
                  Wholesale Enquiry
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-4xl sm:text-5xl font-light leading-tight mb-6">
                Ready to stock{" "}
                <em className="italic text-[#C8A45A]">Origenza?</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-[#F2EFE6]/55 text-sm leading-relaxed mb-10 max-w-md">
                Send us your enquiry and our team will get back to you with pricing, product information, and next steps. We welcome enquiries from retailers, distributors, gifting buyers, and all business types.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="space-y-4">
              {[
                { label: "Wholesale Pricing",    desc: "Request pricing for your business" },
                { label: "Samples",              desc: "Receive product samples before ordering" },
                { label: "Bulk Orders",          desc: "Enquire about larger quantities" },
                { label: "Distribution",         desc: "Explore distribution opportunities" },
                { label: "Corporate Gifting",    desc: "Premium gifts for clients and teams" },
              ].map(({ label, desc }) => (
                <div key={label} className="flex items-start gap-4 border-l border-[#C8A45A]/30 pl-4">
                  <div>
                    <p className="text-[#F2EFE6] text-sm font-medium">{label}</p>
                    <p className="text-[#F2EFE6]/45 text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>

          {/* Right: form */}
          <ScrollReveal delay={0.2}>
            {submitted ? (
              <div className="bg-[#F2EFE6]/5 border border-[#F2EFE6]/10 p-12 text-center">
                <div className="w-px h-12 bg-[#C8A45A]/40 mx-auto mb-8" />
                <p className="font-[var(--font-cormorant)] text-[#F2EFE6] text-3xl font-light mb-3">
                  Thank you.
                </p>
                <p className="text-[#F2EFE6]/55 text-sm leading-relaxed max-w-xs mx-auto">
                  Thank you for contacting Origenza. Our team will review your enquiry and get back to you.
                </p>
                <div className="w-px h-12 bg-[#C8A45A]/40 mx-auto mt-8" />
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#F2EFE6]/5 border border-[#F2EFE6]/10 p-8 space-y-5"
                aria-label="Wholesale enquiry form"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="enq-name" className="block text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[#F2EFE6]/55 mb-1.5">
                      Name *
                    </label>
                    <input
                      id="enq-name"
                      type="text"
                      required
                      className="w-full bg-[#F2EFE6]/8 border border-[#F2EFE6]/15 text-[#F2EFE6] placeholder-[#F2EFE6]/30 px-4 py-2.5 text-sm focus:outline-none focus:border-[#C8A45A] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="enq-business" className="block text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[#F2EFE6]/55 mb-1.5">
                      Business Name *
                    </label>
                    <input
                      id="enq-business"
                      type="text"
                      required
                      className="w-full bg-[#F2EFE6]/8 border border-[#F2EFE6]/15 text-[#F2EFE6] placeholder-[#F2EFE6]/30 px-4 py-2.5 text-sm focus:outline-none focus:border-[#C8A45A] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="enq-email" className="block text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[#F2EFE6]/55 mb-1.5">
                      Email *
                    </label>
                    <input
                      id="enq-email"
                      type="email"
                      required
                      className="w-full bg-[#F2EFE6]/8 border border-[#F2EFE6]/15 text-[#F2EFE6] placeholder-[#F2EFE6]/30 px-4 py-2.5 text-sm focus:outline-none focus:border-[#C8A45A] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="enq-phone" className="block text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[#F2EFE6]/55 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="enq-phone"
                      type="tel"
                      className="w-full bg-[#F2EFE6]/8 border border-[#F2EFE6]/15 text-[#F2EFE6] placeholder-[#F2EFE6]/30 px-4 py-2.5 text-sm focus:outline-none focus:border-[#C8A45A] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="enq-country" className="block text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[#F2EFE6]/55 mb-1.5">
                      Country *
                    </label>
                    <input
                      id="enq-country"
                      type="text"
                      required
                      className="w-full bg-[#F2EFE6]/8 border border-[#F2EFE6]/15 text-[#F2EFE6] placeholder-[#F2EFE6]/30 px-4 py-2.5 text-sm focus:outline-none focus:border-[#C8A45A] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="enq-biz-type" className="block text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[#F2EFE6]/55 mb-1.5">
                      Business Type *
                    </label>
                    <select
                      id="enq-biz-type"
                      required
                      className="w-full bg-[#1F3B2E] border border-[#F2EFE6]/15 text-[#F2EFE6] px-4 py-2.5 text-sm focus:outline-none focus:border-[#C8A45A] transition-colors appearance-none"
                    >
                      <option value="">Select…</option>
                      {BUSINESS_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="enq-products" className="block text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[#F2EFE6]/55 mb-1.5">
                      Products Interested In
                    </label>
                    <select
                      id="enq-products"
                      className="w-full bg-[#1F3B2E] border border-[#F2EFE6]/15 text-[#F2EFE6] px-4 py-2.5 text-sm focus:outline-none focus:border-[#C8A45A] transition-colors appearance-none"
                    >
                      <option value="">Select…</option>
                      {PRODUCT_OPTIONS.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="enq-qty" className="block text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[#F2EFE6]/55 mb-1.5">
                      Estimated Quantity
                    </label>
                    <input
                      id="enq-qty"
                      type="text"
                      placeholder="e.g. 50 units, 500 jars…"
                      className="w-full bg-[#F2EFE6]/8 border border-[#F2EFE6]/15 text-[#F2EFE6] placeholder-[#F2EFE6]/25 px-4 py-2.5 text-sm focus:outline-none focus:border-[#C8A45A] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="enq-type" className="block text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[#F2EFE6]/55 mb-1.5">
                    Enquiry Type *
                  </label>
                  <select
                    id="enq-type"
                    required
                    className="w-full bg-[#1F3B2E] border border-[#F2EFE6]/15 text-[#F2EFE6] px-4 py-2.5 text-sm focus:outline-none focus:border-[#C8A45A] transition-colors appearance-none"
                  >
                    <option value="">Select…</option>
                    {ENQUIRY_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="enq-message" className="block text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[#F2EFE6]/55 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="enq-message"
                    rows={4}
                    placeholder="Tell us more about your business and what you're looking for…"
                    className="w-full bg-[#F2EFE6]/8 border border-[#F2EFE6]/15 text-[#F2EFE6] placeholder-[#F2EFE6]/25 px-4 py-2.5 text-sm focus:outline-none focus:border-[#C8A45A] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-slide btn-slide--gold w-full bg-[#C8A45A] text-[#1F3B2E] text-[0.6875rem] font-semibold tracking-[0.16em] uppercase py-4 hover:bg-[#d4b578] transition-colors"
                >
                  Send Enquiry
                </button>

                <p className="text-[#F2EFE6]/25 text-[0.6rem] tracking-wide text-center">
                  We will review your enquiry and get back to you.
                </p>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
