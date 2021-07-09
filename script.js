let slideIndex = 0;
showSlides();

function showSlides() {
  const slides =Object.values(document.getElementsByClassName('testimonial-post-container'));
  let dots = document.getElementsByClassName('dot');
  slides.forEach (element => element.style.display= 'none');
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 3500); // Change image every 3.5 seconds
}

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar-menu');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

const navLink = document.querySelectorAll('.navbar-link');

navLink.forEach((elemento) => elemento.addEventListener('click', closeMenu));

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
