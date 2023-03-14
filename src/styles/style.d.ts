import styled from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    transparentBackground: string;
    color: string;
    transparentColor: string;
    pointColor: string;
    transitionOption: string;
  }
}
