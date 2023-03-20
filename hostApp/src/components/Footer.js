import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: "auto",
      backgroundColor: "white",
      textAlign: "center",
    },
  }));

  export default function Footer() {
    const classes = useStyles();
  
    return (
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">
            MicroMesh © {new Date().getFullYear()}
          </Typography>
          <Link href="https://github.com/madhavms/react-host-remote" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </Link>
        </Container>
      </footer>
    );
  }
  