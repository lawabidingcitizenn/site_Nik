const toggleCircle = document.getElementById('toggleCircle');
const whiteCircle = document.getElementById('whiteCircle');

toggleCircle.addEventListener('click', function() {
    whiteCircle.classList.toggle('visible');
});