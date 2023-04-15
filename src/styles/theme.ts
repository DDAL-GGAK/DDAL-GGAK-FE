import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  pointColor: '#30B198',
  subColor: '#FFC857',
  accentColor: '#EF476F',
  background: '#FFFFFF',
  transparentBackground: 'rgba(245, 246, 247, 0.65)',
  color: '#333333',
  transparentColor: 'rgba(43, 43, 43, 0.65)',
  transitionOption: 'ease-in-out 0.15s',
  pointColorLight: 'rgb(68, 197, 172)',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',

  /* nav */
  navBackground: '#F2F2F2',
  navLinkBackground: '#D9D9D9',
  borderColor: '#000000',

  /* login */
  loginDisable: '#C9D5DB',
  loginBackground: '#F8FAFB',
  validColor: '#30B198',
  errorColor: '#EF476F',

  /* ticket */
  ticketHover: '#1C1D2A',
};

export const darkTheme: DefaultTheme = {
  pointColor: '#30B198',
  subColor: '#FFC857',
  accentColor: '#EF476F',
  pointColorLight: 'rgb(68, 197, 172)',
  background: '#191A23',
  transparentBackground: '#21232E',
  color: '#E2E2E2',
  transparentColor: 'rgba(245, 246, 247, 0.65)',
  transitionOption: 'ease-in-out 0.15s',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',

  /* nav */
  navBackground: '#111',
  navLinkBackground: '#D9D9D9',
  borderColor: '#2C2D3C',

  /* login */
  loginDisable: '#C9D5DB',
  loginBackground: '#F8FAFB',
  validColor: '#30B198',
  errorColor: '#EF476F',

  /* ticket */
  ticketHover: '#1C1D2A',
};
