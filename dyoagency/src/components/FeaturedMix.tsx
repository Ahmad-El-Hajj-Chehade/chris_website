'use client';
import { motion } from 'framer-motion';

export default function FeaturedMix() {
  return (
    <section className="py-24 px-6 bg-black border-b border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-600 mb-12">Artist Spotlight Mix</h2>
        <div className="bg-zinc-950 p-1 border border-zinc-800 rounded-sm overflow-hidden shadow-2xl">
          <iframe 
            width="100%" 
            height="166" 
            scrolling="no" 
            frameBorder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/123456789&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
            className="grayscale opacity-80 hover:opacity-100 transition-opacity"
          ></iframe>
        </div>
      </div>
    </section>
  );
}