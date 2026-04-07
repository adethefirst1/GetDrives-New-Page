import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { buttonHoverProps } from "../motionPresets";

const MotionLink = motion(Link);

const inactive = "text-white hover:text-brand-orange";
const linkClass = ({ isActive }) =>
  `whitespace-nowrap uppercase transition-colors ${
    isActive ? "text-brand-orange" : inactive
  }`;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-brand-bg/95 backdrop-blur-sm">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="relative z-10 shrink-0">
          <Logo />
        </Link>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 gap-8 text-[11px] font-semibold tracking-[0.2em] lg:flex"
          aria-label="Primary"
        >
          <NavLink to="/" end className={linkClass}>
            HOME
          </NavLink>
          <NavLink to="/services" className={linkClass}>
            SERVICES
          </NavLink>
          <NavLink to="/drive-with-us" className={linkClass}>
            DRIVE WITH US
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            ABOUT
          </NavLink>
        </nav>

        <MotionLink
          to="/drive-with-us"
          className="relative z-10 rounded-md bg-brand-orange px-6 py-3.5 text-xs font-bold uppercase tracking-wide text-white hover:opacity-95"
          {...buttonHoverProps}
        >
          START DRIVING
        </MotionLink>
      </div>

      <nav
        className="flex flex-wrap justify-center gap-4 border-t border-white/5 px-6 py-3 text-[11px] font-semibold tracking-[0.2em] lg:hidden"
        aria-label="Primary mobile"
      >
        <NavLink to="/" end className={linkClass}>
          HOME
        </NavLink>
        <NavLink to="/services" className={linkClass}>
          SERVICES
        </NavLink>
        <NavLink to="/drive-with-us" className={linkClass}>
          DRIVE WITH US
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          ABOUT
        </NavLink>
      </nav>
    </header>
  );
}
