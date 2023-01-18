/*create an array consisting of questions to aid in javascript revision.
Make the array name to be "questions".
add in a mini array "question" and equal to a string value of the asked question.
add in a mini array "answer" and equal it to a set of strings containing the question answers.
add in a mini array "correct" and equal it to a boolean value of true if correct or false if wrong

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
    }, {
        question: "In JavaScript, what is a block of statement??",
        answers: [
            { answer: "Conditional block", correct: false },
            { answer: "block that combines a number of statements into a single compound statement", correct: true },
            { answer: "both conditional block and a single statement", correct: false },
            { answer: "block that contains a single statement", correct: false }]

    }, {
        question: "When interpreter encounters an empty statements, what it will do:",
        answers: [
            { answer: "Shows a warning", correct: false },
            { answer: "Prompts to complete the statement", correct: false },
            { answer: " Throws an error", correct: false },
            { answer: "Ignores the statements", correct: true }]

    }, {
        question: "The 'function' and 'let' are known as:?",
        answers: [
            { answer: "Keywords", correct: false },
            { answer: "Data types", correct: false },
            { answer: "Declaration statements", correct: true },
            { answer: "Prototypes", correct: false }]

    }, {
        question: "Which of the following variables takes precedence over the others if the names are the same?",
        answers: [
            { answer: "Global variable", correct: false },
            { answer: "The local element", correct: true },
            { answer: " The two of the above", correct: false },
            { answer: "None of the above", correct: false }]

    }, {
        question: "Which one of the following is the correct way for calling the JavaScript code??",
        answers: [
            { answer: "Preprocessor", correct: false },
            { answer: "Triggering Event", correct: false },
            { answer: " RMI", correct: false },
            { answer: "Function/Method", correct: true }]

    }, {
        question: "When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.",
        answers: [
            { answer: "Prints an exception error", correct: false },
            { answer: "Prints an overflow error", correct: false },
            { answer: " Displays 'Infinity'", correct: true },
            { answer: "Prints the value as such", correct: false }]

    }, {
        question: "In the JavaScript, which one of the following is not considered as an error:",
        answers: [
            { answer: "Syntax error", correct: false },
            { answer: "Missing of semicolons", correct: false },
            { answer: "Division by zero", correct: true },
            { answer: "Missing of Bracket", correct: false }]

    }, {
        question: "Which of the following number object function returns the value of the number?",
        answers: [
            { answer: "toString()", correct: false },
            { answer: "valueOf()", correct: true },
            { answer: " toLocaleString(", correct: false },
            { answer: "toPrecision()", correct: false }]

    }, {
        question: "In JavaScript the x===y statement implies that:",
        answers: [
            { answer: "Both x and y are equal in value, type and reference address as well.", correct: false },
            { answer: "Both are x and y are equal in value only", correct: false },
            { answer: "Both are equal in the value and data type.", correct: true },
            { answer: "Both are not same at all.", correct: false }]

    }, {
        question: "Which one of the following is used for the calling a function or a method in the JavaScript:",
        answers: [
            { answer: "Property Access Expression", correct: false },
            { answer: "Functional expression", correct: false },
            { answer: " Invocation expression", correct: true },
            { answer: "Primary expression", correct: false }]

    }
];

function shuffleQB() {
    /* clone the question array*/
    let questionsClone = questions;
    /*Shuffle the questions so different questions appear each time a user attempts the quiz*/
    for (let i = 0; i < questionsClone.length; i++) {
/*Shuffle the answers so the answers appear in different order each time a question appears*/
        let answers = questionsClone[i].answers;
        answers.sort(() => {
            return (Math.floor(Math.random() * 3) - 1);
        });
    }
    /* Shuffle the questions so different order each time a user attempts the quiz*/
    questionsClone = questionsClone.sort(() => {
        return (Math.floor(Math.random() * 3) - 1);
    });
    return questionsClone;
};
