import React, { useContext } from "react";
import Scoreboard from "../Components/Scoreboard";
import Optionsbox from "../Components/Optionsbox";
import GameContext from "../Context/Game/GameContext";

const Singleplayer = () => {
  const { playWithBot } = useContext(GameContext);

  return (
    <>
      <div className="title W100">
        <h1>Rock Paper Scissor</h1>
      </div>
      <div className="game-page W100">
        <Scoreboard />
        <Optionsbox onClickFunction={playWithBot} />
      </div>
    </>
  );
};

export default Singleplayer;
