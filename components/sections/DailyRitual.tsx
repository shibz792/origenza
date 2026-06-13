import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";

const rituals = [
  {
    label: "Morning Tea",
    desc: "A refined addition to your favourite morning brew.",
    bg: "bg-[#C8A45A]/10",
  },
  {
    label: "Toast & Yoghurt",
    desc: "Drizzled simply over breakfast, as it should be.",
    bg: "bg-[#1F3B2E]/5",
  },
  {
    label: "Warm Water",
    desc: "A considered start: warm water, a spoonful, intention.",
    bg: "bg-[#C8A45A]/8",
  },
  {
    label: "Taken on Its Own",
    desc: "Savoured directly — for those who appreciate the difference.",
    bg: "bg-[#1F3B2E]/8",
  },
  {
    label: "Smoothies & Baking",
    desc: "A naturally distinctive sweetener for the everyday.",
    bg: "bg-[#C8A45A]/5",
  },
  {
    label: "Gift with Intention",
    desc: "Beautifully presented — a gift that speaks for itself.",
    bg: "bg-[#1F3B2E]/5",
  },
];

export default function DailyRitual() {
  return (
    <section className="bg-[#F2EFE6] py-24 lg:py-32 px-6 lg:px-12" aria-label="Daily ritual">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal className="text-center mb-14">
          <div className="flex justify-center mb-6">
            <div className="gold-rule w-40">Your Ritual</div>
          </div>
          <h2 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-4xl sm:text-5xl font-light">
            One spoon.{" "}
            <em className="italic text-[#C8A45A]">Your daily ritual.</em>
          </h2>
          <p className="mt-4 text-[#1A1A1A]/50 text-sm max-w-md mx-auto leading-relaxed">
            A refined addition to your daily routine — naturally distinctive, rich in flavour, thoughtfully sourced.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rituals.map((r, i) => (
            <ScrollReveal key={r.label} delay={i * 0.07}>
              <div className={`${r.bg} border border-[#1F3B2E]/8 overflow-hidden group hover:-translate-y-0.5 transition-transform duration-300`}>
                {/* Silent styled panel — replaces placeholder text */}
                <div className={`w-full h-52 ${r.bg} flex items-end justify-end p-5 border-b border-[#1F3B2E]/8`}>
                  <span
                    aria-hidden="true"
                    className="font-[var(--font-cormorant)] text-[#1F3B2E]/10 font-light select-none leading-none"
                    style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-[var(--font-cormorant)] text-[#1F3B2E] text-xl font-light mb-1">
                    {r.label}
                  </h3>
                  <p className="text-[#1A1A1A]/50 text-xs leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Legal note */}
        <ScrollReveal delay={0.2} className="mt-8 text-center">
          <p className="text-[#1A1A1A]/35 text-xs italic max-w-lg mx-auto">
            Origenza Mānuka honey is a food product and is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25} className="text-center mt-6">
          <Link
            href="/shop"
            className="btn-slide btn-slide--green inline-flex items-center gap-2 bg-[#1F3B2E] text-[#F2EFE6] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase px-8 py-4 hover:bg-[#2d5240] transition-colors"
          >
            Shop the Collection
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
