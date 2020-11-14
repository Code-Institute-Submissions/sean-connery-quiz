// Get classes and ids and store them in variables by traversing the DOM.
const quote = document.getElementById("quote");
const movieTitles = Array.from(document.getElementsByClassName("movie-title-text"));

// Declare variables
let currentMovieTitle = {};
let acceptingAnswers = false;
let score = 0;
let movieTitleCounter = 0;
let availableMovietitles = [];
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
};
// Pull a random quote with movie titles from the quotes array and display them on the page.
getNewQuote = () => {
    if (availableQuotes.length === 0 || quoteCounter >= MAX_QUOTES) {
        return window.location.assign("/end.html");
    }

    quoteCounter++;
    const quoteIndex = Math.floor(Math.random() * availableQuotes.length);
    currentQuote = availableQuotes[quoteIndex];
    quote.innerText = `${"“"}${currentQuote.quote}${"”"}`;

    movieTitles.forEach(movieTitle => {
        const number = movieTitle.dataset["number"];
        movieTitle.innerText = currentQuote[`${"movieTitle"}${number}`];
    });

    // Withdraw the used quote from the array.
    availableQuotes.splice(quoteIndex, 1);

    // Make buttons clickable for the user.
    acceptingAnswers = true;
};

// Identifying the user's answer and displays a new set of quote and movie titles. 
movieTitles.forEach(movieTitle => {
    movieTitle.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedMovieTitle = e.target;
        const selectedAnswer = selectedMovieTitle.dataset["number"];

        getNewQuote();
    });
});