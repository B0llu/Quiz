var readlineSync = require("readline-sync");
var score = 0

var userName = readlineSync.question("What is your Name? ");

console.log("Welcome " + userName + " to DO YOU KNOW DHRUV");

//data of high score
var highscores = [{
    Name: "Dhruv",
    core: 3,
}]


// play function

function play(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer === answer) {
        console.log("Adus");
        score = score + 1;

    } else {
        console.log("Hatt Randi Sali")

    }

    console.log("current score: ", score);
    console.log("--------------")
}
// array of objects
var questions = [{
    question: "Are we playing today? ",
    answer: "yes"
}, {
    question: "Is big boss called Snake? ",
    answer: "yes"
}, {
    question: "Ground vr bhetu bhava ",
    answer: "tapa tap"
}];

// loop

for (var i = 0; i < questions.length; i++) {
    var curruntQuestion = questions[i];
    play(curruntQuestion.question, curruntQuestion.answer)
}

console.log("ADUS YOU NOW KNOW HOW TO ANSWER, YOUR SCORE: ", score);

console.log("Check out the scores ", highscores)