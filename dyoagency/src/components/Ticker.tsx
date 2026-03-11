'use client';
import { motion } from 'framer-motion';

interface TickerProps {
  text: string;
}

export default function Ticker({ text }: TickerProps) {
  // Wir hängen einen Trenner direkt an den Text an
  const tickerContent = `${text} • `;

  return (
    <div className="bg-white py-4 overflow-hidden whitespace-nowrap border-y border-white flex">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }} // Nutze Prozent für lückenlosen Übergang
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 180, // Geschwindigkeit bei Bedarf anpassen
        }}
      >
        {/* Zwei Kopien genügen oft für den -50% Trick, 4 zur Sicherheit bei kurzem Text */}
        {[...Array(6)].map((_, i) => (
          <span key={i} className="text-black text-sm font-bold uppercase tracking-[0.4em] inline-block">
            {tickerContent}
          </span>
        ))}
      </motion.div>
    </div>
  );
}