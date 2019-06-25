import React, { Component } from "react";
import * as api from "./api";
import CommentPost from "./CommentPost";

class ArticlePage extends Component {
  state = {
    article: {},
    comments: [],
    postComment: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const { postComment } = this.state;
    const { article_id, username } = this.props;
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
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  deleteComment = comment_id => {
    console.log(comment_id);
    api.deleteComment(comment_id).then(({ data }) => {
      console.log(data);
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
    const { author, title, body } = this.state.article;
    const { comments, postComment } = this.state;
    const { username } = this.props;

    return (
      <>
        <p>{author}</p>
        <p>{title}</p>
        <p>{body}</p>
        <div />
        <div />

        <form onSubmit={this.handleSubmit}>
          <label>Comment: </label>{" "}
          <input
            onChange={this.handleChange}
            name={"postComment"}
            value={postComment}
          />
          <button>Submit</button>
        </form>

        <CommentPost />
        {comments.map(({ author, created_at, body, votes, comment_id }) => (
          <React.Fragment key={comment_id}>
            <p>
              {created_at} {author} {votes}
            </p>
            <p>{body}</p>
            {username === author && (
              <button onClick={() => this.deleteComment(comment_id)}>
                Delete!
              </button>
            )}
          </React.Fragment>
        ))}
      </>
    );
  }
  componentDidMount() {
    const { article_id } = this.props;

    const article = api.getArticle(article_id);

    const comments = api.getCommentsByArticle(article_id);

    return Promise.all([article, comments]).then(([article, comments]) => {
      this.setState({ article, comments });
    });
  }
}

export default ArticlePage;
