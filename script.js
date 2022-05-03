'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

// Resetting Game with 'Again' button
document.querySelector('.again').addEventListener
('click', function() {
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    randomNumber = Math.trunc(Math.random() * 20) + 1;
});

// GAME 
document.querySelector('.check').addEventListener
('click', function() {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess);

    // No number
    if (!guess) {
        displayMessage('NO NUMBER');

        // When player wins
    } else if (guess === randomNumber) {
        displayMessage('YOU GUESSED IT!!!');
        document.querySelector('.number').textContent = guess;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        

        // When guess is wrong
    } else if (guess !== randomNumber) {
        if (score > 1) {
            displayMessage(guess > randomNumber ? "LOWER!" : 'HIGHER!');
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 
        "YOU LOST, TRY AGAIN!";
        document.querySelector('body').style.backgroundColor = 'red';
        }
        document.querySelector('.score').textContent = score;
    }
});