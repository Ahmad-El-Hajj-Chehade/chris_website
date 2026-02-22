'use client';
import { motion } from 'framer-motion';

export default function Ticker() {
  const content = " +++ CHRIS MANAGEMENT — GLOBAL BOOKINGS 2026 NOW OPEN +++ Simon Miles @ Kaufleuten 27.02 +++ Dynoro  @ Energy Star Night +++ Ilona Maras @ Vegas Club Luzern";

  return (
    <div className="bg-white text-black py-3 overflow-hidden whitespace-nowrap border-y border-black z-10 relative">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex space-x-8 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]"
      >
        <span className="pr-8">{content}</span>
        <span className="pr-8">{content}</span>
      </motion.div>
    </div>
  );
}