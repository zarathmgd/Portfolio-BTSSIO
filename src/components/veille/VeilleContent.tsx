import { Box, Typography } from "@mui/material";
import { IVeille } from "../Context";

export default function VeilleContent({ title, textOne, textTwo, textThree, textFour }: IVeille) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body2">{textOne}</Typography>
      <Typography variant="body2">{textTwo}</Typography>
      <Typography variant="body2">{textThree}</Typography>
      <Typography variant="body2">{textFour}</Typography>
    </Box>
  );
}
