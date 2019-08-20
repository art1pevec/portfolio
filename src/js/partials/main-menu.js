$(document).ready(function(){
    $('.main-menu__btn').on('click', function() {
        $(this).toggleClass('active');
        $(this).toggleClass('not-active');
    });
});