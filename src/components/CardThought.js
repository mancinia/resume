import React from "react";
import { Box } from "@mui/material";
import { ReactComponent as ThoughtBubble } from "../svg/thoughtBubble.svg";

function CardThought() {
  return (
    <>
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
