window.swiper = new Swiper({
    el: '.slider__contenedor',
    slideClass: 'slider__item',
    createElements: true,
    loop: true,
    pagination: true,
    autoplay: {
        delay: 3000,
    },
    navigation: true,
});