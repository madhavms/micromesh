import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: (props) => (props.mode === "dark" ? "#132f4c" : "#FAFAFA"),
    color: (props) => (props.mode === "dark" ? "#FFFFFF" : "#333333"),
    padding: theme.spacing(3),
    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
    transition: "box-shadow 0.4s ease-in-out",
    border: "none",
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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Paper className={classes.container}>
        <Typography variant="h1" className={classes.title}>
          MicroMesh Microfrontend Platform
        </Typography>
        <Box className={classes.textContainer}>
          <Typography variant="body1" className={classes.text}>
            This is a micro-frontend platform that performs run-time discovery,
            loading and orchestration of independently deployed applications
            bundled in micro-frontend compatible format. 
          </Typography>
          <Box mt={2}>
            <Typography variant="body1" className={classes.text}>
              To access the microfrontend widgets, please use the global
              discovery menu on the left-hand. The MicroMesh platform provides a global disovery menu which helps the users to access onboarded microfrontend applications.
              The platform also introduces an enhanced workspace feature that utilizes a tabbed navigation system, providing users with a seamless and organized way to access multiple applications simultaneously.
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default About;
