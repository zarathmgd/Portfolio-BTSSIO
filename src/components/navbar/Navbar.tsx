import { Box, useTheme, Link, AppBar, Toolbar, Typography } from "@mui/material";
import DarkmodeLogo from "../../assets/darkmode-logo.png";
import LightmodeLogo from "../../assets/lightmode-logo.png";
import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme/ThemeProvider";

export default function Home() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [isMenu, setIsMenu] = useState<boolean>(false);

  return (
    <AppBar
      sx={{
        position: "absolute",
        marginTop: ".8%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar
        disableGutters
        sx={{ width: { xs: "90%", md: "40%" }, display: "flex", justifyContent: "space-between", color: "primary.main" }}
      >
        <img src={theme.palette.mode === "light" ? LightmodeLogo : DarkmodeLogo} alt="Z Logo" />
        <Box
          component="ul"
          sx={{
            position: { xs: "absolute", md: "relative" },
            left: { xs: "50%", md: "inherit" },
            transform: { xs: "translateX(-50%)", md: "none" },
            top: { xs: "90%", md: "inherit" },
            display: { xs: isMenu ? "flex" : "none", md: "flex" },
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            boxShadow: { xs: "2px 2px 5px -1px", md: "none" },
            borderRadius: "4px",
            listStyle: "none",
            px: { xs: 5, md: 0 },
            gap: { xs: 1, md: 5 },
          }}
        >
          <Link href="#about" whiteSpace={"nowrap"} underline="none" color={"inherit"} sx={{ ":hover": { bgcolor: "primary.hover" } }}>
            A propos
          </Link>

          <Link
            href="#project"
            underline="none"
            color={"inherit"}
            sx={{
              width: "90%",
              ":hover": { bgcolor: "primary.hover" },
            }}
          >
            Projets
          </Link>

          <Link href="#veille" underline="none" color={"inherit"} sx={{ ":hover": { bgcolor: "primary.hover" } }}>
            Veille
          </Link>

          <Link href="#contact" underline="none" color={"inherit"} sx={{ ":hover": { bgcolor: "primary.hover" } }}>
            Contact
          </Link>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", columnGap: 2 }}>
          <Typography variant="body2">Menu</Typography>
          <i className="fa-solid fa-bars" onClick={() => setIsMenu(!isMenu)}></i>
        </Box>
        <Box
          className="toggle"
          sx={{ position: "relative", width: "45px", height: "25px", borderRadius: "20px", cursor: "pointer", right: 0 }}
          onClick={colorMode.toggleColorMode}
        >
          <span
            className="toggle-thumb"
            style={theme.palette.mode === "light" ? { transform: "translateX(23px)" } : { transform: "translateX(0)" }}
          >
            <i className={theme.palette.mode === "light" ? "fa-regular fa-sun" : "fa-regular fa-moon"}></i>
          </span>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
