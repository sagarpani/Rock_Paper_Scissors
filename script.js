
let result, computerMove;
let score = { win: 0, lost: 0, tie: 0 };

function pickComputerMove() {

    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        return 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function playGames(humanMove) {

    computerMove = pickComputerMove();
    if (computerMove === humanMove) result = 'tie';
    else if (
        (humanMove === 'rock' && computerMove === 'scissors') || (humanMove === 'paper' && computerMove === 'rock') || (humanMove === 'scissors' && computerMove === 'paper')
    ) result = 'win';
    else result = 'lost';
    return { result, computerMove };
}

function play(choice) {
    ({ result, computerMove } = playGames(choice));
    score[result]++;
    const box = document.getElementById('result-box');
    box.style.display = 'block';
    box.innerHTML = `
                Your choice: <strong>${choice}</strong><br>
                Computer choice: <strong>${computerMove}</strong><br>
                Result: <strong>${result.toUpperCase()}</strong><br>
                Wins: ${score.win} || Losses: ${score.lost} || Ties: ${score.tie}
            `;
}