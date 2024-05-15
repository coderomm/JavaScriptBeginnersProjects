const userChoiceDiv = document.getElementById('user-choice');
const computerChoiceDiv = document.getElementById('computer-choice');
const userScoreSpan = document.getElementById('user-score');
const compScoreSpan = document.getElementById('comp-score');
const resultMessage = document.getElementById('result-message');
const buttons = document.querySelectorAll('.btn');
let userScore = 0;
let compScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const userChoice = this.id;
        const computerChoice = getComputerChoice();
        updateChoices(userChoice, computerChoice);
        const result = getResult(userChoice, computerChoice);
        updateScore(result);
        updateMessage(result, userChoice, computerChoice);
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function updateChoices(userChoice, computerChoice) {
    userChoiceDiv.innerHTML = `<i class="fas fa-hand-${userChoice}"></i>`;
    computerChoiceDiv.innerHTML = `<i class="fas fa-hand-${computerChoice}"></i>`;
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) return 'draw';
    if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
        return 'win';
    }
    return 'lose';
}

function updateScore(result) {
    if (result === 'win') {
        userScore++;
        userScoreSpan.innerText = userScore;
    } else if (result === 'lose') {
        compScore++;
        compScoreSpan.innerText = compScore;
    }
}

function updateMessage(result, userChoice, computerChoice) {
    if (result === 'draw') {
        resultMessage.innerText = `It's a draw! You both chose ${userChoice}.`;
    } else if (result === 'win') {
        resultMessage.innerText = `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        resultMessage.innerText = `You lose! ${computerChoice} beats ${userChoice}.`;
    }
}
