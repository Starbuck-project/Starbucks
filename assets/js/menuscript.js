document.addEventListener('DOMContentLoaded', function() {
    const menuCategories = document.querySelectorAll('.menu-category');
    const filterButtons = document.querySelectorAll('.filter-button');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            filterMenu(category);
        });
    });

    function filterMenu(category) {
        menuCategories.forEach(menuCategory => {
            if (category === 'all' || menuCategory.classList.contains(category)) {
                menuCategory.style.display = 'block';
            } else {
                menuCategory.style.display = 'none';
            }
        });
    }
});