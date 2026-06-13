import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  "aria-label"?: string;
}

const variants = {
  primary:   "bg-[#1F3B2E] text-[#F2EFE6] hover:bg-[#2d5240] btn-slide btn-slide--green",
  secondary: "border border-[#1F3B2E] text-[#1F3B2E] hover:text-[#F2EFE6] btn-slide btn-slide--green",
  ghost:     "border border-[#F2EFE6] text-[#F2EFE6] hover:text-[#1F3B2E] btn-slide btn-slide--ghost",
  gold:      "bg-[#C8A45A] text-[#1F3B2E] hover:bg-[#d4b578] btn-slide btn-slide--gold",
};
const sizes = {
  sm: "px-4 py-2 text-[0.625rem] tracking-[0.16em]",
  md: "px-6 py-3 text-[0.6875rem] tracking-[0.14em]",
  lg: "px-8 py-4 text-[0.6875rem] tracking-[0.14em]",
};

const base = "inline-flex items-center justify-center font-semibold uppercase transition-colors duration-200 select-none";

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  type = "button",
  disabled,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`;

  if (href) {
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
