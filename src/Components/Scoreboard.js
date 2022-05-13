import React, { useContext } from "react";
import GameContext from "../Context/Game/GameContext";

const Scoreboard = () => {
  const { Player, Points, Result, Choices } = useContext(GameContext);

  return (
    <div className="scoreboard W100">
      <div className="boards-container W100">
        <div className="you board">
          <h1 className="points">{Points.player}</h1>
          <h1 className="choice">{Choices.player}</h1>
          <h1 className="player">{Player.name || "You"}</h1>
        </div>
        <div className="opponent board">
          <h1 className="points">{Points.opponent}</h1>
          <h1 className="choice">{Choices.opponent}</h1>
          <h1 className="player">{Player.opponent || "Computer"}</h1>
        </div>
      </div>
      <div className="result W100">
        <h1>{Result}</h1>
      </div>
    </div>
  );
};

export default Scoreboard;
