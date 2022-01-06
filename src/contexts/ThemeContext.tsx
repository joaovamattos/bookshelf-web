import React, { createContext } from "react";
import { DefaultTheme } from "styled-components";

import usePersistedState from "../hooks/usePersistedState";

import light from "../styles/theme";

interface ThemeContextData {
  theme: DefaultTheme;
}

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData
);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("THEME", light);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
