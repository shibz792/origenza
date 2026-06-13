import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description: "Origenza shipping information and returns policy for New Zealand and international orders.",
};

export default function ShippingReturnsPage() {
  return (
    <div className="min-h-screen bg-[#F2EFE6]" style={{ paddingTop: "calc(34px + 80px)" }}>
      <div className="bg-[#1F3B2E] py-16 px-6 text-center">
        <h1 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-4xl font-light">Shipping & Returns</h1>
      </div>
      <div className="max-w-[700px] mx-auto px-6 py-14 prose-origenza">
        <ScrollReveal>
          <h2>New Zealand Delivery</h2>
          <ul>
            <li>Free standard delivery on NZ orders over $80</li>
            <li>Standard delivery: 2–5 business days</li>
            <li>Express delivery available at checkout</li>
            <li>Orders are typically dispatched within 1–2 business days</li>
          </ul>

          <h2>International Shipping</h2>
          <p>International shipping is available to most destinations. Rates and estimated delivery times are calculated at checkout based on your location and selected service.</p>
          <p>Import duties and taxes may apply in your destination country and are the responsibility of the recipient.</p>

          <h2>Returns Policy</h2>
          <p>We accept returns of unopened, undamaged products within 30 days of the delivery date.</p>
          <p>To initiate a return, please contact us at <a href="/contact">our contact page</a> with your order number and reason for return.</p>
          <p>Return shipping costs are the responsibility of the customer unless the product was damaged or incorrect.</p>
          <p>Refunds are processed within 5–7 business days of receiving the returned item.</p>

          <h2>Damaged or Incorrect Orders</h2>
          <p>If your order arrives damaged or incorrect, please contact us within 5 business days of delivery. Please include your order number and photographs of the issue. We will arrange a replacement or refund at no additional cost.</p>

          <h2>Contact</h2>
          <p>For any shipping or returns queries, please visit our <a href="/contact">contact page</a> or email our team directly.</p>
        </ScrollReveal>
      </div>
    </div>
  );
}
