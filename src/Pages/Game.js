import React from "react";
import { useParams } from "react-router";

const Game = () => {
  const { type } = useParams();

  console.log(type);

  return <div>Game</div>;
};

export default Game;
