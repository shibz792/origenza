"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

interface Props {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
}

export default function SplitText({ text, as: Tag = "h2", className = "", delay = 0 }: Props) {
  const words = text.split(" ");

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{ marginRight: "0.28em" }}
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: "0.4em" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE, delay: delay + i * 0.07 }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
