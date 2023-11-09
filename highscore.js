var highScores = JSON.parse(localStorage.getItem("scores")) || []
for(var i=0; i<highScores.length; i++) {
    var score = document.createElement("p");
    score.innerText = highScores[i].initials + " " + highScores[i].time;
    document.getElementById("scores").appendChild(score)
}