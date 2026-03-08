import { Box, Typography, Button, Link, Grid } from "@mui/material";
import { IProject } from "../Context";

export default function ProjectContent({ 
  projectName, 
  projectInformations, 
  elementClassName, 
  compteRenduLink, 
  modeOperatoireLink, 
  projectSkills, 
  image 
}: IProject) {

  return (
    <Box
      className={elementClassName}
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        rowGap: "20px",
      }}
    >
      <Box sx={{ width: "300px", height: "225px", backgroundColor: "primary.main", borderRadius: "4px" }}>
        <img src={image} alt={projectName} style={{ width: "100%", height: "100%", objectFit: "fill" }} />
      </Box>

      <Box
        className="informations-container"
        sx={{
          maxWidth: "575px",
          height: "auto",
          border: "1px solid",
          borderColor: "primary.main",
          borderRadius: "4px",
          p: 2.5,
          textAlign: { xs: "center", md: "start" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "start" },
            alignItems: "center",
            columnGap: 1.5,
            marginBottom: 1.5,
          }}
        >
          <Typography variant="h3" sx={{ fontSize: "1.3rem", fontWeight: 500 }}>
            {projectName}
          </Typography>
        </Box>

        <Typography variant="body2">{projectInformations}</Typography>

        <Grid container columnGap={3} rowGap={1} sx={{ marginTop: 1, justifyContent: { xs: "center", md: "start" } }}>
          {projectSkills && projectSkills.map(({ id, name }) => (
            <Grid item key={id}>
              <Button
                variant="outlined"
                sx={{
                  width: "90px",
                  p: 0.1,
                  borderColor: "primary.main",
                  fontSize: ".7rem",
                  cursor: "default",
                  ":hover": { backgroundColor: "rgba(25, 118, 210, 0.1)" },
                }}
              >
                {name}
              </Button>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 2, display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "start", gap: "20px" }}>
          {compteRenduLink && (
            <Link href={compteRenduLink} target="_blank" rel="noopener noreferrer" sx={{ padding: 0 }}>
              <Button variant="outlined" sx={{ mb: 1 }}>
                Compte-Rendu
              </Button>
            </Link>
          )}
          {modeOperatoireLink && (
            <Link href={modeOperatoireLink} target="_blank" rel="noopener noreferrer" sx={{ padding: 0 }}>
              <Button variant="outlined">
                Mode Opératoire
              </Button>
            </Link>
          )}
        </Box>
      </Box>
    </Box>
  );
}