/** Subtle motion presets — respects prefers-reduced-motion (opacity-only when reduced) */

import { useReducedMotion } from "framer-motion";

export const inView = { once: true, margin: "-100px" };

export function useAccessibleMotion() {
  const reduce = useReducedMotion();
  const ease = "easeOut";

  const tr = (full, reduced = Math.min(full * 0.72, 0.45)) => ({
    duration: reduce ? reduced : full,
    ease,
  });

  const buttonHoverProps = reduce
    ? {
        whileHover: { scale: 1 },
        whileTap: { scale: 1 },
        transition: { type: "tween", ease, duration: 0.15 },
      }
    : {
        whileHover: { scale: 1.03 },
        whileTap: { scale: 0.98 },
        transition: { type: "tween", ease, duration: 0.2 },
      };

  const heroTextBlock = {
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 30 },
    animate: reduce ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: tr(0.6, 0.45),
  };

  const heroImageBlock = {
    initial: reduce ? { opacity: 0 } : { opacity: 0, x: 30 },
    animate: reduce ? { opacity: 1 } : { opacity: 1, x: 0 },
    transition: tr(0.55, 0.4),
  };

  const splitText = {
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    whileInView: reduce ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport: inView,
    transition: tr(0.5, 0.38),
  };

  const splitImageLeft = {
    initial: reduce ? { opacity: 0 } : { opacity: 0, x: -30 },
    whileInView: reduce ? { opacity: 1 } : { opacity: 1, x: 0 },
    viewport: inView,
    transition: tr(0.5, 0.38),
  };

  const splitImageRight = {
    initial: reduce ? { opacity: 0 } : { opacity: 0, x: 30 },
    whileInView: reduce ? { opacity: 1 } : { opacity: 1, x: 0 },
    viewport: inView,
    transition: tr(0.5, 0.38),
  };

  const ctaSection = {
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    whileInView: reduce ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: tr(0.55, 0.42),
  };

  const cardListVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0.05 : 0.1,
      },
    },
  };

  const cardItemVariants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
    show: reduce
      ? {
          opacity: 1,
          transition: { duration: 0.38, ease },
        }
      : {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease },
        },
  };

  return {
    buttonHoverProps,
    heroTextBlock,
    heroImageBlock,
    splitText,
    splitImageLeft,
    splitImageRight,
    ctaSection,
    cardListVariants,
    cardItemVariants,
  };
}
