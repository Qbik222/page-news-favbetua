(function () {
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
    let currentIndex = maxVisible;
    const step = 3; // Кількість новин, які показуються за один клік (1-3)

    if (newsItems.length > maxVisible) {
        newsItems.forEach((item, index) => {
            if (index >= maxVisible) item.style.display = 'none';
        });

        if (!document.querySelector('.news__show-more-btn')) {
            const btn = document.createElement('button');
            btn.textContent = 'Показати більше';
            btn.className = 'news__show-more-btn';

            newsContainer.after(btn);

            btn.addEventListener('click', () => {
                const nextIndex = Math.min(currentIndex + step, newsItems.length);
                for (let i = currentIndex; i < nextIndex; i++) {
                    newsItems[i].style.display = '';
                }
                currentIndex = nextIndex;
                if (currentIndex >= newsItems.length) {
                    btn.remove();
                }
            });
        }
    }
}())
