import { Variants } from 'types';

/* Component Mount motion */
export const defaultVariants: Variants = {
  from: { opacity: 0 },
  to: {
    opacity: 1,
    transition: {
      duration: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.15,
    },
  },
};

/* Modal motion */
const MODAL_EASE = 'easeInOut';

export const modalCardVariants: Variants = {
  from: {
    opacity: 0,
    y: 20,
    transition: {
      opacity: { duration: 0.15, ease: MODAL_EASE },
      y: { duration: 0.15, ease: MODAL_EASE },
    },
  },
  to: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 0.15, ease: MODAL_EASE },
      y: { duration: 0.15, ease: MODAL_EASE },
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      opacity: { duration: 0.15, ease: MODAL_EASE },
      y: { duration: 0.15, ease: MODAL_EASE },
    },
  },
};

/* Nav */
export const linkVariants = {
  from: { opacity: 0 },
  to: { opacity: 1, transition: { duration: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

export const mountVariants = {
  from: { opacity: 0, transition: { duration: 0.5 } },
  to: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
};
