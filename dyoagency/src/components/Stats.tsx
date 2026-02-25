'use client';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        (ref.current as HTMLElement).textContent = Math.floor(latest).toString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { label: "Active Roster", value: 5, suffix: "" },
  { label: "Annual Shows", value: 250, suffix: "+" },
  { label: "Countries Reached", value: 25, suffix: "+" },
  { label: "Years Experience", value: 10, suffix: "" }
];

export default function Stats() {
  return (
    <section className="py-24 px-6 bg-black border-y border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="flex flex-col border-l border-zinc-800 pl-6"
            >
              <span className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mt-2 font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}