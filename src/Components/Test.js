import React, { useContext, useState } from "react";
import GameContext from "../Context/Game/GameContext";

const Test = () => {
  const { sendChat, Messages, playerData } = useContext(GameContext);
  const [message, setmessage] = useState("");
  const [status, setStatus] = useState("");

  const expandOrCollapseChats = () => {
    if (status === "active") {
      setStatus("");
    } else {
      setStatus("active");
    }
  };

  return (
    <div className={`chat-box chat-box-${status} W100`}>
      <button className="exp-or-col-chats-btn" onClick={expandOrCollapseChats}>
        close
      </button>

      <div id="chat-message" className="chat-message chat-message-active W100">
        {Messages.length !== 0 &&
          Messages.map((message, index) => {
            if (message.author === playerData.name) {
              return (
                <div key={index} className="chat send-chat W100">
                  <h6>{message.author}</h6>
                  <p>{message.message}</p>
                </div>
              );
            } else {
              return (
                <div key={index} className="chat received-chat W100">
                  <h6>{message.author}</h6>
                  <p>{message.message}</p>
                </div>
              );
            }
          })}
        {Messages.length === 0 && (
          <div className="chat send-chat W100">No Chats to Show</div>
        )}
      </div>

      <form
        id="chat-form"
        className="W100"
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          sendChat(message);
          setmessage("");
        }}
      >
        <input
          type="text"
          className="message-box chat-form-element"
          value={message}
          onChange={(e) => {
            setmessage(e.target.value);
          }}
        />
        <button id="emoji-button" className="chat-button chat-form-element">
          Emoji
        </button>
        <button
          id="send-chat-button"
          className="chat-button chat-form-element"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Test;
