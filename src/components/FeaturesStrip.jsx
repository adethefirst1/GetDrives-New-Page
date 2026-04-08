const features = [
  {
    src: "/features/feat-01.png",
    title: "NO SURGE",
    sub: "Prices never spike based on demand",
  },
  {
    src: "/features/feat-02.png",
    title: "PEER PRICING",
    sub: "Negotiate directly with your driver",
  },
  {
    src: "/features/feat-03.png",
    title: "VERIFIED DRIVERS",
    sub: "Every driver background-checked",
  },
  {
    src: "/features/feat-04.png",
    title: "FAST PICKUP",
    sub: "Average 2-minute arrival time",
  },
  {
    src: "/features/feat-05.png",
    title: "EASY PAYMENT",
    sub: "Cash or card, always your choice",
  },
  {
    src: "/features/feat-06.png",
    title: "BUILT LOCAL",
    sub: "Made for Nigerian cities & roads",
  },
];

export default function FeaturesStrip() {
  return (
    <section className="border-y border-white/[0.06] bg-brand-bg py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-12 lg:grid-cols-6 lg:gap-x-6 lg:gap-y-0">
          {features.map(({ src, title, sub }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                <img
                  src={src}
                  alt=""
                  width={32}
                  height={32}
                  loading="lazy"
                  decoding="async"
                  className="h-8 w-8 object-contain object-center"
                  aria-hidden
                />
              </div>
              <p className="mt-4 text-xs font-bold uppercase leading-tight tracking-wide text-white">
                {title}
              </p>
              <p className="mt-2 max-w-[11rem] text-[11px] font-normal leading-snug text-brand-gray">
                {sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
