let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentIndex += step;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    const newTransformValue = -currentIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${newTransformValue}%)`;
}

// Adiciona navegação automática
setInterval(() => moveSlide(1), 5000);  // A cada 5 segundos, o slide avança automaticamente
