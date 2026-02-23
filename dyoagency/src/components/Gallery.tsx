'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { milestones } from '@/data/milestones';

function ParallaxImage({ item }: { item: any }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="group relative aspect-[3/4] overflow-hidden bg-zinc-900">
      <motion.div style={{ y, height: '120%', top: '-10%', position: 'absolute', width: '100%' }}>
        <Image src={item.image} alt={item.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
      </motion.div>
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 z-10">
        <p className="text-white font-bold uppercase tracking-tighter text-xl">{item.title}</p>
        <p className="text-zinc-400 text-xs uppercase tracking-widest mt-2">{item.location}</p>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-400 mb-12 px-2">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {milestones.map((item, index) => <ParallaxImage key={index} item={item} />)}
        </div>
      </div>
    </section>
  );
}