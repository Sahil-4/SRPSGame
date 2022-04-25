import React from "react";

const Help = () => {
  return (
    <div className="help-page">
      <h1>Rock Paper Scissor Game</h1>
      <h2>How To Play</h2>
      <p>Tap on Start and Select which type game you want to play</p>
      <ol>
        <li>1. Single Player(With Computer)</li>
        <li>2. Two Player(With Your Friend)</li>
      </ol>
      <p>After Selecting The Game Mode Choose from the given options:</p>
      <ol>
        <li>1. Rock</li>
        <li>2. Paper</li>
        <li>3. Scissor</li>
      </ol>

      <p>to choose the option simply tap on that option.</p>
      <h2>Multiplayer Mode</h2>
      <p>To play with Your Friend You need to Fill The Given Fields:</p>
      <ol>
        <li>1. Your Name </li>
        <li>2. Your Friend</li>
        <li>3. A 3 digit unique PIN</li>
      </ol>
      <p>Note : You and Your Friend both have to input same PIN</p>
      <h4>Now you can Enjoy Your Game.</h4>

      <h2>Rules : </h2>
      <ol>
        <li>1. Rock can beat Scissor & can be beaten by Paper </li>
        <li>2. Scissor can beat Paper & can be beaten by Rock </li>
        <li>3. Paper can beat Rock & can be beaten by Scissor</li>
      </ol>
    </div>
  );
};

export default Help;
