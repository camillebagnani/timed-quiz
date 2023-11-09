var button = document.querySelector(".multiple-choice");
var startButton = document.querySelector("#start-button")

var questions = [{
    title: "photography is what type of art?",
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    correctAnswer: "a"
}, {
    title: "cake is tasty",
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    correctAnswer: "a"
}, {
    title: "camera",
    a: "a",
    b: "b",        
    c: "c",
    d: "d",
    correctAnswer: "a"
}]

startButton.addEventListener("click", function(event) {
    event.target.remove();
    var instructions = document.getElementById("instructions");
    instructions.remove();
    var newButton = document.createElement("button");
    button.appendChild(newButton);

})
button.addEventListener("click", function (event) {
    if (event.target.textContent === questions[0].correctAnswer.toUpperCase()) {
        nextQuestion();
    } else { console.log(false) };
})

function nextQuestion() {
    var titleEl = document.querySelector("#titleEl");

    if (titleEl.textContent === "Photography Quiz") {
        titleEl.textContent = questions[0].title;
    } else if (titleEl.textContent === questions[0].title) {
        titleEl.textContent = questions[1].title;
    } else if (titleEl.textContent === questions[1].title) {
        titleEl.textContent = questions[2].title;
    }
}




//************************TO DO******************* */

//when they click on start, remove start button and <p> and append answer button

//when you click the start button, the intro goes away
// the first question and four multiple choice answers appear
// the timer for 200 seconds starts

//when you click the wrong answer, ten seconds is subtracted from the timer
//when you click the right answer, you advance to the next question 
//the new question and four multiple choice answers appear

//when you answer all the questions or the timer hits 0 the game ends

//after the game is over, a prompt appears
// you enter your initials
// once you submit your initials, the screen changes
//the game saves your score and shows the ranking of stores