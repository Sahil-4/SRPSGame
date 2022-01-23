
let yourPoints = 0, opponentsPoints = 0, result = "";
let choices = ["Rock", "Paper", "Scissor"];

const computerChoice = () => {
    return Math.floor(Math.random() * 3);
}

const compareChoiceWithOpponent = () => {
    // get opponents points from server 
}

const compareChoiceWithBot = (userChoice) => {
    let opponentChoose = choices[computerChoice()];
    let youChoose = choices[userChoice]

    console.log(`You choose ${youChoose}`);
    console.log(`Opponent choose ${opponentChoose}`);

    if (opponentChoose === youChoose) {
        console.log(`It's a Draw`);
        result = "Its a Draw";
    } else if ((opponentChoose === "Rock" && youChoose === "Paper") || (opponentChoose === "Paper" && youChoose === "Scissor") || (opponentChoose === "Scissor" && youChoose === "Rock")) {
        console.log(`You win`);
        result = "You Win";
        yourPoints += 1;
    } else {
        console.log(`You lose`);
        result = "Opponent Win";
        opponentsPoints += 1;
    }

    console.log(`Your points ${yourPoints}`);
    console.log(`Opponent's points ${opponentsPoints}`);
}

const sendMessage = (message) => {
    // send message to server for opponent 
}

const receiveMessage = () => {
    // receive message from server 
}

export {
    compareChoiceWithBot,
    compareChoiceWithOpponent,
    sendMessage,
    receiveMessage,
    yourPoints,
    opponentsPoints,
    result
};
