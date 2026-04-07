import { motion } from "framer-motion";
import { buttonHoverProps } from "../motionPresets";

const sectionMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.55, ease: "easeOut" },
};

export default function CTASection({ variant = "services" }) {
  if (variant === "about") {
    return (
      <motion.section className="bg-brand-orange py-20 md:py-24" {...sectionMotion}>
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 px-6 md:flex-row md:items-end md:gap-12">
          <div className="max-w-3xl">
            <h2 className="font-extrabold uppercase leading-[0.95] tracking-tighter text-white">
              <span className="block text-[clamp(2.25rem,6vw,4rem)]">JOIN THE</span>
              <span className="block text-[clamp(2.75rem,7vw,5rem)] leading-[0.95]">
                MOVEMENT
              </span>
              <span
                className="block text-[clamp(1.5rem,4vw,2.75rem)] leading-none text-white/30"
                aria-hidden
              >
                MOVEMENT
              </span>
            </h2>
          </div>
          <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-end md:w-auto">
            <motion.button
              type="button"
              className="rounded-md bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-bg hover:opacity-95"
              {...buttonHoverProps}
            >
              DOWNLOAD THE APP
            </motion.button>
            <motion.button
              type="button"
              className="rounded-md bg-brand-bg px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:opacity-95"
              {...buttonHoverProps}
            >
              DRIVE WITH US
            </motion.button>
          </div>
        </div>
      </motion.section>
    );
  }

  if (variant === "driver") {
    return (
      <motion.section className="bg-brand-orange py-20 md:py-24" {...sectionMotion}>
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 px-6 md:flex-row md:items-end md:gap-12">
          <h2 className="max-w-2xl font-extrabold uppercase leading-[0.95] tracking-tighter text-white text-[clamp(2.25rem,6vw,4rem)]">
            <span className="block">APPLY TODAY.</span>
            <span className="block">TAKE 5 MINUTES.</span>
          </h2>
          <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-end md:w-auto">
            <motion.button
              type="button"
              className="rounded-md bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-orange hover:opacity-95"
              {...buttonHoverProps}
            >
              APPLY TO DRIVE NOW
            </motion.button>
            <motion.button
              type="button"
              className="rounded-md bg-brand-bg px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:opacity-95"
              {...buttonHoverProps}
            >
              CONTACT SUPPORT
            </motion.button>
          </div>
        </div>
      </motion.section>
    );
  }

  if (variant === "landing") {
    return (
      <motion.section className="bg-brand-orange py-20 md:py-24" {...sectionMotion}>
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 px-6 md:flex-row md:items-end md:gap-12">
          <h2 className="max-w-2xl font-extrabold uppercase leading-[0.95] tracking-tighter text-white text-[clamp(2.25rem,6vw,4rem)]">
            <span className="block">READY TO</span>
            <span className="block">RIDE SMARTER?</span>
          </h2>
          <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-end md:w-auto">
            <motion.button
              type="button"
              className="rounded-md bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-bg hover:opacity-95"
              {...buttonHoverProps}
            >
              DOWNLOAD THE APP
            </motion.button>
            <motion.button
              type="button"
              className="rounded-md bg-brand-bg px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:opacity-95"
              {...buttonHoverProps}
            >
              DRIVE WITH GETDRIVES
            </motion.button>
          </div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section className="bg-brand-orange py-20 md:py-24" {...sectionMotion}>
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 px-6 md:flex-row md:items-end md:gap-12">
        <h2 className="max-w-xl font-extrabold uppercase leading-[0.95] tracking-tighter text-white text-[clamp(2rem,5vw,3.25rem)]">
          <span className="block">READY TO.</span>
          <span className="block">MOVE SMARTER?</span>
        </h2>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-end md:w-auto">
          <motion.button
            type="button"
            className="rounded-md bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-bg hover:opacity-95"
            {...buttonHoverProps}
          >
            GET THE APP
          </motion.button>
          <motion.button
            type="button"
            className="rounded-md bg-brand-bg px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:opacity-95"
            {...buttonHoverProps}
          >
            TALK TO US
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
