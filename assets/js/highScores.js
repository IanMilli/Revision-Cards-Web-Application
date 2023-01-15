/*Create a function to update the high score list dependant on user entry] */


function HighScoresJS() {
    /*get array from local storage, or initialize as empty array*/
    let highScoresJSList = JSON.parse(localStorage.getItem('highScoresJS')) || [];
    /* add details to the  highScores list*/
    let list = '';
    highScoresJSList.forEach(score => {
        list = list + '<p>' + score.initials + '  :  ' + score.score + '</p>';
    });
    highScoresJSListEl.innerHTML = list;
}

function resetScores() {
    localStorage.clear();
    HighScoresJS();
}

HighScoresJS();
