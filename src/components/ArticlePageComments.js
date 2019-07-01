import React from "react";
import { blue, red } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Voter from "./Voter";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

import { distanceInWords } from "date-fns";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  }
}));

const ArticlePageComments = ({
  author,
  created_at,
  body,
  votes,
  comment_id,
  username,
  deleteComment
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <React.Fragment key={comment_id}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              {username !== author && (
                <Voter votes={votes} id={comment_id} type="comment" />
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
                <Grid item>
                  {username === author && (
                    <IconButton
                      variant="subtitle1"
                      color="secondary"
                      onClick={() => deleteComment(comment_id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* </Grid>
        <Paper className={classes.root}>
          <Typography component="p">
            
          </Typography>
          <Typography component="p"></Typography> */}
          {/*   
        <p>
          {created_at} {author} {votes}
        </p>
        <p>{body}</p> */}
        </Paper>
      </React.Fragment>
    </div>
  );
};

export default ArticlePageComments;
