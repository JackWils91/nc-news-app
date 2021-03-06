import React from "react";

const Error = ({ error }) => {
  return (
    <div>
      {error ? <p>{error.response.data.msg}</p> : <p> Page not found!</p>}
    </div>
  );
};

export default Error;
