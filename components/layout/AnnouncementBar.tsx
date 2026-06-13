"use client";

import { useEffect, useState } from "react";

const messages = [
  "🐝  Wholesale enquiries welcome — Retailers, Pharmacies, Distributors & Gifting Partners",
  "🍯  Request pricing, samples, and the product catalogue",
  "🐝  Premium New Zealand Mānuka Honey — Wholesale & Bulk Supply",
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % messages.length);
        setVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="w-full bg-[#1F3B2E] text-[#F2EFE6] text-center py-2 px-4"
      style={{ fontSize: "0.6875rem", letterSpacing: "0.10em" }}
    >
      <p
        className="font-[var(--font-inter)] uppercase font-medium transition-opacity duration-400"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {messages[index]}
      </p>
    </div>
  );
}
