let score = JSON.parse(localStorage.getItem('score')) || {

    Wins: 0,
    Losses: 0,
    Ties: 0

};

updateScoreElement();

function pickComputerMove() {

    const randomnumber = Math.random();

    // variable for computer's move
    let computerMove = ' ';

    //comparing and storing computer's move
    if (randomnumber >= 0 && randomnumber < 1 / 3) {
        computerMove = 'rock';
    }
    else if (randomnumber >= 1 / 3 && randomnumber < 2 / 3) {
        computerMove = 'paper';
    }
    else if (randomnumber >= 2 / 3 && randomnumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}

function playGame(playerMove) {

    const computerMove = pickComputerMove();

    // variable for storing results
    let result = ' ';

    // comparing and storing the result
    if (playerMove === 'scissors') {

        if (computerMove === 'rock') {
            result = 'You Lose';
        }
        else if (computerMove === 'paper') {
            result = 'You Win';
        }
        else if (computerMove === 'scissors') {
            result = 'Match Is A Tie';
        }
    }

    else if (playerMove === 'paper') {

        if (computerMove === 'rock') {
            result = 'You Win';
        }
        else if (computerMove === 'paper') {
            result = 'Match Is A Tie';
        }
        else if (computerMove === 'scissors') {
            result = 'You Lose';
        }
    }

    else if (playerMove === 'rock') {

        if (computerMove === 'rock') {
            result = 'Match Is A Tie';
        }
        else if (computerMove === 'paper') {
            result = 'You Lose';
        }
        else if (computerMove === 'scissors') {
            result = 'You Win';
        }
    }

    if (result === 'You Win') {
        score.Wins = score.Wins + 1;
    }
    else if (result === 'You Lose') {
        score.Losses = score.Losses + 1;
    }
    else if (result === 'Match Is A Tie') {
        score.Ties = score.Ties + 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You : <img src="${playerMove}-emoji.png" class="move-icon"> Computer : <img src="${computerMove}-emoji.png" class="move-icon">`;

}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}

function resetScore() {
    score.Wins = 0;
    score.Losses = 0;
    score.Ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
    document.querySelector('.js-result').innerHTML = 'Result';
    document.querySelector('.js-moves').innerHTML = `You : <img src="rock-emoji.png" class="move-icon pre-move"> Computer : <img src="rock-emoji.png" class="move-icon pre-move">`;
}
