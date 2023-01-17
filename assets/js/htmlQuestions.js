/*create an array consisting of questions to aid in javascript revision.
Make the array name to be "questions".
add in a mini array "arrayQuestion"  that gives the question an id number.
add in a mini array "question" and equal to a string value of the asked question.
add in a mini array "answers" and equal it to a set of strings containing the question answers.

*/
const questions = [

    {
        question: "HTML stands for -?",
        answers: [
            { answer: "HyperText and links Markup Language", correct: false },
            { answer: "HyperText Markup", correct: true },
            { answer: "HighText Machine Language", correct: false },
            { answer: "None of these", correct: false }
        ],
        
    }, {
        question: "The correct sequence of HTML tags for starting a webpage is -",
        answers: [
            { answer: "Head, Title, HTML, body", correct: false },
            { answer: "HTML, Body, Title, Head", correct: false },
            { answer: "HTML, Head, Title, Body", correct: false },
            { answer: "HTML, Head, Title, Body", correct: true }],
    }, {
        question: "Which of the following element is responsible for making the text bold in HTML?",
        answers: [
            { answer: "<pre>", correct: false },
            { answer: "<a>", correct: false },
            { answer: "<b>", correct: true },
            { answer: "<br>", correct: false }]
    },   {
        question: "Which of the following tag is used for inserting the largest heading in HTML?",
        answers: [
            { answer: "<h3>", correct: false },
            { answer: "<h1>", correct: true },
            { answer: "<h5>", correct: false },
            { answer: "<h6>", correct: false }]
    },{
        question: "5) Which of the following tag is used to insert a line-break in HTML?",
        answers: [
            { answer: "<br>", correct: true },
            { answer: "<a>", correct: false },
            { answer: "<pre>", correct: false },
            { answer: " <b>", correct: false }]
    },{
    question: "How to create an unordered list (a list with the list items in bullets) in HTML?",
    answers: [
        { answer: "<ul>", correct: true },
        { answer: "<ol>",  correct: false },
        { answer: " <li>", correct: false },
        { answer: "<i>", correct: false }]

    }
]; 






function shuffleQB() {
    /* clone the question array*/
    let questionsClone = questions;
    /*Shuffle the questions so different each time a user attempts the quiz*/
    for (let i = 0; i < questionsClone.length; i++) {

        let answers = questionsClone[i].answers;
        answers.sort(() => {
            return (Math.floor(Math.random() * 3) - 1);
        });
    }
    /* Shuffle the questions so different each time a user attempts the quiz*/
    questionsClone = questionsClone.sort(() => {
        return (Math.floor(Math.random() * 3) - 1);
    });
    return questionsClone;
};