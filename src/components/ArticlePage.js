import React, { Component } from "react";
import * as api from "./api";
import CommentPost from "./CommentPost";
import Error from "./Error";
import Voter from "./Voter";

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
      <>
        <p>{author}</p>
        <p>{title}</p>
        <p>{body}</p>
        <Voter votes={votes} id={article_id} type="article" />
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
            <Voter votes={votes} id={comment_id} type="comment" />
          </React.Fragment>
        ))}

        {/* <p>Comments={comment_count}</p> */}
      </>
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
