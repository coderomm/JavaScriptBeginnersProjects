const choices = document.querySelectorAll(".choice");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(`Your choice: ${userChoice}`);
        playGame(userChoice);
    });
});

const gameDraw = () => {
    console.log("Game Draw!");
    msg.innerText="Game Draw!";
    msg.style.backgroundColor = "#081b31";
}

const showResult = (result) => {
    msg.innerText = result === true ? "You win!" : "You loose";
    msg.style.backgroundColor = result === true ? "green" : "red";
    if(result){
        userScore++;
    }
    else{
        compScore++;
    }
    console.log(`userscore${userScore} ,compscore${compScore}`);
}

const playGame = (userChoice) => {
    let compChoice = genCompChoice();
    let result = true;
    console.log(`Comp choice: ${compChoice}`);
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
        showResult(result);
    }
};

const genCompChoice = () => {
    let allChoices = ["rock", "paper", "scissor"];
    let randomIdx = Math.floor(Math.random() * 3);
    return allChoices[randomIdx];
};



