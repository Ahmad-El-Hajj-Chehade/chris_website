export default function Impressum() {
  return (
    <main className="bg-white text-black min-h-screen pt-40 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-16">Impressum</h1>
        
        <div className="space-y-12 text-sm leading-relaxed tracking-wide">
          
          <section>
            <h2 className="text-xs uppercase font-bold text-zinc-400 mb-4 tracking-[0.2em]">Contact Address</h2>
            <p className="font-bold">CHRIS MANAGEMENT</p>
            <p>Bern, Switzerland</p>
            <p className="mt-2">
              Email: <a href="mailto:info@chris.management" className="underline">info@chris.management</a>
            </p>
            <p>Web: <a href="https://chris.management" className="underline">www.chris.management</a></p>
          </section>

          <section>
            <h2 className="text-xs uppercase font-bold text-zinc-400 mb-4 tracking-[0.2em]">Authorized Representative</h2>
            <p>Christian Lüdi</p>
            <p>Owner / Founder</p>
          </section>

          <section>
            <h2 className="text-xs uppercase font-bold text-zinc-400 mb-4 tracking-[0.2em]">Disclaimer</h2>
            <p>
              The author assumes no liability for the correctness, accuracy, timeliness, reliability, and completeness of the information. 
              Liability claims against the author for material or immaterial damage resulting from access to or use/non-use of the published information, 
              misuse of the connection, or technical faults are excluded.
            </p>
            <p className="mt-4">
              All offers are non-binding. The author expressly reserves the right to change, supplement, or delete parts of the pages or the entire offer 
              without special notice or to stop publication temporarily or permanently.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase font-bold text-zinc-400 mb-4 tracking-[0.2em]">Disclaimer for Links</h2>
            <p>
              References and links to third-party websites lie outside our area of responsibility. Any responsibility for such websites is rejected. 
              Access to and use of such websites is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase font-bold text-zinc-400 mb-4 tracking-[0.2em]">Copyrights</h2>
            <p>
              The copyright and all other rights to content, images, photos, or other files on this website belong exclusively to 
              <strong> CHRIS MANAGEMENT </strong> or the specifically named rights holders (the artists). 
              The written consent of the copyright holder must be obtained in advance for the reproduction of any elements.
            </p>
          </section>

          <section className="pt-8 border-t border-zinc-100">
            <p className="text-zinc-400 italic">
              Source: Swiss Impressum laws. Effective as of February 2026.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}