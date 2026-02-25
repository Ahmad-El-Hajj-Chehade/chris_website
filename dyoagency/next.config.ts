import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Statischer Export für METANET Hosting */
  output: 'export',
  
  /* Notwendig, da der Standard-Bildoptimierer von Next.js einen Server benötigt */
  images: {
    unoptimized: true,
  },
  
  /* Deine bestehenden Optionen */
  reactCompiler: true,
};

export default nextConfig;