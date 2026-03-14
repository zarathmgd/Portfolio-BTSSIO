import { useRef, useEffect, useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { motion, useAnimation, useInView } from "framer-motion";
import ProjectContent from "./ProjectContent";

const projects = [
  {
    projectName: "Outil Check ODB / DTime",
    projectInformations: "Le projet consiste à vérifier l'exactitude des données entre la nouvelle application de gestion des ressources humaines, DTime, et la base de données ODB à Disneyland Paris. Les données transitent par des systèmes ETL, nécessitant des tests pour confirmer leur conformité. L'équipe BFS a développé un outil pour faciliter ces tests, réalisés par des analystes financiers, en se basant sur des scénarios de dates et d'identifiants d'employés.",
    compteRenduLink: "/Portfolio-BTSSIO/assets/Compte rendu Outil ODB DTime.pdf",
    modeOperatoireLink: "/Portfolio-BTSSIO/assets/MODE OPERATOIRE Check DTime-ODB_V2.0.pdf",
    image: "/Portfolio-BTSSIO/assets/pro.png",
    skills: [{id: 0, name: "Excel"}],
    category: "Entreprise",
  },
  {
    projectName: "Système de Messagerie (Chatbox)",
    projectInformations: "Application Web de messagerie fonctionnelle (canaux globaux et privés) avec authentification sécurisée par sessions. L'architecture repose sur un back-end PHP couplé à une base de données MySQL. Focus technique sur la traçabilité : implémentation de Triggers SQL (BEFORE DELETE) pour l'archivage automatisé des messages.",
    compteRenduLink: "https://github.com/zarathmgd/chatbox",
    modeOperatoireLink: "", 
    image: "/Portfolio-BTSSIO/assets/school.png", 
    skills: [
      { id: 0, name: "PHP" }, 
      { id: 1, name: "MySQL" }, 
      { id: 2, name: "HTML/CSS" }
    ],
    category: "Formation",
  },
  {
    projectName: "Audit SOX & Conformité des Accès",
    projectInformations: "Gestion du processus mensuel d'audit de sécurité et de conformité (normes SOX) pour les systèmes d'information financiers (SRH, Longview, ODB). Le flux implique l'extraction de données multi-sources (requêtes SQL complexes via DBeaver, parsing PDF, exports CSV), la réconciliation des données inter-systèmes sur Excel pour identifier les anomalies (comptes inactifs > 90 jours, départs), et l'application des procédures de remédiation avec génération de preuves d'audit.",
    modeOperatoireLink: "/Portfolio-BTSSIO/assets/MODE OPERATOIRE - Audit Users.pdf", 
    compteRenduLink: "",
    image: "/Portfolio-BTSSIO/assets/pro.png",
    skills: [
      { id: 0, name: "SQL" }, 
      { id: 1, name: "Excel" }, 
      { id: 2, name: "SOX" }
    ],
    category: "Entreprise",
  },
  {
    projectName: "Tasky - Gestionnaire de Tâches",
    projectInformations: "Application de bureau (Client Lourd) développée en Python offrant une gestion multi-utilisateurs de tâches avec un cycle CRUD complet. L'architecture modulaire sépare l'interface graphique (CustomTkinter) de la logique métier. La persistance locale est sécurisée via SQLite3 en utilisant des requêtes préparées et la gestion des transactions. Livré sous forme d'exécutable autonome (PyInstaller).",
    compteRenduLink: "https://github.com/zarathmgd/tasky",
    modeOperatoireLink: "",
    image: "/Portfolio-BTSSIO/assets/home.png",
    skills: [
      { id: 0, name: "Python" }, 
      { id: 1, name: "SQLite" }, 
      { id: 2, name: "CTkinter" }
    ],
    category: "Personnel",
  },
  {
    projectName: "Dashboard de Monitoring SAP BW",
    projectInformations: "Conception et développement d'un tableau de bord de Business Intelligence pour le suivi des performances de l'entrepôt de données SAP BW. L'outil permet d'analyser les temps de chargement des flux de données et de surveiller la volumétrie ingérée selon les différents Data Cubes. Il offre à l'équipe technique une vision claire pour optimiser la maintenance et les fenêtres de chargement.",
    compteRenduLink: "/Portfolio-BTSSIO/assets/Compte Rendu - PBI BW.pdf", 
    modeOperatoireLink: "",
    image: "/Portfolio-BTSSIO/assets/pro.png",
    skills: [
      { id: 0, name: "Power BI"}, 
      { id: 1, name: "SAP BW"}, 
      { id: 2, name: "DAX"}  
    ],
    category: "Entreprise",
  },
  {
    projectName: "Tests de Non-Régression (Ventes)",
    projectInformations: "Validation technique d'un nouvel extracteur de données de ventes (Food & Merch) avant sa mise en production. Le processus consiste à récupérer des fichiers plats (.pend) via FTP (FileZilla) pour comparer les environnements QA (nouveau système) et PROD (système legacy).",
    compteRenduLink: "/Portfolio-BTSSIO/assets/Compte Rendu - Test ETI.pdf", 
    modeOperatoireLink: "",
    image: "/Portfolio-BTSSIO/assets/pro.png",
    skills: [ 
      { id: 0, name: "FileZilla"}, 
      { id: 1, name: "Excel"}
    ],
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

  const handleFilterClick = (category: string) => {
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
        marginBottom: "100px",
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
          rowGap: "60px",
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
              left: "50%",
              transform: "translateX(-50%)",
              bottom: -10,
              width: "60px",
              height: "3px",
              backgroundColor: "primary.main",
            },
          }}
        >
          Projets
        </Typography>
        <Typography variant="h3">Quelles sont mes réalisations ?</Typography>
        <Box sx={{ display: "flex", gap: 2, mb: 4, justifyContent: "center" }}>
          {["Tous", "Formation", "Entreprise", "Personnel"].map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "contained" : "outlined"}
              onClick={() => handleFilterClick(cat)}
            >
              {cat}
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            width: "100%",
            maxHeight: "600px",
            overflowY: "auto",
            overflowX: "hidden",
            paddingRight: "10px",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "rgba(0,0,0,0.05)",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "primary.main",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            },
          }}
        >
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
    </Box>
  );
}