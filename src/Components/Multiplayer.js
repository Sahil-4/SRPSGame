import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import GameContext from "../Context/Game/GameContext";
import Game from "./Game";
import Chat from "./Chat";
import rockImage from "./assets/rock.png";
import paperImage from "./assets/paper.png";
import scissorImage from "./assets/scissor.png";

const Multiplayer = () => {
  const navigate = useNavigate();

  const { playerData, connectToServer, playWithFriend, sendChoice } =
    useContext(GameContext);

  useEffect(() => {
    const { name } = playerData;
    if (!name) {
      navigate("/join");
    }
  }, [playerData, connectToServer, navigate]);

  return (
    <div className="game-page H100 W100">
      <Game />
      <div className="W100">
        <img
          src={rockImage}
          alt="Option Rock"
          className="choice-image"
          onClick={() => {
            sendChoice(0);
            playWithFriend(0);
          }}
        />
        <img
          src={paperImage}
          alt="Option Paper"
          className="choice-image"
          onClick={() => {
            sendChoice(1);
            playWithFriend(1);
          }}
        />
        <img
          src={scissorImage}
          alt="Option Scissor"
          className="choice-image"
          onClick={() => {
            sendChoice(2);
            playWithFriend(2);
          }}
        />
      </div>
      <Chat />
    </div>
  );
};

export default Multiplayer;
