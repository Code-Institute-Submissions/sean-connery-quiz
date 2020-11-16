// Get id "total-score from the DOM"
const totalScore = document.getElementById("total-score");

// Get the score from local storage and store it in a variable.
const mostRecentScore = localStorage.getItem("mostRecentScore");

// Display the total score on the end page.
totalScore.innerText = mostRecentScore;