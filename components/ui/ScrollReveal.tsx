"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const EASE_EXPO: [number, number, number, number] = [0.76, 0, 0.24, 1];

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  variant?: "slide" | "fade" | "clip";
}

function getMotionProps(variant: "slide" | "fade" | "clip", y: number, delay: number) {
  switch (variant) {
    case "fade":
      return {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 1.0, ease: EASE, delay },
      };
    case "clip":
      return {
        initial: { clipPath: "inset(0 0 100% 0)" },
        whileInView: { clipPath: "inset(0 0 0% 0)" },
        transition: { duration: 0.85, ease: EASE_EXPO, delay },
      };
    default:
      return {
        initial: { opacity: 0, y },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: EASE, delay },
      };
  }
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  y = 24,
  variant = "slide",
}: Props) {
  const motionProps = getMotionProps(variant, y, delay);

  return (
    <motion.div
      {...motionProps}
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
