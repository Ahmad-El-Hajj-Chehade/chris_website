import { djs } from '@/data/djs';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function ArtistPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const dj = djs.find((d) => d.id === id);

  if (!dj) notFound();

  return (
    <main className="bg-black text-white min-h-screen pt-40 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Artist Image */}
        <div className="relative aspect-[4/5] bg-zinc-900 overflow-hidden">
          <Image 
            src={dj.image} 
            alt={dj.name} 
            fill 
            className="object-cover" 
            priority 
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        
        {/* Artist Info */}
        <div className="flex flex-col justify-start">
          <h1 className="text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
            {dj.name}
          </h1>
          
          <p className="text-xl text-zinc-400 leading-relaxed mb-10 whitespace-pre-line max-w-xl">
            {dj.fullBio}
          </p>

          {/* Social & Website Links */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a 
              href={dj.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 border border-zinc-800 hover:bg-white hover:text-black transition-all duration-300 uppercase text-xs font-bold tracking-widest"
            >
              Instagram
            </a>
            <a 
              href={dj.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 border border-zinc-800 hover:bg-white hover:text-black transition-all duration-300 uppercase text-xs font-bold tracking-widest"
            >
              Official Website
            </a>
          </div>

          {/* Booking & Presskit Box */}
          <div className="border border-zinc-900 p-10 bg-zinc-950/50 inline-block w-full">
            <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-6 font-bold">
              Booking & Management
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <a 
                href={dj.presskit} 
                target="_blank" 
                className="bg-white text-black px-10 py-4 font-black hover:bg-zinc-200 transition-all uppercase tracking-tighter text-sm"
              >
                Download Presskit
              </a>
              
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-zinc-600 tracking-widest mb-1">Inquiry</span>
                <a 
                  href="mailto:booking@chrismanagement.com" 
                  className="text-white hover:text-zinc-400 transition-colors font-medium"
                >
                  booking@chrismanagement.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}