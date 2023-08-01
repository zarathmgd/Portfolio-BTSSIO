import { Box, Typography } from "@mui/material";
import ProjectContent from "./ProjectContent";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

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
        className="project-content"
        sx={{
          maxWidth: "775px",
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "start" },
          rowGap: "40px",
          position: "relative",
        }}
      >
        <Typography
          variant="h2"
          id="project"
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
          Projects
        </Typography>
        <Typography variant="h3">What did i do ?</Typography>
        <ProjectContent
          projectName="By Pizza"
          projectInformations="BY PIZZA is a pizza restaurant located in France. The website presents the company with its history, the menus offered by the
          restaurant and some informations about BY PIZZA."
          link={"https://zarathmgd.github.io/bypizza-react/"}
        />
        <ProjectContent
          projectName="Nothing"
          projectInformations="NOTHING is an english perfume brand.
          In the website, you can find the story about the industry, the products that are proposed and more informations"
          elementClassName={"nothing-project"}
          link={"https://zarathmgd.github.io/nothing-react/"}
        />
      </Box>
    </Box>
  );
}
