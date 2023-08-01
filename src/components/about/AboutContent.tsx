import { Box, Typography } from "@mui/material";
import { IAbout } from "../Context";

export default function AboutContent({ title, textOne, textTwo }: IAbout) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body2">{textOne}</Typography>
      <Typography variant="body2">{textTwo}</Typography>
    </Box>
  );
}
