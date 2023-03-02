import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    color: "white",
  },
  appBar: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 10,
    backgroundColor: (props) =>
      props.mode === "light" ? "#7b68ee" : "#212121",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

export default function Navbar({ mode, setMode, menu=[], handleMenuSelection }) {
  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
  };

  const [drawerOpen, setDrawerOpen] = useState(false);

  const classes = useStyles({ mode });

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            onClick={handleDrawerToggle}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Host Application
          </Typography>
          <IconButton onClick={toggleMode}>
            {mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <List>
        {menu.length !==0 && menu.map((item) => (
          <ListItem key={item.appId} button onClick={(e) => handleMenuSelection(e, item.appId, setDrawerOpen)}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        </List>
      </Drawer>
    </div>
  );
}
