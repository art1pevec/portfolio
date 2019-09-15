$(document).ready(function(){
    $('.top-menu__link').on('click', function(event){
        event.preventDefault();

        var id = $(this).attr('href'),
            top = $(id).offset().top - 150;

        $('body,html').animate({scrollTop: top}, 500);
    });


   $(window).scroll(function(){

        // MENU

       var main = $('#main').offset().top + 70,
           portfolio = $('#portfolio1').offset().top - 270,
           competition = $('#competition').offset().top - 270,
           contacts = $('#contacts').offset().top - 270,
           about = $('#about').offset().top - 270,
           currentPos = $(this).scrollTop(),
           mainIcon = $('.top-menu__icon.fa-home').closest('.top-menu__link'),
           portfolioIcon = $('.top-menu__icon.fa-suitcase').closest('.top-menu__link'),
           competitionIcon = $('.top-menu__icon.fa-desktop').closest('.top-menu__link'),
           contactsIcon = $('.top-menu__icon.fa-address-book-o').closest('.top-menu__link'),
           aboutIcon = $('.top-menu__icon.fa-user-o').closest('.top-menu__link');

        if (currentPos < main) {
            $('.top-menu__link').removeClass('active');
            $(mainIcon).addClass('active');
        }

        if (currentPos > portfolio) {
            $('.top-menu__link').removeClass('active');
            $(portfolioIcon).addClass('active');
        }

        if (currentPos > competition) {
            $('.top-menu__link').removeClass('active');
            $(competitionIcon).addClass('active');
        }

        if (currentPos > contacts) {
            $('.top-menu__link').removeClass('active');
            $(contactsIcon).addClass('active');
        }

        if (currentPos > about) {
            $('.top-menu__link').removeClass('active');
            $(aboutIcon).addClass('active');
        }


       if($(window).scrollTop() + $(window).height() == $(document).height()) {
           $('.bottom-menu__phone').addClass('active');
           $('.bottom-menu__tip').css({display: 'block'});

       } else {
           $('.bottom-menu__phone').removeClass('active');
           $('.bottom-menu__tip').css({display: 'none'});
       }
       
   });
});
