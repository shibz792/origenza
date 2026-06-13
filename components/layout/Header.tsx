"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import MobileNav from "./MobileNav";
import OrigenzaLogo from "@/components/ui/OrigenzaLogo";

const navLinks = [
  { label: "Products",         href: "/shop" },
  { label: "Why Origenza",     href: "/why-manuka" },
  { label: "Wholesale",        href: "/wholesale" },
  { label: "MGO Guide",        href: "/mgo-guide" },
  { label: "Corporate Gifting", href: "/gifting/corporate" },
  { label: "About",            href: "/about" },
  { label: "Contact",          href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const headerBg = scrolled
    ? "bg-[#1F3B2E]/96 backdrop-blur-md shadow-sm"
    : "bg-transparent";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${headerBg}`}
        style={{ marginTop: "var(--announcement-height, 34px)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 z-50" aria-label="Origenza — Home">
            <OrigenzaLogo variant="wordmark" color="white" height={40} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.6375rem] font-medium tracking-[0.14em] uppercase transition-colors duration-200 hover:text-[#C8A45A] text-[#F2EFE6]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: wholesale CTA + mobile toggle */}
          <div className="flex items-center gap-4 text-[#F2EFE6]">
            <Link
              href="/wholesale#enquiry"
              className="hidden lg:inline-flex items-center gap-2 ml-2 bg-[#C8A45A] text-[#1F3B2E] text-[0.6375rem] font-semibold tracking-[0.12em] uppercase px-5 py-2.5 hover:bg-[#d4b578] transition-colors duration-200"
            >
              Request Wholesale Pricing
            </Link>
            <button
              className="lg:hidden hover:text-[#C8A45A] transition-colors"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} links={navLinks} />
    </>
  );
}
