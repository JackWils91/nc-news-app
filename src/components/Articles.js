import React, { Component } from "react";
import * as api from "./api";
import { Link } from "@reach/router";
import Error from "./Error";

class Articles extends Component {
  state = {
    articles: [],
    error: null,
    isLoading: true
  };

  render() {
    const { articles, error, isLoading } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <Error error={error} />;

    return (
      <div>
        {articles.map(article => (
          <Link
            key={article.article_id}
            to={`/comments/${article.article_id}/${article.title}`}
          >
            {article.title}
          </Link>
        ))}
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic, sort_by } = this.props;
    // if props have changed, make get request - can set the two below into 2 different constant and then do if(topic || sort-by)
    if ((prevProps.topic !== topic) | (prevProps.sort_by !== sort_by)) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { topic, sort_by } = this.props;
    api
      .getArticles(topic, sort_by)
      .then(articles => {
        this.setState({ articles, isLoading: false, error: null });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err, isLoading: false });
      });
  };
}

export default Articles;
