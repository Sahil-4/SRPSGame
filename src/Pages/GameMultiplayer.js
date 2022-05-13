import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Scoreboard from "../Components/Scoreboard";
import Optionsbox from "../Components/Optionsbox";
import Chatboard from "../Components/Chatboard";
import GameContext from "../Context/Game/GameContext";

const Multiplayer = () => {
  const Navigate = useNavigate();
  const { Player, connectToServer, sendChoice } = useContext(GameContext);

  useEffect(() => {
    if (Player.name) {
      return () => {
        console.log("calling server");
        connectToServer();
      };
    } else {
      Navigate("/join");
    }
  }, []);

  return (
    <>
      <div className="title W100">
        <h1>Rock Paper Scissor</h1>
      </div>
      <div className="game-page W100">
        <Scoreboard />
        <Optionsbox onClickFunction={sendChoice} />
      </div>
      <Chatboard />
    </>
  );
};

export default Multiplayer;
