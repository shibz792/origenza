"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import Image from "next/image";

interface NavLink { label: string; href: string }

interface Props {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

const secondary = [
  { label: "Request Wholesale Pricing", href: "/wholesale#enquiry" },
  { label: "Request Samples",           href: "/wholesale#enquiry" },
  { label: "Corporate Gifting",         href: "/gifting/corporate" },
  { label: "FAQ",                       href: "/faq" },
  { label: "Contact",                   href: "/contact" },
];

const container: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};
const item: Variants = {
  hidden:  { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], duration: 0.5 } },
};

export default function MobileNav({ isOpen, onClose, links }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-nav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-30 bg-[#1F3B2E] flex flex-col overflow-y-auto"
          style={{ paddingTop: "calc(34px + 4rem)" }}
        >
          {/* Primary links */}
          <motion.nav
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col px-8 pt-12 gap-6"
            aria-label="Mobile navigation"
          >
            {links.map((link) => (
              <motion.div key={link.href} variants={item}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block font-[var(--font-cormorant)] text-[#F2EFE6] text-4xl font-light tracking-wide hover:text-[#C8A45A] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Divider */}
          <div className="mx-8 mt-10 mb-8 h-px bg-[#C8A45A]/30" />

          {/* Secondary links */}
          <nav className="flex flex-col px-8 gap-3" aria-label="Secondary navigation">
            {secondary.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="text-[#F2EFE6]/70 text-sm tracking-[0.1em] uppercase hover:text-[#C8A45A] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="px-8 mt-10 mb-12 flex flex-col gap-3">
            <Link
              href="/wholesale#enquiry"
              onClick={onClose}
              className="block w-full text-center bg-[#C8A45A] text-[#1F3B2E] text-sm font-semibold tracking-[0.12em] uppercase py-4 hover:bg-[#d4b578] transition-colors"
            >
              Request Wholesale Pricing
            </Link>
            <Link
              href="/shop"
              onClick={onClose}
              className="block w-full text-center border border-[#F2EFE6]/30 text-[#F2EFE6] text-sm font-semibold tracking-[0.12em] uppercase py-4 hover:border-[#C8A45A] hover:text-[#C8A45A] transition-colors"
            >
              View Product Range
            </Link>
          </div>

          {/* Brand footer */}
          <div className="px-8 pb-10 flex items-center justify-between">
            <Image
              src="/logo/wordmark-white.png"
              alt="Origenza — New Zealand"
              width={120}
              height={26}
              style={{ height: 26, width: "auto" }}
            />
            <p className="text-[#F2EFE6]/30 text-[0.55rem] tracking-widest uppercase">
              Naturally New Zealand
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
