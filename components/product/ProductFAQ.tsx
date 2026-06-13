"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What does MGO mean?",
    a: "MGO stands for methylglyoxal — a naturally occurring compound found in Mānuka honey. The number indicates the measured concentration in mg/kg.",
  },
  {
    q: "How should I store my honey?",
    a: "Store in a cool, dark cupboard below 25°C. Avoid refrigeration and direct sunlight. Use a clean, dry spoon each time.",
  },
  {
    q: "Why has my honey crystallised?",
    a: "Crystallisation is natural for pure honey. To soften, place the jar in warm water (not boiling) and stir gently. Do not microwave directly.",
  },
  {
    q: "How much should I take per day?",
    a: "There is no single recommended amount — Mānuka honey is a food product. Many customers enjoy one teaspoon daily as part of a balanced lifestyle.",
  },
  {
    q: "Is this honey organic certified?",
    a: "Our products are not currently certified organic. We source from producers committed to responsible practices — please check individual product documentation.",
  },
  {
    q: "Can I track where my honey comes from?",
    a: "Every jar carries a batch code. Full batch traceability is being developed and will be available soon through our Trace Your Jar feature.",
  },
];

export default function ProductFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section aria-label="Product FAQ">
      <h3 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-2xl font-light mb-5">
        Frequently Asked Questions
      </h3>
      <div className="divide-y divide-[#1F3B2E]/10">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={i}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex justify-between items-center py-4 text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45A]"
                aria-expanded={isOpen}
              >
                <span className="text-sm text-[#1F3B2E] font-medium">{faq.q}</span>
                {isOpen ? (
                  <Minus size={14} className="text-[#C8A45A] flex-shrink-0" />
                ) : (
                  <Plus size={14} className="text-[#1A1A1A]/40 flex-shrink-0" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 pb-4" : "max-h-0"}`}
              >
                <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
