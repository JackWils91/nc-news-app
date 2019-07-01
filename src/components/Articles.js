import React, { Component } from "react";
import * as api from "./api";
import Error from "./Error";
import SortBar from "./SortBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import ArticleCard from "./ArticleCard";

class Articles extends Component {
  state = {
    articles: [],
    error: null,
    isLoading: true
  };

  render() {
    //const classes = useStyles();
    const { articles, error, isLoading } = this.state;
    const { updateSorting, updateOrder, topics, username } = this.props;
    if (isLoading) return <p>Loading...</p>;
    if (error && topics) return <Error />;
    if (error) return <Error error={error} />;

    return (
      <div>
        <SortBar updateSorting={updateSorting} updateOrder={updateOrder} />
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm md">
            {articles.map(article => (
              <ArticleCard {...article} username={username} />
            ))}
          </Container>
        </React.Fragment>
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic, sort_by, author, order } = this.props;
    // if props have changed, make get request - can set the two below into 2 different constant and then do if(topic || sort-by)
    if (
      prevProps.topic !== topic ||
      prevProps.sort_by !== sort_by ||
      prevProps.author !== author ||
      prevProps.order !== order
    ) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { topic, sort_by, getAuthors, author, order } = this.props;
    api
      .getArticles(topic, sort_by, author, order)
      .then(articles => {
        this.setState({ articles, isLoading: false, error: null });
        getAuthors(articles);
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err, isLoading: false });
      });
  };
}

export default Articles;
