function toggleFilterContainer(header) {
    const block = header.parentElement;
    const list = block.querySelectorAll('.filter-block');
    const isOpen = header.classList.contains('open');
    const listItem = block.querySelector('.filter-item_block');
    // Переключаем классы
    if (isOpen) {
        console.log("insinsible");
        list.forEach(element => {
            element.classList.add('invisible');
        });
        header.classList.remove('open');
        listItem.classList.add('invisible');
        return;
    }
    
    list.forEach(element => {
        element.classList.remove('invisible');
    });
    header.classList.add('open');
    listItem.classList.remove('invisible');
    console.log("open");   
}

// Закрытие при клике вне
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