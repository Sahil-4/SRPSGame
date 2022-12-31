import React, { useContext } from "react";
import GameContext from "../Context/Game/GameContext";

const ChatBubble = ({ message }) => {
  const { profile } = useContext(GameContext);

  return (
    <div>
      <div
        className={`chat ${
          message.author === profile.name_self ? "chat_send" : "chat_recv"
        }`}
      >
        <p>{message.message}</p>
      </div>
    </div>
  );
};

export default ChatBubble;
