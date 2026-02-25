'use client';

import { motion } from "framer-motion";

export default function Hero() {
  const title = "Chris Management";
  const subtitle = "International Artist Management";

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Hintergrundvideo */}
      <video
        autoPlay
        loop
        muted
        playsInline
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
            className="text-xs md:text-sm uppercase tracking-[0.6em] text-zinc-400"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>

      {/* Scroll Line */}
      <motion.div 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-white to-transparent origin-top"
      />
    </section>
  );
}

