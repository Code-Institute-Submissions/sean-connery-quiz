// Get classes and ids and store them in variables by traversing the DOM.
const quote = document.getElementById("quote");
const movieTitles = Array.from(document.getElementsByClassName("movie-title-text"));
const quoteCounterText = document.getElementById("quoteCounter");
const scoreText = document.getElementById("score");
const loader = document.getElementById("loader");
const quiz = document.getElementById("quiz");

// Declare variables
let currentQuote = {};
let acceptingAnswers = false;
let score = 0;
let quoteCounter = 0;
let availableQuotes = [];
let quotes = [];

// Pull the Quotes and the Movie Titles from the local file.
fetch("assets/script/quotes.json")
    .then((res) => {
        return res.json();
    })
    .then((loadedQuotes) => {
        quotes = loadedQuotes;
        startQuiz();
    })

 // http error handling.   
    .catch(err => alert(err));

// Constants
const CORRECT_SCORE = 1;
const MAX_QUOTES = 5;

// Quiz start set-up 
startQuiz = () => {
    quoteCounter = 0;
    score = 0;
    availableQuotes = [...quotes];
    getNewQuote();
    quiz.classList.remove("invisible");
    loader.classList.add("invisible");
};

// Pull a random quote with movie titles from the quotes array and display them on the page.
// Push total score to local storage.
getNewQuote = () => {
    if (availableQuotes.length === 0 || quoteCounter >= MAX_QUOTES) {
        localStorage.setItem("mostRecentScore", score);

        return window.location.assign("/end.html");
    }

    quoteCounter++;
    quoteCounterText.innerText = `${quoteCounter}/${MAX_QUOTES}`;

    const quoteIndex = Math.floor(Math.random() * availableQuotes.length);
    currentQuote = availableQuotes[quoteIndex];
    quote.innerText = `${"“"}${currentQuote.quote}${"”"}`;

    movieTitles.forEach((movieTitle) => {
        const number = movieTitle.dataset["number"];
        movieTitle.innerText = currentQuote["movieTitle" + number];
    });

    // Withdraw the used quote from the array.
    availableQuotes.splice(quoteIndex, 1);

    // Make buttons clickable for the user.
    acceptingAnswers = true;
};

// Identify the user's selected answer. 
movieTitles.forEach((movieTitle) => {
    movieTitle.addEventListener("click", (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedMovieTitle = e.target;
        const selectedAnswer = selectedMovieTitle.dataset["number"];
// Apply the corresponding style class to the selected answer.
        const classToApply =
            selectedAnswer == currentQuote.correctAnswer ? "correct" : "incorrect";

// Increment the score at correct answer.
        if (classToApply === "correct") {
            incrementScore(CORRECT_SCORE);
        }  

// Set a green or red colour to the selected button.        
        selectedMovieTitle.classList.add(classToApply);

// Set the display duration of button colour. Displays a new set of quote and movie titles.
        setTimeout(() => {        
            selectedMovieTitle.classList.remove(classToApply);
            getNewQuote();
        }, 1200);
    });
});

// Update the score.
    incrementScore =  num => {
        score += num;
        scoreText.innerText = score;
    };
