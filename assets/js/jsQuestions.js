/*create an array consisting of questions to aid in javascript revision.
Make the array name to be "questions".
add in a mini array "arrayQuestion"  that gives the question an id number.
add in a mini array "question" and equal to a string value of the asked question.
add in a mini array "answers" and equal it to a set of strings containing the question answers.

*/
const questions = [

    {
        question: "Which is NOT a primitive data type?",
        answers: [
            { answer: "array", correct: true },
            { answer: "string", correct: false },
            { answer: "boolean", correct: false },
            { answer: "undefined", correct: false }
        ],
    }, {
        question: "Which of these array methods returns an array?",
        answers: [
            { answer: "Array.splice()", correct: true },
            { answer: "Array.forEach()", correct: false },
            { answer: "Array.find()", correct: false },
            { answer: "Array.reduce()", correct: false }],
    },

    {
        question: "What is the function of `Array.unshift()`?",
        answers: [
            { answer: "Removes first element of array", correct: true },
            { answer: "Removes last element of array", correct: false },
            { answer: "Adds element to end of array", correct: false },
            { answer: "Adds element to start of array", correct: false }]
    },

    {
        question: "Which of these statements returns the number 2?",
        answers: [
            { answer: "parseInt('2.9')", correct: true },
            { answer: "Math.floor(1.9)", correct: false },
            { answer: "Math.round(2.9)", correct: false },
            { answer: "parseFloat('2.9')", correct: false }]
    },

    {
        question: "Which of the following is a comparison operator?",
        answers: [
            { answer: "!==", correct: true },
            { answer: "=", correct: false },
            { answer: "+=", correct: false },
            { answer: "--", correct: false }]
    },{
    question: "Which type of JavaScript language is ___?",
    answers: [
        { answer: "Object-Oriented", correct: false },
        { answer: "Object-Based",  correct: true },
        { answer: " Assembly-language", correct: false },
        { answer: "High-level", correct: false }]

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
