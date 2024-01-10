import * as React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { Hidden } from "@mui/material";
import Nav from "./components/Nav";
import LeftNav from "./components/LeftNav";
import CardHello from "./components/CardHello";
import CardThought from "./components/CardThought";
import CardKey from "./components/CardKey";
import CardGoals from "./components/CardGoals";
import CardExpTIAA from "./components/CardExpTIAA";
import CardExpGain from "./components/CardExpGain";
import CardExpBOA from "./components/CardExpBOA";
import { ReactComponent as ThoughtBubble } from "./thoughtBubble.svg";
import { ReactComponent as CoffeeCup } from "./coffeeCup.svg";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div className="App">
      <Nav />
      <Container fixed maxWidth="lg" sx={{ marginTop: "150px" }}>
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
            H
          </Typography>
          ello... My Name Is
        </Typography>

        <Grid container spacing={2}>
          <Grid
            xs={Hidden}
            md={3}
            sx={{
              // backgroundColor: "#ffffff",
              // border: "solid 1px #000000",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <CoffeeCup />
          </Grid>
          <Grid xs={12} md={9}>
            {/* <Typography
              variant="h1"
              sx={{
                fontSize: 30,
                marginTop: "0px",
                marginBottom: "30px",
                fontFamily: "Lato",
                fontWeight: 700,
                marginLeft: "0px",
              }}
            >
              My name is
            </Typography> */}
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: "500",
                fontSize: "72px",
                marginBottom: "30px",
                lineHeight: "72px",
                letterSpacing: 1,
                marginLeft: "0px",
                // marginTop: "15px",
              }}
            >
              An
              <Typography variant="inline" sx={{ color: "#1D741D" }}>
                g
              </Typography>
              elo
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
              {/* <Typography
                variant="inline"
                sx={{ color: "#1D741D", paddingRight: "4px" }}
              >
                I
              </Typography> */}
              I have...
            </Typography>
            <Typography
              variant="body"
              sx={{ fontFamily: "Lato", marginLeft: "25px" }}
              color="text.secondary,"
            >
              <Typography
                variant="inline"
                sx={{
                  fontSize: "60px",
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
                Years of Fintech Expertise
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontFamily: "DM Sans",
                fontSize: "24px",
                lineHeight: "40px",
                letterSpacing: 1,
                marginTop: "15px",
                marginLeft: "25px",
              }}
            >
              Bringing over 27 years of Fintech leadership, I specialize in
              Scaled Enterprise & Platform Distributed Design Systems. My
              proficiency extends across various domains, encompassing UI, UX,
              App Development, and Product Vision. <br />
              <br />
              This journey has equipped me with invaluable knowledge and subject
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
              innovative design systems.
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            marginTop: "50px",
            backgroundColor: "#1D741D",
            width: "30px",
            height: "2px",
            marginLeft: "35px",
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
            marginLeft: "35px",
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
      </Container>
      <Container maxWidth="xl" sx={{ marginTop: "50px" }}>
        <Grid container>
          <Grid
            xs={Hidden}
            md={2}
            sx={{
              // backgroundColor: "#ffffff",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <LeftNav />
          </Grid>
          <Grid xs={12} md={10}>
            <Box>
              {/* Start Hello Card */}
              <CardHello />
              {/* End Hello Card */}
              {/* Start Thought Leadership Card */}
              <CardThought />
              {/* End Thought Leadership Card */}
              {/* Start Key Accomplishments Card */}
              <CardKey />
              {/* End Key Accomplishments Card */}
              {/* Start Professional Goals Card */}
              <CardGoals />
              {/* End Professional Goals Card */}
              {/* Start Work Experience - TIAA Card */}
              <CardExpTIAA />
              {/* End Work Experience - TIAA Card */}
              {/* Start Work Experience - Gain Capital Card */}
              <CardExpGain />
              {/* End Work Experience - Gain Capital Card */}
              {/* Start Work Experience - BOA Card */}
              <CardExpBOA />
              {/* End Work Experience - BOA Card */}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
