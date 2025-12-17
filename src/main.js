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

//  Закрыть/открыть бургер меню

document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.querySelector('.sidebar');
  const sidebarOpenBtn = document.querySelector('.nav__open-btn');
  const sidebarCloseBtn = document.querySelector('.sidebar__close-btn');

  const callBtn = document.querySelector('.contacts__call-btn');
  const callModal = document.querySelector('.call-modal');
  const callModalCloseBtn = document.querySelector('.call-modal__close-btn');
  
  const chatBtn = document.querySelector('.contacts__chat-btn');
  const feedbackModal = document.querySelector('.feedback');
  const feedbackCloseBtn = document.querySelector('.feedback__close-btn');

  function closeSidebar() {
    sidebar.classList.remove('sidebar_opened');
  }

  // Открытие меню
  sidebarOpenBtn.addEventListener('click', function (e) {
    e.preventDefault();
    sidebar.classList.add('sidebar_opened');
  });

  // Закрытие меню
  sidebarCloseBtn.addEventListener('click', function (e) {
    e.preventDefault();
    closeSidebar();
  });

  // 
  callBtn.addEventListener('click', function (e) {
    e.preventDefault();
    closeSidebar();
    callModal.classList.add('call-modal_opened');
  });

 callModalCloseBtn.addEventListener('click', function (e) {
    e.preventDefault();
    closeSidebar();
    callModal.classList.remove('call-modal_opened');
  });

  chatBtn.addEventListener('click', function (e) {
    e.preventDefault();
    closeSidebar();
    feedbackModal.classList.add('feedback_opened');
  });

  feedbackCloseBtn.addEventListener('click', function (e) {
    e.preventDefault();
    closeSidebar();
    feedbackModal.classList.remove('feedback_opened');
  });
});
