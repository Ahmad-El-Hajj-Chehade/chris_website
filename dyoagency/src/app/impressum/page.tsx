'use client';

export default function Impressum() {
  return (
    <main className="bg-black text-white min-h-screen pt-40 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-20">Imprint / Impressum</h1>
        
        <div className="grid md:grid-cols-2 gap-16 text-sm leading-relaxed tracking-wide">
          
          {/* Kontakt & Adresse */}
          <section className="space-y-8">
            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">Contact / Kontakt</h2>
              <p className="font-bold text-lg">Chris Management</p>
              <p>Bern, Switzerland</p>
              <p className="mt-2">UID: CHE-427.916.744</p>
              <p className="mt-4">
                Email: <a href="mailto:info@chris.management" className="underline hover:text-zinc-400 transition-colors">info@chris.management</a>
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">Representative / Vertretung</h2>
              <p>Christian Lüdi</p>
              <p className="text-zinc-500">Owner / Inhaber</p>
            </div>
          </section>

          {/* Rechtliche Hinweise */}
          <section className="space-y-12">
            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">Disclaimer / Haftung</h2>
              <p className="mb-4">
                Chris Management assumes no liability for the accuracy, reliability, and completeness of the information. Liability claims for material or immaterial damage are excluded.
              </p>
              <p className="text-zinc-500 text-xs">
                Die Chris Management übernimmt keine Gewähr für die Richtigkeit, Genauigkeit und Vollständigkeit der Informationen. Haftungsansprüche wegen Schäden materieller oder immaterieller Art werden ausgeschlossen.
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">Copyright / Urheberrecht</h2>
              <p className="mb-4">
                Copyright and all other rights to content, images, and files belong exclusively to Chris Management or the specifically named artists. Written consent is required for reproduction.
              </p>
              <p className="text-zinc-500 text-xs">
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern oder Dateien gehören ausschliesslich der Chris Management oder den genannten Künstlern. Für die Reproduktion ist eine schriftliche Zustimmung einzuholen.
              </p>
            </div>

            <div className="pt-8 border-t border-zinc-900">
              <p className="text-zinc-600 text-xs italic">
                Effective: February 2026.
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}