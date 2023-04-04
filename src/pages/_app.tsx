import TopBar from '@/components/global/Topbar';
import { ColorModeContext, useMode } from '@/config/themes';
import '@/styles/globals.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  const { theme, colorMode } = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <div className="app"> */}
          <main className="content">
            <TopBar />
            <Component {...pageProps} />
          </main>
          {/* </div> */}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
