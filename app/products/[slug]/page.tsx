"use client";

import { use, useRef, useState } from "react";
import { notFound } from "next/navigation";
import { Minus, Plus, ShoppingBag, Star } from "lucide-react";
import { getProductBySlug, getRelatedProducts } from "@/lib/products";
import { useCart } from "@/lib/cart";
import ProductGallery from "@/components/product/ProductGallery";
import MGOBadge from "@/components/product/MGOBadge";
import ProductFAQ from "@/components/product/ProductFAQ";
import RelatedProducts from "@/components/product/RelatedProducts";
import StickyAddToCart from "@/components/product/StickyAddToCart";

const tabs = ["Details", "Ingredients", "Care & Storage", "Shipping"] as const;
type Tab = (typeof tabs)[number];

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const productData = getProductBySlug(slug);
  if (!productData) notFound();
  const product = productData;

  const related = getRelatedProducts(slug, 3);
  const [size, setSize] = useState(product.sizes[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Details");
  const addToCartRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCart();

  const price = product.price[size as keyof typeof product.price] ?? product.price["250g"];

  function handleAdd() {
    for (let i = 0; i < qty; i++) addItem(product, size);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="bg-[#F2EFE6]" style={{ paddingTop: "calc(34px + 80px)" }}>
      {/* Main grid */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Gallery */}
        <ProductGallery product={product} />

        {/* Product info */}
        <div>
          {/* Breadcrumb */}
          <nav className="text-xs text-[#1A1A1A]/40 mb-6 flex items-center gap-2" aria-label="Breadcrumb">
            <a href="/shop" className="hover:text-[#1F3B2E] transition-colors">Shop</a>
            <span>›</span>
            <span className="text-[#1A1A1A]/60">{product.name}</span>
          </nav>

          {/* Tier + MGO */}
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#C8A45A]/15 text-[#C8A45A] text-[0.6rem] font-semibold tracking-widest uppercase px-2.5 py-1">
              {product.tierLabel}
            </span>
            <MGOBadge mgo={product.mgo} umf={product.umf} size="sm" />
          </div>

          <h1 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-4xl sm:text-5xl font-light leading-tight mb-2">
            {product.name}
          </h1>
          <p className="text-[#1A1A1A]/55 text-sm mb-5">{product.tagline}</p>

          {/* Rating placeholder */}
          <div className="flex items-center gap-2 mb-5" aria-label="4.9 out of 5 stars">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#C8A45A" className="text-[#C8A45A]" />)}
            </div>
            <span className="text-[#1A1A1A]/40 text-xs">4.9 · 47 reviews (placeholder)</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-8">
            <span className="font-[var(--font-cormorant)] text-[#1F3B2E] text-4xl">${price}</span>
            <span className="text-[#1A1A1A]/40 text-xs">NZD · {size}</span>
          </div>

          {/* Size selector */}
          {product.sizes.length > 1 && (
            <div className="mb-6">
              <p className="text-[0.625rem] font-semibold tracking-widest uppercase text-[#1A1A1A]/50 mb-2">Size</p>
              <div className="flex gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    aria-pressed={size === s}
                    className={`px-5 py-2 text-xs font-medium border transition-all ${
                      size === s
                        ? "border-[#1F3B2E] bg-[#1F3B2E] text-[#F2EFE6]"
                        : "border-[#1F3B2E]/25 text-[#1F3B2E]/60 hover:border-[#1F3B2E]/50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Qty + Add to cart */}
          <div ref={addToCartRef} className="flex items-center gap-3 mb-5">
            <div className="flex items-center border border-[#1F3B2E]/20">
              <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease" className="p-3 hover:bg-[#1F3B2E]/5 transition-colors">
                <Minus size={12} />
              </button>
              <span className="w-10 text-center text-sm font-medium">{qty}</span>
              <button onClick={() => setQty(qty + 1)} aria-label="Increase" className="p-3 hover:bg-[#1F3B2E]/5 transition-colors">
                <Plus size={12} />
              </button>
            </div>
            <button
              onClick={handleAdd}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-[0.6875rem] font-semibold tracking-[0.14em] uppercase transition-colors duration-200 ${
                added ? "bg-[#2d5240] text-[#F2EFE6]" : "bg-[#1F3B2E] text-[#F2EFE6] hover:bg-[#2d5240]"
              }`}
              aria-label={`Add ${qty} × ${product.name} to cart`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>

          {/* Trust */}
          <div className="flex flex-wrap gap-x-6 gap-y-1 mb-8">
            {["Free NZ delivery over $80", "Independently tested", "Batch traceable"].map((t) => (
              <p key={t} className="text-[0.625rem] text-[#1A1A1A]/45 tracking-wide">✓ {t}</p>
            ))}
          </div>

          {/* Info tabs */}
          <div className="border-t border-[#1F3B2E]/10 pt-6">
            <div className="flex gap-0 border-b border-[#1F3B2E]/10 mb-6 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2.5 text-[0.625rem] font-semibold tracking-[0.15em] uppercase whitespace-nowrap transition-all border-b-2 -mb-px ${
                    activeTab === tab
                      ? "border-[#C8A45A] text-[#1F3B2E]"
                      : "border-transparent text-[#1A1A1A]/40 hover:text-[#1A1A1A]/70"
                  }`}
                  aria-pressed={activeTab === tab}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === "Details" && (
              <div className="space-y-3 text-sm text-[#1A1A1A]/60 leading-relaxed">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Flavour",  value: product.flavour },
                    { label: "Texture",  value: product.texture },
                    { label: "Colour",   value: product.colour },
                    { label: "Best for", value: product.bestFor },
                    { label: "MGO",      value: `${product.mgo} mg/kg` },
                    { label: "UMF",      value: `≈ ${product.umf} (guide)` },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-[0.6rem] text-[#C8A45A] font-semibold tracking-widest uppercase mb-0.5">{label}</p>
                      <p className="text-[#1A1A1A]/70">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Ingredients" && (
              <div className="text-sm text-[#1A1A1A]/60 leading-relaxed space-y-2">
                <p><strong className="text-[#1F3B2E]">Ingredients:</strong> New Zealand Mānuka Honey (100%).</p>
                <p>No additives, preservatives, or artificial ingredients. Pure and natural.</p>
                <p className="mt-3 italic text-xs">Nutrition information available on product label. Contains naturally occurring sugars.</p>
              </div>
            )}

            {activeTab === "Care & Storage" && (
              <div className="text-sm text-[#1A1A1A]/60 leading-relaxed space-y-2">
                <p>Store below 25°C in a cool, dark cupboard. Keep away from direct sunlight.</p>
                <p>Do not refrigerate. Use a clean, dry spoon each time.</p>
                <p>Natural crystallisation may occur — this is entirely normal for pure honey. To soften, place in warm (not boiling) water.</p>
                <p>Do not microwave or expose to temperatures above 40°C.</p>
              </div>
            )}

            {activeTab === "Shipping" && (
              <div className="text-sm text-[#1A1A1A]/60 leading-relaxed space-y-2">
                <p>Free standard delivery on New Zealand orders over $80.</p>
                <p>Standard NZ delivery: 2–5 business days. Express available at checkout.</p>
                <p>International shipping available. Rates and delivery times vary by destination.</p>
                <p>See our <a href="/shipping-returns" className="text-[#C8A45A] underline">Shipping & Returns</a> page for full details.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 border-t border-[#1F3B2E]/10">
        <ProductFAQ />
      </div>

      {/* Disclaimer */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-8">
        <p className="text-[#1A1A1A]/30 text-xs italic text-center max-w-2xl mx-auto">
          Origenza Mānuka honey is a food product and is not intended to diagnose, treat, cure, or prevent any disease.
        </p>
      </div>

      {/* Related */}
      <RelatedProducts products={related} />

      {/* Sticky add to cart */}
      <StickyAddToCart product={product} selectedSize={size} triggerRef={addToCartRef} />
    </div>
  );
}
