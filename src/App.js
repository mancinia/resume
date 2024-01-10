import { useState, useEffect, useRef } from "react";
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

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    });

    const sections = document.querySelectorAll('[data-section]');

    sections.forEach((section) => {
      observer.current.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="App">
      <Nav />

      <Container maxWidth="lg" sx={{ marginTop: "50px" }}>
        <Grid container>
          <Grid
            xs={Hidden}
            md={3}
            sx={{
              // backgroundColor: "#ffffff",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <LeftNav active={activeSection} />
          </Grid>
          <Grid xs={12} md={9}>
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
