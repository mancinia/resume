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
        summary="In my roles at GAIN Capital and Empire Concierge, I demonstrated a dynamic skill set encompassing design, prototyping, eBook creation, and coding. Notably, I played a key role in designing and coding interfaces for GAIN Capital's Forex.com and inthemoney.com, along with conceptualizing and coding the interface for Empire Concierge's concierge platform."
        experience={[
          "Led the design, prototyping, eBook creation, and coding initiatives.",
          "Developed and implemented social media streams on platforms like Facebook, Twitter, and Google Places.",
          "Utilized HTML, CSS, Flash, and jQuery to construct marketing sites, application interfaces, and administration panels.",
          "Worked on a Ruby on Rails platform with a Git repository.",
          "Emphasized strong attention to SEO and analytic data.",
          "Applied Lean UX and Agile methodologies, adhering to the Model-View-Controller pattern.",
        ]}
      />
      <ExperienceCard
        company="Bank of America.com"
        date="January 1999 - 2011 (11 yr)"
        title="Sr. VP Tech Mgr-Sys Eng Analyst / VP Front End Development Manager"
        summary="With a robust background spanning 16 years of hands-on coding, I have excelled in managing and maintaining the front-end development of the baisidirect.com brokerage consumer portal. My expertise includes overseeing the administration portal interface, integrating Interwoven content management system during site redesign, and managing the daily operations of project development lifecycles."
        experience={[
          "Managed and maintained front-end development for the brokerage consumer portal.",
          "Oversaw the administration portal interface supporting baisidirect.com.",
          "Planned and successfully integrated the Interwoven content management system into a site redesign.",
          "Managed project development lifecycles for Dev, QA, UAT, and Staging, ensuring seamless operations.",
          "Orchestrated the creation and merging of repository branches for all development environments.",
          "Oversaw deployments between Dev, QA, UAT, and Staging, ensuring a smooth transition.",
          "Conducted detailed reviews of technical documentation, including BRDs, Wireframes, High, and Low level documents.",
          "Administered and maintained ticket tracker and wiki applications (Atlassian: Jira and Confluence).",
          "Spearheaded the creation of new processes and policies for release management to support rapid application development.",
          "Designed and developed application prototypes for executive management presentations.",
          "Integrated ADA/WAI-Aria best practices for enhanced accessibility in the brokerage consumer portal.",
          "Successfully managed 3rd party UI integrations for brokerage research, quotes, and news.",
          "Built and maintained micro sites for new product releases and company mergers.",
          "Demonstrated an advanced understanding of search engine optimization and analytics.",
          "Recognized with 4 company awards and nominated for the Award of Excellence at Bank of America.",
          "Maintained a strong focus on driving the bank's core values, vision, and brand into the brokerage consumer portal.",
        ]}
      />
    </>
  );
}
CardWork.displayName = "CardWork";
export default CardWork;
