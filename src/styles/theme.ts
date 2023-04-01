import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  pointColor: '#30B198',
  subColor: '#FFC857',
  accentColor: '#EF476F',
  background: '#F2F2F2',
  transparentBackground: 'rgba(245, 246, 247, 0.65)',
  color: '#333333',
  transparentColor: 'rgba(43, 43, 43, 0.65)',
  transitionOption: 'ease-in-out 0.15s',
  pointColorLight: 'rgb(68, 197, 172)',

  /* nav */
  navBackground: '#FFFFFF',
  navLinkBackground: '#D9D9D9',
  borderColor: '#000000',

  /* login */
  loginDisable: '#C9D5DB',
  loginBackground: '#F8FAFB',
  validColor: '#30B198',
  errorColor: '#EF476F',
};

export const darkTheme: DefaultTheme = {
  pointColor: '#30B198',
  subColor: '#FFC857',
  accentColor: '#EF476F',
  pointColorLight: 'rgb(68, 197, 172)',
  background: '#2B2B2B',
  transparentBackground: 'rgba(43, 43, 43, 0.65)',
  color: '#F5F6F7',
  transparentColor: 'rgba(245, 246, 247, 0.65)',
  transitionOption: 'ease-in-out 0.15s',

  /* nav */
  navBackground: '#111',
  navLinkBackground: '#D9D9D9',
  borderColor: 'rgba(222,222,222,0.2)',

  /* login */
  loginDisable: '#C9D5DB',
  loginBackground: '#F8FAFB',
  validColor: '#30B198',
  errorColor: '#EF476F',
};
