document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.slides');
  const slideWidth = document.querySelector('.slide_conditioners').offsetWidth + 40;
  const totalSlides = document.querySelectorAll('.slide_conditioners').length;
  const visibleSlides = 3;
  const maxIndex = totalSlides - visibleSlides;

  let currentIndex = 0;

  function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  document.getElementById('next').addEventListener('click', () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  });

  document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });
});