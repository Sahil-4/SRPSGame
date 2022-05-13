import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [state, setState] = useState(1);

  const Home = (
    <>
      <h1
        onClick={() => {
          setState(0);
        }}
      >
        <Link to="/">Start</Link>
      </h1>
      <h1>
        <Link to="/help">Help</Link>
      </h1>
      <h1>
        <Link to="/about">About</Link>
      </h1>
      <span className="signature">Created by : Sahil-4</span>
    </>
  );

  const chooseGameType = (
    <>
      <span>Choose Game Type</span>

      <h1>
        <Link to="/play">Single Player</Link>
      </h1>
      <h1>
        <Link to="/join">Two Player</Link>
      </h1>
    </>
  );

  return <div className="home center W100">{state ? Home : chooseGameType}</div>;
};

export default Home;
