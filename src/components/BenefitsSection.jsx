import { motion } from "framer-motion";
import { inView, useAccessibleMotion } from "../motionPresets";

function IconClock({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function IconWallet({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      />
    </svg>
  );
}

function IconShield({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

function IconPhone({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
  );
}

function IconGift({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
      />
    </svg>
  );
}

function IconSupport({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}

const benefits = [
  {
    title: "Flexible Hours",
    body: "Drive when it works for you — peak times or off-peak, you control your schedule.",
    Icon: IconClock,
  },
  {
    title: "Fair Earnings",
    body: "Competitive rates and clear payouts so you always know what you take home.",
    Icon: IconWallet,
  },
  {
    title: "Full Insurance",
    body: "Coverage options designed to help protect you and your vehicle on the road.",
    Icon: IconShield,
  },
  {
    title: "Smart Driver App",
    body: "Navigation, trips, and earnings in one place — built for life behind the wheel.",
    Icon: IconPhone,
  },
  {
    title: "Bonuses & Rewards",
    body: "Unlock incentives for streaks, peak hours, and strong rider ratings.",
    Icon: IconGift,
  },
  {
    title: "Real Support",
    body: "Talk to real people when you need help — onboarding, payouts, or on-trip issues.",
    Icon: IconSupport,
  },
];

export default function BenefitsSection() {
  const m = useAccessibleMotion();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-orange">
          WHY DRIVE WITH US
        </p>
        <h2 className="mt-4 font-extrabold uppercase leading-[0.95] tracking-tighter text-white text-[clamp(1.75rem,4vw,2.75rem)]">
          <span className="block">EVERYTHING YOU NEED</span>
          <span className="block">TO SUCCEED.</span>
        </h2>

        <motion.div
          className="mt-10 grid gap-8 sm:grid-cols-2 md:mt-12 md:gap-12 lg:grid-cols-3 lg:gap-12"
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={m.cardListVariants}
        >
          {benefits.map(({ title, body, Icon }) => (
            <motion.article
              key={title}
              className="flex h-full flex-col border border-white/[0.06] p-8"
              variants={m.cardItemVariants}
            >
              <Icon className="h-8 w-8 text-brand-orange" />
              <h3 className="mt-6 font-bold text-white">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-gray">
                {body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
