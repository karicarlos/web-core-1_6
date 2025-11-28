import "./sass/main.scss";

var init = false;
var brandsSwiper;
var devicesSwiper;
var pricesSwiper;

if (window.innerWidth < 784) {
  if (!init) {
    init = true;
    brandsSwiper = new Swiper(".brands__swiper", {
      direction: "horizontal",
      loop: true,
      spaceBetween: 0,
      width: 280,
      slideToClickedSlides: true,
      pagination: {
        el: ".brands__pagination",
        clickable: true,
      },
      grabCursor: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
    });

    devicesSwiper = new Swiper(".devices__swiper", {
      direction: "horizontal",
      loop: true,
      spaceBetween: 20,
      width: 280,
      slideToClickedSlides: true,
      pagination: {
        el: ".devices__pagination",
        clickable: true,
      },
      grabCursor: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
    });

    pricesSwiper = new Swiper(".prices__swiper", {
      direction: "horizontal",
      loop: true,
      spaceBetween: 20,
      width: 280,
      slideToClickedSlides: true,
      pagination: {
        el: ".prices__pagination",
        clickable: true,
      },
      grabCursor: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
    });
  }
} else if (init) {
  if (brandsSwiper) {
    brandsSwiper.destroy();
  }

  if (devicesSwiper) {
    devicesSwiper.destroy();
  }

  if (pricesSwiper) {
    pricesSwiper.destroy();
  }

  init = false;
}
