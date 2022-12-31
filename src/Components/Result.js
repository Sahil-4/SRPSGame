import React, { useContext } from "react";
import GameContext from "../Context/Game/GameContext";

const Result = () => {
  const { result } = useContext(GameContext);

  return <div className="result">{result}</div>;
};

export default Result;
