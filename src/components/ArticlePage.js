import React, { Component } from "react";
import * as api from "./api";
import CommentPost from "./CommentPost";
import Error from "./Error";
import Voter from "./Voter";
import Button from "@material-ui/core/Button";

import ArticlePageArticle from "./ArticlePageArticle";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import { TextField } from "@material-ui/core";
import ArticlePageComments from "./ArticlePageComments";

class ArticlePage extends Component {
  state = {
    article: {},
    comments: [],
    postComment: "",
    error: null,
    isLoading: true
  };

  handleSubmit = event => {
    event.preventDefault();
    const { postComment } = this.state;
    const { article_id, username } = this.props;
    if (postComment) {
      api
        .postComment(article_id, username, postComment)
        .then(({ data }) => {
          const { comment } = data;
          this.setState(prevState => {
            return {
              comments: [comment, ...prevState.comments],
              postComment: ""
            };
          });
        })
        .catch(err => console.log(err));
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  deleteComment = comment_id => {
    api.deleteComment(comment_id).then(({ data }) => {
      this.setState(prevState => {
        return {
          comments: prevState.comments.filter(
            comment => comment.comment_id !== comment_id
          )
        };
      });
    });
  };

  render() {
    const { author, title, body, votes, article_id } = this.state.article;
    const { comments, postComment, error, isLoading } = this.state;
    const { username } = this.props;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <Error error={error} />;

    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm md">
          <ArticlePageArticle author={author} title={title} body={body} />
          <Voter votes={votes} id={article_id} type="article" />
          {/* <p>Comments={comment_count}</p> */}

          <form onSubmit={this.handleSubmit}>
            <TextField
              onChange={this.handleChange}
              name={"postComment"}
              value={postComment}
            />
            <Button type="submit">Submit</Button>
          </form>
          <CommentPost />
          {comments.map(comment => (
            <ArticlePageComments
              {...comment}
              username={username}
              deleteComment={this.deleteComment}
            />
          ))}
        </Container>
      </React.Fragment>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;

    const article = api.getArticle(article_id);

    const comments = api.getCommentsByArticle(article_id);

    return Promise.all([article, comments])
      .then(([article, comments]) => {
        this.setState({ article, comments, isLoading: false, error: null });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err, isLoading: false });
      });
  }
}

export default ArticlePage;
