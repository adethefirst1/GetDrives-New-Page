import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CTA_DOWNLOAD_LABEL, PATH_DOWNLOAD } from "../ctaCopy";
import { useAccessibleMotion } from "../motionPresets";

const MotionLink = motion(Link);

const tags = [
  "Set Your Price",
  "Choose Your Driver",
  "Safe & Secure",
  "24/7 Support",
];

export default function RideFeature() {
  const m = useAccessibleMotion();

  return (
    <section id="riders" className="py-16 md:py-24">
      <div className="mx-auto grid min-w-0 max-w-7xl items-center gap-8 px-6 md:gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="order-2 overflow-hidden rounded-xl lg:order-1 lg:max-w-none lg:w-[min(100%,520px)] lg:-translate-x-4 xl:-translate-x-8"
          {...m.splitImageLeft}
        >
          <img
            src="/ride-pov.jpg"
            alt="Driver perspective inside the car at night with navigation"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 1024px) 100vw, min(520px, 50vw)"
            className="aspect-[4/3] w-full object-cover md:aspect-[5/4]"
          />
        </motion.div>

        <motion.div
          className="order-1 space-y-6 lg:order-2"
          {...m.splitText}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
            FOR RIDERS
          </p>
          <h2 className="font-extrabold uppercase leading-[0.95] tracking-tighter text-white text-[clamp(1.75rem,4vw,2.75rem)]">
            <span className="block">YOUR FARE.</span>
            <span className="block">YOUR DRIVER.</span>
            <span className="block">YOUR RIDE.</span>
          </h2>
          <p className="w-full max-w-[90%] text-base leading-relaxed sm:max-w-xl text-brand-gray">
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
          <MotionLink
            to={PATH_DOWNLOAD}
            className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-brand-orange px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white hover:opacity-95 md:w-auto md:max-w-sm"
            {...m.buttonHoverProps}
          >
            {CTA_DOWNLOAD_LABEL}
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
}
