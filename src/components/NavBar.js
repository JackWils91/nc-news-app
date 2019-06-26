import React from "react";

import { Link } from "@reach/router";

const NavBar = ({ topics, username, authors }) => {
  return (
    <nav>
      {topics.map(topic => (
        <Link key={topic} to={`/topics/${topic}`}>
          {topic}
        </Link>
      ))}
      {/* {authors.map(author => (
        <Link key={author} to={`/authors/${author}`}>
          {author}
        </Link>
      ))} */}
      <p>Logged in as {username}</p>
    </nav>
  );
};

export default NavBar;
