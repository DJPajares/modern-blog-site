import React, { createContext, useMemo, useState } from 'react';
import { createTheme } from '@mui/material/styles';

type DarkModeProps = 'dark' | 'light';

export const colorToken = {
  white: '#fcfcfc',
  grey: {
    100: '#e0e0e0',
    200: '#c2c2c2',
    300: '#a3a3a3',
    400: '#858585',
    500: '#666666',
    600: '#525252',
    700: '#3d3d3d',
    800: '#292929',
    900: '#141414'
  },
  orange: {
    100: '#fff3e0',
    200: '#ffe0b2',
    300: '#ffcc80',
    400: '#ffb74d',
    500: '#ffa726',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100'
  },
  navyBlue: {
    100: '#cbd4e6',
    200: '#a9b8d5',
    300: '#879bc5',
    400: '#647fb4',
    500: '#4b659b',
    600: '#3a4f78',
    700: '#2a3856',
    800: '#192234',
    900: '#080b11'
  },
  teal: {
    100: '#e0f2f1',
    200: '#b2dfdb',
    300: '#80cbc4',
    400: '#4db6ac',
    500: '#26a69a',
    600: '#009688',
    700: '#00897b',
    800: '#00796b',
    900: '#00695c'
  }
};

export const themeSettings = (mode: DarkModeProps) => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            // palette values for dark mode
            primary: {
              main: colorToken.teal[500]
            },
            secondary: {
              main: colorToken.orange[900]
            },
            background: {
              default: colorToken.navyBlue[800],
              paper: colorToken.navyBlue[700]
              // default: colorToken.grey[900],
              // paper: colorToken.grey[800]
            },
            text: {
              primary: colorToken.white,
              secondary: colorToken.white
            }
          }
        : {
            // palette values for light mode
            primary: {
              main: colorToken.orange[900]
            },
            secondary: {
              main: colorToken.teal[500]
            },
            background: {
              default: colorToken.white,
              paper: colorToken.grey[100]
            },
            text: {
              primary: colorToken.grey[900],
              secondary: colorToken.white
            }
          })
    },
    typography: {
      fontFamily: 'Ubuntu, sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: 60
      },
      h2: {
        fontWeight: 700,
        fontSize: 50
      },
      h3: {
        fontWeight: 700,
        fontSize: 24
      },
      h4: {
        fontWeight: 700,
        fontSize: 20
      },
      h5: {
        fontWeight: 700,
        fontSize: 16
      },
      h6: {
        fontWeight: 700,
        fontSize: 14
      },
      subtitle1: {
        fontWeight: 400,
        fontSize: 12
      },
      subtitle2: {
        fontWeight: 400,
        fontSize: 10
      }
    }
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {}
});

export const useMode = () => {
  const [mode, setMode] = useState<DarkModeProps>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
      }
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return { theme, colorMode };
};
