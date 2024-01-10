import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmailIcon from "@mui/icons-material/Email";

const pages = ["PDF", "Email", "Linkedin"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box>
      <AppBar
        elevation={6}
        position="fixed"
        sx={{ backgroundColor: "#F3F7ED", opacity: [0.95] }}
      >
        <Container fixed maxWidth="lg">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            <Box sx={{ color: "#000000", padding: "20px" }}>
              <Typography
                variant="h6"
                // noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "flex" },
                  fontFamily: "Lato",
                  fontSize: "36px",
                  fontWeight: 500,
                  color: "#000000",
                  paddingBottom: "0px",
                  lineHeight: "42px",
                  // border: "solid 1px #000000",
                  // letterSpacing: ".3rem",

                  textDecoration: "none",
                }}
              >
                <Box component="span" sx={{ color: "#1D741D" }}>
                  g
                </Box>
                elo
              </Typography>
              <Typography variant="subtitle1" sx={{ fontSize: "14px" }}>
                UI, UX, AppDev, Product Vision, Technologist …
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="#000000"
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              // noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "none" },
                fontFamily: "Lato",
                fontSize: "36px",
                fontWeight: 500,
                color: "#000000",
                paddingBottom: "0px",
                lineHeight: "42px",
                // border: "solid 1px #000000",
                // letterSpacing: ".3rem",

                textDecoration: "none",
              }}
            >
              <Box component="span" sx={{ color: "#1D741D" }}>
                g
              </Box>
              elo
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              <IconButton aria-label="delete" sx={{ color: "#000000" }}>
                <PictureAsPdfIcon fontSize="large" />
              </IconButton>
              <IconButton aria-label="delete" sx={{ color: "#000000" }}>
                <EmailIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="Linkedin.com"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/angelo-mancini-3b282b10?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5DVrX%2Fb2RQOKv5Cgk%2B9%2Flw%3D%3D"
                  )
                }
                sx={{ color: "#000000" }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              {/* {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  startIcon={<AcUnitIcon />}
                  sx={{
                    my: 2,
                    color: "#000000",
                    display: "block",
                    border: "solid 1px #000000",
                  }}
                >
                  {page}
                </Button>
              ))} */}
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "none" } }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="G" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Nav;
