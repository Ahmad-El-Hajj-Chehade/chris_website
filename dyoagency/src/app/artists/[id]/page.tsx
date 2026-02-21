import { djs } from '@/data/djs';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Wir machen die Funktion async, um params zu awaiten
export default async function ArtistPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const dj = djs.find((d) => d.id === id);

  if (!dj) {
    notFound();
  }

  return (
    <main className="bg-black text-white min-h-screen pt-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div className="relative aspect-[4/5] bg-zinc-900">
          <Image 
            src={dj.image} 
            alt={dj.name} 
            fill 
            className="object-cover" 
            priority
          />
        </div>
        <div>
          <h1 className="text-6xl font-black mb-6 uppercase tracking-tighter">{dj.name}</h1>
          <p className="text-xl text-zinc-400 leading-relaxed mb-12">
            {dj.fullBio}
          </p>
          <div className="border border-zinc-800 p-8 inline-block">
            <h3 className="text-sm uppercase tracking-widest text-zinc-500 mb-4">Downloads</h3>
            <a 
              href={dj.presskit} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 font-bold hover:bg-zinc-200 transition"
            >
              OPEN PRESSKIT
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}