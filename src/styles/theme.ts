import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  background: '#2b2b2b',
  transparentBackground: 'rgba(43, 43, 43, 0.65)',
  color: '#F5F6F7',
  transparentColor: 'rgba(245, 246, 247, 0.65)',
  pointColor: '#FF681B',
  transitionOption: 'ease-in-out 0.15s',
};

export const lightTheme: DefaultTheme = {
  background: '#F5F6F7',
  transparentBackground: 'rgba(245, 246, 247, 0.65)',
  color: '#2b2b2b',
  transparentColor: 'rgba(43, 43, 43, 0.65)',
  pointColor: '#FF681B',
  transitionOption: 'ease-in-out 0.15s',
};
