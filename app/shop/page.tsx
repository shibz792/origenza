"use client";

import { useState } from "react";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/lib/products";

const tiers = ["All", "Everyday", "Potent & Pure", "High Grade", "Ultra Premium"];
const sorts = ["Featured", "Price: Low to High", "Price: High to Low"];

export default function ShopPage() {
  const [activeTier, setActiveTier] = useState("All");
  const [activeSort, setActiveSort] = useState("Featured");

  const filtered = products.filter(
    (p) => activeTier === "All" || p.tierLabel === activeTier
  );

  const sorted = [...filtered].sort((a, b) => {
    if (activeSort === "Price: Low to High") return a.price["250g"] - b.price["250g"];
    if (activeSort === "Price: High to Low") return b.price["250g"] - a.price["250g"];
    return 0;
  });

  return (
    <div className="min-h-screen bg-[#F2EFE6]" style={{ paddingTop: "calc(34px + 80px)" }}>
      {/* Header */}
      <div className="bg-[#1F3B2E] py-20 px-6 lg:px-12 text-center">
        <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.3em] uppercase block mb-4">
          The Collection
        </span>
        <h1 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-5xl sm:text-6xl font-light">
          Shop Mānuka Honey
        </h1>
        <p className="mt-4 text-[#F2EFE6]/55 text-sm max-w-md mx-auto leading-relaxed">
          Four grades. One provenance. Select the MGO level that suits your intention.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-10">
          {/* Tier filter */}
          <div className="flex flex-wrap gap-2">
            {tiers.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTier(t)}
                className={`px-4 py-2 text-[0.625rem] font-semibold tracking-[0.15em] uppercase border transition-all duration-200 ${
                  activeTier === t
                    ? "bg-[#1F3B2E] border-[#1F3B2E] text-[#F2EFE6]"
                    : "border-[#1F3B2E]/25 text-[#1F3B2E]/55 hover:border-[#1F3B2E]/55"
                }`}
                aria-pressed={activeTier === t}
              >
                {t}
              </button>
            ))}
          </div>
          {/* Sort */}
          <select
            value={activeSort}
            onChange={(e) => setActiveSort(e.target.value)}
            className="border border-[#1F3B2E]/20 text-[#1F3B2E] text-xs py-2 px-3 bg-transparent focus:outline-none focus:border-[#C8A45A] self-start sm:self-auto"
            aria-label="Sort products"
          >
            {sorts.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Count */}
        <p className="text-[#1A1A1A]/40 text-xs mb-6">
          {sorted.length} product{sorted.length !== 1 ? "s" : ""}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sorted.map((product, i) => (
            <ScrollReveal key={product.slug} delay={i * 0.06}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>

        {sorted.length === 0 && (
          <div className="py-24 text-center text-[#1A1A1A]/40 text-sm">
            No products found for this filter.
          </div>
        )}

        {/* Disclaimer */}
        <p className="mt-16 text-[#1A1A1A]/30 text-xs italic text-center max-w-2xl mx-auto leading-relaxed">
          Origenza Mānuka honey is a food product and is not intended to diagnose, treat, cure, or prevent any disease. Individual products should be used according to their labels.
        </p>
      </div>
    </div>
  );
}
