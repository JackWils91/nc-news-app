import React from "react";

import { Link } from "@reach/router";

const NavBar = ({ topics, username, updateSorting }) => {
  const listOfQueries = ["created_at", "comment_count", "votes"];
  return (
    <nav>
      <select
        onChange={event => {
          updateSorting(event.target.value);
        }}
      >
        {console.log(listOfQueries)}
        {listOfQueries.map(query => {
          return <option key={query}>{query}</option>;
        })}
      </select>

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
