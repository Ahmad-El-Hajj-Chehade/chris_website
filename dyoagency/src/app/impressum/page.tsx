'use client';

export default function Impressum() {
  return (
    <main className="bg-black text-white min-h-screen pt-40 pb-24 px-6">
      <div className="max-w-4xl mx-auto space-y-24">

        {/* German Section */}
        <section>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">Impressum</h1>
          <p className="text-zinc-400 text-sm mb-12 tracking-wide">Angaben gemäss Schweizer Recht</p>

          <div className="space-y-10 text-sm leading-relaxed tracking-wide">

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">Verantwortliche Person und Betreiber der Website</h2>
              <p className="font-bold">Chris Management Inh. Christian Lüdi</p>
              <p>Christian Lüdi</p>
              <p>Hauptstrasse 149</p>
              <p>2552 Orpund</p>
              <p>Schweiz</p>
              <p className="mt-4">
                E-Mail:{' '}
                <a href="mailto:info@chris.management" className="underline hover:text-zinc-400 transition-colors">
                  info@chris.management
                </a>
              </p>
              <p className="mt-2">
                Website:{' '}
                <a href="https://chris.management" className="underline hover:text-zinc-400 transition-colors">
                  Chris Management
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">Kontaktformular</h2>
              <p className="mb-3">
                Das Kontaktformular auf dieser Website wird über den externen Dienstleister Formspree betrieben.
              </p>
              <p className="mb-3">
                Bei der Nutzung des Formulars werden die eingegebenen Daten (z. B. Name, E-Mail-Adresse und Nachricht) zur Bearbeitung der Anfrage an Formspree übertragen und verarbeitet.
              </p>
              <p>
                Es gelten zusätzlich die Datenschutzbestimmungen von Formspree:{' '}
                <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-400 transition-colors">
                  Formspree Datenschutzerklärung
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">Haftungsausschluss</h2>
              <p className="mb-3">
                Der Betreiber übernimmt keine Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen auf dieser Website.
              </p>
              <p className="mb-3">
                Haftungsansprüche gegen den Betreiber wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
              </p>
              <p>
                Alle Angebote sind unverbindlich. Der Betreiber behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne besondere Ankündigung zu verändern, zu ergänzen oder zu löschen.
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">Haftung für Links</h2>
              <p>
                Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des jeweiligen Nutzers.
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">Urheberrechte</h2>
              <p className="mb-3">
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website gehören ausschliesslich Chris Management Inh. Christian Lüdi oder den speziell genannten Rechteinhabern.
              </p>
              <p>
                Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">Datenschutz</h2>
              <p>
                Informationen zur Verarbeitung personenbezogener Daten findest du in der Datenschutzerklärung dieser Website.
              </p>
            </div>

          </div>
        </section>

        <div className="border-t border-zinc-800" />

        {/* English Section */}
        <section>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">Legal Notice</h1>
          <p className="text-zinc-400 text-sm mb-12 tracking-wide">Information according to Swiss law</p>

          <div className="space-y-10 text-sm leading-relaxed tracking-wide">

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">Website Owner and Responsible Person</h2>
              <p className="font-bold">Chris Management Inh. Christian Lüdi</p>
              <p>Christian Lüdi</p>
              <p>Hauptstrasse 149</p>
              <p>2552 Orpund</p>
              <p>Switzerland</p>
              <p className="mt-4">
                E-Mail:{' '}
                <a href="mailto:info@chris.management" className="underline hover:text-zinc-400 transition-colors">
                  info@chris.management
                </a>
              </p>
              <p className="mt-2">
                Website:{' '}
                <a href="https://chris.management" className="underline hover:text-zinc-400 transition-colors">
                  Chris Management
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">Contact Form</h2>
              <p className="mb-3">
                The contact form on this website is operated via the external service provider Formspree.
              </p>
              <p className="mb-3">
                When using the contact form, the entered data (e.g. name, e-mail address and message) is transmitted to and processed by Formspree for the purpose of handling the inquiry.
              </p>
              <p>
                Formspree&apos;s privacy policy also applies:{' '}
                <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-400 transition-colors">
                  Formspree Privacy Policy
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">Disclaimer</h2>
              <p className="mb-3">
                The author assumes no liability for the correctness, accuracy, timeliness, reliability, or completeness of the information provided on this website.
              </p>
              <p className="mb-3">
                Liability claims against the author for material or immaterial damages resulting from access to, use or non-use of the published information, misuse of the connection, or technical faults are excluded.
              </p>
              <p>
                All offers are non-binding. The author expressly reserves the right to change, supplement, delete, or temporarily discontinue parts of the pages or the entire website without prior notice.
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">Liability for Links</h2>
              <p>
                References and links to third-party websites are outside our area of responsibility. Any responsibility for such websites is rejected. Access to and use of such websites are at the user&apos;s own risk.
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">Copyright</h2>
              <p className="mb-3">
                The copyright and all other rights to content, images, photos, or other files on this website belong exclusively to Chris Management Inh. Christian Lüdi or the specifically named rights holders.
              </p>
              <p>
                Any reproduction of elements requires prior written consent from the copyright holders.
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">Privacy</h2>
              <p>
                Information regarding the processing of personal data can be found in the privacy policy of this website.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
