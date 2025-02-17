document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const password2Input = document.getElementById("password2");
  const submitButton = document.querySelector(".base-button");
  const lengthWarning = document.getElementById("length-warning");
  const numberWarning = document.getElementById("number-warning");
  const uppercaseWarning = document.getElementById("uppercase-warning");
  const similarityWarning = document.getElementById("similar");
  const markPassGreen = document.getElementById("markPass-green");
  const markPassRed = document.getElementById("markPass-red");
  const markPass2Green = document.getElementById("markPass2-green");
  const markPass2Red = document.getElementById("markPass2-red");

  let isPasswordValid = false;
  let isPasswordMatch = false;

  // Функция проверки условий для основного пароля
  function validatePassword() {
    const password = passwordInput.value.trim();
    let isValid = true;

    // Проверка длины
    if (password.length >= 8) {
      lengthWarning.style.display = "none";
    } else {
      lengthWarning.style.display = "block";
      isValid = false;
    }

    // Проверка наличия цифры
    if (/\d/.test(password)) {
      numberWarning.style.display = "none";
    } else {
      numberWarning.style.display = "block";
      isValid = false;
    }

    // Проверка наличия заглавной буквы
    if (/[A-ZА-Я]/.test(password)) {
      uppercaseWarning.style.display = "none";
    } else {
      uppercaseWarning.style.display = "block";
      isValid = false;
    }

    // Отображение маркера валидации пароля
    if (isValid) {
      markPassGreen.style.display = "flex";
      markPassRed.style.display = "none";
      isPasswordValid = true;
    } else {
      markPassGreen.style.display = "none";
      markPassRed.style.display = "flex";
      isPasswordValid = false;
    }

    // Обновляем состояние кнопки отправки
    updateSubmitButton();
  }

  // Функция проверки совпадения паролей
  function validatePasswordMatch() {
    const password = passwordInput.value.trim();
    const confirmPassword = password2Input.value.trim();

    // Проверка совпадения паролей
    if (confirmPassword === "") {
      similarityWarning.style.display = "none";
      markPass2Green.style.display = "none";
      markPass2Red.style.display = "none";
      isPasswordMatch = false;
    } else if (password === confirmPassword) {
      similarityWarning.style.display = "none";
      markPass2Green.style.display = "flex";
      markPass2Red.style.display = "none";
      isPasswordMatch = true;
    } else {
      similarityWarning.style.display = "block";
      markPass2Green.style.display = "none";
      markPass2Red.style.display = "flex";
      isPasswordMatch = false;
    }

    // Обновляем состояние кнопки отправки
    updateSubmitButton();
  }

  // Функция для обновления состояния кнопки отправки
  function updateSubmitButton() {
    const isAnyFieldFilled = passwordInput.value.trim().length > 0 || password2Input.value.trim().length > 0;
    if (isAnyFieldFilled && isPasswordValid && isPasswordMatch) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

  // Добавляем обработчики событий
  passwordInput.addEventListener("input", function () {
    validatePassword();
    validatePasswordMatch(); // Чтобы проверка совпадения обновлялась при изменении пароля
  });

  password2Input.addEventListener("input", validatePasswordMatch);

  // Инициализируем кнопку как недоступную
  submitButton.disabled = true;
});
