$(document).ready(function(){

    $('.social-icon__icon-block').click(function(){
        $(this).toggleClass('active');
        $('.social-icon__contacts-block').toggleClass('active');

        $('.social-icon__icon').toggleClass('fa-share-alt');
        $('.social-icon__icon').toggleClass('fa-times');
    });

    $('.main-block').mouseup(function () {

        if ($('.social-icon__icon-block').hasClass('active')){
            $('.social-icon__contacts-block').removeClass('active');
            $('.social-icon__icon-block').removeClass('active');
            $('.social-icon__icon').toggleClass('fa-share-alt');
            $('.social-icon__icon').toggleClass('fa-times');
        }

    });

});
