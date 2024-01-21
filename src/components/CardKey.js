import React from "react";
import { Box } from "@mui/material";
import AccomplishmentCard from "./AccomplishmentCard";
function CardKey() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
      }}
    >
      <AccomplishmentCard
        title="Digital Modernization"
        description={
          <>
            Consolidation of 7 Platforms, 17 Design Languages & 350 Applications
            to 1 Enterprise{" "}
            <Box component="span" sx={{ color: "#1D741D", fontWeight: "700" }}>
              MFE
            </Box>{" "}
            Design System.
          </>
        }
      />
      <AccomplishmentCard
        title="Full Stack CDE"
        description={
          <>
            Developer Experience{" "}
            <Box component="span" sx={{ color: "#1D741D", fontWeight: "700" }}>
              (DX)
            </Box>{" "}
            Easy Button. E2E App Dev for rapid and consistant outcomes.
          </>
        }
      />
      <AccomplishmentCard
        title="Cookieless Domain CDN"
        description="New Asset CDN built to perform."
      />
      <AccomplishmentCard
        title="CI/CD Pipelines"
        description="Proactive Code Quality linters, accessibility and testing toll gates."
      />
      <AccomplishmentCard
        title="Merchandising"
        description={
          <>
            1 Core{" "}
            <Box component="span" sx={{ color: "#1D741D", fontWeight: "700" }}>
              Atomic
            </Box>{" "}
            product that builds all products. Build once & consume across the{" "}
            <Box component="span" sx={{ color: "#1D741D", fontWeight: "700" }}>
              Omni
            </Box>{" "}
            channel.
          </>
        }
      />
      <AccomplishmentCard
        title="Operations"
        description="E2E Supply Chain Analysis &amp; &nbsp; Mapping."
      />
      <AccomplishmentCard
        title="Anatomy of a Web Page"
        description="Quick tracking/view of all the building blocks of an application"
      />
      <AccomplishmentCard
        title="Communications"
        description="1 connected dictionary to facilitate a common communication for all."
      />
      <AccomplishmentCard
        title="Optimizations"
        description="73% increased converted account from Marketing campaigns."
      />
      <AccomplishmentCard
        title="Consumers"
        description="1 Catalog for all developers to shop from."
      />
      <AccomplishmentCard
        title="CIO Award Submission"
        description="E2E DSM+Dev System."
      />
      <AccomplishmentCard
        title="Patent Submission"
        description="E2E DSM+Dev System."
      />
    </Box>
  );
}

export default CardKey;
