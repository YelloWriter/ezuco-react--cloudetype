import React from "react";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Recipt.css";

const unAuthorization = () => {
  return (
    <div id="ErrorDiv">
      <div>
        <h1 id="ErrorPage">Page Not Access</h1>
          <h3>please </h3>
        <Link id="LoginAgain" to="/">
          retry
        </Link>
      </div>
    </div>
  );
};

export default unAuthorization;
