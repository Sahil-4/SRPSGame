import { useState } from "react";
import GameContext from "./GameContext";
import { io } from "socket.io-client";

var socket;

const GameState = (props) => {

    let choices = ["Rock", "Paper", "Scissor"];

    const [playerChoice, setPlayerChoice] = useState("");
    const [playerPoints, setPlayerPoints] = useState(0);

    const [opponentChoice, setOpponentChoice] = useState("Waiting...");
    const [opponentPoints, setOpponentPoints] = useState(0);

    const [receivedMessage, setReceivedMessage] = useState("");

    const [result, setResult] = useState("Draw");

    const connectToServer = () => {
        socket = io("http://localhost:8000/", {
            withCredentials: true,
            extraHeaders: {
                "App-Name": "App-Name",
            },
        });

        socket.on("connect", () => {
            console.log(socket.id);
        });

        socket.on("receive-message", (data) => {
            console.log(data);
            setReceivedMessage(data);
        });

        socket.on("receive-choice", (data) => {
            console.log(data);
            setOpponentChoice(data);
        });
    }

    const computerChoice = () => {
        return Math.floor(Math.random() * 3);
    }

    const compareChoiceWithBot = (userChoice) => {

        let opponentChoose = choices[computerChoice()];
        let youChoose = choices[userChoice]

        setPlayerChoice(youChoose)
        setOpponentChoice(opponentChoose)

        if (opponentChoose === youChoose) {
            setResult("Its a Draw");
        } else if ((opponentChoose === "Rock" && youChoose === "Paper") || (opponentChoose === "Paper" && youChoose === "Scissor") || (opponentChoose === "Scissor" && youChoose === "Rock")) {
            setResult("You Win");
            setPlayerPoints(playerPoints + 1);
        } else {
            setResult("Opponent Win");
            setOpponentPoints(opponentPoints + 1);
        }
    }

    const compareChoiceWithOpponent = () => {
        // get opponents points from server 

    }

    const sendChat = (msg) => {
        socket.emit("send-message", msg);
    };

    const receivedChat = () => {
        setReceivedMessage("Hey");
    };

    return (
        <GameContext.Provider value={{ playerChoice, playerPoints, opponentChoice, opponentPoints, result, receivedMessage, compareChoiceWithBot, connectToServer, compareChoiceWithOpponent, sendChat, receivedChat }}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameState;
