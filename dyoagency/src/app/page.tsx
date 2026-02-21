import Image from 'next/image';
import Link from 'next/link';
import { djs } from '@/data/djs';

const services = [
  { 
    title: "Booking Management", 
    desc: "Strategic career development and placement on global mainstages and clubs.",
    image: "/images/management.png"
  },
  { 
    title: "Tour Management", 
    desc: "Full logistics, travel coordination, and technical rider fulfillment worldwide.",
    image: "/images/touring.jpg"
  },
  { 
    title: "Content Management", 
    desc: "Visual identity, social media scaling, and professional media production.",
    image: "/images/media.JPG"
  }
];

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-7xl font-black tracking-tighter mb-8 text-white">Chris Management</h1>
        <p className="text-2xl text-zinc-400 max-w-3xl leading-snug">
          A premier talent agency representing elite electronic music artists. 
          We bridge the gap between world-class DJs and global festival stages.
        </p>
      </section>

      {/* Services Section mit Bildern */}
      <section id="services" className="py-24 px-6 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.4em] text-zinc-600 mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service) => (
              <div key={service.title} className="group">
                <div className="relative h-64 w-full mb-6 overflow-hidden bg-zinc-900 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
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
     <section id="contact" className="py-32 px-6 bg-white text-black">
  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-6xl font-black uppercase tracking-tighter mb-4">Work with us</h2>
      <p className="text-lg text-zinc-500 uppercase tracking-widest">Inquiries & Bookings</p>
    </div>

    <form 
      action="https://formspree.io/f/mqedybbk" 
      method="POST" 
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-2">
          <label className="text-xs uppercase font-bold tracking-widest text-zinc-400">Your Name</label>
          <input 
            type="text" 
            name="name" 
            required 
            className="w-full border-b-2 border-zinc-200 py-4 outline-none focus:border-black transition-colors bg-transparent"
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-xs uppercase font-bold tracking-widest text-zinc-400">Your Email</label>
          <input 
            type="email" 
            name="email" 
            required 
            className="w-full border-b-2 border-zinc-200 py-4 outline-none focus:border-black transition-colors bg-transparent"
            placeholder="email@example.com"
          />
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-xs uppercase font-bold tracking-widest text-zinc-400">Message</label>
        <textarea 
          name="message" 
          rows={5} 
          required 
          className="w-full border-b-2 border-zinc-200 py-4 outline-none focus:border-black transition-colors bg-transparent resize-none"
          placeholder="Tell us about your event..."
        ></textarea>
      </div>

      <div className="pt-8">
        <button 
          type="submit" 
          className="group relative flex items-center justify-center w-full md:w-auto bg-black text-white px-12 py-5 font-bold tracking-[0.2em] uppercase hover:bg-zinc-800 transition-all duration-300"
        >
          Send Inquiry
          <span className="ml-4 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
        </button>
      </div>
    </form>
  </div>
</section>
    </main>
  );
}