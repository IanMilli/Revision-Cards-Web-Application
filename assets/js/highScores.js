/*Create a function to update the high score list dependant on user entry] */

let highscoresElement = document.getElementById("highscoresList");

function highScoresJS() {
    /*take the array out of local storage or create a new array*/
    let highScoresList = JSON.parse(localStorage.getItem("highScores")) || [];
    /* add values to the high scores list*/
    let list = "";
    highScoresList.forEach(score => {
        list = list + "<p>" +score.subject + ":"+  score.name + "=" + score.score + "</p>";
    });
    highscoresElement.innerHTML = list;
}

function resetScores() {
    localStorage.clear();
    highScoresJS();
}

highScoresJS();
