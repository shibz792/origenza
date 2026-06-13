"use client";

import { useState, useCallback } from "react";
import { Search } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/lib/products";
import { journalArticles } from "@/lib/journal";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const matchedProducts = products.filter((p) =>
    query.length > 1 &&
    (p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.mgo.includes(query) ||
      p.tierLabel.toLowerCase().includes(query.toLowerCase()))
  );

  const matchedArticles = journalArticles.filter((a) =>
    query.length > 1 &&
    (a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.category.toLowerCase().includes(query.toLowerCase()))
  );

  const hasResults = matchedProducts.length > 0 || matchedArticles.length > 0;

  return (
    <div className="min-h-screen bg-[#F2EFE6]" style={{ paddingTop: "calc(34px + 80px)" }}>
      <div className="bg-[#1F3B2E] py-16 px-6">
        <div className="max-w-xl mx-auto">
          <h1 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-4xl font-light text-center mb-6">Search</h1>
          <div className="flex">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, articles, grades..."
              className="flex-1 bg-[#F2EFE6]/10 border border-[#F2EFE6]/20 text-[#F2EFE6] placeholder-[#F2EFE6]/40 px-5 py-3.5 text-sm focus:outline-none focus:border-[#C8A45A]"
              aria-label="Search query"
              autoFocus
            />
            <div className="bg-[#C8A45A] px-5 flex items-center text-[#1F3B2E]">
              <Search size={18} />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-14">
        {query.length <= 1 && (
          <p className="text-[#1A1A1A]/40 text-sm text-center">Start typing to search products and articles.</p>
        )}

        {query.length > 1 && !hasResults && (
          <p className="text-[#1A1A1A]/40 text-sm text-center">No results for "{query}".</p>
        )}

        {matchedProducts.length > 0 && (
          <div className="mb-12">
            <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-2xl font-light mb-6">Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {matchedProducts.map((p, i) => (
                <ScrollReveal key={p.slug} delay={i * 0.07}>
                  <ProductCard product={p} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {matchedArticles.length > 0 && (
          <div>
            <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-2xl font-light mb-6">Journal</h2>
            <div className="space-y-4">
              {matchedArticles.map((a) => (
                <Link key={a.slug} href={`/journal/${a.slug}`} className="flex gap-4 border border-[#1F3B2E]/10 p-5 hover:border-[#C8A45A]/40 transition-colors group">
                  <div>
                    <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-widest uppercase">{a.category}</span>
                    <h3 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-xl font-light mt-1 group-hover:text-[#2d5240] transition-colors">{a.title}</h3>
                    <p className="text-[#1A1A1A]/50 text-sm mt-1">{a.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
