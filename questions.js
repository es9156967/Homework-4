const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice_text"));


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCount = 0;
let availableQuestions = [];


let questions = [
    {
        question: "What is your favorite color?",
        choice1: "red",
        choice2: "blue",
        choice3: "gree",
        choice4: "yellow",
        answer: 1
    },
    {
        question: "What is your favorite band?",
        choice1: "red",
        choice2: "bbb",
        choice3: "gree",
        choice4: "yellow",
        answer: 2
    },
    {
        question: "What is your favorite car?",
        choice1: "red",
        choice2: "bbb",
        choice3: "subie",
        choice4: "yellow",
        answer: 3
    },
    {
        question: "What is your favorite job?",
        choice1: "red",
        choice2: "bbb",
        choice3: "subie",
        choice4: "support",
        answer: 4,
    }
];

//CONSTANTS//

const correct_bonus = 10;
const max_questions = 3;

beginGame = () => {
    questionCount = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions); 
    getNewQuestion();
};

getNewQuestion = () => {
    questionCount++
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
}

beginGame();
 

