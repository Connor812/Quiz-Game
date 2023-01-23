const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const welcomeQuiz = document.getElementById("welcomeQuiz")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex;



startButton.addEventListener("click", startGame);



function startGame() {
    console.log("started");
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    welcomeQuiz.classList.add("hide");
    answerButtonsElement.classList.remove("hide");
    startTimer();
    setNextQuestion();


}


function startTimer() {
    let secondsLeft = 5;
    timeLeft.textContent = secondsLeft;
    let timerInterval = setInterval(function() {
    secondsLeft--;
    console.log(secondsLeft);
    timeLeft.textContent = secondsLeft;

   if (secondsLeft === 0) {
    clearInterval(timerInterval);
    gameOver();
   }


   }, 1000)
}




function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    console.log(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}



function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        // call nect question
        console.log(shuffledQuestions.length);
        console.log(currentQuestionIndex);
        setNextQuestion();

    } else {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
        console.log(shuffledQuestions);
        console.log(currentQuestionIndex);
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } 
    else {
        element.classList.add("wrong");
    }

}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}



function gameOver() {
    alert("Game Over");
}





const questions = [
    {
        question: "What is 2 +2?",
        answers: [
            { text: "4", correct: true },
            { text: "22", correct: false },
            { text: "23", correct: false}
        ],
        question: "What is 4 + 4?",
        answers: [
            { text: "8", correct: true },
            { text: "22", correct: false },
            { text: "23", correct: false}
        ],
        question: "What is 8 + 8?",
        answers: [
            { text: "16", correct: true },
            { text: "22", correct: false },
            { text: "23", correct: false}
        ]
    
    }

]
