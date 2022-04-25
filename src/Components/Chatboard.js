import React, { useState } from "react";

const Chatboard = () => {

  const [status, setStatus] = useState("inactive");

  const toggleChatBox = () => {
    setStatus(status === "inactive" ? "active" : "inactive");
  }

  return (
    <div className="chat-box W100">
      <button className="exp-or-col-chats-btn" onClick={toggleChatBox}>{status === "inactive" ? "Open" : "Close"}</button>

      <div
        id="chat-message"
        className={`chat-message chat-message-${status} W100`}
      >
        <div className="chat chat-send">
          <p className="message">Hey</p>
        </div>
        <div className="chat chat-recv">
          <p className="message">Hii</p>
        </div>
        <div className="chat chat-send">
          <p className="message">Hey</p>
        </div>
        <div className="chat chat-recv">
          <p className="message">Hii</p>
        </div>
        <div className="chat chat-recv">
          <p className="message">Hii</p>
        </div>
        <div className="chat chat-send">
          <p className="message">Hey</p>
        </div>
        <div className="chat chat-recv">
          <p className="message">Hii</p>
        </div>
      </div>

      <form className="chat-form W100" method="POST">
        <input
          className="chat-input H100"
          type="text"
          required="True"
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
