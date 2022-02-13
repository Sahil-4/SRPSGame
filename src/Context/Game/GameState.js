import { useState } from "react";
import GameContext from "./GameContext";
import { io } from "socket.io-client";

let socket;

const GameState = (props) => {

    let options = ["Rock", "Paper", "Scissor"];

    const [data, setData] = useState({
        name: "",
        friend_name: "",
        room_code: "",
    });

    const [Choices, setChoices] = useState({ playerChoice: "Choose First", opponentChoice: "Thinking..." });
    const [Points, setPoints] = useState({ playerPoints: 0, opponentPoints: 0 });
    const [Result, setResult] = useState("Draw");

    const [Messages, setMessages] = useState([{}, {}]);

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
        });

        socket.on("receive-choice", (data) => {
            console.log(data);
        });
    }

    const computerChoice = () => {
        return Math.floor(Math.random() * 3);
    }

    const compareChoiceWithBot = (userChoice) => {
        setChoices({ playerChoice: options[userChoice], opponentChoice: options[computerChoice()] })

        if (Choices.opponentChoice === Choices.playerChoice) {
            setResult("Its a Draw");
        } else if ((Choices.opponentChoice === "Rock" && Choices.playerChoice === "Paper") || (Choices.opponentChoice === "Paper" && Choices.playerChoice === "Scissor") || (Choices.opponentChoice === "Scissor" && Choices.playerChoice === "Rock")) {
            setResult("You Win");
            setPoints({ playerPoints: Points.playerPoints + 1, opponentPoints: Points.opponentPoints });
        } else {
            setResult("Opponent Win");
            setPoints({ playerPoints: Points.playerPoints, opponentPoints: Points.opponentPoints + 1 });
        }
    }

    const compareChoiceWithOpponent = () => {
        // get opponents points from server 

    }

    const sendChat = (msg) => {
        socket.emit("send-message", msg);
    };

    const receivedChat = () => {
        // receive message from server 
    };

    return (
        <GameContext.Provider value={{ Choices, Points, Result, compareChoiceWithBot }}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameState;
