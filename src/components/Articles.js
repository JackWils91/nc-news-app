import React, { Component } from "react";
import * as api from "./api";
import Error from "./Error";
import SortBar from "./SortBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import ArticleCard from "./ArticleCard";
import Button from "@material-ui/core/Button";

class Articles extends Component {
  state = {
    articles: [],
    error: null,
    isLoading: true,
    page: 1,
    disable: false,
    total_count: null
  };

  render() {
    const { articles, error, isLoading, page, total_count } = this.state;
    const { updateSorting, updateOrder, username } = this.props;
    const disabled = Math.ceil(total_count / 10) === page;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <Error error={error} />;

    return (
      <div>
        <SortBar updateSorting={updateSorting} updateOrder={updateOrder} />
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
            {articles.map(article => (
              <ArticleCard
                {...article}
                username={username}
                key={article.article_id}
              />
            ))}
            <Button onClick={() => this.handlePage(-1)} disabled={page === 1}>
              Previous
            </Button>
            <Button onClick={() => this.handlePage(1)} disabled={disabled}>
              Next
            </Button>
          </Container>
        </React.Fragment>
      </div>
    );
  }

  handlePage = increment => {
    this.setState(prevState => ({
      page: prevState.page + increment
    }));
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic, sort_by, author, order } = this.props;
    const { page } = this.state;

    if (
      prevProps.topic !== topic ||
      prevProps.sort_by !== sort_by ||
      prevProps.author !== author ||
      prevProps.order !== order ||
      prevState.page !== page
    ) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { topic, sort_by, author, order } = this.props;
    const { page } = this.state;
    api
      .getArticles(topic, sort_by, author, order, page)
      .then(({ articles, total_count }) => {
        this.setState({ articles, total_count, isLoading: false, error: null });
      })
      .catch(err => {
        this.setState({ error: err, isLoading: false });
      });
  };
}

export default Articles;
