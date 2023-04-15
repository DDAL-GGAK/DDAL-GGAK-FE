import styled from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    pointColor: string;
    subColor: string;
    accentColor: string;
    background: string;
    transparentBackground: string;
    color: string;
    transparentColor: string;
    transitionOption: string;
    pointColorLight: string;
    boxShadow: string;

    /* nav */
    navBackground: string;
    navLinkBackground: string;
    borderColor: string;

    /* login */
    loginDisable: string;
    loginBackground: string;
    validColor: string;
    errorColor: string;

    /* ticket */
    ticketHover: string;
  }
}
