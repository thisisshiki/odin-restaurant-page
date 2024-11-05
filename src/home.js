import './styles.css';

const images = require.context('./images', false, /\.(png|jpe?g|svg)$/);
const imagePaths = images.keys().map(images);

export function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to KingsBurger Restaurant';

    const carouselContainer = document.createElement('div');
    carouselContainer.className = 'carousel-container';

    const carousel = document.createElement('div');
    carousel.className = 'carousel';

    imagePaths.forEach((src, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        if (index === 0) slide.classList.add('active');

        const img = document.createElement('img');
        img.src = src;
        img.alt = `Slide ${index + 1}`;
        // img.style.cssText = 'width:100%; height:100%; border-radius:8px;';

        slide.appendChild(img);
        carousel.appendChild(slide);
    });

    const prevArrow = document.createElement('div');
    prevArrow.className = 'arrow prev';
    prevArrow.textContent = '❮';

    const nextArrow = document.createElement('div');
    nextArrow.className = 'arrow next';
    nextArrow.textContent = '❯';

    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'dots';
    imagePaths.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    });

    carouselContainer.appendChild(carousel);
    carouselContainer.appendChild(prevArrow);
    carouselContainer.appendChild(nextArrow);
    carouselContainer.appendChild(dotsContainer);

    const description = document.createElement('div');
    description.className = 'description';
    
    const h2 = document.createElement('h2');
    h2.textContent = 'Experience Authentic Burgers';
    
    const p = document.createElement('p');
    p.textContent = 'Welcome to KingsBurger, where traditional flavors meet modern culinary artistry. Our master chefs create unforgettable dining experiences using the freshest ingredients and time-honored recipes.';

    description.appendChild(h2);
    description.appendChild(p);

    content.appendChild(h1);
    content.appendChild(carouselContainer);
    content.appendChild(description);

    initializeCarousel();
}

/**
 * Initialize the carousel functionality
 */
function initializeCarousel() {
    const carousel = document.querySelector('.carousel'); 
    const slides = document.querySelectorAll('.slide'); 
    const prevArrow = document.querySelector('.arrow.prev'); 
    const nextArrow = document.querySelector('.arrow.next');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0; 
    const totalSlides = slides.length;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }

 
    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
        updateCarousel();
    }

    /**
     * Go to a specific slide
     * @param {number} index
     */
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    nextArrow.addEventListener('click', showNextSlide);
    prevArrow.addEventListener('click', showPrevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });


    setInterval(showNextSlide, 5000);
}
