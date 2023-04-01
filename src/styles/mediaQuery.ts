interface SizesForm {
  MOBILES: string;
  MOBILEM: string;
  TABLET: string;
  LAPTOP: string;
  LAPTOPL: string;
  DESKTOP: string;
}

const SIZES: SizesForm = Object.freeze({
  MOBILES: '555px' as const,
  MOBILEM: '760px' as const,
  TABLET: '900px' as const,
  LAPTOP: '1124px' as const,
  LAPTOPL: '1440px' as const,
  DESKTOP: '1700px' as const,
});

export const DEVICES = Object.freeze({
  MOBILES: `(min-width: ${SIZES.MOBILES})` as const,
  MOBILEM: `(min-width: ${SIZES.MOBILEM})` as const,
  TABLET: `(min-width: ${SIZES.TABLET})` as const,
  LAPTOP: `(min-width: ${SIZES.LAPTOP})` as const,
  LAPTOPL: `(min-width: ${SIZES.LAPTOPL})` as const,
  DESKTOP: `(min-width: ${SIZES.DESKTOP})` as const,
});
