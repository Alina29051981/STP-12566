const featuresSwiperEl = document.querySelector('[data-features-swiper]');

if (featuresSwiperEl) {
  new Swiper(featuresSwiperEl, {
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
