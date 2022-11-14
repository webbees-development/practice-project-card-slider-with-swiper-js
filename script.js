let slidesPerView = 3;
let slidesPerGroup = 1;

if (window.innerWidth < 800) {
    slidesPerView = 1;
} else if (window.innerWidth < 1100) {
    slidesPerView = 2;
    slidesPerGroup = 2;
}

const swiper = new Swiper(".card-swiper", {
    // slidesPerView: 3,
    slidesPerView: slidesPerView,
    spaceBetween: 30,
    // slidesPerGroup: 1,
    slidesPerGroup: slidesPerGroup,
    cssMode: true,
    fade: true,
    // loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // breakpoints: {
    //     0: {
    //         slidesPerView: 1,
    //         slidesPerGroup: 1,
    //     },
    //     800: {
    //         slidesPerView: 2,
    //         slidesPerGroup: 2,
    //     },
    //     1100: {
    //         slidesPerView: 3,
    //         slidesPerGroup: 1,
    //     }
    // }
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