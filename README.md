# Week6--Coding-Revision-Card-Test-Challenge
This project is to produce a timed test using HTML, CSS, Javascript to create a unique project 


## Description 

This project is to complete a challenge provided to us that must satisfy the following requirements:-

 1.A start button that when clicked a timer starts and the first question appears.
 2.Questions contain buttons for each answer.
 3.When answer is clicked, the next question appears
 4.If the answer clicked was incorrect then subtract time from the clock
 5.The quiz should end when all questions are answered or the timer reaches 0.
 6.When the game ends, it should display their score and give the user the ability to save their initials and their score

To expand on these parameters i have created a website to contain multiple quiz's that can be used to aid in the revision of terms learnt whilst studying different coding languages.

. The website contains a homepage that has navigation links to all parts of the website.
. From the home page you can select a quiz of a particular coding language.
. Once you decide to carry out a particular test you will be presented with a list of rules for the quiz.
    the user can exit and stop then if they wish or press begin.
. Once they begin the quiz they must complete it by selecting one answer for each question, the timer will begin and if it reaches 0 then   the quiz will end.
. If their answer is correct a visible indication will inform the user.
. If their answer is incorrect a visible indication will inform the user and ten seconds will be deducted from the quiz time.
    the quiz will be for two minutes and will consist of ten questions randomly picked from a larger array so the user will get different questions each time they complete the quiz.
. The answers will be randomized in their position so it is less easy for a user to pick after several tries through.
. Once the quiz ends a result page will be shown allowing input of the users name, and subject and displaying their score
. On pressing submit the user will be taken to the high scores page which is also accessible from links on the homepage and the quiz pages.
    the user will see their high score printed on the page and an option will be given to them to clear their scores if they wish.

Technologies Used: HTML5, CSS3, JavaScript, Bootstrap, FlexBox.

## Table of Contents 

* [Links](#links)
* [Usage](#usage)
* [Screenshots](#screenshots)
* [Credits](#credits)
* [License](#license)


## Links

Further information on this web application can be found at its github repository [github depository](https://github.com/IanMilli/Week6--Coding-Revision-Card-Test-Challenge).

To use the web site and test their coding knowledge the user must go to the following location [deployed application](https://ianmilli.github.io/Week6--Coding-Revision-Card-Test-Challenge/)


## Usage 

To use this site the user must go to the website link posted under [Links](#links).

They can select a quiz to complete in their preferred subject using one of the links in the navbar at the top of the page or in the welcome screen as per the instructions there.

They can also access the high score page to from the homepage should they wish to.

Once they hit a link to a quiz it will take them to the corresponding challenge.

When they are ready they should press the start button and the rules of the quiz will appear.

At this point the user can exit the quiz or press begin.

If they exit the page will go back to the beginning, if they press begin the rules will be replaced by the first randomly selected question and the timer will begin.

The user can then only pick one answer per question. 

If their answer is correct the button will light up green.

If their answer is wrong the button will light up red.

For each correct answer the user will receive ten points and for each incorrect answer the user will lose ten seconds from the time.

If the time returns to 0 before the user has completed the quiz the quiz will end.

If the user answers ten questions before the time runs out the quiz will end.

When the quiz ends a results page will appear giving the user the score for that attempt.

The user may then input  their name and the quiz subject and then press submit, this will take the user to the high scores page where they can see their result listed.

If the user wishes they may press the clear button to remove all high scores.

For a visual view of how to use the site please see the following video and attached screenshots in the [Screenshots](#screenshots) section.

## Screenshots



![Homepage of quiz website](https://github.com/IanMilli/Week6--Coding-Revision-Card-Test-Challenge/blob/main/assets/images/readme/homepage.JPG).

![Quiz-page](https://github.com/IanMilli/Week6--Coding-Revision-Card-Test-Challenge/blob/main/assets/images/readme/quiz%20page.JPG). 
![Rules-of-quiz](https://github.com/IanMilli/Week6--Coding-Revision-Card-Test-Challenge/blob/main/assets/images/readme/rules.PNG). 
![Questions](https://github.com/IanMilli/Week6--Coding-Revision-Card-Test-Challenge/blob/main/assets/images/readme/questions.JPG).
![End-of-Quiz](https://github.com/IanMilli/Week6--Coding-Revision-Card-Test-Challenge/blob/main/assets/images/readme/end%20of%20quiz.JPG).
![Submitting-Input-of-Score](https://github.com/IanMilli/Week6--Coding-Revision-Card-Test-Challenge/blob/main/assets/images/readme/submitting%20name%20for%20high%20scores.JPG).
![HighScores](https://github.com/IanMilli/Week6--Coding-Revision-Card-Test-Challenge/blob/main/assets/images/readme/high%20scores%20page.JPG).


the folling link will download a media file demonstrating the use of the site, unfortunately cannot be played on GitHub directly at the moment : ![demo][(https://github.com/IanMilli/Week6--Coding-Revision-Card-Test-Challenge/blob/main/assets/images/readme/demoquiz%20-%20Trim%20-%20Trim.MOV?raw=true).
 

## Credits

Primary Author Ian Millichamp
Exercise to demonstrate learned principles from week 6 lessons - bootcamp

reference materials :- mdn documents

reference materials - w3 schools :-
 https://www.w3schools.com/html/html_css.asp
 https://www.w3schools.com/tags/att_script_src.asp

 reference materials - stackoverflow :-
 https://stackoverflow.com/questions/39031224/how-to-center-cards-in-bootstrap-4
 https://stackoverflow.com/questions/44828004/bootstrap-4-responsive-button-size
 
 reference materials - images :-
 https://www.pexels.com/

 reference materials - how to code a clock (css only):-
 https://dev.to/dboatengx/build-a-real-time-changing-digital-clock-using-html-css-javascript-689#:~:text=HTML%20Markup%20for%20our%20Clock,with%20an%20id%20of%20clock%20.&text=Nothing%20would%20display%20for%20our,we%20bring%20in%20some%20JavaScript.
 
some guidance during office hours on how to structure this process from Student Helena in breakout room 13 with Dane Edwards, Johnathon C, Lee.

example questions to add to the question arrays referenced from:-
https://www.javatpoint.com/html-mcq
https://www.javatpoint.com/javascript-tutorial

tutorial with Alister Rowden :-

that helped me to understand some missed principles, such as the use of the event listeners to enable the operation of button clicked functions, 
the use of event.stopPropagation to stop needing to double click buttons.
the correct applying of information taken out of local storage to an element in html to allow proper logging of it on screen.
understanding that bootstrap css uses a lot of ! statements that can take priority over local css and how to adjust for that.
how to correctly move from one div to the next to prevent div's from forming next to each other in a block but separately over each other.


## License

MIT License

Copyright (c) 2023 IanMilli

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.




