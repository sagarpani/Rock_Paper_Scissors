
let result, computerMove;
let score = { win: 0, loss: 0, tie: 0 };

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
document.getElementById('rock').addEventListener('click', function(){
    play('rock');
});
document.getElementById('paper').addEventListener('click', function(){
    play('paper')
});
document.getElementById('scissors').addEventListener('click', function(){
    play('scissors')
});

// document.getElementById('reset').addEventListener(
//     'click', function(){
//         score.win = 0;
//         score.loss = 0;
//         score.tie = 0;
//     }
// );

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
    ({ result, computerMove } = playGames(choice));
    score[result]++;
    const box = document.getElementById('result-box');
    box.style.display = 'block';
    box.innerHTML = `
                Your choice: <strong>${choice}</strong><br>
                Computer choice: <strong>${computerMove}</strong><br>
                Result: <strong>${result.toUpperCase()}</strong><br>
                Wins: ${score.win} || Losses: ${score.loss} || Ties: ${score.tie}
            `;
}