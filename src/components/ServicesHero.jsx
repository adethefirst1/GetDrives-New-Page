export default function ServicesHero() {
  return (
    <section id="services" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-brand-orange">
          OUR SERVICES
        </p>
        <h1 className="max-w-5xl font-extrabold uppercase leading-[0.95] tracking-tighter text-[clamp(2.5rem,8vw,5.5rem)]">
          <span className="block text-white">ONE APP.</span>
          <span className="block text-brand-orange">EVERY JOURNEY.</span>
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-brand-gray md:max-w-[42%]">
          Rides, delivery, intercity trips, and corporate travel — all on a platform
          where you offer the fare and drivers compete for your business.
        </p>
      </div>
    </section>
  );
}
