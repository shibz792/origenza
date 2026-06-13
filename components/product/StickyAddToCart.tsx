"use client";

import { useEffect, useRef, useState } from "react";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/products";

interface Props {
  product: Product;
  selectedSize: string;
  triggerRef: React.RefObject<HTMLDivElement | null>;
}

export default function StickyAddToCart({ product, selectedSize, triggerRef }: Props) {
  const [visible, setVisible] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    const el = triggerRef.current;
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, [triggerRef]);

  function handleAdd() {
    addItem(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  const price = product.price[selectedSize as keyof typeof product.price] ?? product.price["250g"];

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-30 bg-[#1F3B2E] transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-3 flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          <p className="font-[var(--font-cormorant)] text-[#F2EFE6] text-lg font-light leading-tight">
            {product.name}
          </p>
          <p className="text-[#C8A45A] text-xs">MGO {product.mgo} · {selectedSize}</p>
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <p className="font-[var(--font-cormorant)] text-[#F2EFE6] text-2xl">${price}</p>
          <button
            onClick={handleAdd}
            className={`px-8 py-2.5 text-[0.6875rem] font-semibold tracking-[0.14em] uppercase transition-colors duration-200 ${
              added ? "bg-[#2d5240] text-[#F2EFE6]" : "bg-[#C8A45A] text-[#1F3B2E] hover:bg-[#d4b578]"
            }`}
          >
            {added ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
