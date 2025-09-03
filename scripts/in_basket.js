const container = document.querySelectorAll('.filter_in_basket');


container.forEach((button) => {

    const minusBtn = button.querySelector('.filter_in_basket_counter-btn_minus');
    const plusBtn = button.querySelector('.filter_in_basket_counter-btn_plus');
    const counter = button.querySelector('.filter_in_basket_counter');

    let count = Number(button.dataset.count);
    
    button.addEventListener('click', function(e) {
        if (e.target.closest('.filter_in_basket_counter-btn'))  return; 
        if (count === 0) {
            count = 1;
            counter.textContent = count;
            button.classList.add('active');
            container.classList.add('active');
        }
    });

    plusBtn.addEventListener('click', () => {
        count++;
        counter.textContent = count;
    });

    minusBtn.addEventListener('click', () => {
        count--;
        if (count <= 0) {
            count = 0;
            button.classList.remove('active');
        } else {
            counter.textContent = count;
        }
    });
});