import { motion } from "framer-motion";
import { useAccessibleMotion } from "../motionPresets";

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

const CONTACT_EMAIL = "hello@getdrives.com";

function submitToHello(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const fd = new FormData(form);
  const name = String(fd.get("name") ?? "").trim();
  const email = String(fd.get("email") ?? "").trim();
  const subject = String(fd.get("subject") ?? "").trim();
  const message = String(fd.get("message") ?? "").trim();
  if (!email) {
    form.querySelector("#email")?.focus();
    return;
  }
  const lines = [];
  if (name) lines.push(`Name: ${name}`);
  lines.push(`Email: ${email}`);
  lines.push("");
  lines.push(message || "(No message text)");
  const body = lines.join("\n");
  const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject || "Message from GetDrives contact form"
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
}

export default function ContactSection() {
  const m = useAccessibleMotion();

  return (
    <section id="contact" className="bg-black py-16 md:py-24">
      <div className="mx-auto grid min-w-0 max-w-7xl gap-8 px-6 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-orange">
            GET IN TOUCH
          </p>
          <h2 className="mt-4 font-extrabold uppercase leading-[0.95] tracking-tighter text-white text-[clamp(1.75rem,4vw,2.5rem)]">
            <span className="block">{"WE'D LOVE TO"}</span>
            <span className="block">HEAR FROM YOU.</span>
          </h2>
          <p className="mt-6 w-full max-w-[90%] text-base leading-relaxed text-brand-gray sm:max-w-md">
            Have a question, partnership idea, or press inquiry? Send us a
            message. Our team will get back to you.
          </p>

          <ul className="mt-10 space-y-8 text-sm text-brand-gray">
            <li className="flex gap-4">
              <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-white" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-white">
                  CALL US
                </p>
                <p className="mt-2 leading-relaxed">
                  <a href="tel:+2348036232480" className="hover:text-white">
                    +234 803 623 2480
                  </a>
                </p>
                <p className="leading-relaxed">
                  <a href="tel:+2348038617226" className="hover:text-white">
                    +234 803 861 7226
                  </a>
                </p>
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
                  Suite D5, Mazado plaza, behind Juluis berger yard, Utako, Abuja
                  FCT, Nigeria.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="border border-[#333333] p-8 md:p-10 lg:p-12">
          <form className="space-y-6 text-left" onSubmit={submitToHello}>
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-normal uppercase tracking-wide text-[#666666]"
              >
                YOUR NAME
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="e.g. Emeka Johnson"
                className="min-h-[44px] w-full rounded-none border border-[#222222] bg-[#0A0A0A] px-4 py-3 text-sm text-white placeholder:text-[#888888] focus:border-[#F15A29] focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-normal uppercase tracking-wide text-[#666666]"
              >
                EMAIL ADDRESS
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="min-h-[44px] w-full rounded-none border border-[#222222] bg-[#0A0A0A] px-4 py-3 text-sm text-white placeholder:text-[#888888] focus:border-[#F15A29] focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-xs font-normal uppercase tracking-wide text-[#666666]"
              >
                SUBJECT
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                autoComplete="off"
                defaultValue="General Enquiry"
                className="min-h-[44px] w-full rounded-none border border-[#222222] bg-[#0A0A0A] px-4 py-3 text-sm text-white focus:border-[#F15A29] focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-normal uppercase tracking-wide text-[#666666]"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                autoComplete="off"
                placeholder="Tell us what's on your mind..."
                className="min-h-[140px] w-full resize-y rounded-none border border-[#222222] bg-[#0A0A0A] px-4 py-3 text-sm text-white placeholder:text-[#888888] focus:border-[#F15A29] focus:outline-none focus:ring-0"
              />
            </div>
            <motion.button
              type="submit"
              className="inline-flex min-h-[44px] items-center justify-center rounded-none bg-[#F15A29] px-10 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white hover:opacity-95"
              {...m.buttonHoverProps}
            >
              SEND MESSAGE
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
