import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PATH_DOWNLOAD } from "../ctaCopy";
import FlowImageCluster from "./FlowImageCluster";
import TagRow from "./TagRow";
import { useAccessibleMotion } from "../motionPresets";

const MotionLink = motion(Link);

const deliveryTags = [
  "SAME-DAY",
  "SCHEDULED PICKUP",
  "BULK DELIVERY",
  "LIVE TRACKING",
];

const imgs = ["/delivery-1.jpg", "/delivery-2.jpg", "/delivery-3.jpg"];
const alts = [
  "Package handoff for delivery",
  "Phone showing live map tracking",
  "Package received at destination",
];

export default function DeliverySection() {
  const m = useAccessibleMotion();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid min-w-0 max-w-7xl items-center gap-8 px-6 md:gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div className="space-y-6" {...m.splitText}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
            02 / LOGISTICS & DELIVERY
          </p>
          <h2 className="font-extrabold uppercase leading-[0.95] tracking-tighter text-[clamp(1.75rem,4vw,2.75rem)] text-white">
            <span className="block">SEND IT.</span>
            <span className="block">TRACK IT.</span>
            <span className="block">DONE.</span>
          </h2>
          <p className="w-full max-w-[90%] text-base leading-relaxed sm:max-w-xl text-brand-gray">
            Door-to-door same-day delivery. Set your price, watch it move in
            real-time, and get confirmation the moment it arrives.
          </p>
          <TagRow tags={deliveryTags} />
          <MotionLink
            to={PATH_DOWNLOAD}
            className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-brand-orange px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white md:w-auto md:max-w-md"
            {...m.buttonHoverProps}
          >
            SEND A PACKAGE
          </MotionLink>
        </motion.div>

        <motion.div
          className="relative lg:max-w-none lg:w-[min(100%,520px)] lg:translate-x-4 xl:translate-x-8"
          {...m.splitImageRight}
        >
          <FlowImageCluster images={imgs} alts={alts} />
        </motion.div>
      </div>
    </section>
  );
}
