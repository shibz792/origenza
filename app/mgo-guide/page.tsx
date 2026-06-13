import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { mgoComparison, products } from "@/lib/products";
import Newsletter from "@/components/sections/Newsletter";

export const metadata: Metadata = {
  title: "MGO & UMF Guide",
  description: "A clear explanation of MGO and UMF grading for Mānuka honey — what they measure, how they differ, and how to use them to choose the right grade.",
};

export default function MGOGuidePage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: "calc(34px + 80px)" }}>
      <div className="bg-[#1F3B2E] py-20 px-6 text-center">
        <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.3em] uppercase block mb-4">
          Your Guide
        </span>
        <h1 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-5xl sm:text-6xl font-light mb-4">
          MGO & UMF Explained
        </h1>
        <p className="text-[#F2EFE6]/55 text-sm max-w-md mx-auto">
          Two grading systems. One honey. Here's how to read them clearly.
        </p>
      </div>

      <div className="bg-[#F2EFE6] py-16 px-6 lg:px-12">
        <div className="max-w-[900px] mx-auto">
          {/* Split explanation */}
          <div className="grid lg:grid-cols-2 gap-6 mb-14">
            <ScrollReveal className="bg-[#1F3B2E] p-10 text-[#F2EFE6]">
              <span className="text-[#C8A45A] text-[0.6rem] tracking-widest uppercase font-semibold block mb-3">Grading System</span>
              <h2 className="font-[var(--font-cormorant)] text-3xl font-light mb-4">MGO</h2>
              <p className="text-[#F2EFE6]/65 text-sm leading-relaxed mb-3">
                MGO (methylglyoxal) measures a specific naturally occurring compound in Mānuka honey. The number = mg of MGO per kg of honey.
              </p>
              <p className="text-[#F2EFE6]/65 text-sm leading-relaxed">
                Higher MGO = higher concentration. Origenza uses MGO grading across all products.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="bg-[#1F3B2E]/6 border border-[#1F3B2E]/12 p-10">
              <span className="text-[#C8A45A] text-[0.6rem] tracking-widest uppercase font-semibold block mb-3">Certification System</span>
              <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-3xl font-light mb-4">UMF</h2>
              <p className="text-[#1A1A1A]/60 text-sm leading-relaxed mb-3">
                UMF (Unique Mānuka Factor) is a licensed certification system from the UMF Honey Association. It considers multiple markers including MGO, leptosperin, and DHA.
              </p>
              <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">
                Only licensed members can display the UMF trademark. It provides broader verification than MGO alone.
              </p>
            </ScrollReveal>
          </div>

          {/* Comparison table */}
          <ScrollReveal>
            <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-3xl font-light mb-5">Approximate Equivalents</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm" aria-label="MGO and UMF comparison">
                <thead>
                  <tr className="bg-[#1F3B2E] text-[#F2EFE6]">
                    {["UMF Grade", "Approx. MGO", "Origenza Tier", "Example Use"].map((h) => (
                      <th key={h} className="py-3.5 px-5 text-left text-[0.625rem] font-semibold tracking-[0.2em] uppercase">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {mgoComparison.map((row, i) => (
                    <tr key={row.mgo} className={`border-b border-[#1F3B2E]/10 ${i % 2 ? "bg-[#1F3B2E]/3" : ""}`}>
                      <td className="py-4 px-5 font-medium text-[#1F3B2E]">UMF {row.umf}</td>
                      <td className="py-4 px-5 font-semibold text-[#C8A45A]">MGO {row.mgo}</td>
                      <td className="py-4 px-5 text-[#1A1A1A]/65">{row.tier}</td>
                      <td className="py-4 px-5 text-[#1A1A1A]/50 text-xs">{row.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[0.625rem] text-[#1A1A1A]/40 italic">
              Equivalents are approximate general guides only. Check individual product labels and documentation.
            </p>
          </ScrollReveal>

          {/* Products CTA */}
          <ScrollReveal delay={0.1} className="mt-14">
            <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-3xl font-light mb-6">Shop by Grade</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {products.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="flex items-center justify-between border border-[#1F3B2E]/12 px-6 py-5 hover:border-[#C8A45A]/50 hover:bg-[#C8A45A]/3 transition-all group"
                >
                  <div>
                    <p className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-widest uppercase mb-0.5">{p.tierLabel}</p>
                    <p className="font-[var(--font-cormorant)] text-[#1F3B2E] text-xl font-light">{p.name}</p>
                    <p className="text-[#1A1A1A]/45 text-xs mt-0.5">MGO {p.mgo} · from ${p.price["250g"]}</p>
                  </div>
                  <span className="text-[#1A1A1A]/25 group-hover:text-[#C8A45A] transition-colors text-xl">→</span>
                </Link>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="mt-8 p-5 bg-[#1F3B2E]/5 border-l-2 border-[#C8A45A]">
            <p className="text-xs text-[#1A1A1A]/55 italic leading-relaxed">
              Origenza Mānuka honey is a food product and is not intended to diagnose, treat, cure, or prevent any disease. MGO ratings reflect independently tested methylglyoxal concentrations.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}
