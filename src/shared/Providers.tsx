import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'styles/theme';
import { useSelector } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RootState } from 'redux/store';
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient();
interface ProviderProps {
  children: React.ReactNode;
}
export function Providers({ children }: ProviderProps) {
  const isDark = useSelector((state: RootState) => state.themeToggleSlicer);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <ToastContainer />
          {children}
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
