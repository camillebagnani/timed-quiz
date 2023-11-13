// selects an empty div in the HTML where the multiple choice buttons go
var button = document.querySelector(".multiple-choice");
// selects the button element in the HTML with the id of 'start-button'
var startButton = document.querySelector("#start-button");
//selects the p element where the quiz questions go
var question = document.querySelector("#question")
// an array of objects that hold the multiple choice questions, options and answers
var quizQuestion = [{
    title: "Which of the following is NOT an Adobe Creative Cloud app?",
    a: "Photoshop",
    b: "Lightroom",
    c: "Darkroom",
    d: "Dreamweaver",
    correctAnswer: "Darkroom"
}, {
    title: "Which of the following is the widest aperture?",
    a: "f1.4",
    b: "f22",
    c: "f2",
    d: "None of the above",
    correctAnswer: "f1.4"
}, {
    title: "Which setting doesn’t affect exposure?",
    a: "ISO",
    b: "focal length",        
    c: "aperture",
    d: "shutter speed",
    correctAnswer: "focal length"
}, {
    title: "What does DSLR stand for?",
    a: "Direct Sunlight Reflection",
    b: "Digital Single Light Reflex",        
    c: "Digital Sunlight Refraction",
    d: "Digital Single Lens Reflex",
    correctAnswer: "Digital Single Lens Reflex"
}, {
    title: "Which shutter speed is the fastest?",
    a: "200",
    b: "1/1000",        
    c: "1/4",
    d: "1",
    correctAnswer: "1/1000"
}]
// start time of the quiz in seconds
var time = 60
var timer;
var index = 0;
// use the setInterval function to deduct one second from time every instance that time>0
// grabs the element with the id of 'timer' to add the time to the HTML in real time
function startTimer(){
    timer = setInterval(function(){
    if(time>0){
        time--;
        document.getElementById("timer").innerText = "Timer: " + time
    }
    }, 1000)
}
// currentQuestion takes the index of quizQuestion and inserts the value of the key 'title' into the HTML at the 'question' id
// the 'newButton' variables create a button element on the HTML and insert the value of the respective keys
function displayQuestion(){
    var currentQuestion = quizQuestion[index]
    document.querySelector("#question").innerText = currentQuestion.title;
    button.innerHTML = ""
    var newButtonA = document.createElement("button");
    newButtonA.textContent = currentQuestion.a;
    button.appendChild(newButtonA);
    var newButtonB = document.createElement("button");
    newButtonB.textContent = currentQuestion.b;
    button.appendChild(newButtonB);
    var newButtonC = document.createElement("button");
    newButtonC.textContent = currentQuestion.c;
    button.appendChild(newButtonC);
    var newButtonD = document.createElement("button");
    newButtonD.textContent = currentQuestion.d;
    button.appendChild(newButtonD);
}
// listens for a click event on the button element
button.addEventListener("click", function(event) {
    var currentQuestion = quizQuestion[index]
    // if the name of the element is 'button'
    if (event.target.nodeName === "BUTTON") {
        // if the innerText of the element is NOT the correct answer of the currentQuestion, deduct 10 seconds
        if (event.target.innerText !== currentQuestion.correctAnswer) {
        time -= 10
        } 
        //advance to the next question regardless
        index++;
        // if the index advances beyond the length of the quizQuestion array, the timer stops and the question and buttons disappear
        if (index>=quizQuestion.length) {
            clearInterval(timer);
            document.querySelector("#question").innerText = "";
            button.innerHTML = "";
            return saveScore();
        }
        displayQuestion();
    }
})
// listens for the start button to be clicked, removes it, starts the timer and runs the displayQuestion function
startButton.addEventListener("click", function(event) {
    event.target.remove();
    startTimer();
    displayQuestion();
})

// when the game ends or the time runs out, a prompt appears to enter your initals and save your score
function saveScore() {
    var initials = prompt("Enter your intials");
    var score = {
        initials,
        time
    }
    // local storage either gets existing scores and turns them into an object, or it starts a new array for scores
    var highScores = JSON.parse(localStorage.getItem("scores")) || []
    // we add the score to the end of the highScores array
    highScores.push(score)
    // we save the scores and turn them into strings to be put in the highscore local storage
    localStorage.setItem("scores", JSON.stringify(highScores))
    // switches to the highscore page
    window.location.assign("highscore.HTML")
}