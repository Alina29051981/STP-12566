const swiperEl = document.querySelector('[data-swiper]');

if (swiperEl) {
  new Swiper(swiperEl, {
    spaceBetween: 24,
    grabCursor: true,

    breakpoints: {
      320: {
        slidesPerView: 'auto',
        centeredSlides: false,
      },

      1440: {
        slidesPerView: 'auto',
        centeredSlides: false,
      },
    },
  });
}
