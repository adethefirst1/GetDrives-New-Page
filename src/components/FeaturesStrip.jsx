import ResponsivePicture from "./ResponsivePicture";

const features = [
  {
    base: "/features/feat-01",
    title: "NO SURGE",
    sub: "Prices never spike based on demand",
  },
  {
    base: "/features/feat-02",
    title: "PEER PRICING",
    sub: "Negotiate directly with your driver",
  },
  {
    base: "/features/feat-03",
    title: "VERIFIED DRIVERS",
    sub: "Every driver background-checked",
  },
  {
    base: "/features/feat-04",
    title: "FAST PICKUP",
    sub: "Average 2-minute arrival time",
  },
  {
    base: "/features/feat-05",
    title: "EASY PAYMENT",
    sub: "Cash or card, always your choice",
  },
  {
    base: "/features/feat-06",
    title: "BUILT LOCAL",
    sub: "Made for Nigerian cities & roads",
  },
];

export default function FeaturesStrip() {
  return (
    <section className="border-y border-white/[0.06] bg-brand-bg py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-12 lg:grid-cols-6 lg:gap-x-6 lg:gap-y-0">
          {features.map(({ base, title, sub }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                <ResponsivePicture
                  base={base}
                  ext="png"
                  alt=""
                  pictureClassName="block h-8 w-8 shrink-0"
                  sizes="32px"
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
