import { Link } from "react-router-dom";
import Logo from "./Logo";

const aboutCompany = ["About Us", "Support", "Press", "Blog"];
const aboutServices = ["Get Ride", "Get Lift", "Delivery", "Renting"];
const aboutDrivers = [
  "Sign up to drive",
  "Earnings",
  "Support",
  "Safety",
];

const homeCompany = ["About Us", "Careers", "Press", "Blog"];
const homeServices = ["City Rides", "Premium", "Delivery", "Business"];
const homeDrivers = [
  "Sign Up to Drive",
  "Earnings",
  "Support",
  "Safety",
];

function FooterLink({ href, to, children }) {
  const className =
    "text-sm font-normal text-[#666666] transition-colors hover:text-white";
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      {children}
    </a>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div className="text-left">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white">
        {title}
      </h3>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

export default function Footer({ variant = "home" }) {
  const isAbout = variant === "about";

  if (isAbout) {
    return (
      <footer className="border-t border-white/10 bg-brand-bg py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-12">
            <div className="max-w-sm">
              <Link to="/" className="inline-block" aria-label="GetDrives home">
                <Logo />
              </Link>
              <p className="mt-4 text-sm font-normal leading-relaxed text-[#666666]">
                We&apos;re here to reinvent transportation. One ride at a time.
                Join the revolution. Move with us.
              </p>
            </div>
            <FooterColumn title="COMPANY">
              {aboutCompany.map((label) => (
                <li key={label}>
                  {label === "About Us" ? (
                    <FooterLink to="/about">{label}</FooterLink>
                  ) : label === "Support" ? (
                    <FooterLink to="/about#contact">{label}</FooterLink>
                  ) : (
                    <FooterLink href="#">{label}</FooterLink>
                  )}
                </li>
              ))}
            </FooterColumn>
            <FooterColumn title="SERVICES">
              {aboutServices.map((label) => (
                <li key={label}>
                  <FooterLink to="/services">{label}</FooterLink>
                </li>
              ))}
            </FooterColumn>
            <FooterColumn title="DRIVERS">
              {aboutDrivers.map((label) => (
                <li key={label}>
                  {label === "Sign up to drive" ? (
                    <FooterLink to="/drive-with-us">{label}</FooterLink>
                  ) : label === "Support" ? (
                    <FooterLink to="/about#contact">{label}</FooterLink>
                  ) : (
                    <FooterLink href="#">{label}</FooterLink>
                  )}
                </li>
              ))}
            </FooterColumn>
          </div>
          <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-[#444444]">
              © {new Date().getFullYear()} GetDrives. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-x-1 text-xs text-[#444444]">
              <a href="#" className="hover:underline" onClick={(e) => e.preventDefault()}>
                Privacy Policy
              </a>
              <span aria-hidden> · </span>
              <a href="#" className="hover:underline" onClick={(e) => e.preventDefault()}>
                Terms of Service
              </a>
              <span aria-hidden> · </span>
              <a href="#" className="hover:underline" onClick={(e) => e.preventDefault()}>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-white/10 bg-brand-bg py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-12">
          <div className="max-w-sm">
            <Link to="/" className="inline-block" aria-label="GetDrives home">
              <Logo />
            </Link>
            <p className="mt-4 text-sm font-normal leading-relaxed text-[#666666]">
              Nigeria&apos;s peer-to-peer mobility platform. You set the fare. You
              choose the driver. Move on your terms.
            </p>
          </div>

          <FooterColumn title="COMPANY">
            {homeCompany.map((label) => (
              <li key={label}>
                {label === "About Us" ? (
                  <FooterLink to="/about">{label}</FooterLink>
                ) : (
                  <FooterLink href="#">{label}</FooterLink>
                )}
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="SERVICES">
            {homeServices.map((label) => (
              <li key={label}>
                <FooterLink to="/services">{label}</FooterLink>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="DRIVERS">
            {homeDrivers.map((label) => (
              <li key={label}>
                {label === "Sign Up to Drive" ? (
                  <FooterLink to="/drive-with-us">{label}</FooterLink>
                ) : label === "Support" ? (
                  <FooterLink to="/about#contact">{label}</FooterLink>
                ) : (
                  <FooterLink href="#">{label}</FooterLink>
                )}
              </li>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-left text-xs text-[#444444]">
            © 2025 GetDrives. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-1 text-xs text-[#444444] md:justify-end">
            <a href="#" className="hover:underline" onClick={(e) => e.preventDefault()}>
              Privacy Policy
            </a>
            <span aria-hidden> · </span>
            <a href="#" className="hover:underline" onClick={(e) => e.preventDefault()}>
              Terms of Service
            </a>
            <span aria-hidden> · </span>
            <a href="#" className="hover:underline" onClick={(e) => e.preventDefault()}>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
