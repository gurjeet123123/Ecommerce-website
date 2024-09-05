const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let counter = 1;
const slideWidth = images[0].clientWidth;

setInterval(() => {
    slides.style.transform = `translateX(${-slideWidth * counter}px)`;
    slides.style.transition = 'transform 0.5s ease-in-out';
    counter++;

    if (counter === images.length) {
        counter = 0;
        setTimeout(() => {
            slides.style.transition = 'none';
            slides.style.transform = 'translateX(0)';
        }, 1000);
    }
}, 3000);
