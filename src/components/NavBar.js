import React from "react";

import { Link } from "@reach/router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const NavBar = ({ topics, username, authors }) => {
  const classes = useStyles();
  console.log(useStyles);

  return (
    <div>
      <AppBar position="static">
        <Grid container justify="space-between" alignItems="center">
          <Toolbar>
            <Typography color="inherit">
              <h1>NC NEWS APP</h1>
              {topics.map(topic => (
                <Button>
                  <Link
                    className="text"
                    // className={classes}
                    key={topic}
                    to={`/topics/${topic}`}
                  >
                    {topic}
                  </Link>
                </Button>
              ))}
              <p>Logged in as {username}</p>
            </Typography>
          </Toolbar>
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
