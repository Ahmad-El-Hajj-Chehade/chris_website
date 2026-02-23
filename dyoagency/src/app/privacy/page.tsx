export default function Privacy() {
  return (
    <main className="bg-white text-black min-h-screen pt-40 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-16">Privacy Policy</h1>
        
        <div className="space-y-12 text-sm leading-relaxed tracking-wide">
          
          <section>
            <h2 className="text-xs uppercase font-bold text-zinc-400 mb-4 tracking-[0.2em]">1. Overview</h2>
            <p>
              Based on Article 13 of the Swiss Federal Constitution and the data protection provisions of the Confederation (Data Protection Act, DSG), every person is entitled to protection of their privacy and protection against misuse of their personal data. We take the protection of your personal data very seriously.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase font-bold text-zinc-400 mb-4 tracking-[0.2em]">2. Data Collection (Contact Form)</h2>
            <p>
              When you use our contact form, we collect the following data: Name, Email, Phone Number, Subject, and Message. This data is used exclusively to process your inquiry. We use <strong>Formspree</strong> as a service provider to process these form submissions. By submitting the form, you agree to their processing of your data.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase font-bold text-zinc-400 mb-4 tracking-[0.2em]">3. Spotify Embeds</h2>
            <p>
              Our website includes players from the music service <strong>Spotify</strong>. When you visit pages with a Spotify player, a connection to Spotify servers is established. Spotify may collect data about your listening habits if you are logged into your Spotify account. For more information, please see Spotify's privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase font-bold text-zinc-400 mb-4 tracking-[0.2em]">4. Cookies & Server Logs</h2>
            <p>
              In cooperation with our hosting providers, server log files are created. These record activities such as IP addresses, browser types, and timestamps. This data is not personally identifiable and is used only for technical troubleshooting and security.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase font-bold text-zinc-400 mb-4 tracking-[0.2em]">5. Your Rights</h2>
            <p>
              You have the right to request information about your stored personal data at any time, as well as the right to correction, blocking, or deletion of this data. Please contact us at <strong>info@chris.management</strong> for such requests.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase font-bold text-zinc-400 mb-4 tracking-[0.2em]">6. Data Security</h2>
            <p>
              We use SSL/TLS encryption for our website to ensure the secure transmission of confidential data, such as your inquiries via the contact form.
            </p>
          </section>

          <section className="pt-8 border-t border-zinc-100">
            <p className="text-zinc-400 italic">
              Last updated: February 2026.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}