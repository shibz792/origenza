import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Origenza privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F2EFE6]" style={{ paddingTop: "calc(34px + 80px)" }}>
      <div className="bg-[#1F3B2E] py-16 px-6 text-center">
        <h1 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-4xl font-light">Privacy Policy</h1>
        <p className="text-[#F2EFE6]/50 text-xs mt-3">Last updated: June 2025</p>
      </div>
      <div className="max-w-[700px] mx-auto px-6 py-14 prose-origenza">
        <ScrollReveal>
          <p>Origenza New Zealand ("we", "us", "our") is committed to protecting your personal information in accordance with the New Zealand Privacy Act 2020.</p>

          <h2>Information we collect</h2>
          <p>We may collect personal information including your name, email address, postal address, phone number, and payment information when you place an order, create an account, or contact us.</p>

          <h2>How we use your information</h2>
          <ul>
            <li>To process and fulfil your orders</li>
            <li>To communicate with you about your orders</li>
            <li>To send newsletters or marketing communications (where you have opted in)</li>
            <li>To improve our products and website</li>
          </ul>

          <h2>Sharing your information</h2>
          <p>We do not sell your personal information. We may share it with trusted third-party service providers (such as payment processors and delivery partners) solely to fulfil your order or operate our business.</p>

          <h2>Cookies</h2>
          <p>Our website uses cookies to improve your browsing experience and understand how our website is used. You can control cookies through your browser settings.</p>

          <h2>Your rights</h2>
          <p>Under the Privacy Act 2020, you have the right to access and correct personal information we hold about you. To make a request, please contact us via our contact page.</p>

          <h2>Contact</h2>
          <p>For privacy-related enquiries, please visit our <a href="/contact">contact page</a>.</p>
        </ScrollReveal>
      </div>
    </div>
  );
}
