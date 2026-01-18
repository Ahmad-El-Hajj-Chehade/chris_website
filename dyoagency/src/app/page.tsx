import Image from 'next/image';
import Link from 'next/link';
import { djs } from '@/data/djs';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-7xl font-black tracking-tighter mb-8">DYOAGENCY</h1>
        <p className="text-2xl text-zinc-400 max-w-3xl leading-snug">
          A premier talent agency representing elite electronic music artists. 
          We bridge the gap between world-class DJs and global festival stages.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.4em] text-zinc-600 mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Booking Management</h3>
              <p className="text-zinc-400">Strategic career development and placement on global mainstages and clubs.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Tour Management</h3>
              <p className="text-zinc-400">Full logistics, travel coordination, and technical rider fulfillment worldwide.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Content Management</h3>
              <p className="text-zinc-400">Visual identity, social media scaling, and professional media production.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.4em] text-zinc-600 mb-12">Roster</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {djs.map((dj) => (
            <Link key={dj.id} href={`/artists/${dj.id}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 grayscale hover:grayscale-0 transition-all duration-700">
                <Image 
                  src={dj.image} 
                  alt={dj.name} 
                  fill 
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold">{dj.name}</h3>
                <p className="text-zinc-500 uppercase text-xs tracking-widest mt-1">{dj.shortBio}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white text-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-6">Work with us</h2>
          <p className="mb-12 text-zinc-600">Send your inquiry for festival bookings or artist management.</p>
          
          <form action="https://formspree.io/f/contact@dyoagency.com" method="POST" className="text-left space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Full Name" required className="p-4 border border-zinc-200 w-full focus:border-black outline-none" />
              <input type="email" name="email" placeholder="Email Address" required className="p-4 border border-zinc-200 w-full focus:border-black outline-none" />
            </div>
            <textarea name="message" placeholder="Message" rows={6} required className="p-4 border border-zinc-200 w-full focus:border-black outline-none"></textarea>
            
            {/* Formspree handles reCAPTCHA automatically if enabled in their dashboard */}
            <button type="submit" className="w-full bg-black text-white font-bold py-5 tracking-widest hover:bg-zinc-800 transition">
              SUBMIT INQUIRY
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}