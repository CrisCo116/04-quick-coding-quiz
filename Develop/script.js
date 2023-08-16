var startButton = document.getElementById('startButton');
var timeLeftDisplay = document.getElementById('timeLeft');
var questionDisplay = document.getElementById('questionDisplay');

startButton.addEventListener('click', startGame);

var timeLeft = 120; // start time in seconds.
var timerInterval; // Declare the timerInterval variable

function startGame() {
    startButton.disabled = true; // Disable the start button during the game
    word = words[Math.floor(Math.random() * words.length)];
    blanks = Array(word.length).fill("_");
    questionDisplay.textContent = "Time: " + timeLeft + " seconds"; // Update time display
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    questionDisplay.textContent = "Time: " + timeLeft + " seconds"; // Update time display
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        endGame(false);
    }
}

var quizQuestions = [
    {
        question: 'what is jvascript?',

        answers: {
            a: 'a coffee.',
            b: 'a screenplay.',
            c: 'a scripting/ programming language.'
        },
        correctAnswer: 'c'
    },
    {
        question: 'can anybody code?',
        
        answers: {
            a: 'no.',
            b: 'yes.',
            c: 'probably not.'
        },
        correctAnswer: 'b'
    },
    {
        question: 'what is a string?',

        answers: {
            a: 'a series of text.',
            b: 'something from your shirt.',
            c: 'a combination of functions.'
        },
        correctAnswer: 'a'
    }
]