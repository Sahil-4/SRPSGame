import { useState } from "react";
import PlayerDataContext from "./PlayerDataContext";

const PlayerDataState = (props) => {

    let choices = ["Rock", "Paper", "Scissor"];

    const [playerChoice, setPlayerChoice] = useState("");
    const [playerPoints, setPlayerPoints] = useState(0);

    const [opponentChoice, setOpponentChoice] = useState("");
    const [opponentPoints, setOpponentPoints] = useState(0);

    const [result, setResult] = useState("Draw");

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
 
    return (
        <PlayerDataContext.Provider value={{ playerChoice, playerPoints, opponentChoice, opponentPoints, result, compareChoiceWithBot, compareChoiceWithOpponent }}>
            {props.children}
        </PlayerDataContext.Provider>
    )
}

export default PlayerDataState;
