import React, { useState, useEffect, useContext } from "react";
import GameContext from "../Context/Game/GameContext";
import ChatBubble from "./ChatBubble";

const Chatboard = () => {
  const { chats, sendChat } = useContext(GameContext);

  const [status, setStatus] = useState("inactive");
  const [message, setMessage] = useState("");

  const toggleChatBox = () => {
    setStatus(status === "inactive" ? "active" : "inactive");
  };

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
      const element = document.getElementById("all_chats");
      element.scrollTop = element.scrollHeight;
    } catch (error) {}
  };

  useEffect(() => {
    scrollToBottom();
    return () => {};
  }, [chats]);

  return (
    <div className="chat_box">
      <div>
        <button className="toggle_chats" onClick={toggleChatBox}>
          {status === "inactive" ? "Open" : "Close"}
        </button>
      </div>

      <div
        id="chat_container"
        className={`chats_container chats_container_${status}`}
      >
        <div id="all_chats">
          {chats.map((message, index) => (
            <ChatBubble key={index} message={message} />
          ))}
        </div>
      </div>

      <form className="chat_form" method="POST" onSubmit={handleOnSubmit}>
        <input
          className="chat_input H100"
          type="text"
          required="True"
          value={message}
          onChange={handleOnChange}
          placeholder="Message"
        />
        <button className="send_btn H100" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatboard;
