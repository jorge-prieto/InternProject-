$(document).ready(() => {
    const hero = $('.main-hero-container').offset().top;
    const services = $('.main-services-detail').offset().top;
  
    $(window).on('scroll', () => {
      if (
        $(window).scrollTop() > hero &&
        $(window).scrollTop() < services
      ) {
        $('#one').addClass('actived');
      } else {
        $('#one').removeClass('actived');
      }
    });
  
    const aboutSection = $('.main-about-detail').offset().top;
  
    $(window).on('scroll', () => {
      if (
        $(window).scrollTop() > services &&
        $(window).scrollTop() < aboutSection
      ) {
        $('#two').addClass('actived');
      } else {
        $('#two').removeClass('actived');
      }
    });

    const teamSection = $('.main-team-detail').offset().top;
  
    $(window).on('scroll', () => {
      if (
        $(window).scrollTop() > aboutSection &&
        $(window).scrollTop() < teamSection
      ) {
        $('#three').addClass('actived');
      } else {
        $('#three').removeClass('actived');
      }
    });

    const portfolioSection = $('.main-portfolio-detail').offset().top;
  
    $(window).on('scroll', () => {
      if (
        $(window).scrollTop() > teamSection &&
        $(window).scrollTop() < portfolioSection
      ) {
        $('#four').addClass('actived');
      } else {
        $('#four').removeClass('actived');
      }
    });

    const blogSection = $('.main-blog-detail').offset().top;
  
    $(window).on('scroll', () => {
      if (
        $(window).scrollTop() > portfolioSection &&
        $(window).scrollTop() < blogSection
      ) {
        $('#five').addClass('actived');
      } else {
        $('#five').removeClass('actived');
      }
    });

    const contactSection = $('.main-contact-detail').offset().top;
  
    $(window).on('scroll', () => {
      if (
        $(window).scrollTop() > blogSection &&
        $(window).scrollTop() < contactSection
      ) {
        $('#six').addClass('actived');
      } else {
        $('#six').removeClass('actived');
      }
    });

   $(window).on('scroll', () => {
      if (
        $(window).scrollTop() > contactSection &&
        $(window).scrollTop() > blogSection
      ) {
        $('#seven').addClass('actived');
      } else {
        $('#seven').removeClass('actived');
      }
    });
});