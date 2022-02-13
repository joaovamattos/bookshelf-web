import type { AppProps } from "next/app";

import ContextProvider from "../contexts";
import { ThemeProvider } from "../contexts/ThemeContext";
import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ContextProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ContextProvider>
    </ThemeProvider>
  );
}
export default MyApp;