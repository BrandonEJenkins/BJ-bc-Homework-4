// Contains user scores and mult choice questions

// Constructor function; also called an object constructor function and is used to create many objects of the same type
// This constructor function is being used to track the user's score and to track the questions
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

// Functions gets new question
// The properties and methods of this prototype object were defined in the Quiz constructor function
Quiz.prototype.getQuestionIndex = function() {
    return this.questions(this.questionIndex);
}

// Indicates whether quiz has ended
Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}

// Checks if answer is correct
/*
Quiz.prototype.guess = function(answer) {
    this.questionIndex++;

    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
}
*/

Quiz.prototype.printQuestions = function() {
    var questionString = "";

    for (var i = 0; i < questions.length; i++) {
        questionString += questions[i].text+ ",";
    }
    alert(questionString);
}
