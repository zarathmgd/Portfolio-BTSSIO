import { Card, CardContent, Typography, Box, useTheme } from "@mui/material";
import React from "react";

interface Props {
  label: string;
  value: string | number;
}

export default function CompanyStatCard({ label, value }: Props) {
  const theme = useTheme();
  const valueColor = theme.palette.text.primary;

  return (
    <Card variant="outlined" sx={{ boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
          <Typography variant="h4" sx={{ color: valueColor, fontWeight: 700 }}>
            {value}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            {label}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
