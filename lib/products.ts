export type ProductTier = "everyday" | "potent" | "high" | "ultra";

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  mgo: string;
  umf: string;
  price: { "250g": number; "500g"?: number };
  sizes: string[];
  flavour: string;
  texture: string;
  colour: string;
  bestFor: string;
  wholesaleSuitedFor: string;
  suggestedUse: string[];
  tier: ProductTier;
  tierLabel: string;
  tierColour: string; // Tailwind bg class
  mgoNumeric: number;
}

export const products: Product[] = [
  {
    slug: "everyday-manuka-mgo83",
    name: "Origenza Everyday Mānuka",
    tagline: "Smooth, approachable, and versatile",
    mgo: "83+",
    umf: "5+",
    price: { "250g": 29, "500g": 52 },
    sizes: ["250g", "500g"],
    flavour: "Mild, light floral sweetness with a clean finish",
    texture: "Smooth and fluid, with a gentle creaminess",
    colour: "Golden amber",
    bestFor: "Daily use, cooking, and natural sweetening",
    wholesaleSuitedFor: "Supermarkets, cafés, gift stores, and general retail",
    suggestedUse: [
      "Stir into tea or warm water",
      "Drizzle over toast and yoghurt",
      "Add to smoothies and baking",
      "Use as a natural sweetener",
    ],
    tier: "everyday",
    tierLabel: "Everyday",
    tierColour: "bg-[#d4b578]",
    mgoNumeric: 83,
  },
  {
    slug: "potent-pure-mgo263",
    name: "Origenza Potent & Pure",
    tagline: "Rich, creamy, and more concentrated",
    mgo: "263+",
    umf: "10+",
    price: { "250g": 59, "500g": 109 },
    sizes: ["250g", "500g"],
    flavour: "Rich, rounded sweetness with earthy depth",
    texture: "Creamy and slightly thicker",
    colour: "Deep golden amber",
    bestFor: "Daily wellness rituals and seasonal routines",
    wholesaleSuitedFor: "Wellness stores, pharmacies, and premium retailers",
    suggestedUse: [
      "Warm water and lemon first thing in the morning",
      "Taken directly by spoon",
      "Stirred into herbal teas",
      "Part of a morning wellness ritual",
    ],
    tier: "potent",
    tierLabel: "Potent & Pure",
    tierColour: "bg-[#C8A45A]",
    mgoNumeric: 263,
  },
  {
    slug: "high-grade-mgo514",
    name: "Origenza High Grade Mānuka",
    tagline: "Deep, robust, and highly concentrated",
    mgo: "514+",
    umf: "15+",
    price: { "250g": 99 },
    sizes: ["250g"],
    flavour: "Intense, complex, with a distinctive herbal note",
    texture: "Dense and slow-flowing",
    colour: "Rich dark amber",
    bestFor: "Experienced Mānuka customers and premium gifting",
    wholesaleSuitedFor: "Premium wellness stores and gifting",
    suggestedUse: [
      "Taken directly — one teaspoon daily",
      "Deliberate daily wellness use",
      "Premium gifting for discerning recipients",
      "For those seeking a stronger grade",
    ],
    tier: "high",
    tierLabel: "High Grade",
    tierColour: "bg-[#a8863e]",
    mgoNumeric: 514,
  },
  {
    slug: "reserve-mgo829",
    name: "Origenza Reserve 829+",
    tagline: "Rare, intense, and exceptionally concentrated",
    mgo: "829+",
    umf: "20+",
    price: { "250g": 159 },
    sizes: ["250g"],
    flavour: "Bold, distinctive, and deeply complex",
    texture: "Thick, luxuriously dense",
    colour: "Deep burnished amber",
    bestFor: "Connoisseurs, collectors, and luxury gifting",
    wholesaleSuitedFor: "Luxury gifting, specialist retailers, and export markets",
    suggestedUse: [
      "Taken on its own — one teaspoon daily",
      "Luxury gifting and celebration",
      "For customers seeking the highest grade",
      "Savoured slowly and with intention",
    ],
    tier: "ultra",
    tierLabel: "Ultra Premium",
    tierColour: "bg-[#1F3B2E]",
    mgoNumeric: 829,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, count);
}

export const mgoComparison = [
  { mgo: "83+",  umf: "5+",  tier: "Everyday",      example: "Tea, toast, smoothies" },
  { mgo: "263+", umf: "10+", tier: "Potent & Pure",  example: "Daily wellness rituals" },
  { mgo: "514+", umf: "15+", tier: "High Grade",     example: "Deliberate daily use" },
  { mgo: "829+", umf: "20+", tier: "Ultra Premium",  example: "Connoisseurs, gifting" },
];
