export default function MissionVision() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-12">
          <div className="rounded-xl border border-white/[0.06] bg-[#111111] p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
              MISSION
            </p>
            <h2 className="mt-4 font-extrabold uppercase leading-[0.95] tracking-tighter text-white text-[clamp(1.25rem,3vw,1.75rem)]">
              <span className="block">SAFE, AFFORDABLE</span>
              <span className="block">MOBILITY FOR EVERY</span>
              <span className="block">AFRICAN.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-gray">
              Freedom of movement should never be a luxury. We&apos;re building a
              platform that keeps rides within reach — transparent fares, safer
              trips, and options that work for everyday journeys across the
              continent.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-[#111111] p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
              VISION
            </p>
            <h2 className="mt-4 font-extrabold uppercase leading-[0.95] tracking-tighter text-white text-[clamp(1.25rem,3vw,1.75rem)]">
              <span className="block">{"AFRICA'S MOST TRUSTED"}</span>
              <span className="block">PEER-TO-PEER</span>
              <span className="block">MOBILITY PLATFORM.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-gray">
              We see a connected Africa where people and goods move with
              confidence — cities linked by trust, drivers paid fairly, and
              technology that puts communities first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
