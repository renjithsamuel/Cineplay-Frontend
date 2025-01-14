import "@/cineplay/styles/globals.css";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/styles";
import customTheme from "@/cineplay/styles/theme";
import { CssBaseline, NoSsr } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { Poppins } from "next/font/google";
import createEmotionCache from "@/cineplay/lib/utils/createEmotionCache";
import ErrorBoundary from "@/cineplay/lib/utils/errorBoundary";
import { Theme } from "@mui/material/styles";
import { PageContextProvider } from "@/cineplay/lib/context/PageContext";
import { UserContextProvider } from "@/cineplay/lib/context/UserContext";
import { GameContext, GameContextProvider } from "../lib/context/GameContext";

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const queryClient = new QueryClient();

const clientSideEmotionCache = createEmotionCache();

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  return (
    <ErrorBoundary>
      <NoSsr>
        <ThemeProvider theme={customTheme}>
          <CacheProvider value={emotionCache}>
            <QueryClientProvider client={queryClient}>
              <main className={poppins.className}>
                <GameContextProvider>
                <PageContextProvider>
                  <UserContextProvider>
                    <Component {...pageProps} />
                  </UserContextProvider>
                </PageContextProvider>
                </GameContextProvider>
              </main>
            </QueryClientProvider>
          </CacheProvider>
        </ThemeProvider>
      </NoSsr>
    </ErrorBoundary>
  );
}
