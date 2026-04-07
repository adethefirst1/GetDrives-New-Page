const steps = [
  {
    n: "01",
    title: "SET YOUR DESTINATION",
    body: "Enter where you are headed and the fare you are comfortable paying — it only takes a moment.",
  },
  {
    n: "02",
    title: "CHOOSE YOUR DRIVER",
    body: "Compare offers, ratings, and profiles, then select the driver that fits your trip.",
  },
  {
    n: "03",
    title: "RIDE & PAY SEAMLESSLY",
    body: "Enjoy the ride, pay securely in-app, and rate your experience when you arrive.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-extrabold uppercase leading-[0.95] tracking-tighter text-white text-[clamp(1.75rem,4vw,2.75rem)]">
          <span className="block">THREE STEPS.</span>
          <span className="block">ZERO HASSLE.</span>
        </h2>

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-3 md:gap-12">
          {steps.map((step) => (
            <div key={step.n} className="relative min-h-[200px] pt-4">
              <span
                className="pointer-events-none absolute left-0 top-0 select-none font-extrabold leading-none text-white/[0.06] text-[clamp(4rem,15vw,7rem)]"
                aria-hidden
              >
                {step.n}
              </span>
              <div className="relative z-10">
                <h3 className="font-extrabold uppercase leading-tight tracking-tight text-white text-lg md:text-xl">
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
