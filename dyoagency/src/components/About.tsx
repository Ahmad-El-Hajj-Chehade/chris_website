'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 bg-black text-white border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Linke Spalte: Kompletter Text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10 md:space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-zinc-500">About Chris Management</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
                The Fusion of Passion and Professionalism
              </h3>
              <div className="space-y-5 sm:space-y-6 text-zinc-400 leading-relaxed text-base md:text-lg">
                <p>
                  Since 2025, Chris Management has stood for much more than classic artist management. With a clear vision, genuine passion, and a strong international network, we connect artists worldwide with promoters who value quality, reliability, and exceptional live performances.
                </p>
                <p>
                  In addition to artist management, touring, and content production, we support artists as virtual assistants and accompany them to over 250 shows in more than 25 countries annually. With over a decade of industry experience, we create professional structures that enable successful performances and lasting live experiences.
                </p>
                <p>
                  Friendship, trust, and shared values form the foundation of our work. Through structured planning and high quality standards, we transform creative ideas into successful projects and build authentic connections between the stage and the audience.
                </p>
              </div>
            </div>

            {/* CEO Profil Text integriert in die linke Spalte */}
            <div className="pt-8 border-t border-zinc-900 space-y-4">
              <h4 className="text-xl sm:text-2xl font-bold uppercase tracking-tighter">Christian Lüdi</h4>
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold"> Founder</p>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Born in Switzerland, I live my passion for music and entrepreneurship with curiosity and drive.
                </p>
                <p>
                  With over ten years of experience in the music and media industry, I founded Chris Management in 2025 to bridge the gap between creativity and strategy. Today, I unite artists, brands, and promoters with heart, precision, and an eye for the extraordinary.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Rechte Spalte: Nur das Bild */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-900 border border-zinc-800"
          >
           
            <Image 
              src="/images/chris.jpg" 
              alt="Christian Lüdi - Founder"
              priority
              
              fill
              className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
    sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}