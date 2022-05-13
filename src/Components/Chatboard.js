import React, { useState, useContext, useEffect } from "react";
import GameContext from "../Context/Game/GameContext";
import ChatBubble from "./ChatBubble";

const Chatboard = () => {
  const [status, setStatus] = useState("inactive");
  const [message, setMessage] = useState("");

  const { Messages, sendChat } = useContext(GameContext);

  const toggleChatBox = () => {
    setStatus(status === "inactive" ? "active" : "inactive");
  }

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    sendChat(message);
    setMessage("");
  };

  const scrollToBottom = () => {
    try {
      const element = document.getElementById("chat-message");
      element.scrollTop = element.scrollHeight;
    } catch (error) { }
  };

  useEffect(() => {
    return () => {
      scrollToBottom();
    };
  }, [Messages]);

  return (
    <div className="chat-box W100">
      <button className="exp-or-col-chats-btn" onClick={toggleChatBox}>{status === "inactive" ? "Open" : "Close"}</button>

      <div
        id="chat-message"
        className={`chat-message chat-message-${status} W100`}
      >
        {Messages.map((message, index) => (
          <ChatBubble key={index} message={message} />
        ))}
      </div>

      <form className="chat-form W100" method="POST" onSubmit={handleOnSubmit}>
        <input
          className="chat-input H100"
          type="text"
          required="True"
          value={message}
          onChange={handleOnChange}
          placeholder="Type your message..."
        />
        <button className="send-btn H100" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatboard;
