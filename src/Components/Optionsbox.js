import React, { useContext } from "react";
import rockImage from "./Assets/rock.png";
import paperImage from "./Assets/paper.png";
import scissorImage from "./Assets/scissor.png";
import GameContext from "../Context/Game/GameContext";

const Optionsbox = ({ gametype }) => {
  const { playWithBot, sendChoice } = useContext(GameContext);

  const handleSelection = (s) => {
    if (gametype === "solo") {
      playWithBot(s);
    } else if (gametype === "duo") {
      sendChoice(s);
    }
  };

  return (
    <div className="options W100">
      <img
        src={rockImage}
        title="rock"
        alt="Option Rock"
        onClick={() => {
          handleSelection(0);
        }}
      />
      <img
        src={paperImage}
        title="paper"
        alt="Option Paper"
        onClick={() => {
          handleSelection(1);
        }}
      />
      <img
        src={scissorImage}
        title="scissors"
        alt="Option Scissors"
        onClick={() => {
          handleSelection(2);
        }}
      />
    </div>
  );
};

export default Optionsbox;
