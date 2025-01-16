// filter active
let filterItem = document.querySelectorAll('.filter__item');

filterItem.forEach(block => {
    block.addEventListener('click', () => {
        if (block.classList.contains('active')) {
            block.classList.remove('active');
        } else {
            filterItem.forEach(item => item.classList.remove('active'));
            block.classList.add('active');
        }
    });
});