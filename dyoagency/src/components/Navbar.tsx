'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Artists', href: '/#artists' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        
        {/* Logo */}
        <Link 
          href="/" 
          onClick={() => setIsOpen(false)}
          className="text-lg font-black uppercase tracking-tighter text-white z-[110]"
        >
          Chris <span className="text-zinc-600">Management</span>
        </Link>

        {/* Burger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-[110] flex flex-col justify-center items-end w-8 h-8 outline-none"
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white mb-1.5 transition-colors" 
          />
          <motion.span 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-4 h-0.5 bg-white mb-1.5 transition-colors" 
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white transition-colors" 
          />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-[12px] font-bold uppercase tracking-[0.3em] text-zinc-400">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-xl z-[100] flex flex-col pt-32 px-6"
            >
              {/* Listen-Container mit eigenem Hintergrund für bessere Lesbarkeit */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-zinc-950/80 border border-zinc-900 p-8 rounded-2xl shadow-2xl space-y-6"
              >
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-2xl font-black uppercase tracking-tighter text-white border-b border-zinc-900/50 pb-4 last:border-0 last:pb-0"
                  >
                    {link.name}
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}