$(document).ready(() => {
  $('.owl-carousel').owlCarousel({
    items: 2,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [769, 2],
    itemsTablet: [567, 1],
    pagination: true,
    navigation: false,
    navigationText: ['', ''],
    slideSpeed: 1000,
    autoPlay: true,
  });
});

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar-menu');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

const navLink = document.querySelectorAll('.navbar-link');

navLink.forEach((element) => element.addEventListener('click', closeMenu));

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}

const box = document.querySelectorAll('.block');
const blockTitle = document.querySelectorAll('.question-block-title');

blockTitle.forEach((allH2, index) => {
  blockTitle[index].addEventListener('click', () => {
    box.forEach((allBlock, index) => {
      box[index].classList.remove('activo');
    });
    box[index].classList.add('activo');
  });
});
