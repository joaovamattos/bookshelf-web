import { ReactNode } from "react";

import { ThemeProvider } from "styled-components";
import { useTheme } from "../hooks/useTheme";
import { AuthContextProvider } from './AuthContext';

type Props = {
  children?: ReactNode;
};

function ContextProvider({ children }: Props) {
  const { theme } = useTheme();

  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default ContextProvider;