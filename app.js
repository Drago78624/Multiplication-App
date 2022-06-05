const scoreEl = document.getElementById("score");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const btn = document.getElementById("btn");
const userInput = document.getElementById("user-input");
const form = document.querySelector("form");

let score = 0;

function getNumbers() {
  let r1 = Math.floor(Math.random() * 10);
  let r2 = Math.floor(Math.random() * 10);

  n1.innerText = r1;
  n2.innerText = r2;
}

getNumbers();

const answerChecker = (e) => {
  e.preventDefault();
  if (userInput.value != "") {
    let inputAnswer = Number(userInput.value);
    let answer = parseInt(n1.innerText) * parseInt(n2.innerText);
    if (inputAnswer != answer && score != 0) {
      score--;
    } else if (inputAnswer == answer) {
      score++;
    }
    scoreEl.innerText = score;
    userInput.value = "";
    getNumbers();
  }
};

form.addEventListener("submit", answerChecker);
btn.addEventListener("click", answerChecker);
