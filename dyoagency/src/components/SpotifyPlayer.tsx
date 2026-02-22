'use client';

export default function SpotifyPlayer({ uri }: { uri: string }) {
  // uri kann eine Track-ID oder ein Artist-Link sein
  return (
    <section className="py-12 border-t border-zinc-900">
      <h3 className="text-xs uppercase tracking-[0.4em] text-zinc-600 mb-8">Latest Release</h3>
      <div className="rounded-xl overflow-hidden bg-zinc-900">
        <iframe
          src={`https://open.spotify.com/embed/track/${uri}?utm_source=generator&theme=0`}
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
        ></iframe>
      </div>
    </section>
  );
}