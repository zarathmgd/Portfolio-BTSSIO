import { Box, Button, Typography, Divider, Grid, Link } from "@mui/material";
import { useInView, useAnimation, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import CV from "../../assets/CV.pdf";
import syntheseE5 from "../../assets/8-1 - BTS SIO - 2025 - Annexe 8-1 - Epreuve E5 - Tableau de synthese.pdf";

export default function Contact() {
  const contacts = [
    { id: 0, name: "Email", icon: "fa-regular fa-envelope", link: "mailto: zarathmougamadou@gmail.com" },
    { id: 1, name: "Linkedin", icon: "fa-brands fa-linkedin", link: "https://www.linkedin.com/in/zarathmougamadou/" },
    { id: 2, name: "Tableau de synthèse E5", icon: "fa-solid fa-file-pdf", link: syntheseE5 },
    { id: 3, name: "CV", icon: "fa-regular fa-file", link: CV },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <Box
      ref={ref}
      component={motion.div}
      variants={{
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1, delay: 0.2 }}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: { xs: "125px", md: "150px" },
      }}
    >
      <Box
        className="contact-content"
        sx={{
          maxWidth: "40%",
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "start" },
          rowGap: "40px",
          position: "relative",
        }}
      >
        <Typography
          variant="h2"
          id="contact"
          sx={{
            position: "relative",

            "::after": {
              content: "''",
              position: "absolute",
              left: { xs: "50%", md: 0 },
              transform: { xs: "translateX(-50%)", md: "none" },
              bottom: -10,
              width: "40%",
              height: "3px",
              backgroundColor: "primary.main",
            },
          }}
        >
          Contact
        </Typography>
        <Typography variant="h3">Mes contacts ?</Typography>
        <Typography variant="body2" sx={{ textAlign: { xs: "center", md: "start" } }}>
          Vous trouverez ci-dessous mes contacts sur différentes plateformes.
        </Typography>
        <Box
          className="square"
          sx={{
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: "rotate(45deg)",
            border: "1px solid",
            borderColor: "primary.main",
            alignSelf: "center",
          }}
        >
          <i className="fa-solid fa-arrow-down"></i>
        </Box>

        <Grid container columnGap={2} sx={{ marginBottom: -3, justifyContent: "center" }}>
          {contacts.map(({ id, name, icon, link }: any) => {
            return (
              <Grid item key={id}>
                <Button
                  component={Link}
                  variant="outlined"
                  href={link}
                  target="_blank"
                  download={name === "CV" ? "CV.pdf" : undefined}
                  sx={{
                    width: { xs: 300, md: 300 },
                    display: "flex",
                    justifyContent: "space-between",
                    alignSelf: "center",
                    marginTop: 2,
                    p: 3,
                    borderColor: "rgba(153, 153, 153, 0.5)",
                    ":hover": { backgroundColor: "primary.hover" },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", columnGap: 1, fontSize: "1rem", textTransform: "initial" }}>
                    <i className={icon}></i>
                    {name}
                  </Box>
                  <i className="fa-solid fa-arrow-up"></i>
                </Button>
              </Grid>
            );
          })}
        </Grid>
        <Divider sx={{ width: "100%", height: 1, backgroundColor: "primary.main" }} />
        <Typography
          variant="body2"
          sx={{ marginTop: -2, marginBottom: { xs: 1, md: 3 }, alignSelf: "center", textAlign: "center", fontWeight: 200 }}
        >
          Designed & Built by Zarath Mougamadou <br /> © 2025 | All rights reserved
        </Typography>
      </Box>
    </Box>
  );
}
