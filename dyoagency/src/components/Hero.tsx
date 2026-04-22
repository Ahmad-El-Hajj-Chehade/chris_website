'use client';

import { motion } from "framer-motion";

export default function Hero() {
  const title = "Chris Management";
  const subtitle = "International Artist Management";

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Hintergrundvideo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover grayscale opacity-40"
      >
        <source src="/hero_video.mp4" type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-[120px] font-black uppercase tracking-tighter text-white leading-none"
          >
            {title}
          </motion.h1>
        </div>
        
        <div className="overflow-hidden mt-4">
          <motion.p 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-xs md:text-sm uppercase tracking-[0.6em] text-zinc-400 text-center"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>

      {/* Umkreister Pfeil Button */}
      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 group"
      >
        <div className="relative w-14 h-14 flex items-center justify-center border border-white/20 rounded-full group-hover:border-white transition-colors duration-500">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-white animate-bounce"
          >
            <path d="M7 13l5 5 5-5M12 6v12" />
          </svg>
        </div>
      </motion.button>
    </section>
  );
}