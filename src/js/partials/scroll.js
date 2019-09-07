$(document).ready(function(){
   $(window).scroll(function(event){
       var main = $('#main').offset().top,
           portfolio = $('#portfolio1').offset().top,
           competition = $('#competition').offset().top,
           contacts = $('#contacts').offset().top,
           about = $('#contacts').offset().top,
           currentPos = $(this).scrollTop();

        if (currentPos > portfolio) {
            $('.top-menu__link').attr('href', '#portfolio1').addClass('active');
        }


   });
});
