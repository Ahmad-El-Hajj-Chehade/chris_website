'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6 }}
      >
        {/* text-4xl auf Mobile, text-8xl auf Desktop */}
        <h1 className="text-3xl sm:text-4xl md:text-8xl font-black tracking-tighter mb-6 text-white uppercase leading-[0.9] break-words">
          Chris<br />Management
        </h1>
        <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl leading-snug">
          A premier talent agency representing elite electronic music artists. 
          We bridge the gap between world-class DJs and global festival stages.
        </p>
      </motion.div>
    </section>
  );
}