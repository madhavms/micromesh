import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    color: (props) => (props.mode === "dark" ? "white" : "black"),
    backgroundColor: (props) => (props.mode === "dark" ? "#333333" : "#FAFAFA"),
    textAlign: "center",
  },
  link: {
    color: (props) => (props.mode === "dark" ? "#90CAF9" : "#2196F3"),
    margin: theme.spacing(0.8),
  },
}));

export default function Footer({ mode }) {
  const classes = useStyles({ mode });

  return (
    <footer className={classes.footer}>
    <Container maxWidth="sm">
    <Grid container alignItems="center" justifyContent="center">
      <Grid item>
        <Typography variant="body1">
          MicroMesh © {new Date().getFullYear()}
        </Typography>
      </Grid>
      <Grid item>
        <Box>
          <Link
            href="https://github.com/madhavms/react-host-remote"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            <GitHubIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/madhavmanohars/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            <LinkedInIcon />
          </Link>
        </Box>
      </Grid>
    </Grid>
  </Container>
  
    </footer>
  );
}
