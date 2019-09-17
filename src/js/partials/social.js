$(document).ready(function(){

    $('.social-icon__icon-block').click(function(){
        // $(this).find('.social-icon__circle').toggleClass('circle-animation');
        // $(this).toggleClass('active');
        // $(this).toggleClass('not-active');
        $(this).toggleClass('active');
        $('.social-icon__contacts-block').toggleClass('active');

        $('.social-icon__icon').toggleClass('fa-share-alt');
        $('.social-icon__icon').toggleClass('fa-times');
    });

    $('.main-block').mouseup(function () {
        $('.social-icon__contacts-block').removeClass('active');
        $('.social-icon__icon-block').removeClass('active');
        $('.social-icon__icon').toggleClass('fa-share-alt');
        $('.social-icon__icon').toggleClass('fa-times');
    });

});