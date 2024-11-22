// Seleção dos elementos do carrossel
//const carousel = document.querySelector('.carousel2');
//const cards = document.querySelectorAll('.card2');
//const prevBtn = document.querySelector('.prev-btn2');
//const nextBtn = document.querySelector('.next-btn2');

// Configurações iniciais
//let currentIndex = 0;
//const cardWidth = cards[0].offsetWidth + 20; // Inclui a margem para calcular a largura total do card

// Função para atualizar a posição do carrossel
//function updateCarousel() {
    //carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
//}

// Botão de próximo
//nextBtn.addEventListener('click', () => {
    //if (currentIndex < cards.length - 4) { // Limite para não exceder os cards visíveis
       // currentIndex++;
        //updateCarousel();
    //}
//});

// Botão de anterior
//prevBtn.addEventListener('click', () => {
    //if (currentIndex > 0) {
        //currentIndex--;
        //updateCarousel();
    //}
//});

//script 2


function initializeCarousel2() {
    const carousel2 = document.querySelector('.carousel2');
    const cards2 = document.querySelectorAll('.card2');
    const prevBtn2 = document.querySelector('.prev-btn2');
    const nextBtn2 = document.querySelector('.next-btn2');

    let currentIndex2 = 0;
    const cardWidth2 = cards2[0].offsetWidth + 20;
    const totalCards2 = cards2.length;
    let autoPlayInterval2;

    function updateCarousel2() {
        carousel2.style.transform = `translateX(-${currentIndex2 * cardWidth2}px)`;
    }

    function nextCard2() {
        if (currentIndex2 < totalCards2 - 1) {
            currentIndex2++;
        } else {
            currentIndex2 = 0;
        }
        updateCarousel2();
    }

    function prevCard2() {
        if (currentIndex2 > 0) {
            currentIndex2--;
        } else {
            currentIndex2 = totalCards2 - 1;
        }
        updateCarousel2();
    }

    nextBtn2.addEventListener('click', nextCard2);
    prevBtn2.addEventListener('click', prevCard2);

    function startAutoPlay2() {
        autoPlayInterval2 = setInterval(nextCard2, 5000);
    }

    startAutoPlay2();

    carousel2.addEventListener('mouseover', () => clearInterval(autoPlayInterval2));
    carousel2.addEventListener('mouseout', startAutoPlay2);
}

initializeCarousel2();
