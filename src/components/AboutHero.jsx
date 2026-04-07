import { motion } from "framer-motion";
import { useAccessibleMotion } from "../motionPresets";

export default function AboutHero() {
  const m = useAccessibleMotion();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-brand-orange">
          ABOUT GETDRIVES
        </p>
        <h1 className="max-w-5xl font-extrabold uppercase leading-[0.95] tracking-tighter text-[clamp(2.5rem,8vw,5rem)] md:text-7xl">
          <span className="block text-white">BUILT FOR</span>
          <span className="block text-brand-orange">AFRICAN CITIES.</span>
        </h1>
        <p className="mt-8 w-full max-w-[90%] text-base leading-relaxed text-brand-gray sm:max-w-2xl">
          GetDrives was born in Nigeria from a simple idea: that moving through
          African cities should be safe, fair, and built for real life. We&apos;re
          creating technology where riders set the terms and drivers compete, so
          communities can connect without compromise.
        </p>
        <motion.a
          href="#contact"
          className="mt-10 block w-full rounded-md bg-brand-orange px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white hover:opacity-95 md:inline-block md:w-auto"
          {...m.buttonHoverProps}
        >
          GET IN TOUCH
        </motion.a>
      </div>
    </section>
  );
}
