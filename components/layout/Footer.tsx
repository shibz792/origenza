"use client";

import Link from "next/link";
import OrigenzaLogo from "@/components/ui/OrigenzaLogo";

const shopLinks = [
  { label: "All Products",         href: "/shop" },
  { label: "Everyday Mānuka",      href: "/products/everyday-manuka-mgo83" },
  { label: "Potent & Pure",        href: "/products/potent-pure-mgo263" },
  { label: "High Grade",           href: "/products/high-grade-mgo514" },
  { label: "Reserve 829+",         href: "/products/reserve-mgo829" },
  { label: "Corporate Gifting",    href: "/gifting/corporate" },
];
const wholesaleLinks = [
  { label: "Wholesale Overview",   href: "/wholesale" },
  { label: "Request Pricing",      href: "/wholesale#enquiry" },
  { label: "Request Samples",      href: "/wholesale#enquiry" },
  { label: "Bulk Orders",          href: "/wholesale#bulk" },
  { label: "Distribution",         href: "/wholesale#distribution" },
  { label: "Product Catalogue",    href: "/wholesale#catalogue" },
];
const learnLinks = [
  { label: "Why Origenza",         href: "/why-manuka" },
  { label: "MGO Guide",            href: "/mgo-guide" },
  { label: "Our Origin",           href: "/origin" },
  { label: "About",                href: "/about" },
  { label: "Contact",              href: "/contact" },
  { label: "FAQ",                  href: "/faq" },
];
const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms",          href: "/terms" },
  { label: "Disclaimer",     href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1F3B2E] text-[#F2EFE6]" aria-label="Site footer">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 pb-8">
        {/* Top: brand + columns */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#F2EFE6]/10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <OrigenzaLogo variant="full" color="white" height={44} />
            </Link>
            <p className="text-[#F2EFE6]/60 text-sm leading-relaxed max-w-xs mt-3">
              Premium New Zealand Mānuka honey for retailers, distributors, gifting partners, hospitality businesses, and bulk buyers.
            </p>
            <div className="mt-6">
              <Link
                href="/wholesale#enquiry"
                className="inline-block bg-[#C8A45A] text-[#1F3B2E] text-[0.6rem] font-semibold tracking-widest uppercase px-5 py-2.5 hover:bg-[#d4b578] transition-colors"
              >
                Request Wholesale Pricing
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-[0.625rem] font-semibold tracking-[0.2em] uppercase text-[#C8A45A] mb-4">
              Products
            </h3>
            <ul className="space-y-2.5">
              {shopLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[#F2EFE6]/60 text-sm hover:text-[#F2EFE6] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Wholesale */}
          <div>
            <h3 className="text-[0.625rem] font-semibold tracking-[0.2em] uppercase text-[#C8A45A] mb-4">
              Wholesale
            </h3>
            <ul className="space-y-2.5">
              {wholesaleLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[#F2EFE6]/60 text-sm hover:text-[#F2EFE6] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-[0.625rem] font-semibold tracking-[0.2em] uppercase text-[#C8A45A] mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {learnLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[#F2EFE6]/60 text-sm hover:text-[#F2EFE6] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-[#F2EFE6]/40 text-xs tracking-widest uppercase">
            Origenza — Naturally New Zealand &copy; {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-[#F2EFE6]/40 text-xs hover:text-[#F2EFE6]/70 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://levatahq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F2EFE6]/28 text-[0.65rem] tracking-wide hover:text-[#F2EFE6]/55 transition-colors"
            >
              Designed by{" "}
              <span className="text-[#C8A45A]/55 hover:text-[#C8A45A] transition-colors">Levata</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
