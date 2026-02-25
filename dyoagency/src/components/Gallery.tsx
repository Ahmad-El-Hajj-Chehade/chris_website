'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const staticImages = [
  { image: "/images/gallery_4.jpg" },
  { image: "/images/gallery_2.jpg" },
  { image: "/images/gallery_3.jpg" },
  { image: "/images/gallery_5.jpg" },
  { image: "/images/gallery_6.jpg" },
  { image: "/images/gallery_1.jpg" },
];

const generatedImages = Array.from({ length: 32 }, (_, i) => {
  const num = i + 1;
  const fileName = num < 10 ? `0${num}` : `${num}`;
  return { image: `/images/${fileName}.jpg` };
});

const allImages = [...staticImages, ...generatedImages];

export default function Gallery() {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleImages = isExpanded ? allImages : allImages.slice(0, 5);

  return (
    <section id="gallery" className="py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-sm uppercase font-bold tracking-[0.4em] text-zinc-500 mb-12">
        Gallery
      </h2>
      
      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          <AnimatePresence>
            {visibleImages.map((item, i) => {
              // Logik: Jedes 4. Bild nimmt 2 Spalten ein (Querformat-Effekt)
              const isWide = i % 5 === 0;
              
              return (
                <motion.div
                  key={item.image}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`relative overflow-hidden bg-zinc-900 border border-zinc-900 
                    ${isWide ? 'col-span-2' : 'col-span-1'}`}
                >
                  <Image
                    src={item.image}
                    alt="Artist Moment"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
                    sizes={isWide ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {!isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-black via-black/95 to-transparent flex items-end justify-center pb-8 pointer-events-none">
            <button 
              onClick={() => setIsExpanded(true)}
              className="group pointer-events-auto flex flex-col items-center gap-3 text-white"
            >
              <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-zinc-400 group-hover:text-white transition-colors">
                View All Moments
              </span>
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-800 group-hover:border-white transition-colors duration-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}