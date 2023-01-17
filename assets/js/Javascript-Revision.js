/*Add all important variables in this section and define them to correctly order js page */
let begin = document.getElementById("rules");
let exit = document.getElementById("rules");
let go = document.getElementById("questionBox");
let timerEl = document.getElementById("time");
let questionEl = document.getElementById("question");
let answerOne = document.getElementById("answer-1");
let answerTwo = document.getElementById("answer-2");
let answerThree = document.getElementById("answer-3");
let answerFour = document.getElementById("answer-4");
let finalScoreEl = document.getElementById("final-score");
let namesEl = document.getElementById("name");
let subjectsEl = document.getElementById("subject")
let highScoresList = document.getElementById("highScores")
let shuffledQuestionBank = shuffleQB();
let secondsLeft = 120;
let currentScore = 0;
let currentQ = -1;
let finalScore;


/* if "start quiz" button is clicked first show an info box that explains the rules of the quiz*/
function startQuiz(event) {
    event.stopPropagation();
   begin.classList.remove("hide");
  }
/*if exit button is clicked return to beginning*/
function exitNow(event) {
    event.stopPropagation();
    rules.classList.add("hide");
  }

/*if continue button is clicked start quiz*/
function initiate(event) {
    event.stopPropagation();
  go.classList.remove("hide");
  nextQuestion();
  startTimer();
 
}

/* Move to next div # from current div */
function changeDiv(curr, next) {
    document.getElementById(curr).classList.add("hide");
    document.getElementById(next).classList.remove("hide")
};

/*create a function to operate the timer*/
function startTimer() {
    timerEl.textContent = secondsLeft;
    let timerInterval = setInterval(
        () => {
            secondsLeft--;
            timerEl.textContent = secondsLeft;
            if (secondsLeft <= 0) {
                clearInterval(timerInterval);
                endGame();
            }
        }, 1000);
};

function nextQuestion() {
    currentQ++;
    /*If there are no more questions, end the game*/
    if (currentQ === shuffledQuestionBank.length) {
        secondsLeft = 0;
        endGame();
    } else {
        /*Otherwise populate questionEl8*/
        questionEl.textContent = shuffledQuestionBank[currentQ].question;
        /* populate answer buttons*/
        let arr = [answerOne, answerTwo, answerThree, answerFour];
        let i = 0;
        arr.forEach(element => {
            element.textContent = shuffledQuestionBank[currentQ].answers[i].answer;
            i++
        }, i);
    };
};

/* When user clicks an answer button*/
function handleAnswerClick(event) {
    /* Get the correct answer string*/
    let correctAnswer = getCorrectAnswer(currentQ);
    /* Compare to the users selection*/
    if (event.target.textContent === correctAnswer) {
        currentScore += 10;
        /* color indicates correct choice*/
        event.target.classList.add("correct")
    } else {
        secondsLeft -= 10;
        /* color indicates wrong choice*/
        event.target.classList.add("wrong")
    }
    /*pause for 3 seconds and reset the button color, then go to next question.*/
    setTimeout(
        () => {
            event.target.className = "btn";
            nextQuestion();
        }, 300);
};

function getCorrectAnswer(currentQ) {
    let arr = shuffledQuestionBank[currentQ].answers;
    /* iterate through the "questions" array and locate the correct answer*/
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].correct) {
            /* return the correct answer*/
            return arr[j].answer
        }
    }
};

function endGame() {
    timerEl.textContent = 0;
    changeDiv("questionBox", "resultsScore");
    /*record the result on the results page at the end of the quiz */
    finalScore = currentScore;
    finalScoreEl.textContent = finalScore;
}

function handleSubmit() {
    let name = namesEl.value;
    let subject = subjectsEl.value;
    /* add array from local storage or define a new array*/
    /*get array from local storage or define a new empty array */
    let highScoresList = JSON.parse(localStorage.getItem("highScores")) || [];
    /*add the new score to the array*/
     
    highScoresList.push({ subject: subject,name: name, score: finalScore });
    /*organize the scores in ascending order*/
    highScoresList = highScoresList.sort((curr, next) => {
        if (curr.score < next.score) {
            return 1
        } else if (curr.score > next.score) {
            return -1
        } else {
            return 0
        }
    });
    /* set the updated array to local storage*/
    localStorage.setItem("highScores", JSON.stringify(highScoresList))
    /*link to the High Scores page */
    window.location.href = "../highScores.html";
}