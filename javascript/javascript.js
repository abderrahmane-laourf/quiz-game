import { questions } from './question.js'; // Make sure the path is correc

const answerOptions = document.querySelector(".answer-options");
const nextButton = document.querySelector(".next");
const next = document.querySelector("#next");
const questionStatus = document.querySelector(".conteur");
const correct_sound = document.querySelector("#correct-sound");
const incorrect_sound = document.querySelector("#incorrect-sound");
const timerdisplay = document.querySelector("#timer-duration");
const menu = document.getElementById('menu');
const questionPage = document.getElementById('quiz-container');
const resultPage = document.getElementById('result');
const try_again = document.querySelector('.try-again');
const win = document.querySelector('#win');
// const ah = document.querySelector('#ah');

const QUIZ_TIME_LIMIT = 15;
let currenttime = QUIZ_TIME_LIMIT;
let timeinterval = null;
let currentquestion = null;
let questionsIndexHistory = [];
let numberofquestion = 5;
let quizcategory = "javascript"; // Default category
let correctanswercount = 0;

const showresults = () => {
    win.play();
    menu.classList.add('hidden');
    questionPage.classList.add('hidden');
    resultPage.classList.remove('hidden');
    const resulttext = `you are ansewered <b>${correctanswercount}</b> of <b>${numberofquestion}</b> question corectly Great effor Mr`;
    document.querySelector("#result-commant").innerHTML = resulttext;
};

const startTimer = () => {
    currenttime = QUIZ_TIME_LIMIT; // Reset the time
    clearInterval(timeinterval); // Clear any existing timer
    timerdisplay.textContent = `${currenttime}s`; // Initialize timer display

    timeinterval = setInterval(() => {
        currenttime--;
        timerdisplay.textContent = `${currenttime}s`;

        if (currenttime <= 0) {
            clearInterval(timeinterval);
            console.log("Time's up!");
            renderquestion();
        }
    }, 1000);
};

document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        start: document.getElementById('start'),
        num: document.getElementsByClassName('num'),
        p1: document.getElementById('p1'),
        menu: document.getElementById('menu'),
        questionPage: document.getElementById('quiz-container'),
        resultPage: document.getElementById('result'),
        questionElement: document.getElementById('question'),
        answerButtons: document.getElementById('answer-buttons'),
    };

    // Get quiz category and number of questions from localStorage
    quizcategory = localStorage.getItem("quizCategory") || "javascript";
    numberofquestion = parseInt(localStorage.getItem("numberOfQuestions")) || 5;

    // Navigation entre les pages
    elements.p1.onclick = () => {
        elements.p1.classList.add('hidden');
        elements.menu.classList.remove('hidden');
        elements.questionPage.classList.add('hidden');
        elements.resultPage.classList.add('hidden');
    };

    elements.start.onclick = () => {
        console.log("Start button clicked");
        elements.menu.classList.add('hidden');
        elements.questionPage.classList.remove('hidden');
        elements.resultPage.classList.add('hidden');

        // Store selected category and number of questions in localStorage
        const selectedCategory = document.querySelector(".btn_language .question-option.active").id;
        const selectedNumberOfQuestions = parseInt(document.querySelector("#btn_numero .num.active").textContent);

        console.log("Selected Category:", selectedCategory);
        console.log("Selected Number of Questions:", selectedNumberOfQuestions);

        localStorage.setItem("quizCategory", selectedCategory);
        localStorage.setItem("numberOfQuestions", selectedNumberOfQuestions);

        // Start the timer and render the first question when the quiz starts
        startTimer();
        renderquestion();
    };

    const handleanswercorrect = () => {
        const correctoptions = answerOptions.querySelectorAll(".answer-option")[currentquestion.answerIndex];
        currenttime = QUIZ_TIME_LIMIT;
        clearInterval(timeinterval);
        correctoptions.classList.add("correct");
        const iconHTML = '<span class="material-symbols-rounded"><i class="fa-solid fa-check"></i></span>';
        correctoptions.insertAdjacentHTML("beforeend", iconHTML);
    };

    const getRandomquestion = () => {
        console.log("Getting random question...");

        if (questionsIndexHistory.length >= numberofquestion) {
            console.log("All questions answered. Showing results.");
            return showresults();
        }

        const questionCategory = questions.find(cat => cat.category.toLowerCase() === quizcategory.toLowerCase());
        console.log("Selected Category:", quizcategory);
        console.log("Available Categories:", questions.map(cat => cat.category));

        if (!questionCategory || !questionCategory.question) {
            console.error("Error: Category not found or no questions in category.", quizcategory);
            return;
        }

        const availableQuestions = questionCategory.question.filter((_, index) => !questionsIndexHistory.includes(index));

        if (availableQuestions.length === 0) {
            console.error("Error: No more questions available in this category.", quizcategory);
            return;
        }

        const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
        const originalIndex = questionCategory.question.indexOf(randomQuestion);
        questionsIndexHistory.push(originalIndex);
        console.log("Random Question:", randomQuestion);
        return randomQuestion;
    };

    const handleAnsawer = (option, indexanswer) => {
        const isCorrect = currentquestion.answerIndex === indexanswer;
        option.classList.add(isCorrect ? "correct" : "incorrect");
        !isCorrect ? handleanswercorrect() : correctanswercount++;
        isCorrect ? correct_sound.play() : incorrect_sound.play();
        const iconHTML = `<span class="material-symbols-rounded">${isCorrect ? '<i class="fa-solid fa-check"></i>' : '<i class="fa-solid fa-ban"></i>'}</span>`;
        option.insertAdjacentHTML("beforeend", iconHTML);
        answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");
        next.style.visibility = "visible";
    };

    const renderquestion = () => {
        console.log("Rendering question...");
        currentquestion = getRandomquestion();

        if (!currentquestion) {
            console.error("Error: No question to render.");
            return;
        }

        if (!answerOptions) {
            console.error("Error: answerOptions element not found.");
            return;
        }

        answerOptions.innerHTML = "";
        next.style.visibility = "hidden"; // Hide the next button initially
        document.querySelector('.question-text').textContent = currentquestion.question;
        questionStatus.textContent = `${questionsIndexHistory.length} of  ${numberofquestion}`;

        currentquestion.options.forEach((option, Index) => {
            const li = document.createElement("li");
            li.classList.add("answer-option");
            li.textContent = option;
            answerOptions.appendChild(li);
            li.addEventListener("click", () => handleAnsawer(li, Index));
        });
    };

    const handleButtonClick = (event) => {
        const button = event.target;
        const parentContainer = button.closest('.btn_language, #btn_numero');

        if (parentContainer) {
            const active = parentContainer.querySelector('.active');
            if (active) {
                active.classList.remove('active');
            }
            button.classList.add('active');

            if (parentContainer.classList.contains('btn_language')) {
                
                quizcategory = button.id; 
            } else {
                
                numberofquestion = parseInt(button.textContent, 10);
            }
        }
    };

    document.querySelectorAll('.btn_language button, #btn_numero .num').forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    nextButton.addEventListener("click", () => {
        // Reset and start the timer for the next question
        startTimer();
        // Call renderquestion() to move to the next question
        renderquestion();
    });

    const tryAgainButton = document.querySelector(".try_again");

    // Add an event listener to the button that triggers a page refresh
    tryAgainButton.addEventListener("click", () => {
        location.reload(); // This reloads the entire page
    });
}, false);
