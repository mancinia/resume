import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function CardGoals() {
  return (
    <>
      <Card
        elevation={1}
        sx={{
          maxWidth: "750px",
          backgroundColor: "#E2EFE3",
          padding: "25px 35px 0px 35px",
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
              sx={{ fontSize: "30px", fontWeight: 700 }}
            >
              Enterprise Digital Modernization
            </Typography>
            <Typography
              sx={{
                fontFamily: "DM Sans",
                fontSize: "24px",
                lineHeight: "40px",
                letterSpacing: 0.5,
                marginTop: "15px",
              }}
            >
              I am committed to help organizations modernize thier digital
              landscape with an{" "}
              <Typography
                variant="inline"
                sx={{ color: "#1D741D", fontWeight: "700" }}
              >
                Enterprise (CDE) Digital Design + Micro Frontend System.
              </Typography>{" "}
            </Typography>
            <Typography
              sx={{
                fontFamily: "DM Sans",
                fontSize: "24px",
                lineHeight: "40px",
                letterSpacing: 1,
                marginTop: "15px",
              }}
            >
              A complete and extended Design System with a heavy focus on the
              Full Stack Developer Experience{" "}
              <Typography
                variant="inline"
                sx={{ color: "#1D741D", fontWeight: "700" }}
              >
                (DX)
              </Typography>{" "}
              for rapid & healthy application outcomes.
            </Typography>
            <Typography
              sx={{
                fontFamily: "DM Sans",
                fontSize: "24px",
                lineHeight: "40px",
                letterSpacing: 1,
                marginTop: "15px",
                marginBottom: "25px",
              }}
            >
              Good housekeeping and continuous improvements will ensure that the
              system remains relevant, adaptable, and aligned with the
              organization's evolving needs.{" "}
            </Typography>
            <Typography
              variant="inline"
              sx={{
                fontFamily: "DM Sans",
                fontSize: "24px",
                lineHeight: "40px",
                letterSpacing: 1,
                // marginTop: "130px",
                color: "#1D741D",
                fontWeight: "700",
              }}
            >
              <em>Cheaper, Better & Faster.</em>{" "}
            </Typography>
            <Typography
              sx={{
                fontFamily: "DM Sans",
                fontSize: "24px",
                lineHeight: "24px",
                letterSpacing: 1,
                marginTop: "30px",
              }}
            >
              Thank You,{" "}
            </Typography>
            <Typography
              sx={{
                fontFamily: "DM Sans",
                fontSize: "24px",
                lineHeight: "40px",
                letterSpacing: 1,
                marginTop: "0px",
              }}
            >
              Angelo{" "}
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default CardGoals;
