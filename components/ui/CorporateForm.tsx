"use client";

export default function CorporateForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-4" aria-label="Corporate gifting enquiry">
      <div className="grid sm:grid-cols-2 gap-4">
        <input type="text" required placeholder="Your name" className="w-full border border-[#1F3B2E]/20 px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#C8A45A] text-[#1F3B2E] placeholder-[#1A1A1A]/30" />
        <input type="email" required placeholder="Email address" className="w-full border border-[#1F3B2E]/20 px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#C8A45A] text-[#1F3B2E] placeholder-[#1A1A1A]/30" />
      </div>
      <input type="text" placeholder="Company name" className="w-full border border-[#1F3B2E]/20 px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#C8A45A] text-[#1F3B2E] placeholder-[#1A1A1A]/30" />
      <input type="text" placeholder="Approximate quantity (e.g. 50 jars)" className="w-full border border-[#1F3B2E]/20 px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#C8A45A] text-[#1F3B2E] placeholder-[#1A1A1A]/30" />
      <textarea placeholder="Tell us about your gifting needs..." rows={4} className="w-full border border-[#1F3B2E]/20 px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#C8A45A] text-[#1F3B2E] placeholder-[#1A1A1A]/30 resize-none" />
      <button type="submit" className="bg-[#1F3B2E] text-[#F2EFE6] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase px-8 py-4 hover:bg-[#2d5240] transition-colors">
        Send Enquiry
      </button>
    </form>
  );
}
