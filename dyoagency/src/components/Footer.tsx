export default function Footer() {
  return (
    <footer className="bg-black text-zinc-600 py-24 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          
          {/* Linke Seite: Große Typografie als Statement */}
          <div className="max-w-md">
            <h3 className="text-white font-black tracking-tighter text-3xl uppercase mb-6">
              Chris <span className="text-zinc-700">Management</span>
            </h3>
            <p className="text-sm leading-relaxed uppercase tracking-widest text-zinc-500">
              International talent representation for the electronic music industry. 
              Bridging elite artists and global stages.
            </p>
          </div>

          {/* Rechte Seite: Strukturierte Links */}
          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-4">
              <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold">Contact</h4>
              <nav className="flex flex-col space-y-2 text-sm">
                <a href="#contact" className="hover:text-white transition-colors uppercase tracking-wider">Booking</a>
                <a href="#contact" className="hover:text-white transition-colors uppercase tracking-wider">General</a>
              </nav>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold">Legal</h4>
              <nav className="flex flex-col space-y-2 text-sm">
                <a href="/impressum" className="hover:text-white transition-colors uppercase tracking-wider">Impressum</a>
                <a href="/privacy" className="hover:text-white transition-colors uppercase tracking-wider">Privacy</a>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-4">
            <span className="text-[10px] uppercase tracking-[0.3em]">© 2026 Chris Management</span>
            <span className="w-1 h-1 bg-zinc-800 rounded-full hidden md:block"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-800 italic">Built in Switzerland</span>
          </div>
          
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white bg-zinc-900 px-4 py-2 rounded-sm">
            Electronic Music Agency
          </div>
        </div>
        <div className="mt-0 opacity-0 h-0 overflow-hidden">
  <h2>Global Booking Agency for DJs and Singers</h2>
  <p>Representing artists in Techno, Melodic House, Progressive, and Acoustic Pop. 
     Based in Zurich, Switzerland, serving international festivals and clubs. 
     Specialized in Artist Management, Talent Representation, and Event Programming.</p>
</div>
      </div>
    </footer>
  );
}