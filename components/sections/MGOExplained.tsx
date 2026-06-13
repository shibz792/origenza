import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";

const table = [
  { umf: "5+",  mgo: "83+",  tier: "Everyday" },
  { umf: "10+", mgo: "263+", tier: "Potent & Pure" },
  { umf: "15+", mgo: "514+", tier: "High Grade" },
  { umf: "20+", mgo: "829+", tier: "Ultra Premium" },
];

export default function MGOExplained() {
  return (
    <section className="bg-[#F2EFE6] py-24 lg:py-32 px-6 lg:px-12" aria-label="MGO and UMF explained">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="gold-rule w-40">Potency Guide</div>
          </div>
          <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-4xl sm:text-5xl font-light">
            Potency, made understandable.
          </h2>
          <p className="mt-4 text-[#1A1A1A]/55 max-w-xl mx-auto text-sm leading-relaxed">
            Two grading systems exist to help describe Mānuka honey concentration. Here's the difference.
          </p>
        </ScrollReveal>

        {/* Split columns */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 mb-14">
          {/* MGO */}
          <ScrollReveal className="bg-[#1F3B2E]/5 border border-[#1F3B2E]/10 p-10">
            <span className="text-[#C8A45A] text-[0.6rem] font-semibold tracking-[0.25em] uppercase">Grading System</span>
            <h3 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-3xl font-light mt-2 mb-4">MGO</h3>
            <p className="text-[#1A1A1A]/60 text-sm leading-relaxed mb-4">
              MGO stands for methylglyoxal — a naturally occurring compound found in Mānuka honey. The MGO number indicates the measured concentration of this compound in milligrams per kilogram (mg/kg).
            </p>
            <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">
              A higher MGO number means a higher measured concentration. MGO testing is a direct measurement of a single specific compound. Origenza uses MGO grading across its entire collection.
            </p>
          </ScrollReveal>

          {/* UMF */}
          <ScrollReveal delay={0.1} className="bg-[#1F3B2E]/5 border border-[#1F3B2E]/10 p-10">
            <span className="text-[#C8A45A] text-[0.6rem] font-semibold tracking-[0.25em] uppercase">Certification System</span>
            <h3 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-3xl font-light mt-2 mb-4">UMF</h3>
            <p className="text-[#1A1A1A]/60 text-sm leading-relaxed mb-4">
              UMF stands for Unique Mānuka Factor — a certification and grading framework that considers multiple naturally occurring markers in Mānuka honey, including MGO, leptosperin, and DHA.
            </p>
            <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">
              UMF is a licensed system administered by the UMF Honey Association in New Zealand. Only producers who are licensed members may display the UMF trademark on their products.
            </p>
          </ScrollReveal>
        </div>

        {/* Comparison table */}
        <ScrollReveal delay={0.1} className="overflow-x-auto">
          <table className="w-full border-collapse text-sm" aria-label="MGO and UMF approximate comparison">
            <thead>
              <tr className="bg-[#1F3B2E] text-[#F2EFE6]">
                {["UMF Grade", "Approximate MGO", "Origenza Tier"].map((h) => (
                  <th key={h} className="py-3.5 px-6 text-left text-[0.625rem] font-semibold tracking-[0.2em] uppercase">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.map((row, i) => (
                <tr key={row.umf} className={`border-b border-[#1F3B2E]/10 ${i % 2 === 0 ? "" : "bg-[#1F3B2E]/3"}`}>
                  <td className="py-4 px-6 font-medium text-[#1F3B2E]">UMF {row.umf}</td>
                  <td className="py-4 px-6 font-semibold text-[#C8A45A]">MGO {row.mgo}</td>
                  <td className="py-4 px-6 text-[#1A1A1A]/60">{row.tier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollReveal>

        {/* Disclaimer */}
        <ScrollReveal delay={0.15} className="mt-5 p-5 bg-[#1F3B2E]/5 border-l-2 border-[#C8A45A]">
          <p className="text-xs text-[#1A1A1A]/55 leading-relaxed italic">
            Rating comparisons are provided as a general guide only. Product labels, independent testing certificates, and certification details should be checked for each individual product. Approximate equivalents may vary between batches and producers.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="text-center mt-10">
          <Link
            href="/mgo-guide"
            className="inline-flex items-center gap-2 border-b border-[#C8A45A] text-[#1F3B2E] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase pb-0.5 hover:text-[#C8A45A] transition-colors"
          >
            Full MGO & UMF Guide
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
