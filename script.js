var slideIndex = 0;
showSlides();

function showSlides() {
  var iterator;
  var slides = document.getElementsByClassName('testimonial-post-container');
  var dots = document.getElementsByClassName('dot');
  for (iterator = 0; iterator < slides.length; iterator++) {
    slides[iterator].style.display = 'none';  
  }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (iterator = 0; iterator < dots.length; iterator++) {
      dots[iterator].className = dots[iterator].className.replace(' active', '');
    }
    slides[slideIndex-1].style.display = 'block';  
    dots[slideIndex-1].className += ' active';
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

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

const block = document.querySelectorAll('.block');
const blockTitle = document.querySelectorAll('.question-block-title');

blockTitle.forEach((allh2, i) => {
  blockTitle[i].addEventListener('click', () => {
    block.forEach((allblock, i) => {
      block[i].classList.remove('activo');
    });
    block[i].classList.add('activo');
  });
});