const swiper = new Swiper(".swiper-container", {
  loop: true, slidesPerView: 1, spaceBetween: 20,
  breakpoints: { 768: { slidesPerView: 2, }, 1280: { slidesPerView: 3, }, },
  pagination: {
    el: ".pagination",
    clickable: true,
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
    renderBullet: function (index, className) { return `<span class="${className}"></span>`; },
  },
  navigation: { nextEl: ".carrousel__button.next", prevEl: ".carrousel__button.prev", },
});
