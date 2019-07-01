import React from "react";
import Paper from "@material-ui/core/Paper";
import { Link } from "@reach/router";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const ArticleCard = ({ article_id, title, body, author, votes }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        <Link key={article_id} to={`/comments/${article_id}/${title}`}>
          {title}
        </Link>
      </Typography>
      <Typography component="p">{`${body.substr(0, 125)}...`}</Typography>
      <Typography component="p">Author: {author}</Typography>
      <Typography component="p">Votes: {votes}</Typography>
    </Paper>
  );
};

export default ArticleCard;
