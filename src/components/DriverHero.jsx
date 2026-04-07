import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { buttonHoverProps, inView, splitTransition } from "../motionPresets";

const MotionLink = motion(Link);

const chartRows = [
  { day: "MON", pct: 55, amount: "₦2,400" },
  { day: "TUE", pct: 72, amount: "₦3,100" },
  { day: "WED", pct: 48, amount: "₦2,200" },
  { day: "THU", pct: 88, amount: "₦4,200" },
  { day: "FRI", pct: 65, amount: "₦3,800" },
];

export default function DriverHero() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={splitTransition}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-brand-orange" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-orange">
              DRIVE WITH GETDRIVES
            </p>
          </div>
          <h1 className="font-extrabold uppercase leading-[0.95] tracking-tighter text-[clamp(2.25rem,6vw,4rem)]">
            <span className="block text-white">TURN</span>
            <span className="block text-white">MILES</span>
            <span className="block text-white">INTO</span>
            <span className="block text-brand-orange">INCOME.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-brand-gray">
            Drive on your schedule, earn on your terms — transparent payouts, fair
            commissions, and no surge games cutting into what you keep.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <MotionLink
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-orange px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:opacity-95"
              {...buttonHoverProps}
            >
              <span className="text-lg leading-none">+</span>
              EXPLORE SERVICES
            </MotionLink>
            <motion.button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-white/5"
              {...buttonHoverProps}
            >
              DRIVE WITH US
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:justify-self-end lg:max-w-none lg:w-[min(100%,520px)] lg:translate-x-4 xl:translate-x-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={inView}
          transition={splitTransition}
        >
          <div className="mx-auto w-full max-w-md rounded-xl border border-white/[0.06] bg-[#111111] p-6 md:p-8">
            <div className="flex items-start justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                WEEKLY EARNINGS
              </p>
              <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-semibold text-emerald-400">
                +12% this week
              </span>
            </div>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-brand-orange md:text-4xl">
                ₦
              </span>
              <span className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                22,400
              </span>
            </div>

            <div className="mt-8 space-y-4">
              {chartRows.map((row) => (
                <div key={row.day} className="flex items-center gap-3">
                  <span className="w-9 shrink-0 text-[10px] font-semibold uppercase tracking-wide text-brand-gray">
                    {row.day}
                  </span>
                  <div className="relative h-2.5 min-w-0 flex-1 overflow-hidden rounded-full bg-[#1A1A1A]">
                    <div
                      className="h-full rounded-full bg-brand-orange"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                  <span className="w-16 shrink-0 text-right text-xs font-semibold text-white">
                    {row.amount}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-white/[0.06] pt-6 sm:grid-cols-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-brand-gray">
                  PEAK BONUS
                </p>
                <p className="mt-1 text-sm font-semibold text-white">+₦1,200</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-brand-gray">
                  ACCEPTANCE
                </p>
                <p className="mt-1 text-sm font-semibold text-white">94%</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-brand-gray">
                  RATING
                </p>
                <p className="mt-1 text-sm font-semibold text-white">4.92 ★</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
