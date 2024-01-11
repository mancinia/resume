import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReactComponent as ThoughtBubble } from "../thoughtBubble.svg";
import Overline from "./Overline";
function CardThought() {
  return (
    <>
      <Overline />
      <Typography
        variant="h1"
        sx={{
          fontSize: 30,
          marginTop: "0px",
          marginBottom: "10px",
          fontFamily: "Lato",
          fontWeight: 700,
          marginLeft: "0px",
        }}
      >
        <Typography variant="inline" sx={{ color: "#1D741D" }}>
          T
        </Typography>
        hought Leadership
      </Typography>
      <Box
        sx={{
          marginTop: "-30px",
          maxWidth: "820px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <ThoughtBubble />
      </Box>
    </>
  );
}

export default CardThought;
