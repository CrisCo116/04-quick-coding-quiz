var startButton = document.getElementById('start-button');
var optionsContainer = document.getElementById('options');
var questionContainer = document.getElementById('question');
var gameOverMessage = document.getElementById('game-over');

var currentQuestionIndex = 0;
var score = 0;
var timeLeft = 60;
var timerInterval;

var questions = [
    {
        question: "What is the purpose of the 'useEffect' hook in React?",
        options: [
            "To manage state in functional components",
            "To handle asynchronous operations and side effects",
            "To create reusable components",
            "To define the layout of a component"
        ],
        correctIndex: 1
    },
    {
        question: "What does the acronym 'API' stand for?",
        options: [
            "Advanced Programming Interface",
            "Application Programming Interface",
            "Automated Programming Interface",
            "Application Processing Interface"
        ],
        correctIndex: 1
    },
    {
        question: "What is the primary purpose of the 'npm' package manager?",
        options: [
            "To build user interfaces",
            "To manage server-side logic",
            "To handle package dependencies and distribution",
            "To create database schemas"
        ],
        correctIndex: 2
    },
    {
        question: "In JavaScript, what does the 'DOM' stand for?",
        options: [
            "Data Object Model",
            "Document Oriented Model",
            "Document Object Model",
            "Dynamic Output Model"
        ],
        correctIndex: 2
    },
];

function startQuiz() {
    startButton.classList.add('hide');
    optionsContainer.style.display = 'block';
    questionContainer.style.display = 'block';

    displayQuestion(currentQuestionIndex);
    startTimer(); 

    optionsContainer.addEventListener('click', checkAnswer);
}

function displayQuestion(index) {
    questionContainer.textContent = questions[index].question;
    optionsContainer.innerHTML = '';

    questions[index].options.forEach(function(option, optionIndex) {
        var optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.classList.add('btn', 'btn-info', 'btn-block', 'mb-2');
        optionButton.dataset.index = optionIndex;
        optionsContainer.appendChild(optionButton);
    });
}

function checkAnswer(event) {
    var selectedOptionIndex = event.target.dataset.index;
    var correctIndex = questions[currentQuestionIndex].correctIndex;

    if (selectedOptionIndex == correctIndex) {
        score++;
    } else {
        timeLeft -= 10; 
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        endQuiz();
    }
}

function startTimer() {
    document.getElementById('time').textContent = timeLeft; 
    timerInterval = setInterval(function() {
        timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        } else {
            document.getElementById('time').textContent = timeLeft; 
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timerInterval);
    questionContainer.textContent = '';
    optionsContainer.style.display = 'none';
    gameOverMessage.textContent = 'Game Over! Your score is ' + score + '.';
    gameOverMessage.style.display = 'block';
    document.getElementById('score-form').style.display = 'block'; 
}

startButton.addEventListener('click', startQuiz);

var highScores = [];

function displayHighScores() {
    var highScoresList = document.getElementById('high-scores-list');
    highScoresList.innerHTML = ''; 

    highScores.sort(function(a, b) {
        return b.score - a.score;
    });

    highScores.forEach(function(score, index) {
        var li = document.createElement('li');
        li.textContent = (index + 1) + ". " + score.initials + " - " + score.score;
        highScoresList.appendChild(li);
    });

    document.getElementById('high-scores').style.display = 'block';
    document.getElementById('game-over').style.display = 'none';
}

var scoreForm = document.getElementById('score-form');
scoreForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var userInitials = document.getElementById('initials').value;
    var userScore = { initials: userInitials, score: score };
    highScores.push(userScore);
    displayHighScores();
});