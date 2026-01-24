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

document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.querySelector('.sidebar');
  const sidebarOpenBtn = document.querySelector('.nav__open-btn');
  const sidebarCloseBtn = document.querySelector('.sidebar__close-btn');
  const overlay = document.getElementById('overlay');

  const callBtn = document.querySelector('.contacts__call-btn');
  const callModal = document.querySelector('.call-modal');
  const callModalCloseBtn = document.querySelector('.call-modal__close-btn');

  const chatBtn = document.querySelector('.contacts__chat-btn');
  const feedbackModal = document.querySelector('.feedback');
  const feedbackCloseBtn = document.querySelector('.feedback__close-btn');

  const readMoreBtn = document.querySelector('.btn-t');
  const fullText = document.querySelector('.text-par_full');

  // Функция для открытия оверлея
  function openOverlay() {
    if (overlay) overlay.style.display = 'block';
  }

  // Функция для закрытия оверлея
  function closeOverlay() {
    if (overlay) overlay.style.display = 'none';
  }
  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('sidebar_opened');
  }
  function closeAll() {
    closeSidebar();
    if (callModal) callModal.classList.remove('call-modal_opened');
    if (feedbackModal) feedbackModal.classList.remove('feedback_opened');
    closeOverlay();
  }

  // Открытие меню
  if (sidebarOpenBtn) {
    sidebarOpenBtn.addEventListener('click', function (e) {
      e.preventDefault();
      if (sidebar) sidebar.classList.add('sidebar_opened');
      openOverlay();
    });
  }

  // Закрытие меню
  if (sidebarCloseBtn) {
  sidebarCloseBtn.addEventListener('click', function (e) {
    e.preventDefault();
    closeAll(); 
  });
  }
  // 
  if (callBtn) {
  callBtn.addEventListener('click', function (e) {
    e.preventDefault();
    closeSidebar();
    if (callModal) callModal.classList.add('call-modal_opened');
    openOverlay(); 
  });
  }
  if (callModalCloseBtn) {
 callModalCloseBtn.addEventListener('click', function (e) {
    e.preventDefault();
    closeAll(); 
  });
  }
  if (chatBtn) {
  chatBtn.addEventListener('click', function (e) {
    e.preventDefault();
    closeSidebar();
    if (feedbackModal) feedbackModal.classList.add('feedback_opened');
    openOverlay();
  }); 
  }
  if (feedbackCloseBtn) {
  feedbackCloseBtn.addEventListener('click', function (e) {
    e.preventDefault();
    closeAll();
  });
  }
  // === Закрытие по клику на оверлей ===
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      e.preventDefault();
      closeAll();
    });
  }
  // === Закрытие по нажатию ESC ===
  document.addEventListener('keyup', function (e) {
    if (e.key === 'Escape'|| e.keyCode === 27) {
       if (
      (sidebar && sidebar.classList.contains('sidebar_opened')) ||
      (callModal && callModal.classList.contains('call-modal_opened')) ||
      (feedbackModal && feedbackModal.classList.contains('feedback_opened'))
    ) {
      closeAll();
    }
  }
  });
// === Кнопка "Читать далее" ===
  if (readMoreBtn && fullText) {
    readMoreBtn.addEventListener('click', function (e) {
      e.preventDefault();
      if (window.innerWidth <= 767) {
        fullText.style.display = 'block';
        this.style.display = 'none';
      }
    });
  }
// Ищем кнопку "Показать все" более надёжно
const buttons = Array.from(document.querySelectorAll('button, [role="button"], div, span, a'));
  const showAllButton = buttons.find(el => {
    const text = el.textContent.trim().replace(/\s+/g, ' ');
    return text === 'Показать все';
  });


if (showAllButton) {
  showAllButton.addEventListener('click', function(e) {
    e.preventDefault(); // отменяем стандартное поведение (если есть)
    e.stopPropagation(); // предотвращаем всплытие (опционально)

    // Находим все карточки с классом "expand"
    const expandCards = document.querySelectorAll('.expand');

    expandCards.forEach(card => {
      // Сохраняем оригинальный display из CSS, если возможно
      // Если не знаем — используем 'block' как fallback
      card.style.display = ''; 
  });
    // Скрываем кнопку
    this.style.display = 'none';
  });
}
 });