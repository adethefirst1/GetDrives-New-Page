const steps = [
  {
    n: "01",
    title: "SIGN UP ONLINE",
    body: "Complete a short application with your details — it only takes a few minutes.",
  },
  {
    n: "02",
    title: "SUBMIT DOCUMENTS",
    body: "Upload your license, ID, and vehicle paperwork for quick verification.",
  },
  {
    n: "03",
    title: "GET APPROVED",
    body: "Our team reviews your profile — most drivers hear back within 24 hours.",
  },
  {
    n: "04",
    title: "START EARNING",
    body: "Go online, accept trips, and watch your weekly earnings grow.",
  },
];

export default function StepsSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-orange">
          GET STARTED
        </p>
        <h2 className="mt-4 font-extrabold uppercase leading-[0.95] tracking-tighter text-white text-[clamp(1.75rem,4vw,2.75rem)]">
          <span className="block">START DRIVING</span>
          <span className="block">IN 4 STEPS.</span>
        </h2>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {steps.map((step) => (
            <div key={step.n} className="relative min-h-[180px] pt-2">
              <span
                className="pointer-events-none absolute left-0 top-0 select-none font-extrabold leading-none text-white/[0.06] text-[clamp(3rem,12vw,5rem)]"
                aria-hidden
              >
                {step.n}
              </span>
              <div className="relative z-10 pt-10">
                <h3 className="font-extrabold uppercase leading-tight tracking-tight text-white text-base md:text-lg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-brand-gray">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
