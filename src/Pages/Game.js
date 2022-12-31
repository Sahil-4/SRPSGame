import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Gametitle from "../Components/Gametitle";
import Scoreboard from "../Components/Scoreboard";
import Result from "../Components/Result";
import Optionsbox from "../Components/Optionsbox";
import Chatboard from "../Components/Chatboard";
import GameContext from "../Context/Game/GameContext";

const Game = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const { profile, connectToServer } = useContext(GameContext);

  // TODO : check for game type and
  // - handle choices
  // - handle scores
  // - handle result
  // - handle chats

  useEffect(() => {
    if (type === "duo" && profile.room_code === null) {
      navigate("/login");
    }
    return () => {
      if (type === "duo" && profile.room_code) {
        connectToServer();
      }
    };
  }, []);

  return (
    <div className="game_main">
      <Gametitle />
      <Scoreboard />
      <Result />
      <Optionsbox gametype={type} />
      {type === "duo" && <Chatboard />}
    </div>
  );
};

export default Game;
