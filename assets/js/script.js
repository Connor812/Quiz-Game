const startButton = document.getElementById("start-btn");
let timeLeft = document.getElementById("timeLeft");
const welcomeQuiz = document.getElementById("welcomeQuiz")
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const correctOrWrong = document.getElementById("correctOrWrong")
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
btn1.addEventListener("click", checkAnswer);
btn2.addEventListener("click", checkAnswer);
btn3.addEventListener("click", checkAnswer);
btn4.addEventListener("click", checkAnswer);
let timerInterval;
let secondsLeft = 75;
let ranQuestion;
let g = -1;
let grab;
let ranQuestionGrab;
let total;
let finalTime;

startButton.addEventListener("click", startGame);

// Start Game Function

function startGame() {
    total = 0;
    console.log("start game");
    startButton.classList.add("hide");
    welcomeQuiz.classList.add("hide");
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
            gameOver();
        }

    }, 1000)

   
}

// Getting the next question

function setNextQuestion() {
    if (g === 4) {
        finalTime = secondsLeft;
        clearInterval(timerInterval);
        enterInitials();
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
        // console.log("right text");
        CorrectOrWrong();
        setNextQuestion();
    } else {
        secondsLeft = secondsLeft - 5;
        correctOrWrong.classList.add('wrong');
        correctOrWrongText = "Wrong!";
        CorrectOrWrong();
        // console.log("wrong text");
        setNextQuestion();
    }
}

function CorrectOrWrong() {
        
        correctOrWrong.innerText = correctOrWrongText;
        correctOrWrong.classList.remove("hide");
        let CORsecondsLeft = 3;
        let CORtimerInterval = setInterval(function () {
            CORsecondsLeft--;
            // console.log(CORsecondsLeft);
            
    
            if (CORsecondsLeft === 0) {
               correctOrWrong.classList.add("hide");
               clearInterval(CORtimerInterval);
            }
    
        }, 1000)
    }

function enterInitials() {
    
}




function gameOver() {
    alert("gaveover");
    
}









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
