// Slider Header
import Splide from '@splidejs/splide';

new Splide('.splide').mount();
new Splide('#slider1').mount();

new Splide('#slider2').mount();

new Splide('#slider3').mount();

var elms = document.getElementsByClassName('splide');

for (var i = 0; i < elms.length; i++) {
    new Splide(elms[i]).mount();
}
