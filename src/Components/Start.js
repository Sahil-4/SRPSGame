import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="center_h_self start">
      <Link to="/select">
        <span>Start</span>
      </Link>
      <Link to="help">
        <span>Help</span>
      </Link>
      <Link to="about">
        <span>About</span>
      </Link>
      <p className="creater_signature">
        Created by{" "}
        <a
          className="text_plain"
          rel="noreferrer"
          target="_blank"
          href="https://github.com/Sahil-4"
        >
          Sahil-4
        </a>
      </p>
    </div>
  );
};

export default Start;
