import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Account",
  description: "Manage your Origenza account.",
};

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-[#F2EFE6] flex items-center justify-center px-6" style={{ paddingTop: "calc(34px + 80px)" }}>
      <div className="max-w-sm w-full text-center">
        <h1 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-4xl font-light mb-3">Account</h1>
        <p className="text-[#1A1A1A]/50 text-sm mb-8 leading-relaxed">
          Customer accounts are coming soon. Sign up to our newsletter to stay updated.
        </p>
        <Link href="/shop" className="block w-full bg-[#1F3B2E] text-[#F2EFE6] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase py-4 hover:bg-[#2d5240] transition-colors">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
