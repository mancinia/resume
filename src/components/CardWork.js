import React from "react";
import ExperienceCard from "./ExperienceCard";

function CardWork() {
  return (
    <>
      <ExperienceCard
        company="TIAA.org"
        date="January 2011 - Present (12 yr)"
        title="Director, Sr Lead Development Manager, UI Engineering"
        summary="My tenure at TIAA has been dedicated to cultivating exceptional teams and talent, driving the modernization of our digital landscape. I championed best practices in good housekeeping, consolidating disparate systems into a unified Enterprise Design & Micro-Frontend system, resulting in rapid and successful outcomes. I successfully managed and developed over 350 application frontends across various platforms."
        experience={[
          "Led 2 enterprise and 3 platform teams, overseeing 7 platforms, 17 design languages, and delivering 350+ application frontends.",
          "Streamlined the developer experience (DX) by integrating with the DSM and implemented quality-of-life tools to proactively address common issues.",
          "Established a comprehensive catalog of atomic application building blocks for all developers, fostering efficient development practices.",
          "Spearheaded the launch of a Cookie-less Asset Domain, designed for optimal performance.",
          "Implemented a full development framework merchandising strategy to promote healthy application building practices.",
          "Conducted end-to-end supply chain analysis, re-mapping how we deliver capabilities to production.",
          "Played a key role in Agile Release Teams, managing major epics and providing thought leadership.",
          "Led the development and implementation of the Enterprise Design System and Micro Frontend architecture.",
        ]}
        active
      />
      <ExperienceCard
        company="Gain Capital.com"
        date="January 2011 - 2011 (8 mo)"
        title="Sr. VP Tech Mgr-Sys Eng Analyst / VP Front End Development Manager"
        summary="As a Sr. Technology Manager I took part in very high profile transitions, projects and had a great opportunity to learn many aspects of running a successful online platform, which generated over $80 million in annual revenue."
        experience={[
          "2 enterprise & 3 platform teams",
          "7 platforms, 17 design languages, & 350+ application frontends",
          "Agile Release Team",
          "Major Epic management and thought leadership",
          "Enterprise Design System + Micro Frontend",
        ]}
      />
      <ExperienceCard
        company="Bank of America.com"
        date="January 1999 - 2011 (11 yr)"
        title="Sr. VP Tech Mgr-Sys Eng Analyst / VP Front End Development Manager"
        summary="As a Sr. Technology Manager I took part in very high profile transitions, projects and had a great opportunity to learn many aspects of running a successful online platform, which generated over $80 million in annual revenue."
        experience={[
          "2 enterprise & 3 platform teams",
          "7 platforms, 17 design languages, & 350+ application frontends",
          "Agile Release Team",
          "Major Epic management and thought leadership",
          "Enterprise Design System + Micro Frontend",
        ]}
      />
    </>
  );
}
CardWork.displayName = "CardWork";
export default CardWork;
