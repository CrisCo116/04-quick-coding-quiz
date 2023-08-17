var startButton = document.getElementById('startButton');
var timeLeftDisplay = document.getElementById('timeLeft');
var questionDisplay = document.getElementById('questionDisplay');

startButton.addEventListener('click', startGame);

var timeLeft = 120; // start time in seconds.
var timerInterval; // Declare the timerInterval variable

function startGame() {
    startButton.disabled = true; // Disable the start button during the game
    questionDisplay.textContent = "Time: " + timeLeft + " seconds"; // Update time display
    timerInterval = setInterval(updateTimer, 1000);
    displayNextQuestion(); // Display the first quiz question
}

function updateTimer() {
    timeLeft--;
    questionDisplay.textContent = "Time: " + timeLeft + " seconds"; // Update time display
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        endGame(false);
    }
}

function endGame(isWin) {

}

var currentQuestionIndex = 0; // Keep track of the current question

function displayNextQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        var currentQuestion = quizQuestions[currentQuestionIndex];
        questionDisplay.textContent = currentQuestion.question;
        // Add code to display answer choices and check user's selection
    } else {
        // All questions have been answered
        endGame(true);
    }
}

var quizQuestions = [
    {
        question: 'what is javascript?',

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
    },
    {
        question: 'how do you link JavaScript to your HTML?',
        
        answers: {
            a: 'you do not need to link the script file.',
            b: 'src= Develop/script.js',
            c: 'src= Develop/Java.Script.JS'
        },
        correctAnswer: 'b'
    },
    {
        question: 'what is PR short for?',

        answers: {
            a: 'peace rate',
            b: 'pre-record',
            c: 'pull request'
        },
        correctAnswer: 'c'
    }
];
