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
import CardExpTIAA from "./components/CardExpTIAA";
import CardExpGain from "./components/CardExpGain";
import CardExpBOA from "./components/CardExpBOA";

function App() {
  // // OLD IntersectionObserver code, this just checked if visible on screen.
  // const [activeSection, setActiveSection] = useState(null);
  // const observer = useRef(null);

  // useEffect(() => {
  //   observer.current = new IntersectionObserver((entries) => {
  //     const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
  //     if (visibleSection) {
  //       setActiveSection(visibleSection.id);
  //     }
  //   });

  //   const sections = document.querySelectorAll('[data-section]');

  //   sections.forEach((section) => {
  //     observer.current.observe(section);
  //   });

  //   return () => {
  //     sections.forEach((section) => {
  //       observer.current.unobserve(section);
  //     });
  //   };
  // }, []);
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
              <Box data-section id="hello" pt={7} pb={5}>
                <CardHello />
              </Box>
              <Box data-section id="thought" pt={7} pb={5}>
                <CardThought />
              </Box>
              <Box data-section id="key" pt={7} pb={5}>
                <CardKey />
              </Box>
              <Box data-section id="goals" pt={7} pb={5}>
                <CardGoals />
              </Box>
              <Box data-section id="work" pt={7} pb={5}>
                <CardExpTIAA />
                <CardExpGain />
                <CardExpBOA />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
