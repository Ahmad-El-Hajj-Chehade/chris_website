'use client';

export default function Privacy() {
  return (
    <main className="bg-black text-white min-h-screen pt-40 pb-24 px-6">
      <div className="max-w-4xl mx-auto space-y-24">

        {/* German Section */}
        <section>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">Datenschutzerklärung</h1>

          <div className="space-y-10 text-sm leading-relaxed tracking-wide">

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">1. Allgemeine Hinweise</h2>
              <p className="mb-3">
                Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir behandeln personenbezogene Daten vertraulich und entsprechend den geltenden Datenschutzgesetzen der Schweiz (revDSG) sowie – soweit anwendbar – der Datenschutz-Grundverordnung der Europäischen Union (DSGVO).
              </p>
              <p>
                Diese Datenschutzerklärung informiert darüber, welche Daten auf dieser Website erhoben und wie diese verwendet werden.
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">2. Verantwortliche Stelle</h2>
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
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">3. Hosting und technische Bereitstellung</h2>
              <p className="mb-3">
                Diese Website wird über die Infrastruktur der METANET AG betrieben.
              </p>
              <p className="mb-3">Beim Besuch dieser Website können automatisch technische Informationen erfasst werden, darunter:</p>
              <ul className="list-disc list-inside space-y-1 text-zinc-300 mb-3">
                <li>IP-Adresse</li>
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Referrer-URL</li>
              </ul>
              <p>
                Diese Daten dienen ausschliesslich der technischen Sicherheit, Stabilität und Optimierung der Website.
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">4. Erhebung und Verarbeitung personenbezogener Daten</h2>
              <p className="mb-3">
                Personenbezogene Daten werden nur erhoben, wenn Sie diese freiwillig an uns übermitteln – beispielsweise über das Kontaktformular.
              </p>
              <p className="mb-3">Dabei können insbesondere folgende Daten verarbeitet werden:</p>
              <ul className="list-disc list-inside space-y-1 text-zinc-300 mb-3">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer</li>
                <li>Inhalt Ihrer Nachricht</li>
                <li>technische Verbindungsdaten</li>
              </ul>
              <p>
                Die Verarbeitung erfolgt ausschliesslich zur Bearbeitung Ihrer Anfrage und zur Kommunikation mit Ihnen.
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">5. Kontaktformular (Formspree)</h2>
              <p className="mb-3">
                Für das Kontaktformular verwenden wir den Dienst Formspree Inc.
              </p>
              <p className="mb-3">
                Wenn Sie das Kontaktformular nutzen, werden die von Ihnen eingegebenen Daten an Formspree übermittelt und dort verarbeitet, um Ihre Anfrage technisch entgegenzunehmen und an uns weiterzuleiten.
              </p>
              <p className="mb-3">Dabei können folgende Daten verarbeitet werden:</p>
              <ul className="list-disc list-inside space-y-1 text-zinc-300 mb-3">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer</li>
                <li>Nachrichteninhalt</li>
                <li>IP-Adresse</li>
                <li>technische Metadaten</li>
              </ul>
              <p className="mb-3">
                Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses an einer sicheren und effizienten Kommunikation mit Websitebesuchern.
              </p>
              <p>
                Weitere Informationen finden Sie in der Datenschutzerklärung von Formspree:{' '}
                <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-400 transition-colors">
                  Formspree Privacy Policy
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">6. Cookies</h2>
              <p className="mb-3">
                Diese Website verwendet ausschliesslich technisch notwendige Cookies, sofern dies für den Betrieb der Website erforderlich ist.
              </p>
              <p>
                Es werden keine Tracking- oder Analyse-Tools wie Google Analytics eingesetzt.
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">7. Weitergabe an Dritte</h2>
              <p className="mb-3">
                Ihre personenbezogenen Daten werden nicht verkauft oder unberechtigt an Dritte weitergegeben.
              </p>
              <p className="mb-3">Eine Weitergabe erfolgt nur:</p>
              <ul className="list-disc list-inside space-y-1 text-zinc-300">
                <li>wenn dies gesetzlich vorgeschrieben ist,</li>
                <li>wenn dies zur Durchsetzung unserer Rechte erforderlich ist,</li>
                <li>oder soweit dies technisch notwendig ist (z. B. Hosting oder Kontaktformular-Dienstleister).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">8. Datensicherheit</h2>
              <p>
                Wir treffen angemessene technische und organisatorische Sicherheitsmassnahmen, um Ihre personenbezogenen Daten gegen Verlust, Missbrauch, unbefugten Zugriff oder Manipulation zu schützen.
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">9. Ihre Rechte</h2>
              <p className="mb-3">Sie haben im Rahmen des geltenden Datenschutzrechts insbesondere folgende Rechte:</p>
              <ul className="list-disc list-inside space-y-1 text-zinc-300 mb-3">
                <li>Auskunft über gespeicherte personenbezogene Daten</li>
                <li>Berichtigung unrichtiger Daten</li>
                <li>Löschung Ihrer Daten</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Widerspruch gegen die Datenverarbeitung</li>
              </ul>
              <p>
                Anfragen können jederzeit an folgende Adresse gerichtet werden:{' '}
                <a href="mailto:info@chris.management" className="underline hover:text-zinc-400 transition-colors">
                  info@chris.management
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">10. Änderungen</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen, damit sie den aktuellen rechtlichen Anforderungen entspricht oder Änderungen unserer Leistungen berücksichtigt.
              </p>
            </div>

          </div>
        </section>

        <div className="border-t border-zinc-800" />

        {/* English Section */}
        <section>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">Privacy Policy</h1>

          <div className="space-y-10 text-sm leading-relaxed tracking-wide">

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">1. General Information</h2>
              <p className="mb-3">
                Protecting your personal data is important to us. We treat personal data confidentially and in accordance with applicable Swiss data protection law (revDSG) and, where applicable, the General Data Protection Regulation (GDPR) of the European Union.
              </p>
              <p>
                This Privacy Policy explains what data is collected on this website and how it is used.
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">2. Responsible Entity</h2>
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
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">3. Hosting and Technical Infrastructure</h2>
              <p className="mb-3">
                This website is hosted using the infrastructure of METANET AG.
              </p>
              <p className="mb-3">When visiting this website, technical information may automatically be processed, including:</p>
              <ul className="list-disc list-inside space-y-1 text-zinc-300 mb-3">
                <li>IP address</li>
                <li>browser type and version</li>
                <li>operating system</li>
                <li>date and time of access</li>
                <li>referrer URL</li>
              </ul>
              <p>
                This processing is necessary to ensure the technical operation, security, and stability of the website.
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">4. Collection and Processing of Personal Data</h2>
              <p className="mb-3">
                Personal data is only collected if you voluntarily provide it to us, for example through the contact form.
              </p>
              <p className="mb-3">The following data may be processed:</p>
              <ul className="list-disc list-inside space-y-1 text-zinc-300 mb-3">
                <li>name</li>
                <li>e-mail address</li>
                <li>phone number</li>
                <li>message content</li>
                <li>technical connection data</li>
              </ul>
              <p>
                This data is used solely for processing your inquiry and communicating with you.
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">5. Contact Form (Formspree)</h2>
              <p className="mb-3">
                We use the following service provider for our contact form: Formspree Inc.
              </p>
              <p className="mb-3">
                When using the contact form, the information you enter is transmitted to Formspree and processed there in order to technically handle and forward your request to us.
              </p>
              <p className="mb-3">The following data may be processed:</p>
              <ul className="list-disc list-inside space-y-1 text-zinc-300 mb-3">
                <li>name</li>
                <li>e-mail address</li>
                <li>phone number</li>
                <li>message content</li>
                <li>IP address</li>
                <li>technical metadata</li>
              </ul>
              <p className="mb-3">
                Processing is carried out based on our legitimate interest in secure and efficient communication with website visitors.
              </p>
              <p>
                Further information can be found in Formspree&apos;s privacy policy:{' '}
                <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-400 transition-colors">
                  Formspree Privacy Policy
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">6. Cookies</h2>
              <p className="mb-3">
                This website only uses technically necessary cookies where required for the operation of the website.
              </p>
              <p>
                No tracking or analytics tools such as Google Analytics are used.
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">7. Sharing Data with Third Parties</h2>
              <p className="mb-3">
                Your personal data will not be sold or unlawfully shared with third parties.
              </p>
              <p className="mb-3">Data is only shared:</p>
              <ul className="list-disc list-inside space-y-1 text-zinc-300">
                <li>if legally required,</li>
                <li>if necessary to enforce our rights,</li>
                <li>or where technically required (e.g. hosting or contact form providers).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">8. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal data against loss, misuse, unauthorized access, or manipulation.
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">9. Your Rights</h2>
              <p className="mb-3">Under applicable data protection law, you have the right to:</p>
              <ul className="list-disc list-inside space-y-1 text-zinc-300 mb-3">
                <li>request information about your stored personal data</li>
                <li>correct inaccurate data</li>
                <li>request deletion of your data</li>
                <li>restrict processing</li>
                <li>object to data processing</li>
              </ul>
              <p>
                Requests can be sent at any time to:{' '}
                <a href="mailto:info@chris.management" className="underline hover:text-zinc-400 transition-colors">
                  info@chris.management
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-bold text-zinc-500 mb-4 tracking-[0.2em]">10. Changes</h2>
              <p>
                We reserve the right to amend this Privacy Policy at any time to comply with current legal requirements or to reflect changes to our services.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
