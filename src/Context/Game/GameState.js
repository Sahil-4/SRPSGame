import { useState } from "react";
import GameContext from "./GameContext";
import { io } from "socket.io-client";

var socket;

const GameState = (props) => {
    let options = ["Rock", "Paper", "Scissor"];

    const [playerData, setPlayerData] = useState({
        name: "",
        room_code: "",
        socketID: ""
    });

    const [Choices, setChoices] = useState({ playerChoice: "Choose First", opponentChoice: "Waiting..." });
    const [Points, setPoints] = useState({ playerPoints: 0, opponentPoints: 0 });
    const [Result, setResult] = useState("Draw");
    const [Messages, setMessages] = useState([]);
    const [Alert, setAlert] = useState({ type: "", msg: "" });

    const setDefault = () => {
        setPlayerData({
            name: "",
            room_code: "",
            socketID: ""
        });
        setPoints({ playerPoints: 0, opponentPoints: 0 });
        setChoices({ playerChoice: "Choose First", opponentChoice: "Waiting..." });
        setResult("Draw");
        Messages.length = 0;
        socket = null;
    }

    const showAlert = (type, msg) => {
        setAlert({ type: type, msg: msg });
    };

    const connectToServer = () => {
        console.log("Connecting to server");

        socket = io("http://localhost:8000/", {
            withCredentials: true,
            extraHeaders: {
                "App-Name": "App-Name",
            },
            reconnection: false,
        });

        socket.on('connect_error', () => {
            showAlert("Failed to connect", "Please try again later");
            setDefault();
        });

        socket.on("connect", () => {
            console.log(`connected ${socket.id}`);
            showAlert("Success", "Room Created");
            playerData.socketID = socket.id;
        });

        socket.emit('join-room', (playerData));

        socket.on('user-joined', (message) => {
            console.log(message);
        })

        socket.on('room-full', (message) => {
            alert(message);
        })

        socket.on('receive-message', (data) => {
            console.log(data);
            Messages.push({ message: data.message, author: data.name });
        })

        socket.on("receive-choice", (choice) => {
            console.log(choice);
            setChoices({ playerChoice: Choices.playerChoice, opponentChoice: choice });
        });
    }

    const computerChoice = () => {
        return Math.floor(Math.random() * 3);
    }

    const playWithBot = (userChoice) => {
        let selfChoice = options[userChoice];
        let opponentChoice = options[computerChoice()];
        setChoices({ playerChoice: selfChoice, opponentChoice: opponentChoice })
        evaluate(selfChoice, opponentChoice);
    }

    const playWithFriend = (userChoice) => {
        // !issue : have to redesign logic 
        console.log("Under Development");
    }

    const evaluate = (selfChoice, opponentChoice) => {
        if (opponentChoice === selfChoice) {
            setResult("Its a Draw");
        } else if ((opponentChoice === "Rock" && selfChoice === "Paper") || (opponentChoice === "Paper" && selfChoice === "Scissor") || (opponentChoice === "Scissor" && selfChoice === "Rock")) {
            setResult("You Win");
            setPoints({ playerPoints: Points.playerPoints + 1, opponentPoints: Points.opponentPoints });
        } else {
            setResult("Opponent Win");
            setPoints({ playerPoints: Points.playerPoints, opponentPoints: Points.opponentPoints + 1 });
        }
    }

    const sendChat = (message) => {
        try {
            let Data = { room_code: playerData.room_code, message: message, name: playerData.name }
            Messages.push({ message: message, author: playerData.name });
            socket.emit("send-message", Data);
        } catch (error) {
            showAlert("Error", "Failed to send message");
        }
    };

    const sendChoice = (choice) => {
        try {
            let Data = { room_code: playerData.room_code, choice: choice }
            socket.emit('send-choice', Data);
        } catch (error) {
            showAlert("Error", "Please login again.");
        }
    }

    return (
        <GameContext.Provider value={{ Choices, Points, Result, setDefault, playerData, setPlayerData, showAlert, Messages, playWithBot, connectToServer, playWithFriend, sendChat, sendChoice, Alert, setAlert }}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameState;
