import { Variants } from 'types';

/* Component Mount motion */
export const DEFAULT_VARIANTS: Variants = {
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

export const MODAL_CARD_VARIANTS: Variants = {
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
export const LINK_VARIANTS = {
  from: { opacity: 0 },
  to: { opacity: 1, transition: { duration: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

export const MOUNT_VARIANTS = {
  from: { opacity: 0, transition: { duration: 0.5 } },
  to: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
};

/* TaskCard */
export const PROJECTBOARD_VARIANTS = {
  from: {},
  to: {
    transition: {
      staggerChildren: 0.6,
      delayChildren: 1,
    },
  },
  exit: {},
};

export const TASKCARD_MOUNT_VARIANTS = {
  from: { opacity: 0, scale: 1, y: 20 },
  to: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0 },
};
