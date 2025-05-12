import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { motion, useAnimation, useInView } from "framer-motion";
import ProjectContent from "./ProjectContent";
import excelImage from "../../assets/excel-microsoft-2013-application-logo-oo7x8r2rnik4ohlo.jpg";
import knimeImage from "../../assets/knime_wallpaper.jpg";
import compteRenduDtimeODB from "../../assets/Compte rendu Outil ODB DTime.pdf";
import compteRenduKnime from "../../assets/Compte rendu Outil Envoi AOP.pdf";
import modopDtimeODB from "../../assets/MODE OPERATOIRE Check DTime-ODB_V2.0.pdf";
import modopKnime from "../../assets/MODE OPERATOIRE Outil Envoi AOP KNIME.pdf";

const projects = [
  {
    projectName: "Outil Check ODB / DTime",
    projectInformations: "Le projet consiste à vérifier l'exactitude des données entre la nouvelle application de gestion des ressources humaines, DTime, et la base de données ODB à Disneyland Paris. Les données transitent par des systèmes ETL, nécessitant des tests pour confirmer leur conformité. L'équipe BFS a développé un outil pour faciliter ces tests, réalisés par des analystes financiers, en se basant sur des scénarios de dates et d'identifiants d'employés.",
    compteRenduLink: compteRenduDtimeODB,
    modeOperatoireLink: modopDtimeODB,
    image: excelImage,
    skills: [{id: 0, name: "Excel"}],
    category: "Entreprise",
  },
  {
    projectName: "Outil Envoi AOP KNIME",
    projectInformations: "Le projet vise à automatiser l'envoi de l'AOP (Annual Operating Plan) en utilisant KNIME. Auparavant réalisé manuellement via Excel, ce processus est désormais optimisé pour traiter et préparer les données budgétaires annuelles de manière plus efficace et fiable. L'outil KNIME lit les fichiers Excel, effectue les transformations nécessaires, et génère des fichiers prêts à être chargés dans les systèmes BW et ODB, réduisant ainsi le temps et les erreurs.",
    compteRenduLink: compteRenduKnime,
    modeOperatoireLink: modopKnime,
    image: knimeImage,
    skills: [{id: 0, name: "Excel"}, {id: 1, name: "KNIME"}],
    category: "Entreprise",
  },
];

export default function Project() {
  const [filter, setFilter] = useState("Tous");
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

  const handleFilterClick = (category: React.SetStateAction<string>) => {
    setFilter(category);
  };

  const filteredProjects =
    filter === "Tous"
      ? projects
      : projects.filter((project) => project.category === filter);

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
          width: "40%",
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
          Projets
        </Typography>
        <Typography variant="h3">Quelles sont mes réalisations ?</Typography>
        <Box sx={{ display: "flex", gap: 2, mb: 4, justifyContent: "center" }}>
          <Button
            variant={filter === "Tous" ? "contained" : "outlined"}
            onClick={() => handleFilterClick("Tous")}
          >
            Tous
          </Button>
          <Button
            variant={filter === "Formation" ? "contained" : "outlined"}
            onClick={() => handleFilterClick("Formation")}
          >
            Formation
          </Button>
          <Button
            variant={filter === "Entreprise" ? "contained" : "outlined"}
            onClick={() => handleFilterClick("Entreprise")}
          >
            Entreprise
          </Button>
          <Button
            variant={filter === "Personnel" ? "contained" : "outlined"}
            onClick={() => handleFilterClick("Personnel")}
          >
            Personnel
          </Button>
        </Box>
        <Grid
          container
          spacing={4}
          justifyContent="center"
        >
          {filteredProjects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ProjectContent
                projectName={project.projectName}
                projectInformations={project.projectInformations}
                compteRenduLink={project.compteRenduLink}
                modeOperatoireLink={project.modeOperatoireLink}
                projectSkills={project.skills}
                image={project.image}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
