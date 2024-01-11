import { Box, Card, CardContent, Typography } from "@mui/material";
function AccomplishmentCard({ title, description }) {
  return (
    <Card
        sx={{
            width: "400px",
            backgroundColor: "#E2EFE3",
            border: "solid 2px #ffffff",
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
                    <img src="CardBullet.png" alt="bullet" />
                </Box>
                <Box sx={{ marginLeft: "5px" }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: 24,
                            marginTop: "10px",
                            marginBottom: "10px",
                            fontFamily: "Lato",
                            fontWeight: 700,
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body"
                        sx={{
                            fontSize: 18,
                            marginTop: "0px",
                            fontFamily: "DM Sans",
                            fontWeight: 500,
                            letterSpacing: 0.2,
                        }}
                    >
                        {description}
                    </Typography>
                </Box>
            </Box>
        </CardContent>
    </Card>
  );
};
AccomplishmentCard.displayName = "AccomplishmentCard";
export default AccomplishmentCard;