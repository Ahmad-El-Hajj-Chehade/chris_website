'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  { title: "Booking Management", desc: "Strategic career development and placement on global mainstages and clubs.", image: "/images/management.png" },
  { title: "Tour Management", desc: "Full logistics, travel coordination, and technical rider fulfillment worldwide.", image: "/images/touring.JPG" },
  { title: "Content Management", desc: "Visual identity, social media scaling, and professional media production.", image: "/images/media.jpg" }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-zinc-950 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.4em] text-zinc-400 mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
              <div className="relative h-64 w-full mb-6 overflow-hidden bg-zinc-900 grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}