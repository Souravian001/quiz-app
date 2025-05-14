const quizData = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "Which planet is known as Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  }
];

let current = 0;
let score = 0;

const questionBox = document.getElementById("questionBox");
const optionsBox = document.getElementById("options");
const resultBox = document.getElementById("result");

function loadQuestion() {
  const data = quizData[current];
  questionBox.innerText = data.question;
  optionsBox.innerHTML = "";
  data.options.forEach(opt => {
    const btn = document.createElement("div");
    btn.innerText = opt;
    btn.classList.add("option");
    btn.onclick = () => {
      if (opt === data.answer) {
        score++;
      }
      nextQuestion();
    };
    optionsBox.appendChild(btn);
  });
}

function nextQuestion() {
  current++;
  if (current < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionBox.innerText = "Quiz Completed!";
  optionsBox.innerHTML = "";
  resultBox.innerHTML = `<h2>Your Score: ${score}/${quizData.length}</h2>`;
}

loadQuestion();
