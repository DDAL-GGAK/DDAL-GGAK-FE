/* Component Mount motion */
export const mountVariants = {
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

export const modalCardVariants = {
  from: {
    opacity: 0,
    x: -50,
    transition: {
      opacity: { duration: 0.15, ease: MODAL_EASE },
      scale: { duration: 0.15, ease: MODAL_EASE },
      y: { duration: 0.15, ease: MODAL_EASE },
    },
  },
  to: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      opacity: { duration: 0.15, ease: MODAL_EASE },
      scale: { duration: 0.15, ease: MODAL_EASE },
      y: { duration: 0.15, ease: MODAL_EASE },
    },
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: {
      opacity: { duration: 0.15, ease: MODAL_EASE },
      scale: { duration: 0.15, ease: MODAL_EASE },
      y: { duration: 0.15, ease: MODAL_EASE },
    },
  },
};
