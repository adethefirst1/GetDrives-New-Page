/** Home + drive: value line is white numerals + orange + or ★; labels use muted grey. */
const homeStats = [
  { kind: "plus", main: "50K", label: "ACTIVE RIDERS" },
  { kind: "plus", main: "8K", label: "PARTNER DRIVERS" },
  { kind: "star", main: "4.9", label: "AVERAGE RATING" },
];

const driveStats = [
  { kind: "plus", main: "50K", label: "ACTIVE RIDERS" },
  { kind: "plus", main: "8K", label: "PARTNER DRIVERS" },
  { kind: "star", main: "4.9", label: "AVERAGE RATING" },
];

function StatValue({ kind, main }) {
  if (kind === "star") {
    return (
      <>
        <span className="text-white">{main}</span>
        <span className="text-brand-orange" aria-hidden>
          ★
        </span>
      </>
    );
  }
  return (
    <>
      <span className="text-white">{main}</span>
      <span className="text-brand-orange">+</span>
    </>
  );
}

export default function StatsBar({ variant = "home" }) {
  const stats = variant === "drive" ? driveStats : homeStats;
  const isDrive = variant === "drive";

  return (
    <section className="border-y border-white/[0.06] py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10 md:gap-12 ${
            isDrive ? "text-center sm:text-left" : "text-center"
          }`}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className={`flex flex-col ${
                isDrive ? "items-center sm:items-start" : "items-center"
              }`}
            >
              <p className="font-black uppercase leading-none tracking-tighter text-[clamp(2.25rem,5vw,3.25rem)] tabular-nums">
                <StatValue kind={s.kind} main={s.main} />
              </p>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-brand-gray">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
