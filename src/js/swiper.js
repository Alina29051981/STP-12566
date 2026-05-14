const swiper = new Swiper('.mySwiper', {
  spaceBetween: 24,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 'auto',
      centeredSlides: false,
    },

    1440: {
      slidesPerView: 4.15,
      centeredSlides: false,
    },
  },
});

const gallerySwiper = new Swiper('.gallerySwiper', {
  spaceBetween: 24,
  grabCursor: true,

  pagination: {
    el: '.gallerySwiper .swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 'auto',
      centeredSlides: true,
    },
    1440: {
      slidesPerView: 4,
      centeredSlides: true,
    },
  },
});