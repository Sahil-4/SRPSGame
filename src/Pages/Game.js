import React from "react";
import { useParams } from "react-router";
import Gametitle from "../Components/Gametitle";
import Scoreboard from "../Components/Scoreboard";
import Result from "../Components/Result";
import Optionsbox from "../Components/Optionsbox";
import Chatboard from "../Components/Chatboard";

const Game = () => {
  const { type } = useParams();

  console.log(type);

  // TODO : check for game type and 
  // - handle choices 
  // - handle scores 
  // - handle result 
  // - handle chats 

  return (
    <div className="game_main">
      <Gametitle />
      <Scoreboard />
      <Result />
      <Optionsbox />
      <Chatboard />
    </div>
  );
};

export default Game;
