import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
//import SortBar from "./components/SortBar";
import Articles from "./components/Articles";
import ArticlePage from "./components/ArticlePage";
//import Topics from "./components/Topics";
import Header from "./components/Header";
import { Router } from "@reach/router";
import Error from "./components/Error";

//{/* <SortBar /> */} ,__ maybe use sort bar below nav bar but maybe just put it all in the nav bar

class App extends Component {
  state = {
    username: "jessjelly",
    topics: ["coding", "football", "cooking"],
    sort_by: "created_at"
  };

  // handleNavBarClick = event => {
  //   const { value } = event.target;

  //   this.setState({ currentTopic: value });
  // };
  updateSorting = sort_by => {
    this.setState({ sort_by });
  };

  render() {
    const { topics, username, sort_by } = this.state;

    return (
      <div className="App">
        <Header />
        <NavBar
          topics={topics}
          username={username}
          updateSorting={this.updateSorting}
        />
        <Router>
          <Articles path="/" sort_by={sort_by} />
          <Articles path="/articles" sort_by={sort_by} />
          <Articles path="/topics/:topic" sort_by={sort_by} />
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
