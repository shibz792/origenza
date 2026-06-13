import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Origenza terms and conditions of sale.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F2EFE6]" style={{ paddingTop: "calc(34px + 80px)" }}>
      <div className="bg-[#1F3B2E] py-16 px-6 text-center">
        <h1 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-4xl font-light">Terms & Conditions</h1>
        <p className="text-[#F2EFE6]/50 text-xs mt-3">Last updated: June 2025</p>
      </div>
      <div className="max-w-[700px] mx-auto px-6 py-14 prose-origenza">
        <ScrollReveal>
          <p>By placing an order with Origenza New Zealand, you agree to these terms and conditions. Please read them carefully.</p>

          <h2>Products</h2>
          <p>All products are subject to availability. We reserve the right to discontinue any product at any time. Product images are for illustration purposes — actual products may vary slightly.</p>

          <h2>Pricing</h2>
          <p>All prices are in New Zealand Dollars (NZD) unless otherwise stated. Prices may change without notice. The price applicable to your order is the price displayed at the time of purchase.</p>

          <h2>Orders</h2>
          <p>Placing an order constitutes an offer to purchase. We reserve the right to decline any order at our discretion. Order confirmation is sent via email.</p>

          <h2>Delivery</h2>
          <p>We aim to dispatch orders within 1–2 business days. Delivery times are estimates and may vary. Risk of loss passes to you upon delivery.</p>

          <h2>Returns</h2>
          <p>Please see our <a href="/shipping-returns">Shipping & Returns</a> policy for full details.</p>

          <h2>Limitation of liability</h2>
          <p>To the extent permitted by law, our liability is limited to the purchase price of the relevant product. We are not liable for indirect, incidental, or consequential loss.</p>

          <h2>Governing law</h2>
          <p>These terms are governed by New Zealand law. Any disputes will be subject to the jurisdiction of the New Zealand courts.</p>

          <h2>Contact</h2>
          <p>For any questions about these terms, please visit our <a href="/contact">contact page</a>.</p>
        </ScrollReveal>
      </div>
    </div>
  );
}
