import React from "react";

const SortBar = ({ updateSorting, updateOrder }) => {
  const listOfQueries = ["created_at", "comment_count", "votes"];
  const ascendingOrDescending = ["asc", "desc"];
  return (
    <div>
      <select
        onChange={event => {
          updateSorting(event.target.value);
        }}
      >
        {listOfQueries.map(query => {
          return <option key={query}>{query}</option>;
        })}
      </select>
      <select
        onChange={event => {
          updateOrder(event.target.value);
        }}
      >
        {ascendingOrDescending.map(query => {
          return <option key={query}>{query}</option>;
        })}
      </select>
    </div>
  );
};

export default SortBar;
