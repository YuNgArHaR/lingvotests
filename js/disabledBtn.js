document.addEventListener("DOMContentLoaded", function () {
  // Находим все формы на странице
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    const submitButton = form.querySelector(".base-button");

    // Изначально делаем кнопку неактивной
    if (submitButton) {
      submitButton.disabled = true;
    }

    // Настроим маску для поля телефона (если оно есть)
    var phoneInput = form.querySelector("#phone");
    if (phoneInput) {
      var phoneMask = IMask(phoneInput, {
        mask: "+{7} (000) 000-00-00", // Маска для телефона
      });
    }

    // Массив возможных кодов операторов для стран СНГ (пример)
    const operatorCodes = [
      "701", "702", "703", "705", "707", "708", "709", "710", "711", // Пример для Казахстана
      "911", "912", "913", "914", "915", "916", "917", "918", "919", // Пример для России
      "380", "381", "382", "383", "384", "385", "386", "387", "388", // Пример для Украины
      // Добавьте другие коды для других операторов СНГ
    ];

    // Функция для проверки номера телефона
    function validatePhoneNumber() {
      if (!phoneInput) return true; // Если нет поля телефона, пропускаем проверку

      const phoneValue = phoneInput.value;

      // Если поле телефона не заполнено, скрываем маркеры
      if (phoneValue.length === 0) {
        document.getElementById("markPhone-green").style.display = "none";
        document.getElementById("markPhone-red").style.display = "none";
        return false; // Возвращаем false, если телефон не заполнен
      }

      // Удаляем все символы, кроме цифр
      const cleanPhoneValue = phoneValue.replace(/\D/g, '');

      // Если номер телефона не соответствует длине +7 (XXX) XXX-XX-XX, вернем false
      if (cleanPhoneValue.length !== 11) {
        document.getElementById("markPhone-green").style.display = "none";
        document.getElementById("markPhone-red").style.display = "flex";
        return false;
      }

      // Получаем код оператора из телефона (первые 3 цифры)
      const phonePrefix = cleanPhoneValue.slice(1, 4); // Извлекаем 3 цифры после "+7"

      // Проверяем, существует ли такой код в списке операторов
      if (operatorCodes.includes(phonePrefix)) {
        document.getElementById("markPhone-green").style.display = "flex";
        document.getElementById("markPhone-red").style.display = "none";
        return true; // Возвращаем true, если номер действителен
      } else {
        document.getElementById("markPhone-green").style.display = "none";
        document.getElementById("markPhone-red").style.display = "flex";
        return false; // Возвращаем false, если номер не действителен
      }
    }

    // Функция проверки формы
    function validateForm() {
      let isValid = true;

      // Проверяем все обязательные поля input и textarea
      const requiredFields = form.querySelectorAll(
        "input[required], textarea[required]"
      );

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false;
        }
      });

      // Проверяем номер телефона, если он есть
      const isPhoneValid = validatePhoneNumber();

      // Если номер телефона не валиден, форма не может быть отправлена
      if (!isPhoneValid) {
        isValid = false;
      }

      // Если все поля заполнены, активируем кнопку, иначе отключаем
      if (submitButton) {
        submitButton.disabled = !isValid;
      }
    }

    // Добавляем обработчики событий ко всем инпутам и текстовым полям формы
    const requiredFields = form.querySelectorAll(
      "input[required], textarea[required]"
    );

    requiredFields.forEach((field) => {
      field.addEventListener("input", validateForm);
    });

    // Также добавляем обработчик на поле телефона для проверки длины (если оно существует)
    if (phoneInput) {
      phoneInput.addEventListener("input", validateForm);
      phoneInput.addEventListener("input", validatePhoneNumber);
    }

    // Инициализируем проверку при загрузке страницы
    validateForm();
  });
});
