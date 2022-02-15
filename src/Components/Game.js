import React, { useContext } from "react";
import GameContext from "../Context/Game/GameContext";

const Game = () => {
  const { Choices, Points, Result } = useContext(GameContext);

  return (
    <>
      <h1 className="game-title">Rock Paper Scissor</h1>
      <div className="score-board W100">
        <div className="your-score-board score-boards">
          <h2>You choose : {Choices.playerChoice}</h2>
          <h2>Your Points : {Points.playerPoints}</h2>
        </div>

        <div className="opponent-score-board score-boards">
          <h2>Opponent choose : {Choices.opponentChoice}</h2>
          <h2>Opponent's Points : {Points.opponentPoints}</h2>
        </div>
      </div>
      <div className="result-box W100">
        <h5 id="result">{Result}</h5>
      </div>
    </>
  );
};

export default Game;
