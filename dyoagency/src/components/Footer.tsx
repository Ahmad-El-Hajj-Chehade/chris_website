import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="bg-black text-zinc-600 py-20 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <h3 className="text-white font-black tracking-tighter text-2xl uppercase">CHRIS MANAGEMENT</h3>
            <Newsletter />
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:justify-items-end text-right">
            <div>
              <h4 className="text-white text-xs uppercase tracking-widest font-bold mb-4">Office</h4>
              <p className="text-sm">Zürich, CH</p>
              <p className="text-sm">Berlin, DE</p>
            </div>
            <div>
              <h4 className="text-white text-xs uppercase tracking-widest font-bold mb-4">Legal</h4>
              <p className="text-sm hover:text-white cursor-pointer">Impressum</p>
              <p className="text-sm hover:text-white cursor-pointer">Privacy</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.3em]">© 2026 Chris Management</p>
          <p className="text-[10px] uppercase tracking-[0.3em]">Built for Electronic Music</p>
        </div>
      </div>
    </footer>
  );
}