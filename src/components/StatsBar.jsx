const homeStats = [
  { value: "50K+", label: "HAPPY CUSTOMERS" },
  { value: "8K+", label: "EXPERIENCED DRIVERS" },
  { value: "4.9 ★", label: "RATINGS ON APP STORE" },
];

const driveStats = [
  { value: "50K+", label: "ACTIVE RIDERS" },
  { value: "8K+", label: "PARTNER DRIVERS" },
  { value: "4.9★", label: "AVERAGE RATING" },
];

export default function StatsBar({ variant = "home" }) {
  const stats = variant === "drive" ? driveStats : homeStats;
  const isDrive = variant === "drive";

  return (
    <section className="border-y border-white/[0.06] py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 text-center sm:text-left sm:grid-cols-3 sm:gap-12">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center sm:items-start">
              <p
                className={`font-extrabold leading-none tracking-tight text-[clamp(2rem,5vw,3rem)] ${
                  isDrive ? "text-white" : "text-brand-orange"
                }`}
              >
                {s.value}
              </p>
              <p
                className={`mt-3 text-sm uppercase tracking-wide ${
                  isDrive
                    ? "font-medium text-brand-gray"
                    : "font-medium text-white"
                }`}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
