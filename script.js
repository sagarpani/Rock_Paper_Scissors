//Declaration
let result, computerMove;
let score = {
    win: 0,
    loss: 0,
    tie: 0
};

//Computer Move
function pickComputerMove() {

    const randomNumber = Math.random();

    if (randomNumber < 1 / 3) return 'rock';
    if (randomNumber < 2 / 3) return 'paper';
    return 'scissors';
}

//Add event listeners
const playerMove = (id) => {
    document.getElementById(id).addEventListener('click', () => play(id))
};

playerMove('rock');
playerMove('paper');
playerMove('scissors');

//Reset Section
playerMove('reset');

//Human Move
function playGames(humanMove) {
    computerMove = pickComputerMove();
    if (computerMove === humanMove) result = 'tie';
    else if (
        (humanMove === 'rock' && computerMove === 'scissors') || (humanMove === 'paper' && computerMove === 'rock') || (humanMove === 'scissors' && computerMove === 'paper')
    ) result = 'win';
    else result = 'loss';
    return { result, computerMove };
}

function play(choice) {
    //Display the box
    const box = document.getElementById('result-box');

    //Loading existing score or initialize the score
    let stored = JSON.parse(localStorage.getItem('score')) || {
        win: 0,
        loss: 0,
        tie: 0
    };

    //Reset the game
    if (choice === 'reset') {
        stored = { win: 0, loss: 0, tie: 0 };
        localStorage.setItem("score", JSON.stringify(stored));

        box.style.display = 'block';
        box.innerHTML = `
                    The score has been reset.<br>
                    Wins: ${stored.win} || Losses: ${stored.loss} || Ties: ${stored.tie}
                `;
        return;
    }
    //Play the game

    ({ result, computerMove } = playGames(choice));

    //changes have been made
    stored[result]++;
    localStorage.setItem('score', JSON.stringify(stored));

    box.style.display = 'block';
    box.innerHTML = `
                Your choice: <strong>${choice}</strong><br>
                Computer choice: <strong>${computerMove}</strong><br>
                Result: <strong>${result.toUpperCase()}</strong><br>
                Wins: ${stored.win} || Losses: ${stored.loss} || Ties: ${stored.tie}
            `;
}