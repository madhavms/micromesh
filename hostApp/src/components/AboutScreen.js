import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: (props) => props.mode === "dark" ? "#333333" : "#FAFAFA",
    color: (props) => props.mode === "dark" ? "#FFFFFF" : "#333333",
    padding: theme.spacing(3),
  },
  title: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  text: {
    fontSize: "1.15rem",
    lineHeight: "1.5",
  },
  textContainer: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: theme.spacing(2),
  },
}));

const About = ({ mode }) => {
  const classes = useStyles({ mode });

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      <Paper className={classes.container}>
        <Typography variant="h1" className={classes.title}>
          MicroMesh Microfrontend Platform
        </Typography>
        <Box className={classes.textContainer}>
          <Typography variant="body1" className={classes.text}>
            This is a micro-frontend platform that performs run-time discovery,
            integration and orchestration of independently deployed applications
            bundled in micro-frontend compatible format. The application uses Webpack module federation plugin to achieve runtime loading and orchestration of modules.
          </Typography>
          <Box mt={2}>
          <Typography variant="body1" className={classes.text}>
            To access the global discovery menu and access the microfrontend widgets,
            please use the left-hand menu.
          </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default About;
