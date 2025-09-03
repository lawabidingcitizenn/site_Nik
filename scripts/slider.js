document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.slides');
  const slideWidth = document.querySelector('.slide').offsetWidth + 40;
  const totalSlides = document.querySelectorAll('.slide').length;
  const visibleSlides = 3;
  const maxIndex = totalSlides - visibleSlides;
  const next = document.querySelector('.next_button');
  const prev = document.querySelector('.prev_button');
  let currentIndex = 0;
  console.log(`${slides} next: ${next.innerHTML} prev:${prev.innerHTML}`);

  function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    console.log(`${currentIndex} with updateSlider function`);
  
  }

  next.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  });

  prev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });
});