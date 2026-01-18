import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter text-white">DYOAGENCY</Link>
        <div className="space-x-8 text-sm font-medium uppercase tracking-widest text-zinc-400">
          <Link href="/#services" className="hover:text-white transition">Services</Link>
          <Link href="/#artists" className="hover:text-white transition">Artists</Link>
          <Link href="/#contact" className="hover:text-white transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}