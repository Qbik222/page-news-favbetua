(function () {
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

    const newsContainer = document.querySelector('.news');
    const newsItems = newsContainer.querySelectorAll('.news__item');
    const maxVisible = 6;

    if (newsItems.length > maxVisible) {
        newsItems.forEach((item, index) => {
            if (index >= maxVisible) item.style.display = 'none';
        });

        // перевірка на існування кнопки перед створенням
        if (!document.querySelector('.news__show-more-btn')) {
            const btn = document.createElement('button');
            btn.textContent = 'Показати більше';
            btn.className = 'news__show-more-btn';

            newsContainer.after(btn);

            btn.addEventListener('click', () => {
                newsItems.forEach(item => item.style.display = '');
                btn.remove();
            });
        }
    }
}())
