import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker'; // Neu
import Services from '@/components/Services';
import FeaturedMix from '@/components/FeaturedMix'; // Neu
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import { djs } from '@/data/djs';
import Link from 'next/link';
import Image from 'next/image';
import Stats from '@/components/Stats';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
     
      <Hero />
      <Ticker />
      
      <section id="artists" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.4em] text-zinc-600 mb-12">Roster</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {djs.map((dj) => (
            <Link key={dj.id} href={`/artists/${dj.id}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 grayscale hover:grayscale-0 transition-all duration-700">
                <Image src={dj.image} alt={dj.name} fill className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold">{dj.name}</h3>
                <p className="text-zinc-500 uppercase text-xs tracking-widest mt-1">{dj.shortBio}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      
      <Services />
      <Gallery />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}