document.querySelectorAll('.filter_element_hoverbox_bottom_itembox').forEach(block => {
  block.addEventListener('click', (e) => {
    const item = e.target;
    if (!item.classList.contains('filter_element_hoverbox_bottom_item')) return;

    block.querySelectorAll('.filter_element_hoverbox_bottom_item').forEach(el => {
      el.classList.remove('active');
    });

    item.classList.add('active');
  });
});