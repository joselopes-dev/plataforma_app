function initializeCarousel1() {
    const carousel1 = document.querySelector('.carousel');
    const cards1 = document.querySelectorAll('.card');
    const prevBtn1 = document.querySelector('.prev-btn');
    const nextBtn1 = document.querySelector('.next-btn');

    let currentIndex1 = 0;
    const cardWidth1 = cards1[0].offsetWidth + 20;

    function updateCarousel1() {
        carousel1.style.transform = `translateX(-${currentIndex1 * cardWidth1}px)`;
    }

    nextBtn1.addEventListener('click', () => {
        if (currentIndex1 < cards1.length - 4) {
            currentIndex1++;
            updateCarousel1();
        }
    });

    prevBtn1.addEventListener('click', () => {
        if (currentIndex1 > 0) {
            currentIndex1--;
            updateCarousel1();
        }
    });
}

initializeCarousel1();

