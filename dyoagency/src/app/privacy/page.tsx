'use client';

export default function Privacy() {
  return (
    <main className="bg-black text-white min-h-screen pt-40 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-20">Legal & Privacy</h1>
        
        <div className="grid md:grid-cols-2 gap-20">
          
          {/* Linke Spalte: Impressum */}
          <section className="space-y-12">
            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-6 tracking-[0.3em]">Imprint / Impressum</h2>
              <div className="space-y-4 text-sm tracking-wide">
                <p>Chris Management</p>
                <p>Bern, Switzerland</p>
                <p className="text-zinc-400">UID: CHE-427.916.744</p>
                <p>Contact: info@chris.management</p>
              </div>
            </div>

            <div className="pt-12 border-t border-zinc-900">
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-6 tracking-[0.3em]">Disclaimer</h2>
              <p className="text-xs text-zinc-400 leading-relaxed">
                The content of this website is created with the utmost care. However, Chris Management assumes no liability for the accuracy, completeness, or timeliness of the content provided.
              </p>
            </div>
          </section>

          {/* Rechte Spalte: Privacy Policy */}
          <section className="space-y-12 text-sm leading-relaxed tracking-wide">
            
            <section>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">1. Data Protection / Datenschutz</h2>
              <p className="mb-4">
                Based on Article 13 of the Swiss Federal Constitution, every person is entitled to protection of their privacy and misuse of personal data. We comply with these provisions.
              </p>
              <p className="text-zinc-500">
                Gestützt auf Artikel 13 der Schweizerischen Bundesverfassung hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Wir halten diese Bestimmungen ein.
              </p>
            </section>

            <section>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">2. Contact Form / Kontaktformular</h2>
              <p className="mb-4">
                We collect your Name, Email, and Message to process inquiries. We use <strong>Formspree</strong> for secure submission.
              </p>
              <p className="text-zinc-500">
                Wir erheben Name, E-Mail und Nachricht zur Bearbeitung von Anfragen. Für den sicheren Versand nutzen wir <strong>Formspree</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">3. External Services / Externe Dienste</h2>
              <p className="mb-4">
                We embed <strong>Spotify</strong> players. Spotify may collect data if you are logged into their service. We use SSL/TLS encryption for data security.
              </p>
              <p className="text-zinc-500">
                Wir binden <strong>Spotify</strong>-Player ein. Spotify kann Daten erheben, wenn Sie dort eingeloggt sind. Zur Sicherheit nutzen wir eine SSL/TLS-Verschlüsselung.
              </p>
            </section>

            <section className="pt-8 border-t border-zinc-900">
              <p className="text-zinc-600 text-xs italic">
                Last updated: February 2026.
              </p>
            </section>

          </section>
        </div>
      </div>
    </main>
  );
}