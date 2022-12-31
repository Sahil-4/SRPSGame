import React, { useContext } from "react";
import GameContext from "../Context/Game/GameContext";

const Scoreboard = () => {
  const { choice, points, profile } = useContext(GameContext);

  return (
    <div className="scoreboard">
      <div className="points">
        <span>{points.self}</span>
        <span>{points.opponent}</span>
      </div>
      <div className="choices">
        <span>{choice.self}</span>
        <span>{choice.opponent}</span>
      </div>
      <div className="names">
        <span>{profile.name_self}</span>
        <span>{profile.name_opponent}</span>
      </div>
    </div>
  );
};

export default Scoreboard;
