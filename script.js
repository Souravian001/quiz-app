const quizData = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "What is 20 + 5 + 5678 * 2?",
    options: ["11456", "411705", "15415", "112546"],
    answer: "11456"
  },
  {
    question: "Which planet is known as Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  }
];

let current = 0;
let score = 0;
let optionSelected = false;

const questionBox = document.getElementById("questionBox");
const optionsBox = document.getElementById("options");
const resultBox = document.getElementById("result");
const nextButton = document.querySelector("button");

function loadQuestion() {
  optionSelected = false;
  const data = quizData[current];
  questionBox.innerText = `Q${current + 1}: ${data.question}`;
  optionsBox.innerHTML = "";
  resultBox.innerHTML = "";

  data.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.classList.add("option");

    btn.onclick = () => {
      if (!optionSelected) {
        optionSelected = true;
        if (opt === data.answer) {
          btn.style.backgroundColor = "#4CAF50"; // green
          score++;
        } else {
          btn.style.backgroundColor = "#f44336"; // red
        }
        // Show correct answer
        [...optionsBox.children].forEach(child => {
          if (child.innerText === data.answer) {
            child.style.border = "2px solid #4CAF50";
          }
          child.disabled = true;
        });
      }
    };

    optionsBox.appendChild(btn);
  });
}

function nextQuestion() {
  if (!optionSelected && current < quizData.length) {
    alert("Please select an option before continuing.");
    return;
  }
  current++;
  if (current < quizData.length) {
    loadQuestion();
  } else {
    showResult();
    nextButton.style.display = "none"; // hide button after quiz ends
  }
}

function showResult() {
  questionBox.innerText = "🎉 Quiz Completed!";
  optionsBox.innerHTML = "";
  resultBox.innerHTML = `<h2>Your Score: ${score}/${quizData.length}</h2>`;
}

loadQuestion();
