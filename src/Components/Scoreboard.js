import React from "react";

const Scoreboard = () => {
  return (
    <div className="scoreboard">
      <div className="points">
        <span>0</span>
        <span>0</span>
      </div>
      <div className="choices">
        <span>Rock</span>
        <span>Rock</span>
      </div>
      <div className="names">
        <span>You</span>
        <span>Opponent</span>
      </div>
    </div>
  );
};

export default Scoreboard;
