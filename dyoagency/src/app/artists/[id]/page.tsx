import { djs } from '@/data/djs'; import Image from 'next/image'; import { notFound } from 'next/navigation';

export default function ArtistPage({ params }: { params: { id: string } }) { const dj = djs.find(d => d.id === params.id);

if (!dj) notFound();

return ( <div className="bg-black text-white min-h-screen p-10"> <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10"> <div className="relative h-[60vh]"> <Image src={dj.image} alt={dj.name} fill className="object-cover" /> </div> <div> <h1 className="text-5xl font-bold mb-6">{dj.name}</h1> <p className="text-lg text-gray-300 mb-10 leading-relaxed">{dj.fullBio}</p> <div className="border border-zinc-700 p-6"> <h3 className="text-xl font-bold mb-4">Presskit</h3> <a href={dj.presskit} download className="inline-block bg-white text-black px-8 py-3 font-bold hover:bg-gray-200"> DOWNLOAD KIT (.ZIP) </a> </div> </div> </div> </div> ); }