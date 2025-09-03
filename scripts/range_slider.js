const minInput = document.getElementById('filter_price-min');
const maxInput = document.getElementById('filter_price-max');
const track = document.getElementById('filter_price-track');
const range = document.getElementById('filter_price-range');
const minHandle = document.getElementById('filter_price-min-handle');
const maxHandle = document.getElementById('filter_price-max-handle');

const minValue = 5522;
const maxValue = 500000;

let isMinDragging = false;
let isMaxDragging = false;

function valueToPercent(value) {
  return ((value - minValue) / (maxValue - minValue)) * 100;
}

function xToValue(x) {
  const rect = track.getBoundingClientRect();
  const percent = (x - rect.left) / rect.width;
  let value = minValue + percent * (maxValue - minValue);
  value = Math.round(value / 100) * 100;
  return Math.min(Math.max(value, minValue), maxValue);
}

function updateHandles() {
  const minVal = parseInt(minInput.value) || minValue;
  const maxVal = parseInt(maxInput.value) || maxValue;

  if (minVal >= maxVal) {
    if (minVal >= maxValue) {
      minInput.value = maxVal - 100 < minValue ? minValue : maxVal - 100;
    } else {
      maxInput.value = minVal + 100 > maxValue ? maxValue : minVal + 100;
    }
    return updateHandles();
  }

  const minPercent = valueToPercent(minVal);
  const maxPercent = valueToPercent(maxVal);

  minHandle.style.left = minPercent + '%';
  maxHandle.style.left = maxPercent + '%';
  range.style.left = minPercent + '%';
  range.style.width = (maxPercent - minPercent) + '%';
}

document.addEventListener('mousemove', (e) => {
  if (isMinDragging) {
    const value = xToValue(e.clientX);
    const maxVal = parseInt(maxInput.value);
    if (value < maxVal) {
      minInput.value = value;
      updateHandles();
    }
  }
  if (isMaxDragging) {
    const value = xToValue(e.clientX);
    const minVal = parseInt(minInput.value);
    if (value > minVal) {
      maxInput.value = value;
      updateHandles();
    }
  }
});

document.addEventListener('mouseup', () => {
  isMinDragging = false;
  isMaxDragging = false;
});

minHandle.addEventListener('mousedown', (e) => {
  e.preventDefault();
  isMinDragging = true;
});

maxHandle.addEventListener('mousedown', (e) => {
  e.preventDefault();
  isMaxDragging = true;
});

track.addEventListener('click', (e) => {
  if (isMinDragging || isMaxDragging) return;

  const value = xToValue(e.clientX);
  const minVal = parseInt(minInput.value);
  const maxVal = parseInt(maxInput.value);

  if (Math.abs(value - minVal) <= Math.abs(value - maxVal)) {
    if (value < maxVal) minInput.value = value;
  } else {
    if (value > minVal) maxInput.value = value;
  }
  updateHandles();
});

minInput.addEventListener('input', updateHandles);
maxInput.addEventListener('input', updateHandles);

// Инициализация
updateHandles();