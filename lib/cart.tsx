"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "./products";

export interface CartItem {
  id: string; // slug + size
  product: Product;
  size: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: "ADD_ITEM"; product: Product; size: string }
  | { type: "REMOVE_ITEM"; id: string }
  | { type: "UPDATE_QTY"; id: string; quantity: number }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" }
  | { type: "HYDRATE"; items: CartItem[] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const id = `${action.product.slug}__${action.size}`;
      const existing = state.items.find((i) => i.id === id);
      const items = existing
        ? state.items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...state.items, { id, product: action.product, size: action.size, quantity: 1 }];
      return { ...state, items, isOpen: true };
    }
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((i) => i.id !== action.id) };
    case "UPDATE_QTY":
      if (action.quantity <= 0) {
        return { ...state, items: state.items.filter((i) => i.id !== action.id) };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, quantity: action.quantity } : i
        ),
      };
    case "OPEN_CART":  return { ...state, isOpen: true };
    case "CLOSE_CART": return { ...state, isOpen: false };
    case "HYDRATE":    return { ...state, items: action.items };
    default:           return state;
  }
}

interface CartContext {
  items: CartItem[];
  isOpen: boolean;
  itemCount: number;
  subtotal: number;
  addItem: (product: Product, size: string) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, quantity: number) => void;
  openCart: () => void;
  closeCart: () => void;
}

const CartCtx = createContext<CartContext | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("origenza_cart");
      if (saved) dispatch({ type: "HYDRATE", items: JSON.parse(saved) });
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem("origenza_cart", JSON.stringify(state.items));
    } catch {}
  }, [state.items, hydrated]);

  const addItem    = useCallback((product: Product, size: string) => dispatch({ type: "ADD_ITEM", product, size }), []);
  const removeItem = useCallback((id: string) => dispatch({ type: "REMOVE_ITEM", id }), []);
  const updateQty  = useCallback((id: string, quantity: number) => dispatch({ type: "UPDATE_QTY", id, quantity }), []);
  const openCart   = useCallback(() => dispatch({ type: "OPEN_CART" }), []);
  const closeCart  = useCallback(() => dispatch({ type: "CLOSE_CART" }), []);

  const itemCount = state.items.reduce((s, i) => s + i.quantity, 0);
  const subtotal  = state.items.reduce((s, i) => {
    const price = i.product.price[i.size as keyof typeof i.product.price] ?? 0;
    return s + price * i.quantity;
  }, 0);

  return (
    <CartCtx.Provider value={{ ...state, itemCount, subtotal, addItem, removeItem, updateQty, openCart, closeCart }}>
      {children}
    </CartCtx.Provider>
  );
}

export function useCart(): CartContext {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
