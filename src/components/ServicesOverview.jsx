import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  buttonHoverProps,
  cardItemVariants,
  cardListVariants,
  inView,
} from "../motionPresets";

const MotionLink = motion(Link);

function IconCity({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  );
}

function IconStar({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );
}

function IconBox({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
      />
    </svg>
  );
}

function IconBriefcase({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

const cards = [
  {
    title: "CITY RIDES",
    desc: "Reliable everyday travel across town — quick pickups and routes you trust.",
    Icon: IconCity,
  },
  {
    title: "PREMIUM RIDES",
    desc: "Luxury vehicles and elevated comfort when you want more than the standard ride.",
    Icon: IconStar,
  },
  {
    title: "DELIVERY",
    desc: "Courier and parcel services with tracking from pickup through delivery.",
    Icon: IconBox,
  },
  {
    title: "BUSINESS",
    desc: "Corporate travel solutions, reporting, and controls for teams on the move.",
    Icon: IconBriefcase,
  },
];

export default function ServicesOverview() {
  return (
    <section id="browse-services" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col justify-between gap-12 md:mb-16 md:flex-row md:items-end">
          <h2 className="font-extrabold uppercase leading-[0.95] tracking-tighter text-white text-[clamp(2rem,5vw,3.5rem)]">
            <span className="block">ONE APP.</span>
            <span className="block">EVERY JOURNEY.</span>
          </h2>
          <MotionLink
            to="/services"
            className="shrink-0 self-start text-sm font-bold uppercase tracking-wide text-white hover:text-brand-orange md:self-auto"
            {...buttonHoverProps}
          >
            VIEW SERVICES
          </MotionLink>
        </div>

        <motion.div
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={cardListVariants}
        >
          {cards.map(({ title, desc, Icon }) => (
            <motion.article
              key={title}
              className="border border-white/[0.06] p-6"
              variants={cardItemVariants}
            >
              <Icon className="h-8 w-8 text-white" />
              <h3 className="mt-6 font-bold uppercase tracking-tight text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-gray">{desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
