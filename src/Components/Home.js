import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <Link to="/start">
        <h3 className="home-page-nav-links">Start</h3>
      </Link>
      <Link to="/help">
        <h3 className="home-page-nav-links">Help</h3>
      </Link>
      <Link to="/about">
        <h3 className="home-page-nav-links">About</h3>
      </Link>
      <h4 className="creator-signature">Created by : Sahil-4</h4>
    </div>
  );
};

export default Home;
