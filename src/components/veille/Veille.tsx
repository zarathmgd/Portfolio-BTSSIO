import { Box, Typography, Grid } from "@mui/material";
import { motion, useInView, useAnimation } from "framer-motion";
import VeilleContent from "./VeilleContent";
import InfoCard from "./InfoCard";
import { useEffect, useRef } from "react";
import PearltreesEmbed from "./Pearltrees";

export default function Veille() {
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
          id="veille"
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
          Veille technologique
        </Typography>
        <VeilleContent
          title={"Qu'est-ce que la veille technologique ?"}
          textOne={"La veille technologique est une pratique qui consiste à surveiller les nouvelles technologies et les innovations dans un domaine spécifique. Elle permet de rester informé des dernières tendances et de découvrir des opportunités pour innover. En adoptant cette démarche, les étudiants peuvent anticiper les évolutions technologiques et adapter leurs compétences en conséquence. Cela leur permet de rester compétitifs sur le marché du travail et de saisir de nouvelles opportunités professionnelles."}
          textTwo={"Grâce à la veille technologique, les étudiants peuvent éviter de se retrouver dépassés par les nouvelles technologies et mieux comprendre les compétences recherchées par les employeurs. Cela les aide à prendre des décisions éclairées pour leur carrière et à se démarquer sur le marché du travail. Pour réaliser une veille efficace, ils peuvent lire des articles spécialisés, participer à des conférences, ou utiliser des outils en ligne."}
        />
        <Typography variant="h3">Sujet - Evolution et Innovations des outils de visualisations de données</Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <InfoCard
              icon={<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="10" width="3" height="11" stroke="currentColor" strokeWidth="1.5" fill="none"/><rect x="9" y="6" width="3" height="15" stroke="currentColor" strokeWidth="1.5" fill="none"/><rect x="15" y="2" width="3" height="19" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>}
              title={"Contexte"}
              text={"Les données sont de plus en plus centrales pour la prise de décision; la visualisation permet de rendre les ensembles complexes compréhensibles et exploitables."}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InfoCard
              icon={<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>}
              title={"Outils ciblés"}
              text={"Suivi des innovations sur Power BI, Tableau, Qlik et autres, pour comprendre l'évolution des fonctionnalités et des usages."}
            />
          </Grid>
        </Grid>
        <Typography variant="h3">1. Qu'est-ce que la visualisation de données ?</Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <InfoCard
              icon={<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 17l6-6 4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>}
              title={"Définition"}
              text={"Représentation graphique de l'information pour transformer des données complexes en graphiques, cartes et diagrammes facilitant l'analyse et la compréhension."}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InfoCard
              icon={<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M12 7v6M9 10h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>}
              title={"Applications"}
              text={"Applications en finance, santé, marketing et RH pour analyser performances, suivre indicateurs, personnaliser stratégies et optimiser ressources."}
            />
          </Grid>
        </Grid>
        <Typography variant="h3">2. Perspective d'Avenir</Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <InfoCard
              icon={<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="10" r="1" fill="currentColor"/><path d="M8 16c1-1 3-1 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>}
              title={"IA & Machine Learning"}
              text={"Intégration de l'IA et du ML pour des analyses prédictives, visualisations interactives en temps réel et dashboards personnalisés selon les besoins utilisateurs."}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InfoCard
              icon={<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="17" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M10 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>}
              title={"Réalité Augmentée / Virtuelle"}
              text={"Réalité augmentée et virtuelle pour des visualisations immersives, rendant l'exploration des données plus intuitive et engageante."}
            />
          </Grid>
        </Grid>
        <Typography variant="h3">3. Méthodologie de la Veille Technologique</Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <InfoCard
              icon={<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3c-3 0-5 2-5 5v3l-1 1v1h12v-1l-1-1V8c0-3-2-5-5-5z" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M9.5 19a2.5 2.5 0 005 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>}
              title={"Outils"}
              text={"Utilisation de Google Alerts pour recevoir des notifications en temps réel sur les publications et articles pertinents."}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InfoCard
              icon={<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h7l2 2h9v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>}
              title={"Organisation"}
              text={"Centralisation et structuration des ressources dans Pearltrees pour des collections thématiques et une navigation visuelle."}
            />
          </Grid>
        </Grid>
 
        <PearltreesEmbed />
      </Box>
    </Box>
  );
}
