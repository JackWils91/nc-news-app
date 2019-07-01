import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const ArticlePageArticle = ({ author, title, body }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        {title}
      </Typography>
      <Typography component="p">{author}</Typography>
      <Typography component="p">{body}</Typography>
    </Paper>
  );
};

export default ArticlePageArticle;
