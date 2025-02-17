document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.getElementById("burderBtn");
  const burgerMenu = document.getElementById("burgerMenu");
  const burgerClose = document.getElementById("burgerClse");

  // Открытие меню
  burgerBtn.addEventListener("click", function () {
    burgerMenu.classList.add("active");
    this.classList.add("open");
  });

  // Закрытие меню
  burgerClose.addEventListener("click", function () {
    burgerMenu.classList.remove("active");
    burgerBtn.classList.remove("open");
  });
});
