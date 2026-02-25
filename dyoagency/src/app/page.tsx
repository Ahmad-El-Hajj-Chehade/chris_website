import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker'; 
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import Stats from '@/components/Stats';

import { djs } from '@/data/djs';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const tickerText = "Represented at Energy Star Night, Streetparade, Kaufleuten Zürich, Openair Gampel, Hollywood Pattaya, Worldhouse Pattaya, Baccarat Bangkok";

  return (
    <main className="bg-black text-white min-h-screen">
      
      {/* Hero Section nimmt den vollen Viewport ein */}
      <Hero />

      {/* Ticker als Social Proof */}
      <Ticker text={tickerText} />
      
      {/* Services mit Reveal-Effekt */}
      <ScrollReveal direction="up">
        <Services />
      </ScrollReveal>

      {/* Roster: Abstand nach unten auf 0 gesetzt für nahtlosen Übergang zur Gallery */}
      <section id="artists" className="pt-24 pb-36 px-6 max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <h2 className="text-sm uppercase tracking-[0.4em] text-zinc-400 mb-12">Roster</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {djs.map((dj, index) => (
            <ScrollReveal key={dj.id} direction={index % 2 === 0 ? 'left' : 'right'}>
              {dj.id === 'future-artist' ? (
                /* Spezialkarte: Talent-Akquise */
                <a href="#contact" className="group block">
                  <div className="relative aspect-[4/5] bg-zinc-950 border border-zinc-900 flex flex-col items-center justify-center p-8 text-center group hover:border-zinc-500 transition-colors duration-500">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-black uppercase tracking-tighter text-white leading-tight">
                        This could <br /> be you
                      </h3>
                      <div className="w-8 h-[1px] bg-zinc-700 mx-auto group-hover:w-12 group-hover:bg-white transition-all duration-500" />
                      <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 group-hover:text-zinc-300">
                        Join our roster
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-2xl font-bold text-zinc-300 group-hover:text-white transition-colors">Apply Now</h3>
                    <p className="text-zinc-500 uppercase text-xs tracking-widest mt-1">{dj.shortBio}</p>
                  </div>
                </a>
              ) : (
                /* Standardkarte: Artists */
                <Link href={`/artists/${dj.id}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 border border-zinc-900 group-hover:border-zinc-700 transition-colors duration-500">
                    <Image 
                      src={dj.image} 
                      alt={dj.name} 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-[1.2s] ease-[0.22, 1, 0.36, 1]" 
                      sizes="(max-width: 768px) 100vw, 33vw" 
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="mt-6 flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-bold uppercase tracking-tighter">{dj.name}</h3>
                      <p className="text-zinc-500 uppercase text-[10px] tracking-widest mt-1">{dj.shortBio}</p>
                    </div>
                    <span className="text-white text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                      
                    </span>
                  </div>
                </Link>
              )}
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Gallery: Die Abstände sind nun direkt in der Gallery.tsx (py-12) gesteuert */}
      <Gallery />

      <ScrollReveal direction="up">
        <Stats />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <Contact />
      </ScrollReveal>

      <Footer />
    </main>
  );
}