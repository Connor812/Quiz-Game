const goToHighscore = document.getElementById("highscore");
const timer = document.getElementById("timer");
let timeLeft = document.getElementById("timeLeft");
const highScoreLink = document.getElementById("highscore");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const welcomeQuiz = document.getElementById("welcomeQuiz");
const answerButtonsElement = document.getElementById("answer-buttons");
const initals = document.getElementById("input-initials");
const submitInitials = document.getElementById("submit-initials");
const startButton = document.getElementById("start-btn");
const restartButton = document.getElementById("restart-btn");
const correctOrWrong = document.getElementById("correctOrWrong");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
btn1.addEventListener("click", checkAnswer);
btn2.addEventListener("click", checkAnswer);
btn3.addEventListener("click", checkAnswer);
btn4.addEventListener("click", checkAnswer);
let timerInterval;
let secondsLeft;
let ranQuestion;
let g;
let grab;
let ranQuestionGrab;
let total;
let finalTime;



function init() {
    g = -1;
    secondsLeft = 75;
    timeLeft.innerHTML = 0;
    questionElement.classList.add("question-font-size");
    questionElement.innerText = "The Coding Quiz";
    startButton.innerText = "Start";
    timer.classList.remove("hide");
    highScoreLink.classList.remove("hide");
    questionElement.classList.remove("hide");
    welcomeQuiz.classList.remove("hide");
    startButton.classList.remove("hide");


    initals.classList.add("hide");
    answerButtonsElement.classList.add("hide");
    restartButton.classList.add("hide");
    ulAppend.classList.add("hide");

    goToHighscore.addEventListener("click", renderHighScores);
    startButton.addEventListener("click", startGame);
}

init();





// Start Game Function

function startGame() {
    total = 0;
    finalTime = 0;
    console.log("start game");
    startButton.classList.add("hide");
    welcomeQuiz.classList.add("hide");
    highScoreLink.classList.add("hide");

    questionContainerElement.classList.remove("hide");
    answerButtonsElement.classList.remove("hide");
    startTimer();
    getRandomOrder();
    setNextQuestion();
}


// Set Timer Function

function startTimer() {

    timeLeft.textContent = secondsLeft;
    timerInterval = setInterval(function () {
        secondsLeft--;
        // console.log(secondsLeft);
        timeLeft.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            return enterInitials();
        }

    }, 1000)


}

// Getting the next question

function setNextQuestion() {
    console.log(g);
    if (g === 4) {
        finalTime = secondsLeft;
        clearInterval(timerInterval);
        return enterInitials();
    }

    g++;
    grab = ranQuestionGrab[g];
    ranQuestion = questions[grab];

    questionElement.innerText = ranQuestion.question;

    let ranAnswer = [0, 1, 2, 3];
    ranAnswer.sort((a, b) => 0.5 - Math.random());
    console.log(ranAnswer);

    btn1.innerText = ranQuestion.answers[ranAnswer[0]];
    btn2.innerText = ranQuestion.answers[ranAnswer[1]];
    btn3.innerText = ranQuestion.answers[ranAnswer[2]];
    btn4.innerText = ranQuestion.answers[ranAnswer[3]];
    console.log(ranQuestion.answers);
}

// Randomizing the order of the questions

function getRandomOrder() {
    ranQuestionGrab = [0, 1, 2, 3, 4];
    ranQuestionGrab.sort((a, b) => 0.5 - Math.random());
    console.log(ranQuestionGrab);
}

// Checking if answer is ture or false

function checkAnswer(event) {
    correctOrWrong.classList.remove('wrong', 'correct');
    event.target.innerText;
    console.log(event.target.innerText);
    if (ranQuestion.answers[0] == event.target.innerText) {
        total++;
        correctOrWrongText = "Correct!";
        correctOrWrong.classList.add('correct');
        setNextQuestion();
        CorrectOrWrong();
    } else {
        secondsLeft = secondsLeft - 5;
        correctOrWrong.classList.add('wrong');
        correctOrWrongText = "Wrong!";
        setNextQuestion();
        CorrectOrWrong();
    }
}

// Display Correct or Wrong under Container for 3 seconds

let CORsecondsLeft;

function CorrectOrWrong() {

    correctOrWrong.innerText = correctOrWrongText;
    correctOrWrong.classList.remove("hide");
    CORsecondsLeft = 3;
    let CORtimerInterval = setInterval(function () {
        // console.log(CORsecondsLeft);
        CORsecondsLeft--;
        // console.log(CORsecondsLeft);

        if (CORsecondsLeft === 0) {
            correctOrWrong.classList.add("hide");
            clearInterval(CORtimerInterval);
        }

    }, 1000)
}

// Once Quiz is finished, added your initals and save highscore

function enterInitials() {
    timeLeft.innerHTML = finalTime;
    questionElement.innerText = "Please Enter Initials To Save Highscore";
    answerButtonsElement.classList.add("hide");
    initals.classList.remove("hide");
    submitInitials.addEventListener("click", function (event) {
        initialsValue = document.getElementById("initials").value;
        event.preventDefault();
        putToLocalStorage();
        renderHighScores();
    })
}

function putToLocalStorage() {

    let allHighScore = JSON.parse(localStorage.getItem("highScore")) || [];

    let highScore = {
        finalTimeHS: finalTime,
        totalHS: total,
        initalsHS: initialsValue
    };

    allHighScore.push(highScore);
    localStorage.setItem("highScore", JSON.stringify(allHighScore));

}

function renderHighScores() {
    startButton.classList.add("hide");
    highScoreLink.classList.add("hide");
    let getHighScore = JSON.parse(localStorage.getItem("highScore"));
    questionElement.innerText = "HighScores";
    initals.classList.add("hide");
    welcomeQuiz.classList.add("hide");
    restartButton.addEventListener("click", init);
    restartButton.classList.remove("hide");
    const ulAppend = document.getElementById("ulAppend");
    ulAppend.classList.remove("hide");

console.log(ulAppend + "Hello");
    let ul = document.createElement("ul");
    ulAppend.appendChild(ul);
    
        for (let i =0; i < getHighScore.length; i++ ) {
            let showHighScore = getHighScore[i];

            let li = document.createElement("li");
            li.textContent = `Initials: ${showHighScore.initalsHS} Score: ${showHighScore.totalHS} Time: ${showHighScore.finalTimeHS}`;
            ul.appendChild(li);

        }
}


// Questions that the ranQuestions() grabs from

const questions = [
    {
        question: "What is 2+2",
        answers: [
            tureAns = "4",
            wrongAns1 = "3",
            wrongAns2 = "5",
            wrongAns3 = "6"
        ]
    },
    {
        question: "What is 4+4",
        answers: [
            tureAns = "8",
            wrongAns1 = "9",
            wrongAns2 = "5",
            wrongAns3 = "7"
        ]
    },
    {
        question: "What is 8+8",
        answers: [
            tureAns = "16",
            wrongAns1 = "15",
            wrongAns2 = "17",
            wrongAns3 = "19"
        ]
    },
    {
        question: "What is 16+16",
        answers: [
            tureAns = "32",
            wrongAns1 = "35",
            wrongAns2 = "36",
            wrongAns3 = "34"
        ]
    },
    {
        question: "What is 32+32",
        answers: [
            tureAns = "64",
            wrongAns1 = "67",
            wrongAns2 = "68",
            wrongAns3 = "60"
        ]
    }

];
