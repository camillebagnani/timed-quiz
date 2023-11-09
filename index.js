var button = document.querySelector(".multiple-choice");
var startButton = document.querySelector("#start-button");
var question = document.querySelector("#question")

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
var time = 60
var timer;
var index = 0;

function startTimer(){
    timer = setInterval(function(){
    if(time>0){
        time--;
        document.getElementById("timer").innerText = "Timer: " + time
    }
    }, 1000)
}
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
button.addEventListener("click", function(event) {
    var currentQuestion = quizQuestion[index]
    if (event.target.nodeName === "BUTTON") {
        if (event.target.innerText !== currentQuestion.correctAnswer) {
            //deduct time here
        time -= 10
        } 
        index++;
        if (index>=quizQuestion.length) {
            clearInterval(timer);
            document.querySelector("#question").innerText = "";
            button.innerHTML = "";
            return saveScore();
        }
        displayQuestion();
    }
})
startButton.addEventListener("click", function(event) {
    event.target.remove();
    startTimer();
    displayQuestion();
})

function saveScore() {
    var initials = prompt("Enter your intials");
    var score = {
        initials,
        time
    }
    var highScores = JSON.parse(localStorage.getItem("scores")) || []
    highScores.push(score)
    localStorage.setItem("scores", JSON.stringify(highScores))
    window.location.replace("highscore.HTML")
}

function nextQuestion() {
   
    if (question.textContent === question) {
        question.textContent = quizQuestion[0].title;
    } else if (question.textContent === quizQuestion[0].title) {
        question.textContent = quizQuestion[1].title;
    } else if (question.textContent === quizQuestion[1].title) {
        question.textContent = quizQuestion[2].title;
    }
}