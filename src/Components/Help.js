import React from "react";

const Help = () => {
  return (
    <div className="help-page">
      <h1>Rock Paper Scissor Game</h1>
      <p>
        <h3>How To Play</h3>
        <span>Tap on Start and Select which type game you want to play</span>
        <ol>
          <li>1. Single Player(With Computer)</li>
          <li>2. Two Player(With Your Friend)</li>
        </ol>
        <span>
          After Selecting The Game Mode Choose from the given options:
        </span>
        <ol>
          <li>1. Rock</li>
          <li>2. Paper</li>
          <li>3. Scissor</li>
        </ol>
        <span>to choose the option simply tap on that option.</span>

        <p>
          <h3>Multiplayer Mode</h3>
          To play with Your Friend You need to Fill The Given Fields:
          <ol>
            <li>1. Your Name </li>
            <li>2. Your Friend</li>
            <li>3. A 3 digit unique PIN</li>
          </ol>
          <span>Note : You and Your Friend both have to input same PIN</span>
          <h4>Now you can Enjoy Your Game.</h4>
        </p>
      </p>
      <p>
        <h3>Rules : </h3>
        <ol>
          <li>1. Rock can beat Scissor & can be beaten by Paper </li>
          <li>2. Scissor can beat Paper & can be beaten by Rock </li>
          <li>3. Paper can beat Rock & can be beaten by Scissor</li>
        </ol>
      </p>
    </div>
  );
};

export default Help;
