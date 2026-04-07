import { Link } from "react-router-dom";

const homeCompany = ["About Us", "Careers", "Press", "Blog"];
const homeServices = [
  "City Rides",
  "Delivery",
  "Business",
  "Premium",
];
const homeDrivers = [
  "Become a Driver",
  "Requirements",
  "Benefits",
];

const aboutCompany = ["About Us", "Support", "Press", "Blog"];
const aboutServices = ["Get Ride", "Get Lift", "Delivery", "Renting"];
const aboutDrivers = [
  "Sign up to drive",
  "Earnings",
  "Support",
  "Safety",
];

function LinkColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white">
        {title}
      </h3>
      <ul className="space-y-3 text-sm text-brand-gray">
        {links.map((label) => (
          <li key={label}>
            {label === "About Us" ? (
              <Link to="/about" className="hover:text-white">
                {label}
              </Link>
            ) : (
              <a
                href="#"
                className="hover:text-white"
                aria-label={`${label} (page coming soon)`}
                onClick={(e) => e.preventDefault()}
              >
                {label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer({ variant = "home" }) {
  const isAbout = variant === "about";
  const companyLinks = isAbout ? aboutCompany : homeCompany;
  const serviceLinks = isAbout ? aboutServices : homeServices;
  const driverLinks = isAbout ? aboutDrivers : homeDrivers;
  const year = isAbout ? "2023" : "2024";

  return (
    <footer className="border-t border-white/10 bg-brand-bg py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-12">
          <div className="max-w-sm">
            <a
              href="/"
              className="inline-block text-xl font-extrabold tracking-tight text-white"
            >
              GetDrives
            </a>
            <p className="mt-4 text-sm leading-relaxed text-brand-gray">
              We&apos;re here to reinvent transportation. One ride at a time.
              Join the revolution. Move with us.
            </p>
          </div>
          <LinkColumn title="COMPANY" links={companyLinks} />
          <LinkColumn title="SERVICES" links={serviceLinks} />
          <LinkColumn title="DRIVERS" links={driverLinks} />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-brand-gray md:flex-row md:items-center md:justify-between">
          <p>© {year} GetDrives. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <a
              href="#"
              className="inline-block min-h-[44px] py-2 hover:text-white"
              aria-label="Privacy policy (coming soon)"
              onClick={(e) => e.preventDefault()}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="inline-block min-h-[44px] py-2 hover:text-white"
              aria-label="Terms of service (coming soon)"
              onClick={(e) => e.preventDefault()}
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="inline-block min-h-[44px] py-2 hover:text-white"
              aria-label="Cookie policy (coming soon)"
              onClick={(e) => e.preventDefault()}
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
