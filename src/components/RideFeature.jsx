import { motion } from "framer-motion";
import { buttonHoverProps, inView, splitTransition } from "../motionPresets";

const tags = [
  "Set Your Price",
  "Choose Your Driver",
  "Safe & Secure",
  "24/7 Support",
];

export default function RideFeature() {
  return (
    <section id="riders" className="py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="order-2 overflow-hidden rounded-xl lg:order-1 lg:max-w-none lg:w-[min(100%,520px)] lg:-translate-x-4 xl:-translate-x-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={inView}
          transition={splitTransition}
        >
          <img
            src="/ride-pov.jpg"
            alt="Driver perspective inside the car at night with navigation"
            className="aspect-[4/3] w-full object-cover md:aspect-[5/4]"
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
            FOR RIDERS
          </p>
          <h2 className="font-extrabold uppercase leading-[0.95] tracking-tighter text-white text-[clamp(1.75rem,4vw,2.75rem)]">
            <span className="block">YOUR FARE.</span>
            <span className="block">YOUR DRIVER.</span>
            <span className="block">YOUR RIDE.</span>
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-brand-gray">
            Flexibility at every step — set your price, choose your driver, and ride
            with confidence knowing support is always one tap away.
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-sm border border-gray-700 px-3 py-1.5 text-[11px] font-medium text-white"
              >
                {t}
              </span>
            ))}
          </div>
          <motion.button
            type="button"
            className="mt-2 w-full rounded-md bg-brand-orange px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:opacity-95 md:max-w-sm"
            {...buttonHoverProps}
          >
            DOWNLOAD THE APP
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
