import { useState, useEffect, useRef } from "react";
import * as React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Nav from "./components/Nav";
import LeftNav from "./components/LeftNav";
import CardHello from "./components/CardHello";
import CardThought from "./components/CardThought";
import CardKey from "./components/CardKey";
import CardGoals from "./components/CardGoals";
import CardWork from "./components/CardWork";
import SectionContainer from "./components/SectionContainer";
function App() {
  const [activeSection, setActiveSection] = useState('hello');
  const scrollRef = useRef(null);
  const sections = useRef([]);

  const handleScroll = () => {
    const scrollTop = scrollRef.current.scrollTop;
    let newActiveSection = null;
    console.log(scrollTop, 'scrollTop', scrollRef.current.scrollTop)

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop - 106;
      const sectionHeight = section.offsetHeight;

      if (scrollTop >= sectionOffsetTop && scrollTop 
      < sectionOffsetTop + sectionHeight) {
        newActiveSection = section.id;
      }
    });
    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    sections.current = document.querySelectorAll('[data-section]');
    scrollRef.current.addEventListener('scroll', handleScroll);

    return () => {
      scrollRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box sx={{display:'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden'}}>
      <Box sx={{height: '106px', flexShrink: 0}}>
        <Nav />
      </Box>
      <Box sx={{flexGrow: 1, overflowY: 'scroll'}} ref={scrollRef}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid
              md={3}
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
              }}
            >
              <LeftNav active={activeSection} />
            </Grid>
            <Grid xs={12} md={9}>
              <SectionContainer title="Hello... My name is" id="hello">
                <CardHello />
              </SectionContainer>
              <SectionContainer title="Thought Leadership" id="thought">
                <CardThought />
              </SectionContainer>
              <SectionContainer title="Key Accomplishments (2023)" id="key">
                <CardKey />
              </SectionContainer>
              <SectionContainer title="Professional Goals" id="goals">
                <CardGoals />
              </SectionContainer>
              <SectionContainer title="Work Experience" id="work">
                <CardWork />
              </SectionContainer>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
