import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Newsletter from "@/components/sections/Newsletter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Origenza",
  description: "Origenza is a New Zealand Mānuka honey brand guided by purity, provenance, and purpose.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: "calc(34px + 80px)" }}>
      <div className="bg-[#1F3B2E] py-20 px-6 text-center">
        <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.3em] uppercase block mb-4">
          Our Story
        </span>
        <h1 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-5xl sm:text-6xl font-light mb-4">
          About Origenza
        </h1>
        <p className="text-[#F2EFE6]/55 text-sm max-w-md mx-auto">
          Guided by purity, provenance, and purpose.
        </p>
      </div>

      <div className="bg-[#F2EFE6] py-16 px-6 lg:px-12">
        <div className="max-w-[900px] mx-auto">
          {/* Manifesto pull quote */}
          <ScrollReveal className="text-center py-12">
            <blockquote className="font-[var(--font-cormorant)] text-[#1F3B2E] text-4xl sm:text-5xl font-light leading-tight max-w-2xl mx-auto">
              "Nature does not rush. <em className="italic text-[#C8A45A]">Neither do we.</em>"
            </blockquote>
          </ScrollReveal>

          <div className="prose-origenza">
            <ScrollReveal>
              <h2>Who we are</h2>
              <p>
                Origenza is a New Zealand Mānuka honey brand. We source, test, and present premium Mānuka honey from the pristine landscapes of Aotearoa New Zealand — offering four distinct grades for those who care about what they bring into their daily lives.
              </p>
              <p>
                We are guided by a simple belief: exceptional natural products deserve patience, care, and respect. From where our honey begins to how it arrives at your door, every decision is made with purity, provenance, and purpose in mind.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2>What we believe</h2>
              <p>
                We believe that the origin of a product matters. That what goes into the jar matters. That transparency, honesty, and restraint are more powerful than exaggeration.
              </p>
              <p>
                We don't believe in making claims we can't substantiate, or in using language that overstates what we know. Mānuka honey is a remarkable natural food product — and we let that stand on its own.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2>How we work</h2>
              <p>
                Every batch of Origenza Mānuka honey is independently tested for MGO concentration before it reaches you. Each jar carries a batch code. We are building full traceability so that you can follow your honey from the harvest region through testing and packaging.
              </p>
              <p>
                We work with producers who care for their hives and the surrounding native ecosystems. We use glass jars and minimal materials where possible. We are always looking for ways to do better.
              </p>
            </ScrollReveal>

            {/* Values grid */}
            <ScrollReveal delay={0.1} className="mt-10 grid sm:grid-cols-3 gap-5 not-prose">
              {[
                { title: "Purity",      desc: "No additives, preservatives, or artificial ingredients — ever." },
                { title: "Provenance",  desc: "New Zealand origin, batch traceable, independently tested." },
                { title: "Purpose",     desc: "Every decision shaped by quality, not convenience." },
              ].map((v) => (
                <div key={v.title} className="border border-[#1F3B2E]/12 p-7">
                  <h3 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-2xl font-light mb-2">{v.title}</h3>
                  <p className="text-[#1A1A1A]/55 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="mt-12 flex flex-wrap gap-4 not-prose">
              <Link href="/shop" className="bg-[#1F3B2E] text-[#F2EFE6] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase px-7 py-3.5 hover:bg-[#2d5240] transition-colors">
                Shop the Collection
              </Link>
              <Link href="/contact" className="border border-[#1F3B2E]/25 text-[#1F3B2E] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase px-7 py-3.5 hover:border-[#1F3B2E] transition-colors">
                Get in Touch
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}
