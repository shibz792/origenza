import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getArticleBySlug, journalArticles } from "@/lib/journal";
import Newsletter from "@/components/sections/Newsletter";

export async function generateStaticParams() {
  return journalArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <div className="min-h-screen bg-[#F2EFE6]" style={{ paddingTop: "calc(34px + 80px)" }}>
      {/* Header */}
      <div className="bg-[#1F3B2E] py-16 px-6 text-center">
        <div className="flex justify-center gap-3 mb-4">
          <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.3em] uppercase">
            {article.category}
          </span>
          <span className="text-[#F2EFE6]/30">·</span>
          <span className="text-[#F2EFE6]/40 text-[0.625rem]">{article.readTime}</span>
        </div>
        <h1 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-4xl sm:text-5xl font-light max-w-2xl mx-auto leading-tight mb-4">
          {article.title}
        </h1>
        <p className="text-[#F2EFE6]/50 text-sm max-w-lg mx-auto">{article.excerpt}</p>
      </div>

      {/* Article image placeholder */}
      <div
        className="w-full h-64 bg-[#1F3B2E]/10 flex items-center justify-center text-[#1F3B2E]/20 text-sm italic"
        role="img"
        aria-label={`[PLACEHOLDER: Featured image for "${article.title}"]`}
      >
        [PLACEHOLDER: Article featured image]
      </div>

      {/* Body */}
      <div className="max-w-[700px] mx-auto px-6 py-14">
        <Link href="/journal" className="inline-flex items-center gap-2 text-[#1A1A1A]/40 text-xs hover:text-[#1F3B2E] transition-colors mb-10">
          <ArrowLeft size={13} /> Back to Journal
        </Link>

        <div
          className="prose-origenza text-[#1A1A1A]"
          dangerouslySetInnerHTML={{ __html: article.body.replace(/\n/g, "<br />").replace(/#{3} (.+)/g, "<h3>$1</h3>").replace(/## (.+)/g, "<h2>$1</h2>") }}
        />

        <div className="mt-12 pt-8 border-t border-[#1F3B2E]/10">
          <p className="text-[#1A1A1A]/35 text-xs italic leading-relaxed">
            Origenza Mānuka honey is a food product and is not intended to diagnose, treat, cure, or prevent any disease. The information in this article is general in nature.
          </p>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}
