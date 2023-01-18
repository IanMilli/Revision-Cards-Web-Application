/*Add all global variables in this section and define them to correctly order js page */
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
/* tutorial - use event propagation to stop the double clicking bug*/
function startQuiz(event) {
    event.stopPropagation();
   begin.classList.remove("hide");
  }
/*if exit button is clicked return to beginning*/
/* tutorial - use event propagation to stop the double clicking bug*/
function exitNow(event) {
    event.stopPropagation();
    rules.classList.add("hide");
  }

/*if start button is clicked start quiz*/
/* tutorial - use event propagation to stop the double clicking bug*/
function initiate(event) {
    event.stopPropagation();
  go.classList.remove("hide");
  nextQuestion();
  startTimer();
  changeDiv("rules", "questionBox");
}

/* Move to next div # from current div - this function is designed to move from one element to the next as per defined in future
functions by adding the current div id and the next div id into the attached function, see below*/
function changeDiv(curr, next) {
    document.getElementById(curr).classList.add("hide");
    document.getElementById(next).classList.remove("hide")
};

/*this function operates the clock by equaling the text content of the "timer" element to the variable secondsLeft
secondsLeft is given a inital value of 120 - (2minutes)
the variable timerInterval is then set to equal the function setInterval.

The function setInterval is deducting one from seconds Left using the -- approach
then equaling the text in the timer element to that result allowing the user to see the time counting back from 120 to 0
then uses an if statement to declare that when the value of secondsLeft is less or equal to 0 the function clearInterval assigned to the 
variable timerInterval and the function endgame will operate*/
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
/*this function displays the questions once shuffled and the variable is made = to -1 so when it is written as ++ it starts at the index value of the shuffled questions array*/ 

function nextQuestion() {
    currentQ++;
    /*If there are no more questions, end the game by calling the function end game, here the game ends if the array has shown 10 questions by stopping after 
    the number 9 (tenth) value of the shuffled question array or when the value of the secondsLeft value equals 0*/
    if (currentQ === 10 ) {
        secondsLeft = 0;
        endGame();
    } else {
        /*Otherwise populate the "questionEl" by iterrating through the shuffled questions produced by the function in the questions js file*/
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
    /* iterate through the "questions" array and locate the correct answer (using j to not confuse with i in previous for loop*/
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].correct) {
            /* return the correct answer*/
            return arr[j].answer
        }
    }
};
/*function for ending the quiz
when the value of text content of the element timer becomes 0 run the function of changeDiv
to hide the questionsBox div and open the resultScore div*/
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
    window.location.href = "./highScores.html";
}