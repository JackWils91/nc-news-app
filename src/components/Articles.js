import React, { Component } from "react";
import * as api from "./api";
console.log(api);

class Articles extends Component {
  state = {
    articles: []
  };

  render() {
    const { articles } = this.state;
    return <div>{articles.map(article => article.title)}</div>;
  }

  componentDidMount() {
    const { topic, author } = this.props;
    api.getArticles(topic).then(articles => {
      this.setState({ articles });
    });
  }

  componentDidUpdate(preProps, prevState) {
    // if props have changed, make get request
  }
}

export default Articles;
