import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReactComponent as ThoughtBubble } from "../thoughtBubble.svg";

function CardThought() {
  return (
    <>
      <Box id="thought" sx={{ paddingTop: "100px" }}></Box>
      <Box
        sx={{
          marginTop: "50px",
          backgroundColor: "#1D741D",
          width: "30px",
          height: "2px",
          marginLeft: "0px",
        }}
      ></Box>
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
