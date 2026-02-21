'use client';
import { motion } from 'framer-motion';

const stats = [
  { label: "Active Roster", value: "12" },
  { label: "Annual Shows", value: "250+" },
  { label: "Countries Reached", value: "34" },
  { label: "Years Experience", value: "08" }
];

export default function Stats() {
  return (
    <section className="py-24 px-6 bg-black border-b border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col border-l border-zinc-800 pl-6"
            >
              <span className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mt-2">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}