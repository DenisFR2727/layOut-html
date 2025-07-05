// Slider Header
const headerMain = document.querySelector('.header__main');

const images = [
    './images/header/header-bg.png',
    './images/header/header-bg2.png',
];

let currentIndex = 0;

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    setTimeout(() => {
        headerMain.style.backgroundImage = `url(${images[currentIndex]})`;
        headerMain.style.transition = 'opacity 1s ease-in-out';
    }, 3000);
}

setInterval(changeBackground, 3000);
