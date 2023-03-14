import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'styles/theme';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

function Providers({ children }: { children: React.ReactNode }) {
  const isDark = useSelector((state: RootState) => state.themeToggle);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}

export default Providers;
