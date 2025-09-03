document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.slider');
  const slideWidth = document.querySelector('.maintenance_reasons_item').offsetWidth + 40;
  const totalSlides = document.querySelectorAll('.maintenance_reasons_item').length;
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