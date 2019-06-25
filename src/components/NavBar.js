import React from "react";

import { Link } from "@reach/router";

const NavBar = ({ topics, username }) => {
  return (
    <nav>
      {topics.map(topic => (
        <Link key={topic} to={`/topics/${topic}`}>
          {topic}
        </Link>
      ))}
      <p>Logged in as {username}</p>
    </nav>
  );
};

export default NavBar;
