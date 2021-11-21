$(document).ready(function(){
    $('.main-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      prevArrow:"<i class='fas fa-chevron-left'></i>",
      nextArrow:"<i class='fas fa-chevron-right'></i>",
    });
  });