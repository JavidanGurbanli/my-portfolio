import type { Variants, Easing } from "framer-motion";

const smoothEasing = [0.22, 0.8, 0.38, 0.98] as unknown as Easing;

export const container: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, delay: 0, ease: smoothEasing } },
};

export const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: smoothEasing } },
};

export const liftHover = { y: -8, scale: 1.02 };

export const ctaHover = { scale: 1.06 };

export const chevronAnim = { y: [0, -10, 0], transition: { repeat: Infinity, duration: 2.2, ease: smoothEasing } };
