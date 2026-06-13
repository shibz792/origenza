"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function BulkOrders() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="bulk" className="bg-[#F2EFE6] py-24 lg:py-32 px-6 lg:px-12 border-t border-[#1F3B2E]/8" aria-label="Bulk orders">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: copy */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#C8A45A]" />
                <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.25em] uppercase">
                  Bulk Orders
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-4xl sm:text-5xl font-light leading-tight mb-6">
                Need larger{" "}
                <em className="italic text-[#C8A45A]">quantities?</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-[#1A1A1A]/60 text-sm leading-relaxed mb-8 max-w-md">
                We welcome enquiries for bulk orders, retail supply, hospitality use, gifting, and distribution. Tell us what you need and our team will get back to you.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="space-y-3">
              {[
                "All four MGO grades available for bulk supply",
                "250g and 500g jar sizes",
                "Retail, hospitality, and gifting quantities",
                "International orders welcome",
                "[ Minimum quantities and carton sizes — contact us ]",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-[#1A1A1A]/60 text-sm">
                  <div className="w-1 h-1 rounded-full bg-[#C8A45A] flex-shrink-0 mt-1.5" />
                  <span className={item.startsWith("[") ? "italic text-[#1A1A1A]/35" : ""}>{item}</span>
                </div>
              ))}
            </ScrollReveal>
          </div>

          {/* Right: simple form */}
          <ScrollReveal delay={0.2}>
            {submitted ? (
              <div className="bg-[#1F3B2E]/5 border border-[#1F3B2E]/10 p-10 text-center">
                <div className="w-px h-10 bg-[#C8A45A]/40 mx-auto mb-6" />
                <p className="font-[var(--font-cormorant)] text-[#1F3B2E] text-3xl font-light mb-3">
                  Enquiry received.
                </p>
                <p className="text-[#1A1A1A]/55 text-sm leading-relaxed">
                  Thank you for contacting Origenza. Our team will review your enquiry and get back to you.
                </p>
                <div className="w-px h-10 bg-[#C8A45A]/40 mx-auto mt-6" />
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#1F3B2E]/5 border border-[#1F3B2E]/10 p-8 space-y-4"
                aria-label="Bulk order enquiry form"
              >
                <h3 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-2xl font-light mb-6">
                  Bulk Order Enquiry
                </h3>
                {[
                  { id: "bulk-name",     label: "Your name",             type: "text",  required: true },
                  { id: "bulk-business", label: "Business name",         type: "text",  required: true },
                  { id: "bulk-email",    label: "Email address",         type: "email", required: true },
                  { id: "bulk-country",  label: "Country",               type: "text",  required: true },
                  { id: "bulk-products", label: "Products interested in", type: "text",  required: false },
                  { id: "bulk-qty",      label: "Estimated quantity",    type: "text",  required: false },
                ].map(({ id, label, type, required }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[#1F3B2E]/60 mb-1.5">
                      {label}{required && " *"}
                    </label>
                    <input
                      id={id}
                      type={type}
                      required={required}
                      className="w-full bg-white border border-[#1F3B2E]/15 text-[#1A1A1A] px-4 py-2.5 text-sm focus:outline-none focus:border-[#C8A45A] transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="bulk-message" className="block text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[#1F3B2E]/60 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="bulk-message"
                    rows={3}
                    className="w-full bg-white border border-[#1F3B2E]/15 text-[#1A1A1A] px-4 py-2.5 text-sm focus:outline-none focus:border-[#C8A45A] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-slide btn-slide--green w-full bg-[#1F3B2E] text-[#F2EFE6] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase py-3.5 hover:bg-[#2d5240] transition-colors"
                >
                  Enquire About Bulk Orders
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
