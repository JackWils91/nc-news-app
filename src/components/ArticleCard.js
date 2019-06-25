import React, { Component } from "react";
import * as api from "./api";
import CommentPost from "./CommentPost";

class ArticleCard extends Component {
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
        console.log(data.comment.body);
        const { comment } = data;
        this.setState(prevState => {
          console.log(data.comment.body);
          return {
            comments: [comment, ...prevState.comments]
          };
        });
      })
      .catch(err => console.log(err));
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { author, title, body } = this.state.article;
    const { comments } = this.state;

    return (
      <>
        <p>{author}</p>
        <p>{title}</p>
        <p>{body}</p>
        <div />
        <div />

        <form onSubmit={this.handleSubmit}>
          <label>Comment: </label>{" "}
          <input onChange={this.handleChange} name={"postComment"} />
          <button>Submit</button>
        </form>

        <CommentPost />
        {comments.map(({ author, created_at, body, votes, comment_id }) => (
          <React.Fragment key={comment_id}>
            <p>
              {created_at} {author} {votes}
            </p>
            <p>{body}</p>
          </React.Fragment>
        ))}
      </>
    );
  }
  componentDidMount() {
    const { article_id } = this.props;

    let article = api.getArticle(article_id);

    let comments = api.getCommentsByArticle(article_id);

    return Promise.all([article, comments]).then(([article, comments]) => {
      this.setState({ article, comments });
    });
  }
}

export default ArticleCard;
