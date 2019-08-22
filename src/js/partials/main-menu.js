$(document).ready(function(){
    $('.main-menu__btn').on('click', function() {
        $(this).toggleClass('active');
        $(this).toggleClass('not-active');

        $('.left-menu').toggleClass('active');

        if ($('.left-menu').hasClass('active')) {
            $('.left-menu').css('display', 'block')
                .animate({width: '300px'});
        } else {
            $('.left-menu').animate({width: '0px'}, function(){
                $(this).css('display', 'none');
            })

        }

        $('.left-menu__icon').removeClass('active');
        $('.left-menu__icon').next().removeClass('active');
    });



    $('.left-menu__icon').on('click', function(){
       $(this).toggleClass('active');
       $(this).next().toggleClass('active');
    });
});