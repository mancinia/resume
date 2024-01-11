import React from "react";
import { Box, Typography, Card, CardContent} from "@mui/material";

function ExperienceCard({
    company = '', 
    date = '', 
    title = '', 
    summary = '', 
    experience = [], 
    active = false
}) {
  return (
    <Card
      elevation={1}
      sx={{
        maxWidth: "750px",
        backgroundColor: active ? '#E2EFE3' : '#F3F7ED',
        padding: "0px",
        paddingRight: "70px",
        border: "solid 2px #ffffff",
        marginBottom: "5px",
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
          <Box>
            <img src="CardBulletBlue.png" alt="bullet" />
          </Box>
          <Box sx={{ marginLeft: "5px" }}>
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
              {company}
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
              {date}
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
              {title}
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
              {summary}
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
            {experience.map((item) => (
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
                    - {item}
                </Box>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
ExperienceCard.displayName = "ExperienceCard";
export default ExperienceCard;