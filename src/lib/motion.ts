import type { Variants } from 'motion/react';

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

// يشغّل الأنيميشن مرة واحدة فقط عند ظهور العنصر
export const viewportOnce = { once: true, amount: 'some' } as const;

export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

// dir = 1 من اليسار، -1 من اليمين (لدعم RTL)
export const fadeSide = (dir: 1 | -1): Variants => ({
  hidden: { opacity: 0, x: 32 * dir },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_OUT } },
});

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 16 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};
