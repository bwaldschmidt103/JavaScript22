const questions = [{
        question: "Who is the all-time leading scorer for the Chicago Blackhawks?",
        answers: [
            { text: "Bobby Hull", correct: false },
            { text: "Stan Mikita", correct: true },
            { text: "Patrick Kane", correct: false },
            { text: "Denis Savard", correct: false },
            { text: "Jonathan Toews", correct: false }
        ],
        image: "images/stanMikita.jpg",
        clues: ["He played for the Blackhawks from 1958 to 1980.", "He was known for his curved stick."]
    },
    // More questions will be added here...
];

let currentQuestionIndex = 0;
let score = 0;
let attempts = 0;

const questionText = document.getElementById('question-text');
const questionImage = document.getElementById('question-image');
const answerButtons = document.getElementById('answer-buttons');
const scoreDisplay = document.getElementById('score');
const clueButton = document.getElementById('clue-button');
const nextButton = document.getElementById('next-button');

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.innerText = score;
    showQuestion();
}

function showQuestion() {
    resetState();
    const question = questions[currentQuestionIndex];
    questionText.innerText = question.question;
    questionImage.src = question.image;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    clueButton.style.display = 'inline-block';
    nextButton.style.display = 'none';
    attempts = 0;
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        if (attempts === 0) {
            score += 5;
        } else if (attempts === 1) {
            score += 3;
        } else if (attempts === 2) {
            score += 1;
        }
        scoreDisplay.innerText = score;
        nextButton.style.display = 'inline-block';
        clueButton.style.display = 'none';
    } else {
        attempts++;
        if (attempts >= 3) {
            nextButton.style.display = 'inline-block';
            clueButton.style.display = 'none';
        }
    }
}

clueButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert('Game Over! Your final score is ' + score);
        startGame();
    }
});

startGame();