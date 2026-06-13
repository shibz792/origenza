import Image from "next/image";

interface Props {
  variant?: "icon" | "wordmark" | "full";
  color?: "dark" | "white";
  className?: string;
  height?: number;
}

// Intrinsic PNG dimensions
const WORDMARK_W = 1999;
const WORDMARK_H = 441;
const ICON_W = 504;
const ICON_H = 518;

export default function OrigenzaLogo({ variant = "wordmark", color = "dark", className = "", height = 40 }: Props) {
  if (variant === "icon") {
    const src = color === "white" ? "/logo/icon-white.png" : "/logo/icon-dark.png";
    const displayW = Math.round(height * (ICON_W / ICON_H));
    return (
      <Image
        src={src}
        alt="Origenza"
        width={displayW}
        height={height}
        className={className}
        style={{ height, width: "auto" }}
        priority
      />
    );
  }

  // Both "wordmark" and "full" use the full lockup PNG
  // (the PNG already includes ORIGENZA + — NEW ZEALAND — in a single image)
  const src = color === "white" ? "/logo/wordmark-white.png" : "/logo/wordmark-dark.png";
  const displayW = Math.round(height * (WORDMARK_W / WORDMARK_H));
  return (
    <Image
      src={src}
      alt="Origenza — New Zealand"
      width={displayW}
      height={height}
      className={className}
      style={{ height, width: "auto" }}
      priority
    />
  );
}
