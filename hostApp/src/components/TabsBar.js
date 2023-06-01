import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  hiddenIndicator: {
    display: 'none',
  },
  closeIcon: {
    color: "white"
  },
  closeIconSelected: {
    color: (props) => (props.mode === "light" ? "#0059b2" : "white")
  },
  tabs: {
    flexGrow: 1,
  },
  tabsContainer: {
    backgroundColor: "black",
    paddingTop: theme.spacing(1.2),
    maxHeight: "42px",
  },
  tab: {
    color: "white",
    backgroundColor: "black",
    fontSize:"0.8rem",
    borderTopLeftRadius: theme.spacing(1),
    borderTopRightRadius: theme.spacing(1),
    borderBottom: "None",
    "&:hover": {
     opacity: "0.7"
    },
    "&.Mui-selected:hover": {
      opacity: "1"
     },
    "&.Mui-selected": {
      backgroundColor: (props) =>
      props.mode === "light" ? "#F5F5F5" : "#001e3c",
      color: (props) => (props.mode === "light" ? "#0059b2" : "white"),
    },
    "&.Mui-focusVisible": {
      backgroundColor: (props) =>
      props.mode === "light" ? "#F5F5F5" : "#001e3c",
    },
    closeButton: {
      marginLeft: theme.spacing(1),
      padding: 0
    },
    labelContainer: {
      display: "flex",
      alignItems: "center",
    }
  }

}));


function TabsBar({ openTabs, selectedTab, mode, handleTabSelection, handleCloseTab }) {
  const classes = useStyles({ mode });
  return (
    <div className={classes.tabsContainer}>
    <Tabs
      value={openTabs[selectedTab]?.label}
      onChange={(e, newValue) => handleTabSelection(e, newValue)}
      indicatorColor="primary"
      textColor="primary"
      classes={{ indicator: classes.hiddenIndicator }}
      variant="scrollable"
      scrollButtons="auto"
    >
      {openTabs.map((tab, index) => (
        <Tab key={tab.label} label={
          <span className={classes.labelContainer}>
            {tab.label}
            <IconButton
              className={classes.closeButton}
              onClick={(e) => {
                console.log('clicked',tab.label)
                e.stopPropagation(); // Prevent changing the selected tab
                handleCloseTab(tab.label); // Handle tab closing
              }}
              size="small"
            >
              <CloseIcon fontSize="small" className={selectedTab == index ? classes.closeIconSelected : classes.closeIcon}/>
            </IconButton>
          </span>
        } value={tab.label} className={classes.tab}/>
      ))}
    </Tabs>
    </div>
  );
}

export default TabsBar;
