// Создаем наблюдатель
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Добавляем класс .visible, когда блок становится видимым на 25%
        entry.target.classList.add("visible");
        // Можно прекратить наблюдение за этим элементом, если не нужно отслеживать его дальше
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.4, // Блок должен быть виден на 25%
  }
);

// Получаем все блоки
const blocks = document.querySelectorAll(".block");

// Начинаем наблюдение за каждым блоком
blocks.forEach((block) => {
  observer.observe(block);
});
