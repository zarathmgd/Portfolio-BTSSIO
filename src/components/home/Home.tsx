import { Box, Button, Typography } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Photo from "../../assets/Photo Zarath-Portfolio.png";

export default function Home() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Navbar />
      <Box
        className="home-content"
        sx={{
          width: "40%",
          maxWidth: "40%",
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          columnGap: "150px",
          position: "relative",
          marginTop: "200px",
        }}
      >
        <Box className="main-content">
          <Box
            className="informations"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "start" },
              position: "relative",
              top: { xs: 20, md: 0 },
              rowGap: "20px",
              textAlign: { xs: "center", md: "start" },
            }}
          >
            <Box>
              <Typography variant="body2">Bonjour, je suis</Typography>
              <Typography variant="h1">Zarath Mougamadou</Typography>
            </Box>
            <Typography variant="body2">
              Etudiant en BTS SIO option SLAM et alternant au sein de Disneyland Paris. <br /> Voici mon portfolio. <br />
            </Typography>
            <Button
              variant="outlined"
              sx={{ px: "25px", borderColor: "primary.main", ":hover": { backgroundColor: "primary.hover" } }}
              href="#about"
            >
              Plus d'informations
            </Button>
          </Box>
        </Box>
        <Box
          className="identity-photo"
          sx={{
            width: "200px",
            position: "relative",
            backgroundColor: "#101010",
            border: "1px solid",
            borderColor: "primary.main",
            borderRadius: "8px",
            "::before": {
              content: "''",
              width: "100%",
              height: "100%",
              position: "absolute",
              left: 8,
              top: 8,
              border: "1px solid",
              borderRadius: "8px",
              zIndex: -1,
            },
          }}
        >
          <img src={Photo} alt="photo of me" />
        </Box>
      </Box>
    </Box>
  );
}
