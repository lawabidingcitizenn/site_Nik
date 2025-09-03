document.addEventListener('DOMContentLoaded', function() {
    const sortFilter = document.getElementById('sortFilter');
    const sortDropdown = document.getElementById('sortDropdown');
    const sortValue = document.getElementById('sortValue');
    const sortArrow = document.getElementById('sortArrow');
    const sortOptions = document.querySelectorAll('.sort-option');

    sortFilter.addEventListener('click', function(e) {
        sortDropdown.classList.toggle('show');
        sortArrow.classList.toggle('rotated');
    });

    sortOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            
            sortOptions.forEach(opt => opt.classList.remove('active'));
            
            this.classList.add('active');
            
            sortValue.textContent = this.getAttribute('data-value');
            
            sortDropdown.classList.remove('show');
            sortArrow.classList.remove('rotated');
        });
    });

    document.addEventListener('click', function(e) {
        if (!sortFilter.contains(e.target)) {
            sortDropdown.classList.remove('show');
            sortArrow.classList.remove('rotated');
        }
    });
});