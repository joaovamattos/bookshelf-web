import { ReactNode } from "react";

import { ThemeProvider } from "styled-components";
import { useTheme } from "../hooks/useTheme";

type Props = {
  children?: ReactNode;
};

function ContextProvider({ children }: Props) {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
}

export default ContextProvider;