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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  otherLinks: {
    color: (props) => (props.mode === "light" ? "#0059b2" : "white"),
    fontSize: "0.9rem",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    color: (props) => (props.mode === "light" ? "#0059b2" : "white"),
    fontSize: "1.25rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
    },
  },
  menuTitle: {
    color: (props) => (props.mode === "light" ? "#0059b2" : "white"),
    cursor: "pointer",
  },
  appBar: {
    top: 0,
    width: "100%",
    zIndex: 10,
    backgroundColor: (props) =>
      props.mode === "light" ? "#F5F5F5" : "#001e3c",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    color: (props) => (props.mode === "dark" ? "white" : "black"),
    backgroundColor: (props) =>
      props.mode === "light" ? "#F5F5F5" : "#001e3c",
  },
  menuIcon: {
    color: (props) => (props.mode === "light" ? "#0059b2" : "white"),
  },
  brightness4Icon: {
    color: "white",
  },
}));

export default function Navbar({ toggleMode, mode ,menu = [], handleMenuSelection }) {

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
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          <Hidden xsDown>
            <Typography
              onClick={handleDrawerToggle}
              variant="subtitle1"
              className={classes.menuTitle}
            >
              Menu
            </Typography>
          </Hidden>
          <Typography variant="h6" className={classes.title}>
            Micromesh
          </Typography>
          <IconButton onClick={toggleMode}>
            {mode === "light" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon className={classes.brightness4Icon} />
            )}
          </IconButton>
          <IconButton onClick={handleMenuOpen}>
            <Typography variant="subtitle1" className={classes.otherLinks}>
              Related Apps
            </Typography>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            className={classes.menu}
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
      {menu.length !== 0 &&
        menu
          .filter((item) => item.display) // Filter menu items with item.display true
          .map((item) => (
            <ListItem
              key={item.widget}
              button
              onClick={(e) => {
                setDrawerOpen(false);
                handleMenuSelection(e.target.innerText, item.widget);
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
    </List>
      </Drawer>
    </div>
  );
}
