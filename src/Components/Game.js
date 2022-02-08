import React from "react";
import rockImage from "./assets/rock.png";
import paperImage from "./assets/paper.png";
import scissorImage from "./assets/scissor.png";

const Game = () => {
  return (
    <div className="game-page H100 W100">
      <h1 className="game-title">Rock Paper Scissor</h1>

      <div className="score-board W100">
        {/* <div className="choice"> */}
        <div className="your-score-board score-boards">
          <h2>You choose : Rock</h2>
          <h2>Your Points : 8</h2>
        </div>

        {/* <div className="points"> */}
        <div className="opponent-score-board score-boards">
          <h2>Opponent choose : Scissor</h2>
          <h2>Opponent's Points : 5</h2>
        </div>
      </div>

      <div className="result-box W100">
        <h5 id="result">You Win</h5>
      </div>

      <div className="options-box W100">
        <img
          src={rockImage}
          alt="Option Rock"
          className="choice-image"
          onClick={() => {
            // compareChoiceWithBot(0);
            console.log("Under Development");
          }}
        />
        <img
          src={paperImage}
          alt="Option Paper"
          className="choice-image"
          onClick={() => {
            // compareChoiceWithBot(1);
            console.log("Under Development");
          }}
        />
        <img
          src={scissorImage}
          alt="Option Scissor"
          className="choice-image"
          onClick={() => {
            // compareChoiceWithBot(2);
            console.log("Under Development");
          }}
        />
      </div>

      <div className="chat-box W100">
        <form method="POST">
          <input
            type="text"
            disabled
            id="received-chat-message"
            className="message-box W100"
          />
          <input type="text" id="send-chat-message" className="message-box" />
          <button id="emoji-button" className="chat-button">
            emoji
          </button>
          <button id="send-chat-button" className="chat-button">
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Game;
