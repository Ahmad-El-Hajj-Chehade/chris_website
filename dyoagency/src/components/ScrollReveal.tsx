'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up';
}

export default function ScrollReveal({ children, direction = 'up' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check ob Mobilgerät
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Dezentere Werte für Mobile
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], isMobile ? [0.98, 1, 1, 0.98] : [0.9, 1, 1, 0.9]);
  
  // Distanz der Seitwärtsbewegung: 100px für Desktop, nur 20px für Mobile
  const moveDistance = isMobile ? 20 : 100;
  const xOffset = direction === 'left' ? -moveDistance : direction === 'right' ? moveDistance : 0;
  const x = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [xOffset, 0, 0, xOffset]);

  // Vertikale Bewegung nur wenn direction "up" ist
  const yOffset = direction === 'up' ? (isMobile ? 20 : 50) : 0;
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [yOffset, 0, 0, yOffset]);

  return (
    <motion.div
      ref={ref}
      style={{ 
        opacity, 
        scale,
        x,
        y,
        willChange: "transform, opacity"
      }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}