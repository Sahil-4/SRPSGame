import React from 'react'

const Chat = () => {
    return (
        <div className="chat-box W100">
            <form method="POST">
                <div id="received-chat-message" className="message-box W100">
                    <p className="chat-messages send-chat">You : Hello</p>
                    <p className="chat-messages received-chat">Alpha : Hii</p>
                    {/* <p className="chat-messages send-chat">You : Game kesa hai</p>
                    <p className="chat-messages received-chat">Alpha : acha hai</p>
                    <p className="chat-messages received-chat">Alpha : tuje kesa lga</p>
                    <p className="chat-messages send-chat">You : acha lga</p>
                    <p className="chat-messages send-chat">You : color combo acha hai</p> */}
                </div>
                <input type="text" id="send-chat-message" className="message-box" />
                <button id="emoji-button" className="chat-button">
                    emoji
                </button>
                <button id="send-chat-button" className="chat-button" type="submit">
                    send
                </button>
            </form>
        </div>
    )
}

export default Chat