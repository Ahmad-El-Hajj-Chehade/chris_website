interface TickerProps {
  text: string;
}

export default function Ticker({ text }: TickerProps) {
  const items = text
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <div className="bg-white py-3 md:py-4 overflow-hidden whitespace-nowrap border-y border-white flex">
      <div className="flex min-w-max ticker-track" aria-label="Event ticker">
        {[0, 1].map((cloneIndex) => (
          <div key={cloneIndex} className="flex items-center shrink-0">
            {items.map((item, itemIndex) => (
              <span
                key={`${cloneIndex}-${item}-${itemIndex}`}
                className="inline-flex items-center text-black text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.32em]"
              >
                {item}
                <span className="mx-4 sm:mx-6 text-black/70">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}