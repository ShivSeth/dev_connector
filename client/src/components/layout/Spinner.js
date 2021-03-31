import React, { Fragment } from "react";
import spinner from "./spinner.gif";
const Spinner = () => {
  return (
    <div>
      <Fragment>
        <img
          src={spinner}
          style={{ width: "200px", margin: "auto", display: "block" }}
          alt="loading..."
        />
      </Fragment>
    </div>
  );
};

export default Spinner;
