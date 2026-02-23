import SpotifyPlayer from '@/components/SpotifyPlayer';
import { djs } from '@/data/djs';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const dj = djs.find((d) => d.id === id);

  if (!dj) return { title: 'Artist | Chris Management' };

  const isAcoustic = dj.id === 'regina-brury';
  const genreKeywords = isAcoustic 
    ? 'Acoustic Pop Singer, Singer-Songwriter, Wedding Singer Switzerland, Corporate Event Singer, Live Music Zurich' 
    : 'Techno DJ, Melodic House Producer, Electronic Music, Club Booking, Festival Lineup, International DJ';

  return {
    title: `${dj.name} | Official Booking, Tech Rider & Management`,
    description: `Book ${dj.name}. ${dj.shortBio}. Exclusive representation by Chris Management. Available for international bookings, festivals, and high-end events. Download Tech Rider and Presskit.`,
    keywords: `${dj.name}, ${dj.name} Booking, ${dj.name} Management, ${dj.name} Official, ${genreKeywords}, Artist Management Zurich, Switzerland Booking Agency`,
    openGraph: {
      title: `${dj.name} - Chris Management`,
      description: dj.shortBio,
      images: [{ url: dj.image ?? '/og-image.jpg' }],
      type: 'website',
    },
  };
}

export default async function ArtistPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const dj = djs.find((d) => d.id === id);

  if (!dj) notFound();

  return (
    <main className="bg-black text-white min-h-screen pt-40 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* LEFT COLUMN: Image & Social Links */}
        <div className="flex flex-col gap-6">
          <div className="relative aspect-[4/5] bg-zinc-900 overflow-hidden">
            <Image 
              src={dj.image ?? '/placeholder-image.jpg'} 
              alt={`${dj.name} - Official Artist Photo`} 
              fill 
              className="object-cover" 
              priority 
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Social & Website Links directly under image */}
          <div className="flex flex-wrap gap-4">
            <a 
              href={dj.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-3 border border-zinc-800 hover:bg-white hover:text-black transition-all duration-300 uppercase text-[10px] font-bold tracking-[0.2em]"
            >
              Instagram
            </a>
            {dj.id !== 'ilona-maras' && dj.website && (
              <a 
                href={dj.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-3 border border-zinc-800 hover:bg-white hover:text-black transition-all duration-300 uppercase text-[10px] font-bold tracking-[0.2em]"
              >
                Website
              </a>
            )}
          </div>
        </div>
        
        {/* RIGHT COLUMN: Artist Info */}
        <div className="flex flex-col justify-start">
          <h1 className="text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
            {dj.name}
          </h1>
          
          <p className="text-xl text-zinc-400 leading-relaxed mb-10 whitespace-pre-line max-w-xl">
            {dj.fullBio}
          </p>

          <div className="player-area mb-12">
            {dj.id !== 'regina-brury' && dj.spotifyId && (
              <SpotifyPlayer uri={dj.spotifyId ?? ''} />
            )}
          </div>

          {/* Booking & Presskit Box */}
          <div className="border border-zinc-900 p-10 bg-zinc-950/50 inline-block w-full mt-auto">
            <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-6 font-bold">
              {dj.id !== 'mathilda-music' && dj.id !== 'voster-gallardo' && dj.id !== 'dynoro' 
                ? "Booking & Management" 
                : "Booking"}
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
                  href="mailto:booking@chris.management" 
                  className="text-white hover:text-zinc-400 transition-colors font-medium"
                >
                  booking@chris.management
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20" />
    </main>
  );
}