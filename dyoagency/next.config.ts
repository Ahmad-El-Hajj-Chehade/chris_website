import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Statischer Export für METANET Hosting */
  output: 'export',
  
  /* Notwendig, da der Standard-Bildoptimierer von Next.js einen Server benötigt */
  images: {
    unoptimized: true,
  },
  
  reactCompiler: true,
  
  /* Optimiert Bundle-Größe */
  experimental: {
    optimizePackageImports: ['framer-motion'],
  }
};

export default nextConfig;