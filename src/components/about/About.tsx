import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import { motion, useInView, useAnimation } from "framer-motion";
import AboutContent from "./AboutContent";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../Context";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function About() {
  const theme = useTheme();
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
          maxWidth: "40%",
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
          A propos de moi
        </Typography>
        <AboutContent
          title={"Qui suis-je ?"}
          textOne={"Je suis étudiant en BTS SIO option SLAM, alternant au sein de Disneyland Paris en tant qu'apprenti Financial Planning & Reporting."}
          textTwo={"A l'issue de ce BTS, je souhaite poursuivre mes études afin de me spécialiser dans le domaine de la data."}
        />
        <AboutContent
          title={"Qu'est-ce que je fais ?"}
          textOne={
            "Souhaitant initialement m'orienter vers le domaine du développement web, je me suis formé de manière autodidacte aux technologies suivantes : HTML, CSS, Javascript, Typescript et React. Parallèlement, je me suis formé au design afin d'obtenir un socle de compétences web complet."
          }
          textTwo={
            "Cependant, j'ai découvert le domaine de la data au cours de mes recherches et ce dernier m'a davantage correspondu. En effet, issu d'un cursus orienté vers les mathématiques, la data se positionnait comme le domaine pouvant me permettre de m'exercer à l'informatique et aux mathématiques. Je me suis donc tourné vers l'apprentissage de Python et SQL qui sont les langages les plus utilisés dans ce secteur."
          }
        />
        <AboutContent
          title={"Entreprise d'alternance - Disneyland Paris"}
          textOne={"The Walt Disney Company, fondée par Walt Disney en 1923, est l'une des plus grandes entreprises de divertissement au monde. En 1992, l'entreprise a étendu sa magie en Europe avec l'ouverture de Disneyland Paris, situé à Marne-la-Vallée, en France. Inauguré le 12 avril 1992, Disneyland Paris est devenu une destination emblématique, attirant des millions de visiteurs chaque année avec ses parcs à thèmes, ses attractions, ses spectacles et ses expériences immersives. Le complexe emploie environ 18 000 personnes et a réalisé un chiffre d'affaires d'environ 2.4 milliards d'euros en 2024. Il se compose de deux parcs à thèmes, le Parc Disneyland et le Walt Disney Studios, ainsi que de plusieurs hôtels et zones de restauration, offrant une diversité d'activités pour tous les âges."}
          textTwo={"L'équipe Business Financial Systems (BFS) dont je suis membre, est responsable des systèmes financiers de Disneyland Paris. Nos missions incluent la gestion des utilisateurs et la participation à divers projets financiers. Nous coordonnons des projets, apportons des solutions en tant que support, et servons de contact privilégié pour le métier en cas de problématiques impliquant des acteurs externes, tels que les éditeurs d'applications."}
  
        />
        <AboutContent
          title={"Quelles sont mes missions en entreprises ?"}
          textOne={"Au sein de l'équipe Business Financial Systems (BFS), je suis responsable de la gestion des utilisateurs sur plusieurs applications. Cela inclut la création, la modification et la suppression de comptes utilisateurs via un système de tickets. Chaque mois, je réalise un audit des utilisateurs pour identifier et supprimer ceux qui ne se sont pas connectés depuis un certain temps ou qui ont quitté l'entreprise."}
          textTwo={"En parallèle, je développe et optimise des solutions pour améliorer les processus existants. J'utilise principalement Excel et SQL pour extraire et analyser des données, et je crée des tableaux de bord sur Power BI pour mesurer les performances des systèmes financiers comme SAP BW. J'ai également développé des outils avec Power Query pour faciliter les tests et automatiser les traitements de données, réduisant ainsi les manipulations manuelles et les risques d'erreurs."}
          textThree={"Par exemple, durant la première année de mon contrat, j'ai mis en place un ETL sur Knime pour automatiser le traitement du budget annuel, simplifiant ainsi un processus auparavant complexe et sujet aux erreurs. Mon rôle consiste à apporter des solutions efficaces et innovantes pour optimiser les opérations financières de l'entreprise."}
  
        />
      </Box>
      <Box
        className="skills"
        sx={{
          maxWidth: { xs: "750px", md: "40%" },
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
              left: { xs: "25%", md: "110%" },
              bottom: { xs: -5, md: "inherit" },
              width: { xs: "50%", md: "1px" },
              height: { xs: "1px", md: "150%" },
              backgroundColor: "primary.main",
            },
          }}
        >
          Compétences
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
          {skills.map(({ id, name }) => {
            return (
              <Grid item key={id}>
                <Button
                  variant="outlined"
                  sx={{
                    width: "110px",
                    borderColor: "primary.main",
                    fontSize: ".7rem",
                    ":hover": { backgroundColor: "primary.hover", cursor: "default" },
                  }}
                >
                  {name}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box
        className="timeline"
        sx={{
          width: "100%",
          maxWidth: "800px",
          marginTop: 10,
        }}
      >
        <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: 3 }}>
          Parcours
        </Typography>
        <VerticalTimeline lineColor={theme.palette.primary.main}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work odd"
            contentStyle={{ background: "inherit", color: theme.palette.primary.main, boxShadow: "none", border: "1px solid" }}
            contentArrowStyle={{ borderRight: `7px solid ${theme.palette.primary.main}` }}
            date="2024 - 2026"
            iconStyle={{ background: theme.palette.background.default, color: '#fff', boxShadow:`0 0 0 2px ${theme.palette.primary.main},inset 0 1px 0 rgba(0,0,0,.08),0 2px 0 4px rgba(0,0,0,.05)` }}
          >
            <h3 className="vertical-timeline-element-title">BTS SIO SLAM</h3>
            <h4 className="vertical-timeline-element-subtitle">Institut F2I</h4>
            <p>
              Apprenti Financial Planning & Reporting Disneyland Paris
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work even"
            contentStyle={{ background: "inherit", color: theme.palette.primary.main, boxShadow: "none", border: "1px solid" }}
            contentArrowStyle={{ borderRight: `7px solid ${theme.palette.primary.main}` }}
            date="2022 - 2023"
            iconStyle={{ background: theme.palette.background.default, color: '#fff', boxShadow:`0 0 0 2px ${theme.palette.primary.main},inset 0 1px 0 rgba(0,0,0,.08),0 2px 0 4px rgba(0,0,0,.05)` }}
          >
            <h3 className="vertical-timeline-element-title">BUT MMI</h3>
            <h4 className="vertical-timeline-element-subtitle">IUT Meaux</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work odd"
            contentStyle={{ background: "inherit", color: theme.palette.primary.main, boxShadow: "none", border: "1px solid" }}
            contentArrowStyle={{ borderRight: `7px solid ${theme.palette.primary.main}` }}
            date="2021 - 2022"
            iconStyle={{ background: theme.palette.background.default, color: '#fff', boxShadow:`0 0 0 2px ${theme.palette.primary.main},inset 0 1px 0 rgba(0,0,0,.08),0 2px 0 4px rgba(0,0,0,.05)` }}
          >
            <h3 className="vertical-timeline-element-title">Licence Mathématiques Informatique</h3>
            <h4 className="vertical-timeline-element-subtitle">Université Gustave Eiffel</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work odd"
            contentStyle={{ background: "inherit", color: theme.palette.primary.main, boxShadow: "none", border: "1px solid" }}
            contentArrowStyle={{ borderRight: `7px solid ${theme.palette.primary.main}` }}
            date="2021"
            iconStyle={{ background: theme.palette.background.default, color: '#fff', boxShadow:`0 0 0 2px ${theme.palette.primary.main},inset 0 1px 0 rgba(0,0,0,.08),0 2px 0 4px rgba(0,0,0,.05)` }}
          >
            <h3 className="vertical-timeline-element-title">Bac Général Mathématiques Physique-Chimie</h3>
            <h4 className="vertical-timeline-element-subtitle">Lycée Blaise Pascal</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Box>
    </Box>
  );
}
