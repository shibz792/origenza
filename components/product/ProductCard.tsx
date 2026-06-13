import Link from "next/link";
import type { Product } from "@/lib/products";

interface Props {
  product: Product;
}

const tierPanels: Record<string, { bg: string; numColor: string }> = {
  everyday: { bg: "bg-gradient-to-br from-[#F2EFE6] to-[#e4dfd2]",       numColor: "text-[#1F3B2E]" },
  potent:   { bg: "bg-gradient-to-br from-[#C8A45A]/20 to-[#d4b578]/28", numColor: "text-[#1F3B2E]" },
  high:     { bg: "bg-gradient-to-br from-[#a8863e]/28 to-[#C8A45A]/18", numColor: "text-[#1F3B2E]" },
  ultra:    { bg: "bg-gradient-to-br from-[#1A1A1A] to-[#1F3B2E]",       numColor: "text-[#C8A45A]" },
};

const CORNER_POSITIONS = [
  "top-3 left-3 border-t border-l",
  "top-3 right-3 border-t border-r",
  "bottom-3 left-3 border-b border-l",
  "bottom-3 right-3 border-b border-r",
];

export default function ProductCard({ product }: Props) {
  const panel = tierPanels[product.tier] ?? tierPanels.everyday;

  return (
    <article className="group relative bg-[#F2EFE6] border border-[#1F3B2E]/10 flex flex-col overflow-hidden hover:border-[#C8A45A]/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#1F3B2E]/10 transition-all duration-300">
      {/* Tier-colored visual panel */}
      <Link href={`/products/${product.slug}`} className="block overflow-hidden flex-shrink-0">
        <div
          className={`relative w-full h-64 ${panel.bg} flex flex-col items-center justify-center overflow-hidden border-b border-[#1F3B2E]/10 group-hover:brightness-105 transition-all duration-300`}
          aria-label={`${product.name} — MGO ${product.mgo}`}
        >
          {/* Corner marks */}
          {CORNER_POSITIONS.map((pos) => (
            <div key={pos} className={`absolute ${pos} w-5 h-5 border-[#C8A45A]/25`} aria-hidden="true" />
          ))}
          {/* Large MGO number */}
          <span
            className={`font-[var(--font-cormorant)] ${panel.numColor} font-light select-none`}
            style={{ fontSize: "clamp(3rem, 7vw, 4.5rem)", lineHeight: 1, opacity: 0.9 }}
            aria-hidden="true"
          >
            {product.mgo}
          </span>
          <span className={`text-[0.5rem] font-semibold tracking-[0.28em] uppercase mt-1.5 ${panel.numColor} opacity-40`}>
            Methylglyoxal
          </span>
          {/* Tier badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-[#1F3B2E] text-[#F2EFE6] text-[0.55rem] font-semibold tracking-widest uppercase px-2 py-0.5">
              {product.tierLabel}
            </span>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-[#C8A45A] text-[0.6rem] font-semibold tracking-[0.2em] uppercase mb-1">
          MGO {product.mgo} · {product.sizes.join(" / ")}
        </p>

        <Link href={`/products/${product.slug}`}>
          <h3 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-xl font-light leading-tight hover:text-[#2d5240] transition-colors mb-1">
            {product.name}
          </h3>
        </Link>

        <p className="text-[#1A1A1A]/50 text-xs mb-3">{product.flavour}</p>

        <p className="text-[0.625rem] text-[#1F3B2E]/50 tracking-wide mb-5 flex-1">
          <span className="font-semibold text-[#1F3B2E]/70">Best for:</span>{" "}
          {product.wholesaleSuitedFor}
        </p>

        {/* Wholesale CTAs */}
        <div className="flex flex-col gap-2 mt-auto">
          <Link
            href="/wholesale#enquiry"
            className="btn-slide btn-slide--green w-full text-center bg-[#1F3B2E] text-[#F2EFE6] text-[0.6rem] font-semibold tracking-[0.14em] uppercase px-4 py-2.5 hover:bg-[#2d5240] transition-colors duration-200"
          >
            Request Pricing
          </Link>
          <div className="flex gap-2">
            <Link
              href="/wholesale#enquiry"
              className="flex-1 text-center border border-[#1F3B2E]/25 text-[#1F3B2E] text-[0.6rem] font-semibold tracking-[0.12em] uppercase px-3 py-2 hover:border-[#C8A45A] hover:text-[#C8A45A] transition-all duration-200"
            >
              Sample
            </Link>
            <Link
              href={`/products/${product.slug}`}
              className="flex-1 text-center border border-[#1F3B2E]/25 text-[#1F3B2E] text-[0.6rem] font-semibold tracking-[0.12em] uppercase px-3 py-2 hover:border-[#C8A45A] hover:text-[#C8A45A] transition-all duration-200"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
