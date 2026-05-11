const swiper = new Swiper('.mySwiper', {
  spaceBetween: 24,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1.25,
      centeredSlides: true,
    },

    1440: {
      slidesPerView: 4.25,
      centeredSlides: false,
    },
  },
});
