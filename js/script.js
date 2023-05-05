const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

new WOW().init();

jQuery('.drawer_icon').on('click', function(e) {
  e.preventDefault();

  jQuery('.drawer_icon').toggleClass('is_active');
  jQuery('.drawer_content').toggleClass('is_active');
  jQuery('.drawer_background').toggleClass('is_active');

  return false;
});

jQuery('a[href^="#"]').on('click', function() {
  
  var header = jQuery('header').innerHeight();
  var id = jQuery(this).attr('href');
  var position = 0;
  if (id != '#') {
    position = jQuery(id).offset().top - header;
  }
  jQuery('html,body').animate({
    scrollTop: position
  },
  300);
});

jQuery(window).on('scroll', function() {
  if ( 100 < jQuery(this).scrollTop()) {
    jQuery('.to_top').addClass('is_show');
  }else {
    jQuery('.to_top').removeClass('is_show');
  }
});

jQuery('.header-nav li a').on('click', function() {
  jQuery('.header-nav li a').removeClass('is-active');
  jQuery(this).addClass('is-active');
});

jQuery('.qa_q_content').on('click', function() {
  jQuery(this).next().slideToggle();
  jQuery(this).children('.qa_icon').toggleClass( 'is-open');
});

jQuery('.js_close').on('click', function(e) {
  e.preventDefault();
  var target = jQuery(this).data('target');
  jQuery(target).hide();
});

jQuery('.js_open').on('click', function(e) {
  e.preventDefault();
  var target = jQuery(this).data('target');
  jQuery(target).show();
});