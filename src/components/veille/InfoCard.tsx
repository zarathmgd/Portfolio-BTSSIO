import { Card, CardContent, Typography, Box, useTheme } from "@mui/material";
import React from "react";

interface InfoCardProps {
  icon?: React.ReactNode;
  title: string;
  text: string;
}

export default function InfoCard({ icon, title, text }: InfoCardProps) {
  const theme = useTheme();
  const iconColor = theme.palette.text.primary;

  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        alignItems: "stretch",
        gap: 2,
        borderRadius: 2,
        boxShadow: 3,
        overflow: "hidden",
        transition: "transform 0.18s ease, box-shadow 0.18s ease",
        '&:hover': { transform: "translateY(-6px)", boxShadow: 6 },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", pl: 2, pr: 1, color: iconColor }}>
        {icon}
      </Box>
      <CardContent sx={{ py: 2, px: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
