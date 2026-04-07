const simpleItems = [
  "CITY RIDES",
  "PREMIUM RIDES",
  "LOGISTICS & DELIVERY",
  "CORPORATE ACCOUNTS",
  "INTERCITY TRIPS",
  "NO SURGE PRICING",
];

const items = [
  { label: "CITY RIDES", Icon: IconCar },
  { label: "PREMIUM RIDES", Icon: IconCrown },
  { label: "DELIVERY", Icon: IconBox },
  { label: "BUSINESS SERVICES", Icon: IconBrief },
  { label: "SECURE PAYMENTS", Icon: IconLock },
  { label: "24/7 SUPPORT", Icon: IconHeadset },
];

function IconCar({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 17h8M5 17h1a2 2 0 002-2V9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 002 2h1M5 17a2 2 0 100 4h14a2 2 0 100-4"
      />
    </svg>
  );
}

function IconCrown({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 3l2.5 7L12 6l4.5 4L19 3M5 21h14"
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

function IconBrief({ className }) {
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

function IconLock({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );
}

function IconHeadset({ className }) {
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

export default function CategoryStrip({ variant = "icons" }) {
  if (variant === "simple") {
    return (
      <section className="border-b border-white/[0.06] bg-brand-bg py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white md:gap-x-2 md:text-[11px]">
            {simpleItems.map((label, i) => (
              <span key={label} className="flex items-center">
                {i > 0 && (
                  <span className="mx-2 text-brand-orange md:mx-3" aria-hidden>
                    •
                  </span>
                )}
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-white/[0.06] bg-brand-bg py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 md:justify-between md:gap-x-6">
          {items.map(({ label, Icon }, i) => (
            <span
              key={label}
              className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white md:text-[11px]"
            >
              {i > 0 && (
                <span className="hidden text-brand-orange md:inline" aria-hidden>
                  ·
                </span>
              )}
              <Icon className="h-4 w-4 shrink-0 text-brand-orange" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
