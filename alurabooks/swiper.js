const swiper = new Swiper('.swiper', {
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});