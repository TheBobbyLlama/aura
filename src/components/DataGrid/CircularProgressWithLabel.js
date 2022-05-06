import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel({ value, ...rest }) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={100}
        style={{ position: "absolute", left: 0 }}
      />
      <CircularProgress variant="determinate" value={value} {...rest} />

      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="white"
          sx={{ fontWeight: "100" }}
        >
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function CircularStatic({ value }) {
  return (
    <CircularProgressWithLabel
      sx={{
        "& svg": {
          color:
            value < 50 && value > 0
              ? "red"
              : value >= 50 && value < 90
              ? "orange"
              : "yellowgreen",
        },
      }}
      value={value}
    />
  );
}
