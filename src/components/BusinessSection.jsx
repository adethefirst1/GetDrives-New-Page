import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TagRow from "./TagRow";
import { useAccessibleMotion } from "../motionPresets";

const MotionLink = motion(Link);

const businessTags = [
  "CORPORATE ACCOUNTS",
  "TEAM TRAVEL",
  "MONTHLY BILLING",
  "USAGE REPORTS",
];

export default function BusinessSection() {
  const m = useAccessibleMotion();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid min-w-0 max-w-7xl items-center gap-8 px-6 md:gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="order-2 overflow-hidden rounded-2xl lg:order-1 lg:max-w-none lg:w-[min(100%,520px)] lg:-translate-x-4 xl:-translate-x-8"
          {...m.splitImageLeft}
        >
          <img
            src="/business-flow.png"
            alt="Travel, expense analytics, and team collaboration in a continuous flow"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 1024px) 100vw, min(520px, 50vw)"
            className="h-auto w-full object-contain"
          />
        </motion.div>

        <motion.div
          className="order-1 space-y-6 lg:order-2"
          {...m.splitText}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
            03 / BUSINESS SOLUTIONS
          </p>
          <h2 className="font-extrabold uppercase leading-[0.95] tracking-tighter text-[clamp(1.75rem,4vw,2.75rem)] text-white">
            <span className="block">MANAGE TRAVEL.</span>
            <span className="block">CONTROL COST.</span>
            <span className="block">SCALE TEAMS.</span>
          </h2>
          <p className="w-full max-w-[90%] text-base leading-relaxed sm:max-w-xl text-brand-gray">
            Corporate accounts with centralized billing, usage reports, and a
            dedicated account manager. Built for the Nigerian business
            environment.
          </p>
          <TagRow tags={businessTags} />
          <MotionLink
            to="/about#contact"
            className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-brand-orange px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white md:w-auto md:max-w-md"
            {...m.buttonHoverProps}
          >
            SET UP BUSINESS ACCOUNT
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
}
