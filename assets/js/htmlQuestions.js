/*create an array consisting of questions to aid in javascript revision.
Make the array name to be "questions".
add in a mini array "question" and equal to a string value of the asked question.
add in a mini array "answer" and equal it to a set of strings containing the question answers.
add in a mini array "correct" and equal it to a boolean value of true if correct or false if wrong

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
    }, {
        question: "Which of the following tag is used for inserting the largest heading in HTML?",
        answers: [
            { answer: "<h3>", correct: false },
            { answer: "<h1>", correct: true },
            { answer: "<h5>", correct: false },
            { answer: "<h6>", correct: false }]
    }, {
        question: "Which of the following tag is used to insert a line-break in HTML?",
        answers: [
            { answer: "<br>", correct: true },
            { answer: "<a>", correct: false },
            { answer: "<pre>", correct: false },
            { answer: " <b>", correct: false }]
    }, {
        question: "How to create an unordered list (a list with the list items in bullets) in HTML?",
        answers: [
            { answer: "<ul>", correct: true },
            { answer: "<ol>", correct: false },
            { answer: " <li>", correct: false },
            { answer: "<i>", correct: false }]

    }, {
        question: "Which character is used to represent the closing of a tag in HTML?",
        answers: [
            { answer: ">", correct: false },
            { answer: "!", correct: false },
            { answer: "/", correct: true },
            { answer: ".", correct: false }]
    }, {
        question: "How to create a hyperlink in HTML?",
        answers: [
            { answer: "<a href = 'www.javatpoint.com'> javaTpoint.com </a>", correct: true },
            { answer: "<a url = 'www.javatpoint.com' javaTpoint.com /a>", correct: false },
            { answer: " <a link = 'www.javatpoint.com'> javaTpoint.com </a>", correct: false },
            { answer: "<a> www.javatpoint.com <javaTpoint.com /a>", correct: false }]
    }, {
        question: "How to create an ordered list (a list with the list items in numbers) in HTML?",
        answers: [
            { answer: "<ul>", correct: false },
            { answer: "<ol>", correct: true },
            { answer: " <li>", correct: false },
            { answer: "<i>", correct: false }]
    }, {
        question: "Which of the following element is responsible for making the text italic in HTML?",
        answers: [
            { answer: "<i>", correct: true },
            { answer: "<italic>", correct: false },
            { answer: " <it>", correct: false },
            { answer: "<pre>", correct: false }]
    }, {
        question: "How to insert an image in HTML?",
        answers: [
            { answer: "<img href = 'jtp.png' />", correct: false },
            { answer: "<img url = 'jtp.png'/>", correct: false },
            { answer: " <img link = 'jtp.png'/>", correct: false },
            { answer: "<img src = 'jtp.png'/>", correct: true }]
    },{
        question: "How to add a background color in HTML?",
        answers: [
            { answer: "<marquee bg color: 'red'>", correct: false },
            { answer: "<marquee bg-color = 'red'>", correct: false },
            { answer: " <marquee bgcolor = 'red'>", correct: true },
            { answer: "<marquee color = 'red'>", correct: false }]
    },{
        question: "<input> is -",
        answers: [
            { answer: "a format tag.", correct: false },
            { answer: "an empty tag.", correct: true },
            { answer: " All of the above", correct: false },
            { answer: "None of the above.", correct: false }]
    },{
        question: "Which of the following tag is used to make the underlined text?",
        answers: [
            { answer: "<ul>", correct: false },
            { answer: "<pre>", correct: false },
            { answer: " <u>", correct: true },
            { answer: "<i>", correct: false }]
    },{
        question: "How to create a checkbox in HTML??",
        answers: [
            { answer: "<input type = 'checkbox'>", correct: true },
            { answer: "<input type = 'button'>", correct: false },
            { answer: " <checkbox>", correct: false },
            { answer: "<input type = 'check'", correct: false }]
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