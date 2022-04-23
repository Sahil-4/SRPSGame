import React from "react";
import Scoreboard from "../Components/Scoreboard";
import Optionsbox from "../Components/Optionsbox";

const Singleplayer = () => {

  const onClickFunction = (data) => {
    console.log(data);
  }

  return (
    <div className="game-page H100 W100">
      <h1 className="game-title">Rock Paper Scissor</h1>
      <Scoreboard />
      <Optionsbox onClickFunction={onClickFunction} />
    </div>
  );
};

export default Singleplayer;
