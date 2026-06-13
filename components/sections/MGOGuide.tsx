"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { products } from "@/lib/products";

const tierBg = [
  "bg-gradient-to-br from-[#F2EFE6] to-[#e8e3d6]",
  "bg-gradient-to-br from-[#C8A45A]/15 to-[#d4b578]/20",
  "bg-gradient-to-br from-[#C8A45A]/30 to-[#a8863e]/20",
  "bg-gradient-to-br from-[#1F3B2E]/90 to-[#1a2e22]",
];
const tierTextOnDark = [false, false, false, true];

export default function MGOGuide() {
  const [selected, setSelected] = useState(0);
  const product = products[selected];
  const isDark = tierTextOnDark[selected];

  return (
    <section className="bg-[#F2EFE6] py-24 lg:py-36 px-6 lg:px-12" aria-label="MGO Grade Guide">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <div className="flex justify-center mb-6">
            <div className="gold-rule w-48">Find Your MGO</div>
          </div>
          <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-4xl sm:text-5xl lg:text-6xl font-light">
            An easy MGO range for you{" "}
            <em className="italic text-[#C8A45A]">and your customers.</em>
          </h2>
          <p className="mt-4 text-[#1A1A1A]/55 text-base max-w-xl mx-auto">
            Move between grades to explore flavour, positioning, and the right product for your customers.
          </p>
        </ScrollReveal>

        {/* Selector tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {products.map((p, i) => (
            <button
              key={p.slug}
              onClick={() => setSelected(i)}
              className={`px-5 py-2.5 text-[0.6875rem] font-semibold tracking-[0.12em] uppercase border transition-all duration-200 ${
                selected === i
                  ? "bg-[#1F3B2E] border-[#1F3B2E] text-[#F2EFE6]"
                  : "border-[#1F3B2E]/30 text-[#1F3B2E]/60 hover:border-[#1F3B2E]/60"
              }`}
              aria-pressed={selected === i}
            >
              {p.tierLabel}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="max-w-lg mx-auto mb-12 px-4">
          <input
            type="range"
            min={0}
            max={3}
            step={1}
            value={selected}
            onChange={(e) => setSelected(Number(e.target.value))}
            className="honey-slider w-full"
            style={{ "--slider-pct": `${(selected / 3) * 100}%` } as React.CSSProperties}
            aria-label="MGO grade selector"
            aria-valuemin={0}
            aria-valuemax={3}
            aria-valuenow={selected}
            aria-valuetext={product.tierLabel}
          />
          <div className="flex justify-between mt-2 text-[0.625rem] text-[#1A1A1A]/40 tracking-widest uppercase">
            <span>MGO 83+</span>
            <span>MGO 829+</span>
          </div>
        </div>

        {/* Content card */}
        <div
          className={`rounded-none transition-all duration-500 ${tierBg[selected]} border border-[#1F3B2E]/10`}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: info */}
            <div className={`p-10 lg:p-14 ${isDark ? "text-[#F2EFE6]" : "text-[#1A1A1A]"}`}>
              <span
                className={`text-[0.625rem] font-semibold tracking-[0.2em] uppercase ${
                  isDark ? "text-[#C8A45A]" : "text-[#C8A45A]"
                }`}
              >
                {product.tierLabel}
              </span>
              <h3
                className={`font-[var(--font-cormorant)] text-4xl font-light mt-2 mb-1 ${
                  isDark ? "text-[#F2EFE6]" : "text-[#1F3B2E]"
                }`}
              >
                {product.name}
              </h3>
              <p className={`text-3xl font-[var(--font-cormorant)] mb-6 ${isDark ? "text-[#C8A45A]" : "text-[#C8A45A]"}`}>
                MGO {product.mgo}
              </p>
              <p className={`text-sm leading-relaxed mb-6 ${isDark ? "text-[#F2EFE6]/70" : "text-[#1A1A1A]/60"}`}>
                {product.tagline}
              </p>

              {/* Flavour */}
              <div className="mb-4">
                <p className={`text-[0.6rem] font-semibold tracking-widest uppercase mb-1 ${isDark ? "text-[#C8A45A]" : "text-[#C8A45A]"}`}>
                  Flavour
                </p>
                <p className={`text-sm ${isDark ? "text-[#F2EFE6]/80" : "text-[#1A1A1A]/70"}`}>{product.flavour}</p>
              </div>

              {/* Suggested use */}
              <div className="mb-8">
                <p className={`text-[0.6rem] font-semibold tracking-widest uppercase mb-2 ${isDark ? "text-[#C8A45A]" : "text-[#C8A45A]"}`}>
                  Suggested Use
                </p>
                <ul className="space-y-1">
                  {product.suggestedUse.map((u) => (
                    <li key={u} className={`text-sm flex items-start gap-2 ${isDark ? "text-[#F2EFE6]/70" : "text-[#1A1A1A]/60"}`}>
                      <span className="text-[#C8A45A] mt-0.5 flex-shrink-0">—</span>
                      {u}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Wholesale CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/wholesale#enquiry"
                  className={`flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.12em] uppercase px-6 py-3 transition-colors duration-200 ${
                    isDark
                      ? "bg-[#C8A45A] text-[#1F3B2E] hover:bg-[#d4b578]"
                      : "bg-[#1F3B2E] text-[#F2EFE6] hover:bg-[#2d5240]"
                  }`}
                >
                  Request Pricing <ArrowRight size={14} />
                </Link>
                <Link
                  href={`/products/${product.slug}`}
                  className={`text-[0.6875rem] font-semibold tracking-[0.12em] uppercase border-b pb-0.5 transition-colors duration-200 ${
                    isDark
                      ? "text-[#F2EFE6]/70 border-[#F2EFE6]/30 hover:text-[#F2EFE6]"
                      : "text-[#1F3B2E]/60 border-[#C8A45A] hover:text-[#1F3B2E]"
                  }`}
                >
                  View Product
                </Link>
              </div>
            </div>

            {/* Right: product image */}
            <div
              className={`flex items-center justify-center min-h-[300px] lg:min-h-[400px] p-10 ${
                isDark ? "bg-[#F2EFE6]/5" : "bg-[#1F3B2E]/5"
              }`}
            >
              {/* TODO: replace with actual product image per tier */}
              <div
                className={`text-center text-xs italic ${isDark ? "text-[#F2EFE6]/25" : "text-[#1F3B2E]/25"}`}
                role="img"
                aria-label={`[PLACEHOLDER: ${product.name} — amber jar product shot, ${product.mgo} label visible]`}
              >
                <div className="w-32 h-48 mx-auto mb-3 border border-current opacity-20 flex items-center justify-center">
                  jar
                </div>
                {product.name}
                <br />
                MGO {product.mgo}
              </div>
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <ScrollReveal delay={0.1} className="mt-14 overflow-x-auto">
          <h3 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-2xl font-light text-center mb-6">
            Compare all grades
          </h3>
          <table className="w-full text-sm border-collapse" aria-label="MGO grade comparison">
            <thead>
              <tr className="border-b border-[#1F3B2E]/20">
                {["Grade", "MGO", "UMF (approx.)", "Flavour", "Best suited for"].map((h) => (
                  <th
                    key={h}
                    className="py-3 px-4 text-left text-[0.625rem] font-semibold tracking-[0.2em] uppercase text-[#1A1A1A]/50"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr
                  key={p.slug}
                  className={`border-b border-[#1F3B2E]/10 cursor-pointer transition-colors ${
                    selected === i ? "bg-[#1F3B2E]/5" : "hover:bg-[#1F3B2E]/3"
                  }`}
                  onClick={() => setSelected(i)}
                >
                  <td className="py-4 px-4 font-[var(--font-cormorant)] text-[#1F3B2E] text-base">{p.tierLabel}</td>
                  <td className="py-4 px-4 font-semibold text-[#C8A45A]">{p.mgo}</td>
                  <td className="py-4 px-4 text-[#1A1A1A]/50">{p.umf}</td>
                  <td className="py-4 px-4 text-[#1A1A1A]/60 max-w-[140px]">{p.flavour}</td>
                  <td className="py-4 px-4 text-[#1A1A1A]/60">{p.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-[0.625rem] text-[#1A1A1A]/40 italic">
            UMF equivalents are provided as a general guide only. Check individual product documentation for verified certification details.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/wholesale#enquiry"
            className="btn-slide btn-slide--green inline-flex items-center gap-2 bg-[#1F3B2E] text-[#F2EFE6] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase px-7 py-3.5 hover:bg-[#2d5240] transition-colors"
          >
            Request Wholesale Pricing <ArrowRight size={12} />
          </Link>
          <Link
            href="/mgo-guide"
            className="inline-flex items-center gap-2 text-[#1F3B2E] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase border-b border-[#C8A45A] pb-0.5 hover:text-[#C8A45A] transition-colors"
          >
            Download the MGO Guide <ArrowRight size={12} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
