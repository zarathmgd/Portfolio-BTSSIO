import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { createContext, useState, useMemo } from "react";
export const themeSettings = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          background: {
            default: "#101010",
          },

          i: {
            left: "8%",
          },
          primary: {
            main: "#F0F0F0",
            hover: "rgba(153 153, 153, 0.2)",
          },

          secondary: {
            main: "#222",
          },
        }
      : {
          background: {
            default: "#F0F0F0",
          },

          i: {
            right: "8%",
          },
          primary: {
            main: "#222",
            hover: "rgba(153, 153, 153, 0.2)",
          },

          secondary: {
            main: "#F0F0F0",
          },
        }),
  },

  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 300,
    },

    h2: {
      fontSize: "2rem",
      fontWeight: 500,
    },

    h3: {
      fontSize: "1.5erem",
      fontWeight: 400,
    },

    h4: {
      fontSize: "1.3rem",
      fontWeight: 400,
    },

    body2: {
      fontSize: "0.9rem",
      fontWeight: 300,
    },

    button: {
      fontWeight: 400,
    },
  },
});

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState<PaletteMode>("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode((prev: PaletteMode) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo<any>(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
