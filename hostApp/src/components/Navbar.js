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
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  otherLinks: {
    color: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    color: "white",
    fontSize: "1.25rem",
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
  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles({ mode });

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
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
          <Hidden xsDown>
          <Typography variant="subtitle1" className={classes.menuTitle}>
            Menu
          </Typography>
          </Hidden>
          <Typography variant="h6" className={classes.title}>
          MicroMesh
          </Typography>
          <IconButton onClick={toggleMode}>
            {mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <IconButton onClick={handleMenuOpen}>
            <Typography variant="subtitle1" className={classes.otherLinks}>Related Apps</Typography>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem
              onClick={handleMenuClose}
              component="a"
              href={process.env.SHOWCASE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Showcase App
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component="a"
              href={process.env.ONBOARDING_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Onboarding App
            </MenuItem>
          </Menu>
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
