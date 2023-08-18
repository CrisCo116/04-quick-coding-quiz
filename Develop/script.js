var startButton = document.getElementById('startButton');
var timeLeftDisplay = document.getElementById('timeLeft');
var questionDisplay = document.getElementById('questionDisplay');

startButton.addEventListener('click', startGame);

var timeLeft = 20; // start time in seconds.
var timerInterval; // Declare the timerInterval variable

function startGame() {
    startButton.disabled = true; // Disable the start button during the game
    questionDisplay.textContent = "Time: " + timeLeft + " seconds"; // Update time display
    timerInterval = setInterval(updateTimer, 1000);
    displayNextQuestion();
}

function updateTimer() {
    timeLeft--;
    timeLeftDisplay.textContent = "Time: " + timeLeft + " seconds"; // Update time display
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        endGame(false);
    }
}

function endGame(isWin) {
    clearInterval(timerInterval);
    questionDisplay.innerHTML = isWin ? "Congratulations, you won!" : "Time's up! Game over.";
}

var currentQuestionIndex = 0; // Keep track of the current question

function displayNextQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        var currentQuestion = quizQuestions[currentQuestionIndex];
        questionDisplay.textContent = currentQuestion.question;
        questionDisplay.innerHTML += '<br>'; // Add line break
        var answerChoices = currentQuestion.answers;

        for (var option in answerChoices) {
            var answerButton = document.createElement('button');
            answerButton.textContent = answerChoices[option];
            answerButton.addEventListener('click', function () {
                checkAnswer(option);
            });
            questionDisplay.appendChild(answerButton);
        }
    } else {
        // All questions have been answered
        endGame(true);
    }
}

function checkAnswer(selectedOption) {
    var currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {

    } else (selectedOption === currentQuestion.incorrectAnswer) 
        prompt ('Wrong answer.')
   
    currentQuestionIndex++;
    displayNextQuestion();
}

var quizQuestions = [
    {
        question: 'what is javascript?',

        answers: {
            a: 'a coffee.',
            b: 'a screenplay.',
            c: 'a scripting/ programming language.'
        },
        correctAnswer: 'c',
        incorrectAnswer: ['a', 'b']
    },
    {
        question: 'can anybody code?',

        answers: {
            a: 'no.',
            b: 'yes.',
            c: 'probably not.'
        },
        correctAnswer: 'b',
        incorrectAnswer: ['a', 'c']
    },
    {
        question: 'what is a string?',

        answers: {
            a: 'a series of text.',
            b: 'something from your shirt.',
            c: 'a combination of functions.'
        },
        correctAnswer: 'a',
        incorrectAnswer: ['b', 'c']
    },
    {
        question: 'how do you link JavaScript to your HTML?',

        answers: {
            a: 'you do not need to link the script file.',
            b: 'src= Develop/script.js',
            c: 'src= Develop/Java.Script.JS'
        },
        correctAnswer: 'b',
        incorrectAnswer: ['a', 'c']
    },
    {
        question: 'what is PR short for?',

        answers: {
            a: 'peace rate',
            b: 'pre-record',
            c: 'pull request'
        },
        correctAnswer: 'c',
        incorrectAnswer: ['a', 'b']
    }
];
