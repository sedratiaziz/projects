


Quizaria!
A Science, Tech and Geography Quiz Game!




![Game Screenshot](./assets/img/screenshot.png)

game link: [Quizaria!](https://sedratiaziz.github.io/quiz-game/)




User stories:
- The user is greeted with a welcome page, offering three categories: Geography, Tech or Science.
- The user chooses one of the categories, and then chooses one of three difficulties: Easy, Medium or Hard.
- The user is then offered 10 questions, they must get a score of 5/10 or greater in order to win, if they score less, they lose.
- A sound effect is played if the choice selected is correct or wrong. and when the questions render.
- After the user completes the questions, he is then redirected to stats.html page. There, the user can see: score out of 10, a win/lose message, and their points. Also, a home button is available to go back to the main page.

Pseudocode:
- An event listener 'handlePlayerChoice()' is attached to every choice element.
- inside the handlePlayerChoice(), checkCorrectChoice(event) and updateQuestions() are present.
- when the user clicks a choice element, the checkCorrectChoice functions checks if the user's choice is correct AND the difficulty through the current url.
- if the choice is correct, a sound effect will be played, and the score will increment according to the difficulty (easy +1, medium +3. hard +5), else a different sound effect will be played and the score wont be affected.
- Next, updateQuestions() will be called, and a currentQuestionIndex variable is set, and if the number of questions is less than the currentQuestionIndex, it will return, else, the questions and choices are updated.
- Sound files are handled using try-catch, in case the sound failed to play for any reason.

Attributions:
[Bootstrap](https://getbootstrap.com/)
[SweetAlert](https://sweetalert.js.org/)

Technologies used:
HTML5, CSS3, JavaScript, Bootstrap, SweetAlert

Planned Future Enhancements:
A future update may contain new questions and a refreshed overall design.
