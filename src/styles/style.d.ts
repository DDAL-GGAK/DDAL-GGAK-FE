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
    navLinkBackground: string;
    borderColor: string;
    navBackground: string;

    /* login */
    loginDisable: string;
    loginBackground: string;
    validColor: string;
    errorColor: string;

    /* ticket */
    ticketHover: string;

    /* Design */
    sideNavBackground: string;
    sideNavCurrBorder: string;
    sideNavColor: string;
    navLinkBackground: string;
    topNavBackground: string;
    borderColor: string;
    taskCardBackground: string;
    newTaskBackground: string;
    newTaskColor: string;
    darkBorder: string;
  }
}
