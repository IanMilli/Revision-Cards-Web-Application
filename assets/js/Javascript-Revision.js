/*Add all important variables in this section and define them to correctly order js page */
let begin = document.getElementById("rules");
let exit = document.getElementById("rules");
let go = document.getElementById("questionBox");

/* if "start quiz" button is clicked first show an info box that explains the rules of the quiz*/
function startQuiz() {
    if (begin.style.display === "none") {
      begin.style.display = "block";
    } else {
      begin.style.display = "none";
    }
  }
/*if exit button is clicked return to beginning*/
function exitNow() {
    rules.style.display = "none";
  }
/*if continue button is clicked start quiz*/
  function startNow() {
    if (go.style.display === "none") {
      go.style.display = "block";
    }
  }