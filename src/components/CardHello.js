import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();

theme.typography.h3 = {
  fontSize: "3rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "6rem",
    lineHeight: "5rem",
  },
};

function CardHello() {
  return (
    <>
      <Typography
        sx={{
          fontFamily: "Lato",
          fontWeight: "700",
          fontSize: "72px",
          marginBottom: "30px",
          lineHeight: "72px",
          letterSpacing: 1,
          marginLeft: "20px",
          // marginTop: "15px",
        }}
      >
        Angelo Mancini
      </Typography>

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
        I have...
      </Typography>

      <Card
        elevation={1}
        sx={{
          // maxWidth: "750px",
          backgroundColor: "#E2EFE3",
          padding: "10px 35px 0px 35px",
          border: "solid 2px #ffffff",
        }}
      >
        <CardContent sx={{ padding: "0px" }}>
          <Typography
            variant="body"
            sx={{ fontFamily: "DM Sans" }}
            color="text.secondary,"
          >
            <Typography
              variant="inline"
              sx={{
                fontSize: "80px",
                fontWeight: 700,
                color: "#1D741D",
              }}
            >
              27
              <Typography
                variant="inline"
                sx={{ fontSize: "30px", fontWeight: 700 }}
              >
                +
              </Typography>
            </Typography>{" "}
            <Typography
              variant="inline"
              sx={{ fontSize: "30px", fontWeight: 700 }}
            >
              Years of Fintech Leadership
            </Typography>
            <Typography
              sx={{
                fontFamily: "DM Sans",
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "24px",
                letterSpacing: 0.5,
                marginTop: "-10px",
                marginBottom: "30px",
              }}
            >
              Finding and developing great talent & teams.
            </Typography>
            <Typography
              sx={{
                fontFamily: "DM Sans",
                fontSize: "28px",
                lineHeight: "24px",
                letterSpacing: 0.5,
                marginTop: "15px",
              }}
            >
              I specialize in:{" "}
            </Typography>
            <Box
              sx={{
                fontFamily: "DM Sans",
                fontSize: "24px",
                lineHeight: "40px",
                letterSpacing: 0.5,
                marginTop: "15px",
              }}
            >
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h3"
                  sx={{
                    color: "#1D741D",
                    fontWeight: "900",
                  }}
                >
                  ENTERPRISE DESIGN{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "#1D741D",
                      fontWeight: "900",
                      display: "block",
                    }}
                  >
                    SYSTEMS.
                  </Box>
                </Typography>{" "}
              </ThemeProvider>
              <Typography
                sx={{
                  fontFamily: "DM Sans",
                  fontSize: "24px",
                  lineHeight: "40px",
                  letterSpacing: 0.5,
                  marginTop: "15px",
                }}
              >
                My proficiency extends across various domains, encompassing{" "}
              </Typography>
              <Typography
                variant="inline"
                sx={{
                  color: "#1D741D",
                  fontWeight: "700",
                }}
              >
                UI Engineering, FED, UX, DX, CX, PX, EX, App Dev, CDE System Dev
                and E2E Product Vision.
              </Typography>{" "}
              {/* This journey has equipped me with invaluable knowledge and subject
              matter expertise{" "}
              <Typography
                variant="inline"
                sx={{ color: "#1D741D", fontWeight: 700 }}
              >
                (SME),
              </Typography>{" "}
              allowing me to consistently deliver outstanding outcomes. I am
              committed to driving success through a comprehensive understanding
              of the financial technology landscape and a keen focus on
              innovative design systems. */}
            </Box>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
export default CardHello;
