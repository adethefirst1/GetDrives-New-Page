import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PATH_DRIVE_WITH_US } from "../ctaCopy";
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
              NOW LIVE ACROSS NIGERIA
            </p>
          </div>
          <h1 className="font-extrabold uppercase leading-[0.95] tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-white">YOU NAME</span>
            <span className="block text-white">
              THE <span className="text-brand-orange">FARE.</span>
            </span>
            <span className="block text-white">WE DRIVE.</span>
          </h1>
          <p className="mt-6 max-w-[90%] text-base leading-relaxed text-white sm:mt-8 sm:max-w-xl md:max-w-xl">
            GetDrives puts the power in your hands. Set your own fare, choose your
            driver, and move on your own terms — no surge pricing, no algorithms
            deciding your worth.
          </p>
        </motion.div>

        <motion.div
          className="relative flex min-w-0 flex-col items-center justify-center overflow-x-hidden pt-4 lg:items-end lg:overflow-visible lg:pt-0"
          {...m.heroImageBlock}
        >
          <div className="flex w-full max-w-[min(100%,440px)] flex-col lg:max-w-none lg:w-[min(100%,520px)] lg:translate-x-4 xl:translate-x-8">
            <div className="relative w-full">
              <img
                src="/hero-delivery.png"
                alt="GetDrives delivery professional with branded backpack, jacket, and orange G mark"
                fetchPriority="high"
                decoding="async"
                sizes="(max-width: 440px) 100vw, (max-width: 1280px) 50vw, 520px"
                className="relative z-10 w-full max-w-full -rotate-[3deg] rounded-[2rem] object-contain object-center shadow-lg sm:rounded-[2.25rem]"
              />
            </div>

            <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-end lg:mt-10">
              <MotionLink
                to="/services"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-md bg-brand-orange px-6 py-3.5 text-center font-sans text-xs font-bold uppercase tracking-[0.2em] text-white hover:opacity-95 sm:w-auto"
                {...m.buttonHoverProps}
              >
                EXPLORE SERVICES →
              </MotionLink>
              <MotionLink
                to={PATH_DRIVE_WITH_US}
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-md border border-white bg-transparent px-6 py-3.5 text-center font-sans text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white/5 sm:w-auto"
                {...m.buttonHoverProps}
              >
                DRIVE WITH US
              </MotionLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
