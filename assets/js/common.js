$(function () {
  $('.main-nav--nojs').removeClass('main-nav--nojs');
  // Добавление/удаление модификаторов при клике на переключение видимости
  var toggl = $('.js-main-nav-toggle');
  if (toggl) {
    // toggl.on('click', mainNavVisibleToggle);
    // function mainNavVisibleToggle(e) {
    //       e.preventDefault();
    //   alert('fffff js-main-nav-toggle asdfghjkl zxc vb');
    //       toggl.toggleClass('burger--close'); // модификатор иконки (должен быть .burger)
    //       $('.js-main-nav').toggleClass('main-nav--open');
    //     }
    toggl.on('click', function (e) {
      e.preventDefault();
      toggl.toggleClass('burger--close'); // модификатор иконки (должен быть .burger)
      $('.js-main-nav').toggleClass('main-nav--open');
    });
  }

});
$(document).ready(function(){

  $("#owl-carousel-rev").owlCarousel({
    items: 1,
    // nav: true,
    pagination : true,
    // dots: true,
    loop: true,
    // center: true,
    autoplayHoverPause: true,
    autoplay: true,
    autoplayTimeout: 2500,
    mouseDrag: false,
    singleItem: true
    // itemElement:'li',
    // stageElement:'ul'
    // responsive : {
    //   0 : {
    //     items: 1,
    //     nav: true,
    //     loop: true,
    //     center: true,
    //   },
    //   480 : {
    //     items: 3,
    //   },
    //   768 : {
    //     items: 3,
    //   },
    //   992 : {
    //     items: 3,
    //   },
    //   1200 : {
    //     items: 3,
    //   },
    //   1800 : {
    //     items: 3,
    //   }
    // }
  });

});
///
// $(document).ready(function(){
//   var owl = $(".owl-carousel").owlCarousel({
//     items: 1,
//     slideSpeed: 500,
//     autoplay: true,
//     autoplayTimeout: 4500,
//     loop: true,
//     mouseDrag: false,
//     singleItem: true,
//     dots: true,
//     margin: 85,
//     itemElement:'li',
//     stageElement:'ul',
//     dotsClass:'slider__pager',
//   }).data('owlCarousel');
//
// });