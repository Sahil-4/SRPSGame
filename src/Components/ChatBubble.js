import React, { useContext } from "react";
import GameContext from "../Context/Game/GameContext";

const ChatBubble = (props) => {
  const { Player } = useContext(GameContext);

  return props.message.author === Player.name ? (
    <div className="chat chat-send">
      <p className="message">{props.message.message}</p>
    </div>
  ) : (
    <div className="chat chat-recv">
      <p className="message">{props.message.message}</p>
    </div>
  );
};

export default ChatBubble;
