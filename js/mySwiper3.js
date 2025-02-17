var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    init: function (swiper) {
      // Добавляем анимацию к первому слайду
      var firstSlide = swiper.slides[0];
      firstSlide.classList.add("animate-slide");
    },
    slideChange: function (swiper) {
      // Удаляем анимацию при смене слайда
      var firstSlide = swiper.slides[0];
      if (firstSlide && firstSlide.classList.contains("animate-slide")) {
        firstSlide.classList.remove("animate-slide");
      }
    },
  },
});
