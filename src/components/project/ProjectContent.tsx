import { Box, Typography, Button, Link, Grid } from "@mui/material";
import { AppContext, IProject } from "../Context";
import { useContext } from "react";

export default function projectContent({ projectName, projectInformations, elementClassName, link }: IProject) {
  const { skills } = useContext(AppContext);

  return (
    <Box
      className={elementClassName}
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: !elementClassName ? { xs: "column", md: "row" } : { xs: "column", md: "row-reverse" },
        rowGap: { xs: "20px", md: 0 },
      }}
    >
      <Box sx={{ width: "200px", height: "200px", backgroundColor: "primary.main", borderRadius: "4px" }}>
        <img src="" alt="" />
      </Box>
      <Box
        className="informations-container"
        sx={{
          maxWidth: "575px",
          height: { xs: "auto", md: "175px" },
          border: "1px solid",
          borderLeft: !elementClassName ? { xs: "1px solid", md: "none" } : "1px solid",
          borderRight: !elementClassName ? "1px solid" : { xs: "1px solid", md: "none" },
          borderColor: "primary.main",
          borderRadius: !elementClassName ? { xs: "4px", md: "0 4px 4px 0" } : { xs: "4px", md: "4px 0 0 4px" },
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
          <Link href={link} target="_blank">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </Link>
        </Box>
        <Typography variant="body2">{projectInformations}</Typography>
        <Grid container columnGap={3} rowGap={1} sx={{ marginTop: 1, justifyContent: { xs: "center", md: "start" } }}>
          {skills.map(({ id, name }) => {
            if (["React", "Typescript", "CSS", "Figma"].includes(name)) {
              return (
                <Grid item key={id}>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "90px",
                      p: 0.1,
                      borderColor: "primary.main",
                      fontSize: ".7rem",
                      cursor: "default",
                      ":hover": { backgroundColor: "primary.hover" },
                    }}
                  >
                    {name}
                  </Button>
                </Grid>
              );
            }
          })}
        </Grid>
      </Box>
    </Box>
  );
}
