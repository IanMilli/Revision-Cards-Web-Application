/*Add all important variables in this section and define them to correctly order js page */
let begin = document.getElementById("rules");
let exit = document.getElementById("rules");
let now = document.getElementById("questions");

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
    if (now.style.display === "none") {
      now.style.display = "block";
    } else {
      now.style.display = "none";
    }
  }