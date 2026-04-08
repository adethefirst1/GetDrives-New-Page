import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PATH_DOWNLOAD } from "../ctaCopy";
import { useAccessibleMotion } from "../motionPresets";

const MotionLink = motion(Link);

const tags = [
  "FAIR PRICING",
  "CHOOSE DRIVER",
  "SAFETY FIRST",
  "24/7 SUPPORT",
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
            src="/homepage-pov.png"
            alt="Driver using GPS navigation on a sunny highway"
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
          <h2 className="font-extrabold uppercase leading-[0.95] tracking-tighter text-white text-[clamp(1.75rem,4vw,2.75rem)]">
            <span className="block">YOUR FARE.</span>
            <span className="block">YOUR DRIVER.</span>
            <span className="block">YOUR RIDE.</span>
          </h2>
          <p className="w-full max-w-[90%] text-base leading-relaxed sm:max-w-xl text-brand-gray">
            GetDrives is a platform that empowers riders by giving them the freedom to
            choose their driver and negotiate their fare. No more surge pricing or
            hidden fees.
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-sm border border-gray-700 px-3 py-1.5 text-[11px] font-medium uppercase text-white"
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
            DOWNLOAD THE APP
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
}
