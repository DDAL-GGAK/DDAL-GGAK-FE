import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "styles/theme";
import { useSelector } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { RootState } from "redux/store";

const queryClient = new QueryClient();

function Providers({ children }: { children: React.ReactNode }) {
  const isDark = useSelector((state: RootState) => state.themeToggle);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          {children}
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default Providers;
