let slidesPerView = 3;
let slidesPerGroup = 1;

if (window.innerWidth < 800) {
    slidesPerView = 1;
} else if (window.innerWidth < 1100) {
    slidesPerView = 2;
    slidesPerGroup = 2;
}

const swiper = new Swiper(".card-swiper", {
    slidesPerView: slidesPerView,
    spaceBetween: 30,
    slidesPerGroup: slidesPerGroup,
    cssMode: true,
    // loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

window.addEventListener('resize', (e) => {
    if (window.innerWidth < 800) {
        swiper.params.slidesPerView = 1;
        swiper.params.slidesPerGroup = 1;
        swiper.update();
    } else if (window.innerWidth < 1100) {
        swiper.params.slidesPerView = 2;
        swiper.params.slidesPerGroup = 2;
        swiper.update();
    } else {
        swiper.params.slidesPerView = 3;
        swiper.params.slidesPerGroup = 1;
        swiper.update();
    }
});