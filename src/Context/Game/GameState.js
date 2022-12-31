import { useState } from "react";
import GameContext from "./GameContext";
import { io } from "socket.io-client";
import Tap from "../../Components/Assets/tap.mp3";

var socket;

const GameState = (props) => {
  let options = ["Rock", "Paper", "Scissors"];

  const [profile, setProfile] = useState({
    name_self: "Me",
    name_opponent: "Dummy",
    room_code: null,
    socketID: "",
  });

  const [choice, setChoice] = useState({
    self: "Choose first",
    opponent: "Waiting...",
  });

  const [points, setPoints] = useState({
    self: 0,
    opponent: 0,
  });

  const [result, setResult] = useState("Waiting...");

  const [chats, setChats] = useState([]);

  const [Alert, setAlert] = useState({ type: "", msg: "" });

  const playTone = () => {
    let ad = new Audio(Tap);
    ad.play();
  };

  const setDefault = () => {
    // set all data to default
    socket = null;

    setProfile({
      name_self: "Me",
      name_opponent: "Dummy",
      room_code: null,
      socketID: "",
    });

    setChoice({ self: "Choose first", opponent: "Waiting..." });
    setPoints({ self: 0, opponent: 0 });
    setResult("Waiting...");
    setChats([]);
  };

  const showAlert = (type, msg) => {
    setAlert({ type: type, msg: msg });

    setTimeout(() => {
      setAlert({ type: "", msg: "" });
    }, 3000);
  };

  const computerChoice = () => {
    return Math.floor(Math.random() * 3);
  };

  const playWithBot = (userChoice) => {
    let selfChoice = options[userChoice];
    let opponentChoice = options[computerChoice()];

    setChoice({ self: selfChoice, opponent: opponentChoice });

    playTone();

    if (opponentChoice === selfChoice) {
      setResult("Draw");
    } else if (
      (opponentChoice === "Rock" && selfChoice === "Paper") ||
      (opponentChoice === "Paper" && selfChoice === "Scissors") ||
      (opponentChoice === "Scissors" && selfChoice === "Rock")
    ) {
      setResult("You win");
      setPoints({ ...points, self: points.self + 1 });
    } else {
      setResult("Dummy win");
      setPoints({ ...points, opponent: points.opponent + 1 });
    }
  };

  const connectToServer = () => {
    socket = io("https://srpsgame-backend.onrender.com/", {
      withCredentials: false,
      reconnection: false,
    });

    socket.on("connect", () => {
      setProfile({ ...profile, socketID: socket.id });
    });

    socket.on("connect_error", (error) => {
      showAlert("Error, Please try again.");
      console.log(error);
    });

    socket.emit("join-room", profile);

    socket.on("players", (players) => {
      let opponent = players[0] === profile.name_self ? players[1] : players[0];
      opponent = opponent ? opponent : "Waiting...";
      setProfile({ ...profile, name_opponent: opponent });
    });

    socket.on("room-full", (message) => {
      showAlert("Error", "Room is full try different code");
      console.log(message);
    });

    socket.on("receive-message", (data) => {
      setChats((chats) => [...chats, data]);
      playTone();
    });

    socket.on("receive-choice", (ch) => {
      setChoice((choice) => ({ ...choice, opponent: ch }));
    });

    socket.on("receive-result", (result) => {
      setResult(result);
      result !== "Draw" && increasePoints(result);
    });
  };

  const sendChat = (message) => {
    try {
      let Data = {
        room_code: profile.room_code,
        message: message,
        author: profile.name_self,
      };
      setChats((chats) => [
        ...chats,
        { message: message, author: profile.name_self },
      ]);
      socket.emit("send-message", Data);
    } catch (error) {
      showAlert("Error", "Failed to send message");
    }
  };

  const sendChoice = (ch) => {
    setChoice({ self: options[ch], opponent: "Waiting..." });
    setResult("Waiting...");
    try {
      let Data = { room_code: profile.room_code, choice: options[ch] };
      socket.emit("send-choice", Data);
      playTone();
    } catch (error) {
      showAlert("Error", "Please login again.");
    }
  };

  const increasePoints = (result) => {
    if (result === "You win") {
      setPoints((points) => ({ ...points, self: points.self + 1 }));
    } else {
      setPoints((points) => ({ ...points, opponent: points.opponent + 1 }));
    }
  };

  return (
    <GameContext.Provider
      value={{
        playWithBot,
        Alert,
        connectToServer,
        sendChoice,
        setDefault,
        profile,
        setProfile,
        choice,
        points,
        result,
        chats,
        sendChat,
        showAlert,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameState;
