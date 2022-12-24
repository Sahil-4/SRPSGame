import React, { useContext } from "react";
import GameContext from "../Context/Game/GameContext";

const ChatBubble = ({ message }) => {
  // const { Player } = useContext(GameContext);

  const Player = {
    name: "self",
  };

  return (
    <div>
      <div
        className={`chat ${
          message.author === Player.name ? "chat_send" : "chat_recv"
        }`}
      >
        <p>{message.message}</p>
      </div>
    </div>
  );
};

export default ChatBubble;
