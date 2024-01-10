import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ReactComponent as ArrowUp } from "../arrowUp.svg";
import { ReactComponent as ArrowDown } from "../arrowDown.svg";
import { ReactComponent as NavOffBullet } from "../leftNavBulletOff.svg";
import { ReactComponent as NavOnBullet } from "../leftNavBulletOn.svg";
import Box from "@mui/material/Box";
import Item from "@mui/material/Box";
import { ReactComponent as CoffeeCup } from "../coffeeCup.svg";

function LeftNav() {
  return (
    <Box
      position="fixed"
      sx={{ minxWidth: "240px", maxWidth: "240px", marginTop: "90px" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          p: 1,
          m: 1,
        }}
      >
        <Item>
          <ArrowUp />
        </Item>
        <Item>
          <ArrowDown />
        </Item>
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: 360,
          // bgcolor: "background.paper",
        }}
      >
        <nav aria-label="left navigation">
          <List>
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="#hello"
                sx={{ paddingBottom: "10px" }}
              >
                <ListItemIcon sx={{ minWidth: "24px", maxWidth: "24px" }}>
                  <NavOnBullet />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    paddingLeft: "10px",
                  }}
                  primary="Hello"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="#thought"
                sx={{ paddingBottom: "10px" }}
              >
                <ListItemIcon sx={{ minWidth: "24px", maxWidth: "24px" }}>
                  <NavOffBullet />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    paddingLeft: "10px",
                  }}
                  primary="Thought Leadership"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="#key"
                sx={{ paddingBottom: "10px" }}
              >
                <ListItemIcon sx={{ minWidth: "24px", maxWidth: "24px" }}>
                  <NavOffBullet />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    paddingLeft: "10px",
                  }}
                  primary="Key Accomplishments"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="#goals"
                sx={{ paddingBottom: "10px" }}
              >
                <ListItemIcon sx={{ minWidth: "24px", maxWidth: "24px" }}>
                  <NavOffBullet />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    paddingLeft: "10px",
                  }}
                  primary="Professional Goals"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="#work"
                sx={{ paddingBottom: "10px" }}
              >
                <ListItemIcon sx={{ minWidth: "24px", maxWidth: "24px" }}>
                  <NavOffBullet />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    paddingLeft: "10px",
                  }}
                  primary="Work Experience"
                />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
      <Box sx={{ opacity: "0.4", marginLeft: "-50px" }}>
        <CoffeeCup />
      </Box>
    </Box>
  );
}
export default LeftNav;
