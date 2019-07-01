import React from "react";

import { Link as RouterLink } from "@reach/router";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  },
  color: {
    color: "inherit",
    boxShadow: "none",
    textDecoration: "inherit"
  }
}));

const NavBar = ({ topics, username, authors }) => {
  const classes = useStyles();

  return (
    <div className={classes.color}>
      <AppBar position="static">
        <Grid container justify="space-between" alignItems="left">
          <Grid item xs={4}>
            {/* <Toolbar> */}
            <Link component={RouterLink} to={`/`} color="inherit">
              <IconButton color="inherit" className={classes.leftIcon}>
                <HomeIcon /> NC NEWS APP
              </IconButton>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Typography color="inherit">
              {topics.map(topic => (
                <Button color="inherit">
                  <Link
                    component={RouterLink}
                    color="inherit"
                    className="text"
                    key={topic}
                    to={`/topics/${topic}`}
                  >
                    {topic}
                  </Link>
                </Button>
              ))}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography color="inherit">
              <p>Logged in as {username}</p>
            </Typography>
            {/* </Toolbar> */}
          </Grid>
        </Grid>
      </AppBar>

      {/* {authors.map(author => (
        <Link key={author} to={`/authors/${author}`}>
          {author}
        </Link>
      ))} */}
    </div>
  );
};

export default NavBar;
