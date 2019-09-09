$(document).ready(function(){

   $('.main-block').mouseup(function(){
      $('.bottom-menu__hidden-block').removeClass('active');
      $('.bottom-menu__icon-menu').find('.active-path').css({
         fill: '#000'
      });
   });

   $('.bottom-menu__icon-menu').on('click', function(){
      $('.bottom-menu__hidden-block').toggleClass('active');

      if ($('.bottom-menu__hidden-block').hasClass('active')){
         $('.bottom-menu__icon-menu').find('.active-path').css({
            fill: '#86B9E9'
         });
      } else {
         $('.bottom-menu__icon-menu').find('.active-path').css({
            fill: '#000'
         });
      }
   });



});