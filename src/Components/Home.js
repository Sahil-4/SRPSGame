import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [state, setState] = useState(0);

  if (state === 0) {
    return (
      <div className="home-page">
        {/* <Link to="/play"> */}
        <h3
          className="home-page-nav-links"
          onClick={() => {
            setState(1);
          }}
        >
          Start
        </h3>
        {/* </Link> */}
        <Link to="/help">
          <h3 className="home-page-nav-links">Help</h3>
        </Link>
        <Link to="/about">
          <h3 className="home-page-nav-links">About</h3>
        </Link>
        <h4 className="creator-signature">Created by : Sahil-4</h4>
      </div>
    );
  } else {
    return (
      <>
        <div className="home-page">
          <h3 className="home-page-nav-links">Choose Game Type</h3>
          <br />
          <Link to="/play">
            <h3 className="home-page-nav-links">Single Player</h3>
          </Link>
          <Link to="/join">
            <h3 className="home-page-nav-links">Two Player</h3>
          </Link>
        </div>
      </>
    );
  }
};

export default Home;
