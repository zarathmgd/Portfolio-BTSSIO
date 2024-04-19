import { Box, Button, Grid, Typography } from "@mui/material";
import { motion, useInView, useAnimation } from "framer-motion";
import AboutContent from "./AboutContent";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../Context";

export default function About() {
  const { skills } = useContext(AppContext);
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
      transition={{ duration: 1, delay: 0.3 }}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: { xs: "125px", md: "150px" },
      }}
    >
      <Box
        className="about-content"
        sx={{
          maxWidth: "775px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: { xs: "center", md: "start" },
          rowGap: "40px",
          position: "relative",
          textAlign: { xs: "center", md: "start" },
          m: 0,
        }}
      >
        <Typography
          variant="h2"
          id="about"
          sx={{
            position: "relative",

            "::after": {
              content: "''",
              position: "absolute",
              left: { xs: 50, md: 0 },
              bottom: -10,
              width: "40%",
              height: "3px",
              backgroundColor: "primary.main",
            },
          }}
        >
          About me
        </Typography>
        <AboutContent
          title={"Who am i ?"}
          textOne={"I'm a 19 years old self-taught student in IT. I live in France, near Paris"}
          textTwo={"I go to the gym to work on my physique and I love cooking healthy and tasty meals."}
        />
        <AboutContent
          title={"What I do ?"}
          textOne={
            "I learnt web development with online courses by starting with HTML, CSS and Javascript. After that, I learnt about Typescript, React & MUI. Having an interest in digital, I continued with graphic design. I now want to train in data and digital marketing in order to have a versatile profile to become a project manager."
          }
        />
      </Box>
      <Box
        className="skills"
        sx={{
          maxWidth: { xs: "750px", md: "775px" },
          height: "fit-content",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "start" },
          alignItems: "center",
          columnGap: "40px",
          position: "relative",
          marginTop: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            position: "relative",
            height: "100%",
            display: "flex",
            alignItems: "center",
            "::after": {
              content: "''",
              position: "absolute",
              left: { xs: "25%", md: "150%" },
              bottom: { xs: -5, md: "inherit" },
              width: { xs: "50%", md: "1px" },
              height: { xs: "1px", md: "150%" },
              backgroundColor: "primary.main",
            },
          }}
        >
          Skills
        </Typography>
        <Grid
          columnGap={2}
          rowGap={1}
          container
          sx={{
            m: 0,
            marginTop: { xs: 3, md: 0 },
            maxWidth: { xs: "540px", md: "none" },
            justifyContent: { xs: "center", md: "start" },
            alignItems: "center",
          }}
        >
          {skills.map(({ id, name }: { id: number; name: string }) => {
            return (
              <Grid item key={id}>
                <Button
                  variant="outlined"
                  sx={{
                    width: "110px",
                    borderColor: "primary.main",
                    fontSize: ".7rem",
                    ":hover": { backgroundColor: "primary.hover" },
                  }}
                >
                  {name}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
