import { motion } from "framer-motion";
import { buttonHoverProps } from "../motionPresets";

export default function MarketingHero() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-brand-orange" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-orange">
              DRIVE WITH CONFIDENCE
            </p>
          </div>
          <h1 className="font-extrabold uppercase leading-[0.95] tracking-tighter text-[clamp(2.25rem,6vw,4rem)]">
            <span className="block text-white">
              YOU NAME THE{" "}
              <span className="text-brand-orange">FARE.</span>
            </span>
            <span className="block text-white">WE DRIVE.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-brand-gray">
            GetDrives connects riders and drivers on your terms — name your fare,
            compare offers, and move with transparency across every trip.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <motion.a
              href="#drivers"
              className="inline-flex items-center justify-center rounded-md bg-brand-orange px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white hover:opacity-95"
              {...buttonHoverProps}
            >
              BECOME A DRIVER
            </motion.a>
            <motion.button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white hover:bg-white/5"
              {...buttonHoverProps}
            >
              DOWNLOAD APP
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="relative flex justify-center lg:justify-end overflow-visible pt-4 lg:pt-0"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-[min(100%,440px)] lg:max-w-none lg:w-[min(100%,520px)] lg:translate-x-4 xl:translate-x-8">
            {/* Back layer: dark rounded panel */}
            <img
              src="/hero-frame.png"
              alt=""
              className="pointer-events-none absolute bottom-2 right-0 z-0 w-[82%] max-w-[320px] -rotate-[6deg] rounded-[2rem] object-cover object-center select-none sm:bottom-4 sm:right-2"
              aria-hidden
            />
            {/* Front layer: driver + branding (slight CCW tilt) */}
            <img
              src="/hero-visual.png"
              alt="GetDrives delivery professional with branded backpack and helmet"
              className="relative z-10 w-full -rotate-[3deg] rounded-[2rem] object-contain object-center sm:rounded-[2.25rem]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
