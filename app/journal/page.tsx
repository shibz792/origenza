import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { journalArticles } from "@/lib/journal";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Journal",
  description: "Stories, education, and inspiration from New Zealand — Mānuka honey, origin, grading, and more.",
};

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-[#F2EFE6]" style={{ paddingTop: "calc(34px + 80px)" }}>
      <div className="bg-[#1F3B2E] py-20 px-6 text-center">
        <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.3em] uppercase block mb-4">Journal</span>
        <h1 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-5xl sm:text-6xl font-light mb-4">
          Stories from the source.
        </h1>
        <p className="text-[#F2EFE6]/55 text-sm max-w-md mx-auto">
          Education, origin stories, care guides, and considered perspectives from the world of Mānuka honey.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {journalArticles.map((article, i) => (
            <ScrollReveal key={article.slug} delay={i * 0.07}>
              <article className="flex flex-col h-full">
                <Link href={`/journal/${article.slug}`} className="block overflow-hidden mb-5">
                  <div
                    className="w-full h-52 bg-[#1F3B2E]/8 flex items-center justify-center text-[#1F3B2E]/20 text-xs italic hover:opacity-90 transition-opacity"
                    role="img"
                    aria-label={`[PLACEHOLDER: Article image for "${article.title}"]`}
                  >
                    [PLACEHOLDER: article image]
                  </div>
                </Link>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.2em] uppercase">{article.category}</span>
                  <span className="text-[#1A1A1A]/30">·</span>
                  <span className="text-[#1A1A1A]/40 text-[0.625rem]">{article.readTime}</span>
                </div>
                <Link href={`/journal/${article.slug}`}>
                  <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-2xl font-light leading-tight mb-2 hover:text-[#2d5240] transition-colors">
                    {article.title}
                  </h2>
                </Link>
                <p className="text-[#1A1A1A]/55 text-sm leading-relaxed flex-1 mb-4">{article.excerpt}</p>
                <Link
                  href={`/journal/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-[0.625rem] font-semibold tracking-[0.2em] uppercase text-[#C8A45A] hover:gap-2.5 transition-all self-start"
                >
                  Read <ArrowRight size={11} />
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
