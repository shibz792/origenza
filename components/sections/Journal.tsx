import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLatestArticles } from "@/lib/journal";

export default function JournalSection() {
  const articles = getLatestArticles(3);
  const [featured, ...rest] = articles;

  return (
    <section className="bg-[#F2EFE6] py-24 lg:py-32 px-6 lg:px-12" aria-label="Journal">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="gold-rule gold-rule--left mb-4 w-36">Journal</div>
            <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-4xl sm:text-5xl font-light">
              Stories from the source.
            </h2>
          </div>
          <Link
            href="/journal"
            className="flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-[#1F3B2E] border-b border-[#C8A45A] pb-0.5 hover:text-[#C8A45A] transition-colors self-start lg:self-auto whitespace-nowrap"
          >
            All Articles <ArrowRight size={12} />
          </Link>
        </ScrollReveal>

        {/* Editorial asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Featured article — 3 of 5 columns */}
          <ScrollReveal className="lg:col-span-3">
            <article className="flex flex-col h-full group">
              <Link href={`/journal/${featured.slug}`} className="block overflow-hidden mb-6">
                <div
                  className="w-full h-72 lg:h-96 bg-[#1F3B2E]/8 transition-transform duration-700 group-hover:scale-[1.02] origin-center"
                  role="img"
                  aria-label={`Article image for "${featured.title}"`}
                />
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.2em] uppercase">
                  {featured.category}
                </span>
                <span className="text-[#1A1A1A]/30">·</span>
                <span className="text-[#1A1A1A]/40 text-[0.625rem]">{featured.readTime}</span>
              </div>
              <Link href={`/journal/${featured.slug}`}>
                <h3 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-3xl lg:text-4xl font-light leading-tight mb-3 hover:text-[#2d5240] transition-colors">
                  {featured.title}
                </h3>
              </Link>
              <p className="text-[#1A1A1A]/55 text-sm leading-relaxed mb-5 max-w-lg">{featured.excerpt}</p>
              <Link
                href={`/journal/${featured.slug}`}
                className="inline-flex items-center gap-1.5 text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[#C8A45A] hover:gap-2.5 transition-all duration-200"
                aria-label={`Read ${featured.title}`}
              >
                Read Article <ArrowRight size={11} />
              </Link>
            </article>
          </ScrollReveal>

          {/* Smaller articles — 2 of 5 columns, stacked */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {rest.map((article, i) => (
              <ScrollReveal key={article.slug} delay={(i + 1) * 0.1}>
                <article className="group flex flex-col border-t border-[#1F3B2E]/10 pt-5">
                  <Link href={`/journal/${article.slug}`} className="block overflow-hidden mb-4">
                    <div
                      className="w-full h-44 bg-[#1F3B2E]/8 transition-transform duration-500 group-hover:scale-[1.02] origin-center"
                      role="img"
                      aria-label={`Article image for "${article.title}"`}
                    />
                  </Link>
                  <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.2em] uppercase mb-2">
                    {article.category}
                  </span>
                  <Link href={`/journal/${article.slug}`}>
                    <h3 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-xl font-light leading-tight mb-2 hover:text-[#2d5240] transition-colors">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-[#1A1A1A]/50 text-sm leading-relaxed mb-4 text-xs">{article.excerpt}</p>
                  <Link
                    href={`/journal/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[#C8A45A] hover:gap-2.5 transition-all duration-200"
                    aria-label={`Read ${article.title}`}
                  >
                    Read Article <ArrowRight size={11} />
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
