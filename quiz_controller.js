// Contains user scores and mult choice questions

// Constructor function
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

// Functions gets new question
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
