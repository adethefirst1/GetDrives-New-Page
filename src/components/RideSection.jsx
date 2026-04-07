import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PATH_DOWNLOAD } from "../ctaCopy";
import TagRow from "./TagRow";
import { useAccessibleMotion } from "../motionPresets";

const MotionLink = motion(Link);

const rideTags = [
  "STANDARD",
  "PLUS",
  "PREMIUM",
  "SHARED RIDES",
  "AIRPORT TRANSFERS",
];

export default function RideSection() {
  const m = useAccessibleMotion();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid min-w-0 max-w-7xl items-center gap-8 px-6 md:gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="order-2 overflow-hidden rounded-lg lg:order-1 lg:max-w-none lg:w-[min(100%,520px)] lg:-translate-x-4 xl:-translate-x-8"
          {...m.splitImageLeft}
        >
          <img
            src="/ride-hero.png"
            alt="Passenger entering a vehicle with pickup confirmed in the GetDrives app"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 1024px) 100vw, min(520px, 50vw)"
            className="w-full object-cover object-center"
          />
        </motion.div>

        <motion.div
          className="order-1 space-y-6 lg:order-2"
          {...m.splitText}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
            01 / RIDE SERVICES
          </p>
          <h2 className="font-extrabold uppercase leading-[0.95] tracking-tighter text-[clamp(1.75rem,4vw,2.75rem)] text-white">
            <span className="block">FAST RIDE.</span>
            <span className="block">FAIR FARES.</span>
            <span className="block">YOUR CHOICE.</span>
          </h2>
          <p className="w-full max-w-[90%] text-base leading-relaxed sm:max-w-xl text-brand-gray">
            Request your ride and watch drivers compete for your fare. Choose
            Standard, Plus, Premium, shared rides, or airport transfers, with
            transparent pricing on every trip.
          </p>
          <TagRow tags={rideTags} />
          <MotionLink
            to={PATH_DOWNLOAD}
            className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-brand-orange px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white md:w-auto md:max-w-md"
            {...m.buttonHoverProps}
          >
            BOOK A RIDE
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
}
