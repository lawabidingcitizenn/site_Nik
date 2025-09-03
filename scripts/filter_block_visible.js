function hideCardsBeyondSecondRow() {
    const container = document.getElementById('filter_right_block_elementbox');
    const cards = Array.from(container.children);
    if (cards.length === 0) return;

    const containerRect = container.getBoundingClientRect();
    // console.log(containerRect);
    const cardRect = cards[0].getBoundingClientRect();
    // console.log(cardRect);
    const gap = parseFloat(getComputedStyle(container).gap) || 16; 
    // console.log(gap);
    const cardWidthWithGap = cardRect.width + 16; //было gap, заменил на 16, будем пробовать если что потом снесем к ебеням :)
    // console.log(cardWidthWithGap);
    const columns = Math.floor(containerRect.width / cardWidthWithGap) || 1;
    // console.log(columns);
    cards.forEach((card, index) => {
        const row = Math.floor(index / columns) + 1;

        if (row >= 4) {
        card.classList.add('hidden');
        } else {
        card.classList.remove('hidden');
        }
    });
}

window.addEventListener('load', hideCardsBeyondSecondRow);
window.addEventListener('resize', hideCardsBeyondSecondRow);