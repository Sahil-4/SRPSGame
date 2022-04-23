import React from "react";

const Scoreboard = () => {
  return (
    <div className="scoreboard W100">
      <div className="boards-container W100">
        <div className="you board">
          <h1 className="points">2</h1>
          <h1 className="choice">Rock</h1>
          <h1 className="player">You</h1>
        </div>
        <div className="opponent board">
          <h1 className="points">2</h1>
          <h1 className="choice">Paper</h1>
          <h1 className="player">Opponent</h1>
        </div>
      </div>
      <h1 className="result">You win.</h1>
    </div>
  );
};

export default Scoreboard;
