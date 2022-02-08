import React, { useContext, useState, useEffect } from "react";
import GameContext from "../Context/Game/GameContext";

const Test = () => {
  const [message, setMessage] = useState("");

  const { connectToServer, sendChat, receivedMessage } =
    useContext(GameContext);

  useEffect(() => {
    connectToServer();
  }, []);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="chat-box W100">
      <input
        type="text"
        disabled
        value={receivedMessage}
        id="received-chat-message"
        className="message-box W100"
      />

      <form
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          sendChat(message);
        }}
      >
        <input
          type="text"
          id="send-chat-message"
          value={message}
          onChange={handleOnChange}
          className="message-box"
        />
        <button id="emoji-button" className="chat-button">
          emoji
        </button>
        <button id="send-chat-button" className="chat-button" type="submit">
          send
        </button>
      </form>
    </div>
  );
};

export default Test;
