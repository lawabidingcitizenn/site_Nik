function toggleFilterFirst(header) {
    const block = header.parentElement;
    const list = block.querySelectorAll('.filter-block');
    const isOpen = header.classList.contains('open');
    // const list_second = list.querySelector('.filter-list');

    // Переключаем классы
    if (isOpen) {
        list.forEach(element => {
            element.classList.add('invisible');
        });

        header.classList.remove('open');
        return;
    }
    
    list.forEach(element => {
      element.classList.remove('invisible');
    });

    // list_second.forEach(element=>{
    //   element.classList.add('open');
    // })
    header.classList.add('open');
    console.log("open");   
}