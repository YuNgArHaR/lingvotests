const startButton = document.getElementById("start-button");
const testContainer = document.getElementById("test-container");
const timerDisplay = document.getElementById("timer");
const submitButton = document.getElementById("submit-button");
const resultInput = document.getElementById("result");
const resultContainer = document.getElementById("result-container");
const intro = document.getElementById("intro");

let timerInterval;
let timeLeft = 600;
let testStarted = false;

startButton.addEventListener("click", startTest);
submitButton.addEventListener("click", submitTest);

function startTest() {
  testStarted = true;
  startButton.style.display = "none";
  testContainer.style.display = "block";
  resultContainer.style.display = "none";
  intro.style.display = "none";
  startTimer();
}

function startTimer() {
  updateTimerDisplay(timeLeft);
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      submitTest();
    }
  }, 1000);
}

function updateTimerDisplay(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  // Форматируем минуты и секунды так, чтобы всегда было два символа (например, 02:09)
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  timerDisplay.textContent = `Оставшееся время: ${formattedTime}`;
}

function submitTest() {
  if (!testStarted) return; // Блокируем кнопку, если тест не начат

  clearInterval(timerInterval);
  testContainer.style.display = "none";
  timerDisplay.style.display = "none";

  let score = 0;
  const answers = {
    q1: "went",
    q2: "She doesn't like coffee.",
    q3: "Joyful",
    q4: "I am not",
    q5: "in",
    q6: "He can speak English.",
    q7: "aren't you?",
    q8: "children",
    q9: "since",
    q10: "give up",
  };

  // Check answers
  for (const question in answers) {
    const selectedOption = document.querySelector(
      `input[name="${question}"]:checked`
    );
    if (selectedOption && selectedOption.value === answers[question]) {
      score++;
    }
  }

  resultInput.value = `${score} / ${Object.keys(answers).length}`;
  resultContainer.style.display = "block";

  // Перезагрузка через 5 секунд
  setTimeout(() => {
    location.reload();
  }, 5000);
}
