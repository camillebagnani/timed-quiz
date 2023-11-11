// returns the string of 'scores' as an object, or starts a new array if there are no saved scores
var highScores = JSON.parse(localStorage.getItem("scores")) || []
// as long as the index is less than the length of the highscores, add a new score withe the initals and time, at the current index
for(var i=0; i<highScores.length; i++) {
    var score = document.createElement("p");
    score.innerText = highScores[i].initials + " " + highScores[i].time;
    // add the score to the HTML
    document.getElementById("scores").appendChild(score)
}