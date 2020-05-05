// Shows scores if quiz has ended else populates next question
function populate() {
    if(quiz.isEnded()) {
        // showScores();
    } else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choices" + i);
        }
    }
}

var questions = [
    new Question("What does the acronym 'HTML' stand for?", ["Highly Technical Materials Lab", "Holy Toledo Master Language", "Hypertext Markup Language", "Hypertrophy Mass Lifter"], "Hypertext Markup Language"),
    new Question("The condition in an if / else statement is enclosed within ______.",["parentheses", "quotes", "exclamation marks", "underscores"], "parentheses"),
    new Question("What is the correct syntax to increment an index 'i'?", ["i!!", "i##", "i incr", "i++"], "i++"),
    new Question("getElementById() returns an element with this type of attribute: ", ["ID", "class", "header", "Element"], "ID"),
    new Question("Which language is used for web apps?", ["PHP", "Javascript", "All", "Python"], "All"),
];

var quiz = new Quiz(questions);

populate();