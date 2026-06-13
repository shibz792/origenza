import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div
      className="min-h-screen bg-[#1F3B2E] flex flex-col items-center justify-center text-center px-6"
      style={{ paddingTop: "calc(34px + 80px)" }}
    >
      {/* Decorative */}
      <div className="flex justify-center mb-8">
        <div className="w-16 h-16 rounded-full border border-[#C8A45A]/30 flex items-center justify-center">
          <span className="font-[var(--font-cormorant)] text-[#C8A45A] text-2xl">O</span>
        </div>
      </div>

      <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.3em] uppercase block mb-4">
        404
      </span>

      <h1 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-5xl sm:text-6xl font-light mb-4">
        Page not found.
      </h1>

      <p className="text-[#F2EFE6]/50 text-sm max-w-sm mx-auto mb-10 leading-relaxed">
        This page doesn't exist or has been moved. Let us help you find what you're looking for.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="bg-[#C8A45A] text-[#1F3B2E] text-[0.6875rem] font-semibold tracking-[0.16em] uppercase px-8 py-4 hover:bg-[#d4b578] transition-colors"
        >
          Go Home
        </Link>
        <Link
          href="/shop"
          className="border border-[#F2EFE6]/25 text-[#F2EFE6] text-[0.6875rem] font-semibold tracking-[0.16em] uppercase px-8 py-4 hover:border-[#F2EFE6]/50 transition-colors"
        >
          Shop Mānuka Honey
        </Link>
      </div>

      <p className="mt-16 text-[#F2EFE6]/20 text-[0.625rem] tracking-widest uppercase">
        Origenza — Naturally New Zealand
      </p>
    </div>
  );
}
