import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Item from "@mui/material/Box";

function CardExpTIAA() {
  return (
    <>
      <Box id="work" sx={{ paddingTop: "100px" }}></Box>
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
          W
        </Typography>
        ork Experience
      </Typography>
      <Card
        elevation={1}
        sx={{
          maxWidth: "750px",
          backgroundColor: "#E2EFE3",
          padding: "0px",
          border: "solid 2px #ffffff",
          paddingRight: "70px",
        }}
      >
        <CardContent sx={{ padding: "0px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              p: 1,
              m: 1,
              borderRadius: 1,
              padding: "0px",
            }}
          >
            <Item sx={{}}>
              <img src="CardBulletBlue.png" alt="bullet" />
            </Item>
            <Item sx={{ marginLeft: "5px" }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: 24,
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontFamily: "Lato",
                  fontWeight: 500,
                }}
              >
                TIAA.org
              </Typography>

              <Box
                sx={{
                  typography: "subtitle2",
                  fontSize: 18,
                  marginTop: "0px",
                  marginBottom: "0px",
                  lineHeight: "20px",
                  fontFamily: "DM Sans",
                  fontWeight: 700,
                  letterSpacing: 0.4,
                }}
              >
                January 2011 - Present (12 yr)
              </Box>

              <Box
                sx={{
                  typography: "body1",
                  fontSize: 18,
                  marginTop: "0px",
                  lineHeight: "20px",
                  fontFamily: "DM Sans",
                  fontWeight: 500,
                  letterSpacing: 0.4,
                }}
              >
                Director, Sr Lead Development Manager, UI Engineering
              </Box>
              <Box
                sx={{
                  typography: "body1",
                  fontSize: 16,
                  marginTop: "20px",
                  lineHeight: "20px",
                  fontFamily: "DM Sans",
                  fontWeight: 700,
                  letterSpacing: 0.4,
                }}
              >
                SUMMARY:
              </Box>
              <Box
                sx={{
                  typography: "body1",
                  fontSize: 16,
                  marginTop: "0px",
                  lineHeight: "20px",
                  fontFamily: "DM Sans",
                  fontWeight: 500,
                  letterSpacing: 0.4,
                }}
              >
                As a Sr. Technology Manager I took part in very high profile
                transitions, projects and had a great opportunity to learn many
                aspects of running a successful online platform, which generated
                over $80 million in annual revenue.
              </Box>
              <Box
                sx={{
                  typography: "body1",
                  fontSize: 16,
                  marginTop: "20px",
                  lineHeight: "20px",
                  fontFamily: "DM Sans",
                  fontWeight: 700,
                  letterSpacing: 0.4,
                }}
              >
                EXPERIENCE:
              </Box>
              <Box
                sx={{
                  typography: "body1",
                  fontSize: 18,
                  marginTop: "10px",
                  marginLeft: "10px",
                  lineHeight: "20px",
                  fontFamily: "DM Sans",
                  fontWeight: 700,
                  letterSpacing: 0.4,
                }}
              >
                - 2 enterprise & 3 platform teams
              </Box>
              <Box
                sx={{
                  typography: "body1",
                  fontSize: 18,
                  marginTop: "10px",
                  marginLeft: "10px",
                  lineHeight: "20px",
                  fontFamily: "DM Sans",
                  fontWeight: 700,
                  letterSpacing: 0.4,
                }}
              >
                - 7 platforms, 17 design languages, & 350+ application frontends
              </Box>
              <Box
                sx={{
                  typography: "body1",
                  fontSize: 18,
                  marginTop: "10px",
                  marginLeft: "10px",
                  lineHeight: "20px",
                  fontFamily: "DM Sans",
                  fontWeight: 700,
                  letterSpacing: 0.4,
                }}
              >
                - Agile Release Team
              </Box>
              <Box
                sx={{
                  typography: "body1",
                  fontSize: 18,
                  marginTop: "10px",
                  marginLeft: "10px",
                  lineHeight: "20px",
                  fontFamily: "DM Sans",
                  fontWeight: 700,
                  letterSpacing: 0.4,
                }}
              >
                - Major Epic management and thought leadership
              </Box>
              <Box
                sx={{
                  typography: "body1",
                  fontSize: 18,
                  marginTop: "10px",
                  marginLeft: "10px",
                  lineHeight: "20px",
                  fontFamily: "DM Sans",
                  fontWeight: 700,
                  letterSpacing: 0.4,
                }}
              >
                - Enterprise Design System + Micro Frontend
              </Box>
            </Item>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default CardExpTIAA;
