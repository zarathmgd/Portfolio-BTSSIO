import { ThemeProvider } from "@emotion/react";
import { CssBaseline, Container } from "@mui/material";
import { useMode, ColorModeContext } from "./theme/ThemeProvider";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";

export function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth={false} disableGutters sx={{ p: { xs: 2, md: 0 } }}>
          <Home />
          <About />
          <Project />
          <Contact />
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
