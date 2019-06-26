import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

import Articles from "./components/Articles";
import ArticlePage from "./components/ArticlePage";

import Header from "./components/Header";
import { Router } from "@reach/router";
import Error from "./components/Error";

class App extends Component {
  state = {
    username: "jessjelly",
    topics: ["coding", "football", "cooking"],
    sort_by: "created_at",
    order: "ascending",
    authors: []
  };

  updateSorting = sort_by => {
    this.setState({ sort_by });
  };

  updateOrder = order => {
    this.setState({ order });
  };

  getAuthors = articles => {
    console.log(articles);
    const authorMap = articles.map(article => article.author);
    const authors = [...new Set(authorMap)];
    this.setState(prevState => {
      return { authors: [...prevState.authors, authors] };
    });
  };

  render() {
    const { topics, username, sort_by, authors, order } = this.state;

    return (
      <div className="App">
        <Header />
        <NavBar topics={topics} username={username} authors={authors} />
        <Router>
          <Articles
            path="/"
            sort_by={sort_by}
            order={order}
            updateSorting={this.updateSorting}
            updateOrder={this.updateOrder}
            getAuthors={this.getAuthors}
          />
          <Articles
            path="/articles"
            sort_by={sort_by}
            order={order}
            updateSorting={this.updateSorting}
            updateOrder={this.updateOrder}
            getAuthors={this.getAuthors}
          />
          <Articles
            path="/topics/:topic"
            sort_by={sort_by}
            order={order}
            updateSorting={this.updateSorting}
            updateOrder={this.updateOrder}
            getAuthors={this.getAuthors}
          />
          {/* <Articles
            path="/authors/:author"
            sort_by={sort_by}
            updateSorting={this.updateSorting}
            getAuthors={this.getAuthors}
          /> */}
          <ArticlePage
            path="/comments/:article_id/:article_title"
            username={username}
          />
          <Error default />
        </Router>
      </div>
    );
  }
}

export default App;
