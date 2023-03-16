import styled from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    transparentBackground: string;
    color: string;
    transparentColor: string;
    pointColor: string;
    transitionOption: string;

    /* ColorPalette */
    PALETTE_GRAY: string;
    PALETTE_50: string;
    PALETTE_100: string;
    PALETTE_200: string;
    PALETTE_300: string;
    PALETTE_400: string;
    PALETTE_500: string;
    PALETTE_600: string;
    PALETTE_700: string;
    PALETTE_800: string;
    PALETTE_900: string;

    /* nav */
    navBackground: string;
    navLinkBackground: string;
    borderColor: string;
  }
}
