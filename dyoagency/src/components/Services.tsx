'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useCallback } from 'react';

const services = [
  { title: "Artist Management", value: "Management", desc: "Strategic career development and placement on global mainstages and clubs, label and press negotiation.", image: "/images/management.jpg" },
  { title: "Touring", value: "Touring", desc: "Full logistics, travel coordination, and technical rider fulfillment worldwide.", image: "/images/touring.jpg" },
  { title: "Content Production", value: "Content", desc: "Visual identity, social media scaling, and professional media production.", image: "/images/media.jpg"},
];

export default function Services() {
  const handleServiceClick = useCallback((value: string) => {
    // Sende ein Custom Event mit dem gewählten Thema
    const event = new CustomEvent('setContactSubject', { detail: value });
    window.dispatchEvent(event);

    // Scroll zum Formular
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section id="services" className="py-20 md:py-24 px-4 sm:px-6 bg-zinc-950 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-zinc-400 mb-10 md:mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, i) => (
            <motion.div 
              key={service.title} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }} 
              className="group cursor-pointer"
              onClick={() => handleServiceClick(service.value)}
            >
              <div className="relative h-56 sm:h-64 w-full mb-5 sm:mb-6 overflow-hidden bg-zinc-900 grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority={i < 2}
                  loading={i < 2 ? undefined : 'lazy'}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}