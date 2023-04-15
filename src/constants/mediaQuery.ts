const DEVICES_SIZE = Object.freeze({
  MOBILES: '320px',
  MOBILEM: '480px',
  MOBILEL: '858px',
  TABLET: '1102px',
  LAPTOP: '1500px',
  LAPTOPL: '1640px',
  DESKTOP: '2560px',
});

export const DEVICES = Object.freeze({
  MOBILES: `(min-width: ${DEVICES_SIZE.MOBILES})`,
  MOBILEM: `(min-width: ${DEVICES_SIZE.MOBILEM})`,
  MOBILEL: `(min-width: ${DEVICES_SIZE.MOBILEL})`,
  TABLET: `(min-width: ${DEVICES_SIZE.TABLET})`,
  LAPTOP: `(min-width: ${DEVICES_SIZE.LAPTOP})`,
  LAPTOPL: `(min-width: ${DEVICES_SIZE.LAPTOPL})`,
  DESKTOP: `(min-width: ${DEVICES_SIZE.DESKTOP})`,
});

const TASKS_SIZE = Object.freeze({
  VIEW_SS: '555px',
  VIEW_SM: '760px',
  VIEW_SL: '850px',
  VIEW_MS: '900px',
  VIEW_MM: '1124px',
  VIEW_ML: '1440px',
  VIEW_LS: '1700px',
});

export const TASKS = Object.freeze({
  VIEW_SS: `(min-width: ${TASKS_SIZE.VIEW_SS})`,
  VIEW_SM: `(min-width: ${TASKS_SIZE.VIEW_SM})`,
  VIEW_SL: `(min-width: ${TASKS_SIZE.VIEW_SL})`,
  VIEW_MS: `(min-width: ${TASKS_SIZE.VIEW_MS})`,
  VIEW_MM: `(min-width: ${TASKS_SIZE.VIEW_MM})`,
  VIEW_ML: `(min-width: ${TASKS_SIZE.VIEW_ML})`,
  VIEW_LS: `(min-width: ${TASKS_SIZE.VIEW_LS})`,
});
