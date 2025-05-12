import { Box, Typography } from "@mui/material";
import { motion, useInView, useAnimation } from "framer-motion";
import VeilleContent from "./VeilleContent";
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
        <VeilleContent
          title={"Sujet - Evolution et Innovations des outils de visualisations de données."}
          textOne={"Dans un contexte où les données deviennent de plus en plus centrales dans la prise de décision, les outils de visualisation de données se révèlent essentiels. Ils permettent de transformer des ensembles de données complexes en représentations visuelles claires et compréhensibles, facilitant ainsi l'analyse et l'interprétation. Cette veille technologique se concentre sur l'évolution et les innovations des principaux outils de visualisation de données, tels que Power BI, Tableau, et Qlik, qui sont largement utilisés dans divers secteurs."}
          textTwo={"Cette veille technologique se concentre sur l'évolution et les innovations de ces outils. Elle suit les nouvelles fonctionnalités et les améliorations apportées, afin de comprendre comment ces outils s'adaptent aux besoins changeants des utilisateurs. L'objectif est de rester informé des dernières tendances et des avancées technologiques dans le domaine de la visualisation de données."}
        />
        <VeilleContent
          title={"1. Qu'est-ce que la visualisation de données ?"}
          textOne={"La visualisation de données est le processus de représentation graphique de l'information et des données. Elle permet de transformer des ensembles de données complexes en graphiques, diagrammes, cartes et autres représentations visuelles qui facilitent la compréhension et l'analyse. En rendant les données plus accessibles et compréhensibles, la visualisation de données aide les décideurs à identifier des tendances, des modèles et des insights cachés, ce qui améliore la prise de décision."}
          textTwo={"Ces outils trouvent leur application dans divers secteurs tels que la finance, où ils permettent d'analyser les performances financières, de prévoir les tendances du marché et d'optimiser les investissements. Dans le domaine de la santé, ils sont utilisés pour suivre les indicateurs de santé publique, améliorer la gestion des patients et optimiser les ressources hospitalières. En marketing, ils aident à analyser le comportement des consommateurs, à mesurer l'efficacité des campagnes et à personnaliser les stratégies de communication. Enfin, dans les ressources humaines, ils permettent de suivre les performances des employés, d'optimiser les processus de recrutement et d'améliorer la rétention du personnel."}
        />
        <VeilleContent
          title={"2. Perspective d'Avenir"}
          textOne={"À l'avenir, on peut s'attendre à des innovations majeures dans les outils de visualisation de données, notamment grâce à l'intégration de l'intelligence artificielle et du machine learning. Ces technologies permettront des analyses prédictives plus précises, des visualisations interactives en temps réel et une personnalisation accrue des tableaux de bord en fonction des besoins spécifiques des utilisateurs."}
          textTwo={"De plus, l'essor des technologies de réalité augmentée et de réalité virtuelle ouvrira de nouvelles possibilités pour des expériences de visualisation immersives. Ces innovations rendront l'analyse des données plus intuitive et engageante, offrant aux utilisateurs des moyens novateurs d'interagir avec les informations et de mieux comprendre les données complexes."}
        />
        <VeilleContent
          title={"3. Méthodologie de la Veille Technologique"}
          textOne={"Pour mener à bien cette veille technologique sur l'évolution et les innovations des outils de visualisation de données, j'ai mis en place plusieurs outils essentiels. Tout d'abord, j'utilise Google Alerts, un service qui me permet de recevoir des notifications par e-mail dès qu'un nouvel article ou une publication pertinente est publiée sur le web. Cet outil est particulièrement utile pour rester informé en temps réel des dernières tendances et avancées dans le domaine."}
          textTwo={"Ensuite, j'organise et répertorie les articles et informations collectées grâce à Google Alerts dans Pearltrees. Cette plateforme me permet de créer des collections thématiques et de structurer les ressources de manière visuelle et intuitive. Ainsi, je peux facilement retrouver et consulter les informations pertinentes, tout en gardant une vue d'ensemble claire et organisée de ma veille technologique. Cette méthodologie me permet de suivre efficacement l'évolution des outils de visualisation de données et de rester à jour sur les innovations du secteur."}
        /> 
        <PearltreesEmbed />
      </Box>
    </Box>
  );
}
