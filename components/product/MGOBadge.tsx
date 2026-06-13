interface Props {
  mgo: string;
  umf: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "text-[0.6rem] px-2.5 py-1",
  md: "text-xs px-3 py-1.5",
  lg: "text-sm px-4 py-2",
};

export default function MGOBadge({ mgo, umf, size = "md" }: Props) {
  return (
    <div className={`inline-flex items-center gap-2 bg-[#1F3B2E] text-[#F2EFE6] font-semibold tracking-widest uppercase ${sizes[size]}`}>
      <span>MGO {mgo}</span>
      <span className="text-[#C8A45A]">·</span>
      <span className="text-[#F2EFE6]/60">UMF {umf}</span>
    </div>
  );
}
