$(document).ready(function(){
    $('.top-menu__block').on('click', function(){
        $(this).toggleClass('active');
        $(this).toggleClass('not-active');

        if ($(this).hasClass('active')){
            $('.top-menu').css({display: 'flex'});

        }

        if ($(this).hasClass('not-active')){

            $('.top-menu').css({display: 'none'});
        }

    });
});
