const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
let userScore = 0;
let compScore = 0;

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame = (userChoice) => {
    //Generate computer choice
    let compChoice = genCompChoice();
    let result = true;

    if (userChoice === compChoice) {
        gameDraw();
    }
    else {
        if (userChoice === "rock") {
            // compchoice = paper || scissor
            result = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            // compchoice = rock || scissor
            result = compChoice === "scissor" ? false : true;
        }
        else {
            // compchoice = rock || paper
            result = compChoice === "rock" ? false : true;
        }
        showResult(result, userChoice, compChoice);
    }
};

const gameDraw = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showResult = (result, userChoice, compChoice) => {
    result ? userScore++ : compScore++;
    result ? userScorePara.innerText = userScore : compScorePara.innerText = compScore;
    msg.innerText = result === true ? `You win! Your ${userChoice} beats ${compChoice}` : `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = result === true ? "green" : "red";
}

const genCompChoice = () => {
    let allChoices = ["rock", "paper", "scissor"];
    let randomIdx = Math.floor(Math.random() * 3);
    return allChoices[randomIdx];
};



