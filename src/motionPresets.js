/** Subtle motion presets — durations 0.4–0.6s, easeOut, small movement only */

export const inView = { once: true, margin: "-100px" };

export const splitTransition = { duration: 0.5, ease: "easeOut" };

export const cardListVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const cardItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const buttonHoverProps = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 },
  transition: { type: "tween", ease: "easeOut", duration: 0.2 },
};
