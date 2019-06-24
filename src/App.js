import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
//import SortBar from "./components/SortBar";
import Articles from "./components/Articles";
import ArticleCard from "./components/ArticleCard";
import Topics from "./components/Topics";
import Header from "./components/Header";
import { Router } from "@reach/router";

//{/* <SortBar /> */} ,__ maybe use sort bar below nav bar but maybe just put it all in the nav bar

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <Header />
      <NavBar />
      <Router>
        <Articles path={"/articles"} />
        <Topics path={"/:topic"} />
        <ArticleCard path={"/comments/:article_id/:article_title"} />
      </Router>
    </div>
  );
}

export default App;
