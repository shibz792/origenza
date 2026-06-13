"use client";

interface Props {
  items: string[];
  className?: string;
}

export default function MarqueeStrip({ items, className = "" }: Props) {
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="animate-marquee" aria-hidden="true">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center flex-shrink-0">
            <span className="text-[0.6rem] font-semibold tracking-[0.22em] uppercase text-[#F2EFE6]/65 whitespace-nowrap">
              {item}
            </span>
            <span className="mx-6 text-[#C8A45A] text-[0.45rem]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
