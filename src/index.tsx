import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from 'styles/GlobalStyle';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
