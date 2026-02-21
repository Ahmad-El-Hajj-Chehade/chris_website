'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-start">
          <div>
            <h2 className="text-6xl font-black uppercase tracking-tighter mb-4">Work with us</h2>
            <p className="text-lg text-zinc-500 uppercase tracking-widest">Inquiries & Bookings</p>
          </div>
          <div className="md:text-right pt-2">
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-zinc-400 mb-1">Direct Contact</p>
            <a 
              href="mailto:booking@chrismanagement.com"
              className="text-xl font-medium text-black hover:text-zinc-500 transition-colors select-all inline-block cursor-pointer"
              style={{ unicodeBidi: 'bidi-override', direction: 'rtl' }}
            >
              moc.tnemeganamssirhc@gnikoob
            </a>
          </div>
        </div>

        <form action="https://formspree.io/f/mqedybbk" method="POST" className="space-y-8 border-t border-zinc-100 pt-16">
          <div className="hidden" aria-hidden="true">
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-zinc-400">Your Name</label>
              <input type="text" name="name" required className="w-full border-b-2 border-zinc-200 py-4 outline-none focus:border-black transition-colors bg-transparent" placeholder="John Doe" />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-zinc-400">Your Email</label>
              <input type="email" name="email" required className="w-full border-b-2 border-zinc-200 py-4 outline-none focus:border-black transition-colors bg-transparent" placeholder="email@example.com" />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-xs uppercase font-bold tracking-widest text-zinc-400">Message</label>
            <textarea name="message" rows={5} required className="w-full border-b-2 border-zinc-200 py-4 outline-none focus:border-black transition-colors bg-transparent resize-none" placeholder="Tell us about your event..."></textarea>
          </div>
          <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <button type="submit" className="bg-black text-white px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-zinc-800 transition-all">
              Send Inquiry →
            </button>
            <p className="text-zinc-400 text-sm italic">We usually respond within 24 hours.</p>
          </div>
        </form>
      </div>
    </section>
  );
}