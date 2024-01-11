import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ReactComponent as NavOffBullet } from "../svg/leftNavBulletOff.svg";
import { ReactComponent as NavOnBullet } from "../svg/leftNavBulletOn.svg";
import Box from "@mui/material/Box";
import { ReactComponent as CoffeeCup } from "../svg/coffeeCup.svg";

function CustomListItem({label, id, active}) {
  return (
    <ListItem disablePadding>
      <ListItemButton
        component="a"
        href={`#${id}`}
        sx={{ paddingBottom: "10px" }}
      >
        <ListItemIcon sx={{ minWidth: "24px", maxWidth: "24px" }}>
          {active === id ? <NavOnBullet /> : <NavOffBullet />}
        </ListItemIcon>
        <ListItemText
          sx={{
            paddingLeft: "10px",
          }}
          primary={label}
        />
      </ListItemButton>
    </ListItem>
  );
}
function LeftNav({active}) {
  return (
    <Box
      position="fixed"
      sx={{ width: "240px", marginTop: '44px' }}
    >
      <nav aria-label="left navigation">
        <List>
        <CustomListItem label="Hello" id="hello" active={active} />
        <CustomListItem label="Thought Leadership" id="thought" active={active} />
        <CustomListItem label="Key Accomplishments" id="key" active={active} />
        <CustomListItem label="Professional Goals" id="goals" active={active} />
        <CustomListItem label="Work Experience" id="work" active={active} />
        </List>
      </nav>
      <Box sx={{ opacity: "0.4", marginLeft: "-50px" }}>
        <CoffeeCup />
      </Box>
    </Box>
  );
}
export default LeftNav;
