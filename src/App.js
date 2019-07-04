import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

import Articles from "./components/Articles";
import ArticlePage from "./components/ArticlePage";

import { Router } from "@reach/router";
import Error from "./components/Error";
import * as api from "./components/api";

class App extends Component {
  state = {
    username: "jessjelly",
    topics: [],
    sort_by: "created_at",
    order: "ascending"
  };

  updateSorting = sort_by => {
    this.setState({ sort_by });
  };

  updateOrder = order => {
    this.setState({ order });
  };

  render() {
    const { topics, username, sort_by, authors, order } = this.state;

    return (
      <div className="App">
        <NavBar topics={topics} username={username} authors={authors} />
        <Router>
          <Articles
            path="/"
            sort_by={sort_by}
            order={order}
            updateSorting={this.updateSorting}
            updateOrder={this.updateOrder}
            username={username}
          />
          <Articles
            path="/articles"
            sort_by={sort_by}
            order={order}
            updateSorting={this.updateSorting}
            updateOrder={this.updateOrder}
            username={username}
          />
          <Articles
            path="/topics/:topic"
            sort_by={sort_by}
            order={order}
            updateSorting={this.updateSorting}
            updateOrder={this.updateOrder}
            topics={true}
            username={username}
          />

          <ArticlePage
            path="/comments/:article_id/:article_title"
            username={username}
          />
          <Error default />
        </Router>
      </div>
    );
  }
  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    api.getTopics().then(topics => {
      const topicArray = topics.map(topic => topic.slug);
      this.setState({ topics: topicArray });
    });
  };
}

export default App;
