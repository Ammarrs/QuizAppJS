const questions = [
  {
    question: "Which is the largest animal in the world",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ] 
  },
  {
    question: "Which is the largest animal in the world",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ] 
  },
  {
    question: "Which is the smallest country in the world",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Shri Lanka", correct: false },
    ] 
  },
  {
    question: "Which is the smallest continent in the world",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Aractic", correct: false },
      { text: "Africa", correct: false },
    ] 
  },
  {
    question: "Which is the largest desert in the world",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antaractica", correct: true },
    ] 
  },
];

const questionElement = document.getElementById("question");
const ansButtons = document.getElementById("ansButtons");
const ansBtnList = document.getElementsByClassName("btn");
const nextButton = document.getElementById("next");

let currQuesIndex = 0;
let score = 0;

function startQuiz() {
  currQuesIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  let currQuestion = questions[currQuesIndex];
  let questionNo = currQuesIndex + 1;
  questionElement.innerHTML = `${questionNo}. ${currQuestion.question}`;

  // Video
  // currQuestion.answers.forEach(answer => {
  //   const button = document.createElement("button");
  //   button.innerHTML = answer.text;
  //   button.classList.add("btn");
  //   ansButtons.appendChild(button);
  // })

  // Me
  let i = 0;
  currQuestion.answers.forEach(answer => {
    ansBtnList[i++].innerHTML = answer.text;
  })
}

startQuiz();

