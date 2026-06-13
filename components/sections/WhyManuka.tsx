import ScrollReveal from "@/components/ui/ScrollReveal";

const pillars = [
  {
    number: "01",
    title: "Premium New Zealand Origin",
    body: "Authentic Mānuka honey with a genuine New Zealand story — valued by retailers, gifting buyers, and international distributors.",
  },
  {
    number: "02",
    title: "Clear Product Range",
    body: "Four MGO grades from everyday to ultra-premium, making it simple for your customers to understand and choose.",
  },
  {
    number: "03",
    title: "Premium Presentation",
    body: "Beautiful packaging suited to retail shelves, gifting, hospitality settings, and online stores.",
  },
  {
    number: "04",
    title: "Simple Wholesale Support",
    body: "Straightforward enquiries for pricing, samples, bulk orders, and distribution — no complicated processes.",
  },
];

export default function WhyManuka() {
  return (
    <section className="bg-[#1F3B2E] py-24 lg:py-36 px-6 lg:px-12" aria-label="Why businesses choose Origenza">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="gold-rule w-48 text-[#C8A45A]">Why Origenza</div>
          </div>
          <h2 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-4xl sm:text-5xl font-light">
            Why businesses{" "}
            <em className="italic text-[#C8A45A]">choose Origenza.</em>
          </h2>
        </ScrollReveal>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.number} delay={i * 0.1}>
              <article className="bg-[#F2EFE6]/5 border border-[#F2EFE6]/10 px-8 pb-10 pt-0 flex flex-col h-full hover:border-[#C8A45A]/30 hover:-translate-y-1 transition-all duration-300">
                {/* Decorative large number */}
                <div
                  aria-hidden="true"
                  className="font-[var(--font-cormorant)] text-[#F2EFE6] font-light select-none"
                  style={{ fontSize: "5.5rem", opacity: 0.06, lineHeight: 1 }}
                >
                  {p.number}
                </div>
                {/* Gold top bar */}
                <div className="w-8 h-px bg-[#C8A45A] mb-6" aria-hidden="true" />
                <span className="text-[#C8A45A] text-[0.625rem] font-semibold tracking-[0.2em] uppercase mb-3">
                  {p.number}
                </span>
                <h3 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-2xl font-light mb-3 leading-tight">
                  {p.title}
                </h3>
                <p className="text-[#F2EFE6]/55 text-sm leading-relaxed flex-1">
                  {p.body}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
