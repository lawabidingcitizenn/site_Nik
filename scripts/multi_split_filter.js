function toggleFilterList(header, e) {
  e.stopPropagation();
  const block = header.parentElement;
  const list = block.querySelector('.filter-list');
  const isOpen = list.classList.contains('open');

  // Переключаем классы
  if (isOpen) {
    list.classList.remove('open');
    header.classList.remove('open');
  } else {
    list.classList.add('open');
    header.classList.add('open');
  }
}

// // Закрытие при клике вне
// window.addEventListener('click', function (event) {
//   document.querySelectorAll('.filter-block').forEach(block => {
//     const header = block.querySelector('.filter-header');
//     const list = block.querySelector('.filter-list');
//     const isOpen = list.classList.contains('open');

//     if (!block.contains(event.target) && isOpen) {
//       list.classList.remove('open');
//       header.classList.remove('open');
//     }
//   });
// });



