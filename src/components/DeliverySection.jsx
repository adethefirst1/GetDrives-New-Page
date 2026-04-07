import { motion } from "framer-motion";
import FlowImageCluster from "./FlowImageCluster";
import TagRow from "./TagRow";
import { buttonHoverProps, inView, splitTransition } from "../motionPresets";

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
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={splitTransition}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
            {"02 — LOGISTICS & DELIVERY"}
          </p>
          <h2 className="font-extrabold uppercase leading-[0.95] tracking-tighter text-[clamp(1.75rem,4vw,2.75rem)] text-white">
            <span className="block">SEND IT.</span>
            <span className="block">TRACK IT.</span>
            <span className="block">DONE.</span>
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-brand-gray">
            Door-to-door same-day delivery. Set your price, watch it move in
            real-time, and get confirmation the moment it arrives.
          </p>
          <TagRow tags={deliveryTags} />
          <motion.button
            type="button"
            className="mt-2 w-full rounded-md bg-brand-orange px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white md:max-w-md"
            {...buttonHoverProps}
          >
            SEND A PACKAGE
          </motion.button>
        </motion.div>

        <motion.div
          className="relative lg:max-w-none lg:w-[min(100%,520px)] lg:translate-x-4 xl:translate-x-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={inView}
          transition={splitTransition}
        >
          <FlowImageCluster images={imgs} alts={alts} />
        </motion.div>
      </div>
    </section>
  );
}
