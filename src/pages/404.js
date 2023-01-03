import * as React from "react";

const NotFoundPage = () => {
  return (
    <>
      <h1>404: Not found</h1>
      <p>Sorry mate, this route doessn&#39;t exist. Please go back.</p>
    </>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
