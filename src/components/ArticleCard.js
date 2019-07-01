import React from "react";
import Paper from "@material-ui/core/Paper";
import { Link } from "@reach/router";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { distanceInWords } from "date-fns";
import Voter from "./Voter";
import Grid from "@material-ui/core/Grid";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 700
  }
}));

const ArticleCard = ({
  article_id,
  title,
  body,
  author,
  votes,
  created_at,
  username
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <React.Fragment key={article_id}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              {username !== author && (
                <Voter votes={votes} id={article_id} type="article" />
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
                    <Link
                      key={article_id}
                      to={`/comments/${article_id}/${title}`}
                    >
                      {title}
                    </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" gutterBottom>
                    {`${body.substr(0, 125)}...`}
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
                {/* <Typography component="p">{`${body.substr(0, 125)}...`}</Typography> */}
                {/* <Typography component="p">Author: {author}</Typography>
      <Typography component="p">Votes: {votes}</Typography>
      <Typography component="p">
        Created {distanceInWords(created_at, new Date())} ago
      </Typography> */}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </React.Fragment>
    </div>
  );
};

export default ArticleCard;
