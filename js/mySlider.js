document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector(".slider__wrapper");
  const slides = document.querySelectorAll(".slider__card");
  const prevBtn = document.querySelector(".slider__btn-prev");
  const nextBtn = document.querySelector(".slider__btn-next");
  let index = 0;
  const visibleSlides = 4;
  const slideWidth = 300;

  function updateSlider() {
    sliderWrapper.style.transform = `translateX(${-index * slideWidth}px)`;
  }

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
    }
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    if (index < slides.length - visibleSlides) {
      index++;
    }
    updateSlider();
  });
});
