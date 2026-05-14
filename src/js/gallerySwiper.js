const gallerySwiperEl = document.querySelector('[data-gallery-swiper]');

if (gallerySwiperEl) {
  new Swiper(gallerySwiperEl, {
    spaceBetween: 24,
    grabCursor: true,

    breakpoints: {
      320: {
        slidesPerView: 1.15,
      },

      1440: {
        slidesPerView: 4.15,
      },
    },
  });
}
