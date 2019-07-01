import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Voter from "./Voter";
import Grid from "@material-ui/core/Grid";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import IconButton from "@material-ui/core/IconButton";
import { distanceInWords } from "date-fns";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: "auto"
  }
}));

const ArticlePageArticle = ({
  author,
  title,
  body,
  votes,
  id,
  username,
  created_at
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <React.Fragment key={id}>
        <Paper className={classes.root}>
          <Grid container spacing={2}>
            <Grid item>
              {username !== author && (
                <Voter votes={votes} id={id} type="article" />
              )}
              {username === author && (
                <>
                  <IconButton>
                    <ThumbUpIcon />
                  </IconButton>

                  <p>Votes: {votes}</p>
                  <IconButton>
                    <ThumbDownIcon />
                  </IconButton>
                </>
              )}
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" gutterBottom>
                    {body}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" color="textSecondary">
                    Created {distanceInWords(created_at, new Date())} ago
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" color="textSecondary">
                    Author: {author}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </React.Fragment>
    </div>
  );
};

export default ArticlePageArticle;
