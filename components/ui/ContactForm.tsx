"use client";

export default function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-4" aria-label="Contact form">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-[0.625rem] font-semibold tracking-widest uppercase text-[#1A1A1A]/50 mb-1.5">Name</label>
          <input id="contact-name" type="text" required placeholder="Your name" className="w-full border border-[#1F3B2E]/20 px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#C8A45A] text-[#1F3B2E] placeholder-[#1A1A1A]/30" />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-[0.625rem] font-semibold tracking-widest uppercase text-[#1A1A1A]/50 mb-1.5">Email</label>
          <input id="contact-email" type="email" required placeholder="your@email.com" className="w-full border border-[#1F3B2E]/20 px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#C8A45A] text-[#1F3B2E] placeholder-[#1A1A1A]/30" />
        </div>
      </div>
      <div>
        <label htmlFor="contact-subject" className="block text-[0.625rem] font-semibold tracking-widest uppercase text-[#1A1A1A]/50 mb-1.5">Subject</label>
        <select id="contact-subject" className="w-full border border-[#1F3B2E]/20 px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#C8A45A] text-[#1F3B2E]">
          <option>Product enquiry</option>
          <option>Order support</option>
          <option>Wholesale / Trade</option>
          <option>Corporate gifting</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-[0.625rem] font-semibold tracking-widest uppercase text-[#1A1A1A]/50 mb-1.5">Message</label>
        <textarea id="contact-message" required rows={5} placeholder="How can we help?" className="w-full border border-[#1F3B2E]/20 px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#C8A45A] text-[#1F3B2E] placeholder-[#1A1A1A]/30 resize-none" />
      </div>
      <button type="submit" className="w-full bg-[#1F3B2E] text-[#F2EFE6] text-[0.6875rem] font-semibold tracking-[0.14em] uppercase py-4 hover:bg-[#2d5240] transition-colors">
        Send Message
      </button>
    </form>
  );
}
