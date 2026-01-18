export default function Loading() {
  return (
    <div className="bg-black min-h-screen p-10 pt-32">
      <div className="max-w-5xl mx-auto animate-pulse">
        <div className="h-12 w-1/3 bg-zinc-800 mb-6"></div>
        <div className="h-6 w-2/3 bg-zinc-800 mb-20"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <div className="h-80 w-full bg-zinc-800"></div>
              <div className="h-6 w-1/2 bg-zinc-800"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}