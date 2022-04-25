import React from "react";
import Scoreboard from "../Components/Scoreboard";
import Optionsbox from "../Components/Optionsbox";

const Singleplayer = () => {

  const onClickFunction = (data) => {
    console.log(data);
  }

  return (
    <>
      <div className="title W100">
        <h1>Rock Paper Scissor</h1>
      </div>
      <div className="game-page W100">
        <Scoreboard />
        <Optionsbox onClickFunction={onClickFunction} />
      </div>
    </>
  );
};

export default Singleplayer;
