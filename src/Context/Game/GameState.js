import { useState } from "react";
import GameContext from "./GameContext";
import { io } from "socket.io-client";

var socket;

const GameState = (props) => {
    let options = ["Rock", "Paper", "Scissor"];

    const [playerData, setPlayerData] = useState({
        name: "",
        friend_name: "",
        room_code: "",
        socketID: ""
    });

    const [Choices, setChoices] = useState({ playerChoice: "Choose First", opponentChoice: "Waiting..." });
    const [Points, setPoints] = useState({ playerPoints: 0, opponentPoints: 0 });
    const [Result, setResult] = useState("Draw");
    const [Messages] = useState([]);
    const [Alert, setAlert] = useState({ type: "", msg: "" });

    const setDefault = () => {
        setPlayerData({
            name: "",
            friend_name: "",
            room_code: "",
            socketID: ""
        });
        setPoints({ playerPoints: 0, opponentPoints: 0 });
        setChoices({ playerChoice: "Choose First", opponentChoice: "Waiting..." });
        setResult("Draw");
        Messages.length = 0;
        socket = io();
    }

    const connectToServer = () => {
        console.log("Connecting to server");

        socket = io("http://localhost:8000/", {
            withCredentials: true,
            extraHeaders: {
                "App-Name": "App-Name",
            },
        });

        socket.on('connect_error', () => {
            // handle server error here
            showAlert("Error", "Failed to connect with server");
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

        socket.on('receive-message', (message) => {
            console.log(message);
            Messages.push({ message: message, author: false });
        })

        socket.on("receive-choice", (choice) => {
            console.log(choice);
            setChoices({ playerChoice: Choices.playerChoice, opponentChoice: choice });
        });
    }


    const showAlert = (type, msg) => {
        // show alert
        if (Alert.type === "") {
            setAlert({ type: type, msg: msg });
        }
    };

    const computerChoice = () => {
        setAlert({ type: "Hello", msg: "Hii" }); // only for test alert component  
        return Math.floor(Math.random() * 3);
    }

    const playWithBot = (userChoice) => {
        // have to redesign logic 
        evaluate(userChoice, computerChoice());
    }

    const playWithFriend = (userChoice) => {
        // have to redesign logic 
        if (Choices.opponentChoice !== "Waiting...") {
            evaluate(userChoice, Choices.opponentChoice);
        } else {
            setTimeout(() => {
                playWithFriend(userChoice);
            }, 1500);
        }

        setTimeout(() => {
            setChoices({ playerChoice: "Choose from below", opponentChoice: "Waiting..." });
        }, 2000);
    }

    const evaluate = (player1Choice, player2Choice) => {
        let selfChoice = options[player1Choice];
        let opponentChoice = options[player2Choice];
        setChoices({ playerChoice: selfChoice, opponentChoice: opponentChoice })

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
        let Data = { room_code: playerData.room_code, message: message }
        Messages.push({ message: message, author: true });
        socket.emit("send-message", Data);
    };

    const sendChoice = (choice) => {
        let Data = { room_code: playerData.room_code, choice: choice }
        socket.emit('send-choice', Data);
    }

    return (
        <GameContext.Provider value={{ Choices, Points, Result, setDefault, playerData, setPlayerData, showAlert, Messages, playWithBot, connectToServer, playWithFriend, sendChat, sendChoice, Alert, setAlert }}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameState;
