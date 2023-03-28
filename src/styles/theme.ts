import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  background: '#111',
  transparentBackground: 'rgba(43, 43, 43, 0.65)',
  color: '#F5F6F7',
  transparentColor: 'rgba(245, 246, 247, 0.65)',
  pointColor: '#30B198',
  pointColorLight: 'rgb(68, 197, 172)',
  transitionOption: 'ease-in-out 0.15s',

  /* nav */
  navBackground: '#222222',
  navLinkBackground: '#D9D9D9',
  borderColor: 'rgba(222,222,222,0.2)',

  /* login */
  loginDisable: '#C9D5DB',
  loginBackground: '#F8FAFB',
};

export const lightTheme: DefaultTheme = {
  background: '#F5F6F7',
  transparentBackground: 'rgba(245, 246, 247, 0.65)',
  color: '#2b2b2b',
  transparentColor: 'rgba(43, 43, 43, 0.65)',
  pointColor: '#30B198',
  pointColorLight: 'rgb(68, 197, 172)',
  transitionOption: 'ease-in-out 0.15s',

  /* nav */
  navBackground: '#D9D9D9',
  navLinkBackground: '#666666',
  borderColor: '#000000',

  /* login */
  loginDisable: '#C9D5DB',
  loginBackground: '#F8FAFB',
};
