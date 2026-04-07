import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CTA_DOWNLOAD_LABEL,
  CTA_DRIVER_LABEL,
  PATH_DOWNLOAD,
  PATH_DRIVE_WITH_US,
} from "../ctaCopy";
import { useAccessibleMotion } from "../motionPresets";

const MotionLink = motion(Link);

export default function MarketingHero() {
  const m = useAccessibleMotion();

  return (
    <section className="py-16 sm:py-18 md:py-20">
      <div className="mx-auto grid min-w-0 max-w-7xl items-start gap-8 px-6 md:gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <motion.div className="min-w-0" {...m.heroTextBlock}>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-brand-orange" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-orange">
              YOUR TRIP, YOUR PRICE
            </p>
          </div>
          <h1 className="font-extrabold uppercase leading-[0.95] tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-white">
              YOU NAME THE{" "}
              <span className="text-brand-orange">FARE.</span>
            </span>
            <span className="block break-words text-white">WE DRIVE.</span>
          </h1>
          <p className="mt-6 max-w-[90%] text-base leading-relaxed text-brand-gray sm:mt-8 sm:max-w-xl md:max-w-xl">
            One app for rides and delivery. You set the fare, drivers compete, and
            you choose your ride.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center">
            <MotionLink
              to={PATH_DOWNLOAD}
              className="inline-flex w-full items-center justify-center rounded-md bg-brand-orange px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white hover:opacity-95 md:w-auto"
              {...m.buttonHoverProps}
            >
              {CTA_DOWNLOAD_LABEL}
            </MotionLink>
            <MotionLink
              to={PATH_DRIVE_WITH_US}
              className="inline-flex w-full items-center justify-center rounded-md border border-white bg-transparent px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white hover:bg-white/5 md:w-auto"
              {...m.buttonHoverProps}
            >
              {CTA_DRIVER_LABEL}
            </MotionLink>
          </div>
        </motion.div>

        <motion.div
          className="relative flex min-w-0 justify-center overflow-x-hidden pt-4 lg:justify-end lg:overflow-visible lg:pt-0"
          {...m.heroImageBlock}
        >
          <div className="relative w-full max-w-[min(100%,440px)] lg:max-w-none lg:w-[min(100%,520px)] lg:translate-x-4 xl:translate-x-8">
            {/* Back layer: dark rounded panel */}
            <img
              src="/hero-frame.png"
              alt=""
              loading="lazy"
              decoding="async"
              sizes="(max-width: 1024px) 82vw, 320px"
              className="pointer-events-none absolute bottom-2 right-0 z-0 w-[82%] max-w-[320px] -rotate-[6deg] rounded-[2rem] object-cover object-center select-none sm:bottom-4 sm:right-2"
              aria-hidden
            />
            {/* Front layer: driver + branding (slight CCW tilt) */}
            <img
              src="/hero-visual.png"
              alt="GetDrives delivery professional with branded backpack and helmet"
              fetchPriority="high"
              decoding="async"
              sizes="(max-width: 440px) 100vw, (max-width: 1280px) 50vw, 520px"
              className="relative z-10 w-full max-w-full -rotate-[3deg] rounded-[2rem] object-contain object-center sm:rounded-[2.25rem]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
