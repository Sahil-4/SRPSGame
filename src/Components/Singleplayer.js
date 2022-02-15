import React, { useContext, useEffect } from "react";
import GameContext from "../Context/Game/GameContext";
import Game from "./Game";
import rockImage from "./assets/rock.png";
import paperImage from "./assets/paper.png";
import scissorImage from "./assets/scissor.png";

const Singleplayer = () => {
  const { playWithBot, setDefault } = useContext(GameContext);

  useEffect(() => {
    setDefault();
  }, []);

  return (
    <div className="game-page H100 W100">
      <Game />
      <div className="options-box W100">
        <img
          src={rockImage}
          alt="Option Rock"
          className="choice-image"
          onClick={() => {
            playWithBot(0);
          }}
        />
        <img
          src={paperImage}
          alt="Option Paper"
          className="choice-image"
          onClick={() => {
            playWithBot(1);
          }}
        />
        <img
          src={scissorImage}
          alt="Option Scissor"
          className="choice-image"
          onClick={() => {
            playWithBot(2);
          }}
        />
      </div>
    </div>
  );
};

export default Singleplayer;
