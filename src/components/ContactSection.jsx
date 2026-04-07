import { motion } from "framer-motion";
import { buttonHoverProps } from "../motionPresets";

function IconPhone({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function IconGlobe({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  );
}

function IconMail({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function IconMap({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-orange">
            GET IN TOUCH
          </p>
          <h2 className="mt-4 font-extrabold uppercase leading-[0.95] tracking-tighter text-white text-[clamp(1.75rem,4vw,2.5rem)]">
            <span className="block">{"WE'D LOVE TO"}</span>
            <span className="block">HEAR FROM YOU.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-brand-gray">
            Have a question, partnership idea, or press inquiry? Send us a
            message — our team will get back to you.
          </p>

          <ul className="mt-10 space-y-8 text-sm text-brand-gray">
            <li className="flex gap-4">
              <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-white" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-white">
                  CALL US
                </p>
                <p className="mt-2 leading-relaxed">+234 812 345 6789</p>
                <p className="leading-relaxed">+234 907 654 3210</p>
              </div>
            </li>
            <li className="flex gap-4">
              <IconGlobe className="mt-0.5 h-5 w-5 shrink-0 text-white" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-white">
                  WEBSITE
                </p>
                <p className="mt-2">
                  <a
                    href="https://www.getdrives.com"
                    className="hover:text-white"
                  >
                    www.getdrives.com
                  </a>
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <IconMail className="mt-0.5 h-5 w-5 shrink-0 text-white" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-white">
                  EMAIL
                </p>
                <p className="mt-2">
                  <a
                    href="mailto:hello@getdrives.com"
                    className="hover:text-white"
                  >
                    hello@getdrives.com
                  </a>
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <IconMap className="mt-0.5 h-5 w-5 shrink-0 text-white" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-white">
                  HEADQUARTERS
                </p>
                <p className="mt-2 leading-relaxed">
                  15 Aguiyi Ironsi Street, Maitama, Abuja, Nigeria
                </p>
              </div>
            </li>
          </ul>
        </div>

        <form
          className="space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full rounded-md border border-gray-800 bg-transparent px-4 py-3 text-sm text-white placeholder:text-brand-gray focus:border-brand-orange focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full rounded-md border border-gray-800 bg-transparent px-4 py-3 text-sm text-white placeholder:text-brand-gray focus:border-brand-orange focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="subject" className="sr-only">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              className="w-full rounded-md border border-gray-800 bg-transparent px-4 py-3 text-sm text-white placeholder:text-brand-gray focus:border-brand-orange focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Message"
              className="w-full resize-y rounded-md border border-gray-800 bg-transparent px-4 py-3 text-sm text-white placeholder:text-brand-gray focus:border-brand-orange focus:outline-none"
            />
          </div>
          <motion.button
            type="submit"
            className="w-full rounded-md bg-brand-orange px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:opacity-95 md:w-auto"
            {...buttonHoverProps}
          >
            SEND MESSAGE
          </motion.button>
        </form>
      </div>
    </section>
  );
}
