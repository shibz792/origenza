import Link from "next/link";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/products";

interface Props {
  products: Product[];
}

export default function RelatedProducts({ products }: Props) {
  if (!products.length) return null;
  return (
    <section className="py-16 px-6 lg:px-12 bg-[#F2EFE6]" aria-label="Related products">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-3xl font-light mb-8 text-center">
          Explore the Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
