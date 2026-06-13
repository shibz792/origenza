"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/lib/cart";

const FREE_SHIPPING_THRESHOLD = 80;

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, subtotal, itemCount } = useCart();
  const remaining = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);
  const pct = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#1A1A1A]/50"
            onClick={closeCart}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[#F2EFE6] flex flex-col shadow-2xl"
            role="dialog"
            aria-label="Shopping cart"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#1A1A1A]/10">
              <span className="font-[var(--font-cormorant)] text-xl font-light tracking-wide text-[#1F3B2E]">
                Your Cart ({itemCount})
              </span>
              <button onClick={closeCart} aria-label="Close cart" className="text-[#1A1A1A] hover:text-[#C8A45A] transition-colors">
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Free shipping progress */}
            {subtotal < FREE_SHIPPING_THRESHOLD && (
              <div className="px-6 py-3 bg-[#1F3B2E]/5 text-xs tracking-wide">
                <p className="text-[#1F3B2E] mb-1.5">
                  Add <strong>${remaining.toFixed(0)}</strong> more for free NZ delivery
                </p>
                <div className="h-0.5 bg-[#C8A45A]/25 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#C8A45A] rounded-full transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            )}
            {subtotal >= FREE_SHIPPING_THRESHOLD && (
              <div className="px-6 py-2.5 bg-[#1F3B2E]/5 text-xs tracking-wide text-[#1F3B2E] font-medium">
                Free NZ delivery included
              </div>
            )}

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12">
                  <ShoppingBag size={40} strokeWidth={1} className="text-[#1A1A1A]/30" />
                  <p className="text-[#1A1A1A]/50 text-sm">Your cart is empty.</p>
                  <Link
                    href="/shop"
                    onClick={closeCart}
                    className="mt-2 text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-[#C8A45A] hover:text-[#a8863e] transition-colors"
                  >
                    Explore the Collection
                  </Link>
                </div>
              ) : (
                items.map((item) => {
                  const price = item.product.price[item.size as keyof typeof item.product.price] ?? 0;
                  return (
                    <div key={item.id} className="flex gap-4">
                      {/* Placeholder product image */}
                      <div className="w-16 h-16 flex-shrink-0 bg-[#1F3B2E]/10 flex items-center justify-center text-[8px] text-[#1F3B2E]/40 text-center leading-tight">
                        [jar image]
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-[var(--font-cormorant)] text-base font-light text-[#1F3B2E] leading-tight">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-[#1A1A1A]/50 mt-0.5">
                          {item.size} · MGO {item.product.mgo}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          {/* Qty controls */}
                          <div className="flex items-center gap-2 border border-[#1A1A1A]/20">
                            <button
                              onClick={() => updateQty(item.id, item.quantity - 1)}
                              aria-label="Decrease quantity"
                              className="p-1.5 hover:bg-[#1A1A1A]/5 transition-colors"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-6 text-center text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQty(item.id, item.quantity + 1)}
                              aria-label="Increase quantity"
                              className="p-1.5 hover:bg-[#1A1A1A]/5 transition-colors"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <span className="text-sm font-medium text-[#1F3B2E]">
                            ${(price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove item"
                        className="self-start text-[#1A1A1A]/30 hover:text-[#1A1A1A] transition-colors mt-0.5"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-[#1A1A1A]/10 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[#1A1A1A]/60">Subtotal</span>
                  <span className="font-medium text-[#1F3B2E]">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-[#1A1A1A]/40">Shipping and taxes calculated at checkout.</p>
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="block w-full bg-[#1F3B2E] text-[#F2EFE6] text-center text-[0.6875rem] font-semibold tracking-[0.14em] uppercase py-4 hover:bg-[#2d5240] transition-colors"
                >
                  View Cart & Checkout
                </Link>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
