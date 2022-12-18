import React from "react";
import { Link } from "react-router-dom";

const Selectgame = () => {
  return (
    <div className="center start select">
      <p>Select Game Type</p>
      <div className="start types">
        <Link to="/game/solo">Single Player</Link>
        <Link to="/login">Multiplayer</Link>
      </div>
    </div>
  );
};

export default Selectgame;
