const navMain = document.querySelector('.main-header__wrapper');
const navToggle = document.querySelector('.main-header__toggle');

// Убирает класс main-header__wrapper--nojs

navMain.classList.remove('main-header__wrapper--nojs');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-header__wrapper--closed');
  navMain.classList.toggle('main-header__wrapper--opened');
});
