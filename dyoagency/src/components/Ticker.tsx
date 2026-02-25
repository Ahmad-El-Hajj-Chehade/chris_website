'use client';
import { motion } from 'framer-motion';

// Definieren des Typs für die Props
interface TickerProps {
  text: string;
}

export default function Ticker({ text }: TickerProps) {
  return (
    <div className="bg-white py-4 overflow-hidden whitespace-nowrap border-y border-white">
      <motion.div
        className="flex"
        animate={{ x: [0, -1000] }} // Passt sich der Textlänge an
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Geschwindigkeit des Tickers
        }}
      >
        {/* Wir wiederholen den Text mehrmals, um eine lückenlose Schleife zu erzeugen */}
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-black text-sm font-bold uppercase tracking-[0.4em] px-8">
            {text} •
          </span>
        ))}
      </motion.div>
    </div>
  );
}