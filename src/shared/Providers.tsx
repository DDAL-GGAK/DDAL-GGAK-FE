import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'styles/theme';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

function Providers({ children }: { children: React.ReactNode }) {
  const isDark = useSelector((state: RootState) => state.themeToggle);

  return (
    <BrowserRouter>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default Providers;
