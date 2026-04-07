import { motion } from "framer-motion";
import TagRow from "./TagRow";
import { buttonHoverProps, inView, splitTransition } from "../motionPresets";

const businessTags = [
  "CORPORATE ACCOUNTS",
  "TEAM TRAVEL",
  "MONTHLY BILLING",
  "USAGE REPORTS",
];

export default function BusinessSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="order-2 overflow-hidden rounded-2xl lg:order-1 lg:max-w-none lg:w-[min(100%,520px)] lg:-translate-x-4 xl:-translate-x-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={inView}
          transition={splitTransition}
        >
          <img
            src="/business-flow.png"
            alt="Travel, expense analytics, and team collaboration in a continuous flow"
            className="h-auto w-full object-contain"
          />
        </motion.div>

        <motion.div
          className="order-1 space-y-6 lg:order-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={splitTransition}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
            03 — BUSINESS SOLUTIONS
          </p>
          <h2 className="font-extrabold uppercase leading-[0.95] tracking-tighter text-[clamp(1.75rem,4vw,2.75rem)] text-white">
            <span className="block">MANAGE TRAVEL.</span>
            <span className="block">CONTROL COST.</span>
            <span className="block">SCALE TEAMS.</span>
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-brand-gray">
            Corporate accounts with centralized billing, usage reports, and a
            dedicated account manager. Built for the Nigerian business
            environment.
          </p>
          <TagRow tags={businessTags} />
          <motion.button
            type="button"
            className="mt-2 w-full rounded-md bg-brand-orange px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white md:max-w-md"
            {...buttonHoverProps}
          >
            SET UP BUSINESS ACCOUNT
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
