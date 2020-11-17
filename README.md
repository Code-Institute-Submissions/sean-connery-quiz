# Sean Connery Movie Quotes Quiz

![Multiple Device Mockup Generator](assets/images/Mockup.png)


**A quiz game created as a tribute to Sir Thomas Sean Connery for his great perfomances on the big screen.
The goal is to connect a quote, made by a Sean Connery movie character, to the corresponding film title from where the quote was taken.
Points are given for each correct answer.**

## UX

*   To all Sean connery fans, as well as others, this quiz was made to help us remember the brilliant actor that he was,
    and, for just a moment...in our minds, recall that pernounced accent with his so characteristic sh-sounds.
    And, of courshe (sorry, just couldn't resist), to enjoy a the pleasure of a simple (yet sometimes difficult) quiz game.

*   The expected user would be interested in movies in general and of Sean Connery in particular.

*   By trying to select the corresponding film title to the displayed character quote, 
    the user will, in his/her mind, get to recall and experience that particular sequence of the picture,
    and therefor inhence their memory of the late star.

*   The user would want clear instructions of what to do and how to navigate in the application.
    Therefore, a short but distinct description of what the quiz is about will be displayed on the landing page.
    The clearly defined buttons will then guide the user to achieve his/her goal.



*   If there is a delay when the Game Board is being loaded, the user would want to know what to expect.
    An animated "loader" is displayed to let the user know that the page is loading.

*   When the user has selected a film title, she/he would expect a confirmation of wether or not the selection was correct.
    The color of film title buttons will respond to the selection.

*   The user would want to know the progress of the quiz and how many quotes there are left to be displayed. 
    A quote counter is displayed for that purpose at the top of the page.

*   The user would want to know when the quiz is over.
    When the last quote has been used the user is directed to the End Page.

*   The user would want to be able to see the amount of correct answers.
    The progress of the score is displayed at the top of the page.

*   At the end of the quiz the user would want to know the total score.
    The total score is displayed on the End Page when the final quote has been answered.

*   Having finished the quiz, the user would want to be given the options of exiting the quiz or try again.
    The user can go back to the Landing Page by clicking the Exit Cinema button, or click the Restart Quiz button to try the quiz again. 

*   The user would want to feel the connection to the cinema and the motion pictures.
    A red cinema screen curtain and content in gold colour, all set on a dark background will provide a cinematic effect.

*   The aim is toward a neat and cinematic design, with the focus upon the quiz game and the character's quotes.

*   Wirefames can be viewed [here](assets/wireframes/sean-connery-movie-quote-quiz.pdf)

## Features

*   Landing Page
    *   A button with the text Enter Cinema.
        
    *   On non touch pad screens the button will repond to mouse hover with a glowing effect and expanding slightly.
        
    *   On touch pad screens the button will repond to a click action with a glowing effect and expanding slightly.
    
    *   Clicking the button the user will be directed to the Game Board and presented with a quote from a motion picture
        in which Sean Connery had an acting roll.

*   Game Board

    *   Displaying a "loader" whilest the page is loading.

    *   At the top left side of the page there is a counter which will show the amount of quotes that has been used out of the total amounts of quotes.

    *   At the top right side of the page the current score is displayed. 

    *   A Sean Connery character quote is presented upon a cinema screen curtain. The quotes will automatically update when the user has selected an answer.
    
    *   Four buttons with film titles.
        
    *   On non touch pad screens the button will repond to mouse hover with a glowing effect and expanding slightly.
        
    *   On touch pad screens the button will repond to a click action with a glowing effect and expanding slightly.
        
    *   The clicked button will "glow" green for correct answer or red for incorrect answer til the next quote is displayed.

    *   When the user has reached the final quote of the quiz she/he will be directed to the End Page

*   End Page

    *   On top of the page the final score is displayed.

    *   The text "The End" is displaed on the cinema curtain.

    *   A button with the text Restart Quiz.
        
    *   On non touch pad screens the button will repond to mouse hover with a glowing effect and expanding slightly.
        
    *   On touch pad screens the button will repond to a click action with a glowing effect and expanding slightly.

    *   Clicking the Restart Quiz button will take the user back to the Game Board.

    *   A button with the text Enter Cinema.
        
    *   On non touch pad screens the button will repond to mouse hover with a glowing effect and expanding slightly.
        
    *   On touch pad screens the button will repond to a click action with a glowing effect and expanding slightly.
    
    *   Clicking the Exit Cinema button button will take the user back to the Landing Page.

### Features Left to Implement

*   Take the quotes from the previously used quotes out of the restarted quiz.

## Technologies Used
    *In this section, you should mention all of the languages, frameworks, libraries,*
    *and any other tools that you have used to construct this project. For each, provide its name,*
    *a link to its official site and a short sentence of why it was used.*

## Testing

*   Markup Validation Service [(link)](https://validator.w3.org/)
    *   Choose Validate by Direct Input.
    *   Copy Paste the HTML into the validator.
    *   index.HTML Test result:
        *  No Warnings
    *   quiz.HTML Test result:
        *   Warning: Empty heading.
        *   From line 31, column 29; to line 31, column 77
        *   Heading text will be added with javaScript. 
    *   end.html Test result:
        *   Warning: Empty heading.
        *   From line 23, column 25; to line 23, column 66
        *   Heading text will be added with javaScript.

*   CSS Validation Service [(link)](https://jigsaw.w3.org/css-validator/)
    *   Choose By direct input.
    *   Copy Paste the CSS into the validator.
    *   index.css Test result:
        *  No Error Found
    *   quiz.css Test result:
        *  No Error Found    
    *   end.css Test result:
        *  No Error Found

*   jshint [(link)](https://jshint.com/) JavaScript Code Test.
    
    *   Copy the JavaScript cod and paste it into the js hint website.
    *   The result will be displayed in the column nex to your code.
    *   There should be no errors and severe warnings.
    *   Test result: 36 Warnings:
        *   15  'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
        *   6 	'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
        *   10  'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
        *   1   'spread operator' is only available in ES6 (use 'esversion: 6').
        *   2   'template literal syntax' is only available in ES6 (use 'esversion: 6').
        *   2   ['number'] is better written in dot notation.
    *   Three undefined variables:
        *   2 	startQuiz
        *   3   getNewQuote
        *   2   incrementScore
    *   Test result after adding ```/*jshint esversion: 6*/``` to the files:
        *   2   ['number'] is better written in dot notation.
*   Lighthouse
    *   Right click on the webpage and hit inspect. Click >> button on top bar. Select Lighthouse. Click the Generate report button.
    *   Greens icons equal good result. The higher percentage the better.
    *   Test result:


![Lighthouse Test Result](assets/images/Lighthouse.png)

*   Am I responsive [(link)](http://ami.responsivedesign.is/) Multiple Device Mockup Generator

*   Autoprefixer CSS Online [(link)](https://autoprefixer.github.io/)
    *   Copy the CSS code and paste into the Autoprefixer, then click Apply button.
    *   Copy the CSS code with the added vendor prefixes in the right column and paste it back into the CSS file.

## Deployment

*   To make my website accessible to the public I deployed it on Github .
    * I did so by:
        *   Logging in to Github
        *   Going to my Milestone 2 Project Sean-Connery-Quiz on my repository page
        *   Go to settings
        *   Scroll down to Github Pages
        *   click on source
        *   select none
        *   select main (previously master) branch, Root
        *   click Save
        *   Wait for the page to refresh
        *   scroll down to Github Pages once more
        *   Find Site URL and copy it.

## Credits

*   Youtube

    *   Build a Quiz App with HTML, CSS, and JavaScript by James Q Quick
    https://www.youtube.com/watch?v=u98ROZjBWy8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=1&ab_channel=JamesQQuick

*   Codepen

    *    https://codepen.io/lauraedw/pen/RPOoJy

### Content

    *The text for section Y was copied from the Wikipedia article Z*

### Media

    *The photos used in this site were obtained from ...*

## Acknowledgements

    *I received inspiration for this project from X*