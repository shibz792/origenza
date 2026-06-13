import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/lib/products";

export default function ProductCollection() {
  return (
    <section className="bg-[#F2EFE6] py-24 lg:py-32 px-6 lg:px-12" aria-label="Product collection">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="gold-rule gold-rule--left mb-4 w-40">Product Range</div>
            <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-4xl sm:text-5xl font-light leading-tight">
              Four grades. Every customer covered.
            </h2>
          </div>
          <Link
            href="/shop"
            className="flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-[#1F3B2E] border-b border-[#C8A45A] pb-0.5 hover:text-[#C8A45A] transition-colors self-start lg:self-auto whitespace-nowrap"
          >
            View Full Range <ArrowRight size={12} />
          </Link>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, i) => (
            <ScrollReveal key={product.slug} delay={i * 0.08}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
