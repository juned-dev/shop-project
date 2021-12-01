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
      prevArrow:"<img class='slick-prev' src='../images/icon_arrow_left_xl.svg' />",
      nextArrow:"<img class='slick-next' src='../images/icon_arrow_right_xl.svg' />",
    });
  });