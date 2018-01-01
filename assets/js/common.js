$(function () {
  $('.main-nav--nojs').removeClass('main-nav--nojs');
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

// Добавление/удаление модификаторов при клике на переключение видимости
//   var toggler = document.getElementById('main-nav-toggler');
//   if(toggler){
//     toggler.addEventListener('click', mainNavVisibleToggle);
//
//     function mainNavVisibleToggle(e) {
//       e.preventDefault();
//       toggler.classList.toggle('burger--close'); // модификатор иконки (должен быть .burger)
//       document.getElementById('main-nav').classList.toggle('main-nav--open');
//     }
//   }
//  }