import React from "react";
import { Link } from "react-router-dom";
import Gametitle from "./Gametitle";

const Start = () => {
  return (
    <>
      <div className="center start">
        <Gametitle />
        <Link to="/game-type">Start</Link>
        <Link to="/help">Help</Link>
        <Link to="/about">About</Link>
        <p className="creater_signature">
          Created by{" : "}
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
    </>
  );
};

export default Start;
