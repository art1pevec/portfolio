$(document).ready(function(){

        $('.main-menu__btn').on('click', function () {
            $(this).toggleClass('active');
            $(this).toggleClass('not-active');

            $('.left-menu').toggleClass('active');

            if ($('.left-menu').hasClass('active')) {
                $('.left-menu').css('display', 'block')
                    .animate({width: '270px'});

            } else {
                $('.left-menu').animate({width: '0px'}, function () {
                    $(this).css('display', 'none');
                })

            }
            if ($(this).hasClass('active')) {
                $('.left-menu__icon').removeClass('active');
            }

        });

    $('.left-menu__icon').on('click', function(){
        if ($(this).hasClass('active')) {
            return false;
        }
       $(this).toggleClass('active');
    });

    $('.main-block').mouseup(function (e) {
        $('.main-menu__btn.active').click();
    });

});




