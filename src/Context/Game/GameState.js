import { useState } from "react";
import GameContext from "./GameContext";
import { io } from "socket.io-client";

var socket;

const GameState = (props) => {
  let options = ["Rock", "Paper", "Scissor"];

  const [Player, setPlayer] = useState({
    name: "",
    opponent: "",
    room_code: "",
    socketID: "",
  });

  const [Choices, setChoices] = useState({
    player: "Choose first",
    opponent: "Waiting...",
  });
  const [Points, setPoints] = useState({ player: 0, opponent: 0 });
  const [Result, setResult] = useState("Draw");
  const [Messages, setMessages] = useState([]);

  const [Alert, setAlert] = useState({ type: "", msg: "" });

  const setDefault = () => {
    setPlayer({
      name: "",
      opponent: "",
      room_code: "",
      socketID: "",
    });

    setChoices({ player: "Choose first", opponent: "Waiting..." });
    setPoints({ player: 0, opponent: 0 });
    setResult("Draw");
  };

  const showAlert = (type, msg) => {
    setAlert({ type: type, msg: msg });
  };

  const computerChoice = () => {
    return Math.floor(Math.random() * 3);
  };

  const playWithBot = (userChoice) => {
    let selfChoice = options[userChoice];
    let opponentChoice = options[computerChoice()];

    setChoices({ player: selfChoice, opponent: opponentChoice });

    if (opponentChoice === selfChoice) {
      setResult("Its a Draw");
    } else if (
      (opponentChoice === "Rock" && selfChoice === "Paper") ||
      (opponentChoice === "Paper" && selfChoice === "Scissor") ||
      (opponentChoice === "Scissor" && selfChoice === "Rock")
    ) {
      setResult("You Win");
      setPoints({ ...Points, player: Points.player + 1 });
    } else {
      setResult("Computer Win");
      setPoints({ ...Points, opponent: Points.opponent + 1 });
    }
  };

  const connectToServer = () => {
    socket = io("http://localhost:5000/", {
      withCredentials: false,
      reconnection: false,
    });

    socket.on("connect", () => {
      setPlayer({ ...Player, socketID: socket.id });
    });

    socket.on("connect_error", (error) => {
      console.log(error);
    });

    socket.emit("join-room", Player);

    socket.on("players", (players) => {
      let opponent = players[0] === Player.name ? players[1] : players[0];
      setPlayer({ ...Player, opponent: opponent });
    });

    socket.on("room-full", (message) => {
      console.log(message);
    });

    socket.on("receive-message", (data) => {
      setMessages((Messages) => [...Messages, data]);
    });

    socket.on("receive-choice", (choice) => {
      setChoices((Choices) => ({ ...Choices, opponent: choice }));
    });

    socket.on("receive-result", (result) => {
      setResult(result);
      increasePoints(result);
    });
  };

  const sendChat = (message) => {
    try {
      let Data = {
        room_code: Player.room_code,
        message: message,
        author: Player.name,
      };
      setMessages((Messages) => [
        ...Messages,
        { message: message, author: Player.name },
      ]);
      socket.emit("send-message", Data);
    } catch (error) {
      showAlert("Error", "Failed to send message");
    }
  };

  const sendChoice = (choice) => {
    try {
      setChoices({ player: options[choice], opponent: "Waiting..." });
      setResult("Waiting...");
      let Data = { room_code: Player.room_code, choice: options[choice] };
      socket.emit("send-choice", Data);
    } catch (error) {
      showAlert("Error", "Please login again.");
    }
  };

  const increasePoints = (result) => {
    if (result !== "Draw") {
      if (result === "You win") {
        setPoints((Points) => ({ ...Points, player: Points.player + 1 }));
      } else {
        setPoints((Points) => ({ ...Points, opponent: Points.opponent + 1 }));
      }
    }
  };

  return (
    <GameContext.Provider
      value={{
        playWithBot,
        Alert,
        Player,
        Choices,
        Points,
        Result,
        setPlayer,
        connectToServer,
        Messages,
        sendChat,
        sendChoice,
        setDefault,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameState;
