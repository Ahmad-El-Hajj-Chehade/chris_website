'use client';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier Logik für Mailchimp, Brevo oder Formspree einfügen
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Subscribed.');
  };

  return (
    <div className="border-t border-zinc-900 pt-16 pb-8">
      <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 mb-6">
        Newsletter for Promoters
      </p>
      <form onSubmit={handleSubmit} className="relative max-w-sm">
        <input
          type="email"
          required
          placeholder="EMAIL ADDRESS"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent border-b border-zinc-800 py-3 pr-10 text-sm uppercase tracking-widest outline-none focus:border-white transition-colors placeholder:text-zinc-700"
        />
        <button 
          type="submit" 
          className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
        >
          <span className="text-xl">→</span>
        </button>
      </form>
    </div>
  );
}