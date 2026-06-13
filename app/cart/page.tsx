"use client";

import Link from "next/link";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";

const FREE_SHIPPING = 80;

export default function CartPage() {
  const { items, removeItem, updateQty, subtotal, itemCount } = useCart();
  const remaining = Math.max(FREE_SHIPPING - subtotal, 0);
  const pct = Math.min((subtotal / FREE_SHIPPING) * 100, 100);

  return (
    <div className="min-h-screen bg-[#F2EFE6]" style={{ paddingTop: "calc(34px + 80px)" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-14">
        <h1 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-4xl font-light mb-2">
          Your Cart
        </h1>
        <p className="text-[#1A1A1A]/40 text-sm mb-10">{itemCount} item{itemCount !== 1 ? "s" : ""}</p>

        {items.length === 0 ? (
          <div className="py-24 text-center">
            <ShoppingBag size={48} strokeWidth={1} className="text-[#1A1A1A]/20 mx-auto mb-4" />
            <p className="text-[#1A1A1A]/40 text-sm mb-6">Your cart is empty.</p>
            <Link href="/shop" className="bg-[#1F3B2E] text-[#F2EFE6] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase px-8 py-4 hover:bg-[#2d5240] transition-colors">
              Shop the Collection
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Items */}
            <div className="lg:col-span-2 space-y-6">
              {/* Free shipping progress */}
              {remaining > 0 && (
                <div className="bg-[#1F3B2E]/5 p-4 text-sm text-[#1F3B2E] mb-4">
                  Add <strong>${remaining.toFixed(0)}</strong> more for free NZ delivery
                  <div className="h-0.5 bg-[#C8A45A]/25 mt-2">
                    <div className="h-full bg-[#C8A45A] transition-all" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              )}

              {items.map((item) => {
                const price = item.product.price[item.size as keyof typeof item.product.price] ?? 0;
                return (
                  <div key={item.id} className="flex gap-5 pb-6 border-b border-[#1F3B2E]/10">
                    <div className="w-24 h-28 bg-[#1F3B2E]/6 flex items-center justify-center text-[#1F3B2E]/20 text-xs italic flex-shrink-0">
                      jar
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-3">
                        <Link href={`/products/${item.product.slug}`} className="hover:text-[#2d5240] transition-colors">
                          <h3 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-xl font-light leading-tight">{item.product.name}</h3>
                        </Link>
                        <button onClick={() => removeItem(item.id)} aria-label="Remove item" className="text-[#1A1A1A]/30 hover:text-[#1A1A1A] flex-shrink-0 mt-1">
                          <X size={15} />
                        </button>
                      </div>
                      <p className="text-xs text-[#1A1A1A]/50 mt-0.5 mb-3">{item.size} · MGO {item.product.mgo}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-[#1F3B2E]/20">
                          <button onClick={() => updateQty(item.id, item.quantity - 1)} className="p-2.5 hover:bg-[#1F3B2E]/5"><Minus size={11} /></button>
                          <span className="w-9 text-center text-sm">{item.quantity}</span>
                          <button onClick={() => updateQty(item.id, item.quantity + 1)} className="p-2.5 hover:bg-[#1F3B2E]/5"><Plus size={11} /></button>
                        </div>
                        <p className="font-medium text-[#1F3B2E]">${(price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Summary */}
            <div className="bg-white border border-[#1F3B2E]/10 p-7 h-fit sticky top-32">
              <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-2xl font-light mb-5">Order Summary</h2>
              <div className="space-y-3 text-sm mb-5">
                <div className="flex justify-between">
                  <span className="text-[#1A1A1A]/55">Subtotal</span>
                  <span className="text-[#1F3B2E] font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#1A1A1A]/55">Shipping</span>
                  <span className="text-[#1F3B2E]">{subtotal >= FREE_SHIPPING ? "Free" : "Calculated at checkout"}</span>
                </div>
              </div>
              <div className="border-t border-[#1F3B2E]/10 pt-4 mb-5 flex justify-between font-medium">
                <span className="text-[#1F3B2E]">Total (NZD)</span>
                <span className="font-[var(--font-cormorant)] text-[#1F3B2E] text-xl">${subtotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-[#1F3B2E] text-[#F2EFE6] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase py-4 hover:bg-[#2d5240] transition-colors mb-3">
                Proceed to Checkout
              </button>
              <p className="text-[0.625rem] text-[#1A1A1A]/35 text-center">Taxes and final shipping calculated at checkout</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
