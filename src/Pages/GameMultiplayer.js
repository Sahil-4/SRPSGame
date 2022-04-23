import React from "react";
import Scoreboard from "../Components/Scoreboard";
import Chatboard from "../Components/Chatboard";
import Optionsbox from "../Components/Optionsbox";

const Multiplayer = () => {
  return (
    <div className="game-page H100 W100">
      <h1 className="game-title">Rock Paper Scissor</h1>
      <Scoreboard />
      <Optionsbox />
      <Chatboard />
    </div>
  );
};

export default Multiplayer;
