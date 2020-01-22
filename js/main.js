/*******    slick    ********************/
$('.clients-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  prevArrow: $('.arrow-left'),
  nextArrow: $('.arrow-right'),
  dots: true
});

/**************     dropdown     **************/
$('.dropdown').click(function () {
  $('.menu').slideToggle(1000);
  $('.menu').addClass('active');
});

$('.menu a').click(function () {
  $('.menu').hide(1000);
  $('.menu').removeClass('active');
});

$('.close').click(function () {
  $('.menu').hide(1000);
  $('.menu').removeClass('active');
});

/*********************     плавный скролл        ************************/
$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    if ($.browser) {
      $('body').animate({
        scrollTop: destination
      }, 1000);
    } else {
      $('html').animate({
        scrollTop: destination
      }, 1000);
    }
    return false;
  });
});