import { Box, Typography } from "@mui/material";
function Overline() {
  return (
    <Box
      sx={{
        backgroundColor: "#1D741D",
        width: "30px",
        height: "2px",
        marginLeft: "0px",
      }}
    />
  );
}
function SectionContainer({
  children,
  title = "Missing Section Title",
  ...props
}) {
  return (
    <Box data-section pt={7} pb={5} {...props}>
      <Overline />
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
        <Box component="span" sx={{ color: "#1D741D" }}>
          {title.charAt(0)}
        </Box>
        {title.slice(1)}
      </Typography>
      {children}
    </Box>
  );
}
SectionContainer.displayName = "SectionContainer";
export default SectionContainer;
