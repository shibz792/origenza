import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Product Disclaimer",
  description: "Important information about Origenza Mānuka honey products and health claims.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#F2EFE6]" style={{ paddingTop: "calc(34px + 80px)" }}>
      <div className="bg-[#1F3B2E] py-16 px-6 text-center">
        <h1 className="font-[var(--font-cormorant)] text-[#F2EFE6] text-4xl font-light">Product Disclaimer</h1>
      </div>
      <div className="max-w-[700px] mx-auto px-6 py-14 prose-origenza">
        <ScrollReveal>
          <div className="bg-[#C8A45A]/10 border border-[#C8A45A]/30 p-6 mb-8">
            <p className="text-[#1A1A1A]/70 text-sm leading-relaxed font-medium">
              Origenza Mānuka honey is a food product and is not intended to diagnose, treat, cure, or prevent any disease. Individual products should be used according to their labels and in accordance with relevant professional guidance.
            </p>
          </div>

          <h2>Food product status</h2>
          <p>All Origenza products are sold as food products under New Zealand food law. They are not therapeutic goods, medical devices, or dietary supplements intended to treat or prevent disease.</p>

          <h2>Health information</h2>
          <p>Any general health-related information provided on this website, including references to MGO concentration or suggested uses, is informational in nature and does not constitute medical advice.</p>
          <p>We do not make antibacterial, immune-supporting, digestive, healing, or any other therapeutic claims in relation to our products. If you have a health condition or are considering Mānuka honey for a specific health purpose, please consult a qualified healthcare professional.</p>

          <h2>MGO ratings</h2>
          <p>MGO ratings on Origenza products reflect the independently tested methylglyoxal concentration (in mg/kg) for each batch. These ratings describe the measured composition of the product and do not constitute a health claim.</p>

          <h2>UMF comparison</h2>
          <p>Any UMF equivalent values referenced on this website are provided as approximate general guides only and do not constitute UMF certification. Origenza products are not UMF certified. Please check individual product documentation for verified certification information.</p>

          <h2>Individual variation</h2>
          <p>Responses to food products vary between individuals. Origenza does not guarantee any particular outcome from consuming its products.</p>

          <h2>Allergen information</h2>
          <p>Honey products may not be suitable for infants under 12 months of age. People with known allergies to bee products should exercise caution. Refer to individual product labels for full ingredient information.</p>
        </ScrollReveal>
      </div>
    </div>
  );
}
