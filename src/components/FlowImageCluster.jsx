import { useId } from "react";

export default function FlowImageCluster({ images, alts }) {
  const gid = useId().replace(/:/g, "");

  return (
    <div className="relative w-full">
      <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
        {images.map((src, i) => (
          <div
            key={src}
            className="aspect-[3/4] overflow-hidden rounded-lg bg-neutral-900"
          >
            <img
              src={src}
              alt={alts[i]}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 33vw, 180px"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 400 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id={`${gid}-y`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FACC15" />
            <stop offset="100%" stopColor="#EAB308" />
          </linearGradient>
          <linearGradient id={`${gid}-b`} x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
        <path
          d="M 28 52 C 110 12 290 12 372 52"
          stroke={`url(#${gid}-y)`}
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path
          d="M 372 218 C 290 258 110 258 28 218"
          stroke={`url(#${gid}-b)`}
          strokeWidth="9"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
