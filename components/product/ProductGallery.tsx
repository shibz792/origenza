"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";

interface Props { product: Product }

export default function ProductGallery({ product }: Props) {
  const [active, setActive] = useState(0);
  const views = ["Front", "Side", "Top", "Lifestyle"];

  return (
    <div>
      {/* Main image */}
      <div
        className="w-full aspect-square bg-[#1F3B2E]/6 border border-[#1F3B2E]/10 flex items-center justify-center text-[#1F3B2E]/20 text-sm italic mb-3"
        role="img"
        aria-label={`[PLACEHOLDER: ${product.name} — ${views[active].toLowerCase()} view]`}
      >
        <div className="text-center">
          <div className="w-28 h-44 mx-auto border border-current opacity-25 flex items-end justify-center pb-3 text-[10px] mb-2">
            MGO {product.mgo}
          </div>
          <p>{product.name}</p>
          <p className="text-xs opacity-60">{views[active]}</p>
        </div>
      </div>
      {/* Thumbnails */}
      <div className="flex gap-2">
        {views.map((v, i) => (
          <button
            key={v}
            onClick={() => setActive(i)}
            aria-label={`${v} view`}
            className={`flex-1 aspect-square bg-[#1F3B2E]/5 border text-[0.5625rem] text-[#1F3B2E]/40 transition-all ${
              active === i ? "border-[#C8A45A]" : "border-[#1F3B2E]/10 hover:border-[#1F3B2E]/30"
            }`}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}
