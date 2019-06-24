import React from "react";

import { Link } from "@reach/router";

const NavBar = ({ topics, handleNavBarClick }) => {
  return (
    <nav>
      {topics.map(topic => (
        <Link key={topic} to={`/topics/${topic}`}>
          {topic}
        </Link>
      ))}
      <p>Logged in as Jess Jelly</p>
    </nav>
  );
};

export default NavBar;
