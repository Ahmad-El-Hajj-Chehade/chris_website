'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { milestones } from '@/data/milestones';

function ParallaxImage({ item, index }: { item: any; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  
  // Unterschiedliche Parallax-Geschwindigkeiten für mehr Dynamik
  const speed = index % 2 === 0 ? ["-5%", "5%"] : ["-15%", "15%"];
  const y = useTransform(scrollYProgress, [0, 1], speed);

  // Bestimmt das Format basierend auf dem Index oder einem Feld im Datensatz
  // Jedes 3. Bild wird ein Querformat, die anderen Hochformat
  const isWide = index % 4 === 0;

  return (
    <div ref={ref} className={`group relative overflow-hidden bg-zinc-900 mb-4 ${isWide ? 'aspect-video' : 'aspect-[3/4]'}`}>
      <motion.div style={{ y, height: '130%', top: '-15%', position: 'absolute', width: '100%' }}>
        <Image 
          src={item.image} 
          alt={item.title || 'Gallery Image'} 
          fill 
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
          sizes="(max-width: 768px) 100vw, 33vw" 
        />
      </motion.div>
      
      {/* Overlay Text erst beim Hover sichtbar für einen cleaner Look */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
        <p className="text-white font-bold uppercase tracking-tighter text-lg leading-none">{item.title}</p>
        <p className="text-zinc-300 text-[10px] uppercase tracking-widest mt-2">{item.location}</p>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.4em] text-zinc-500 mb-16 px-2 text-center">Visual Records</h2>
        
        {/* CSS Columns erzeugen den Masonry Effekt am einfachsten */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {milestones.map((item, index) => (
            <div key={index} className="break-inside-avoid">
              <ParallaxImage item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}