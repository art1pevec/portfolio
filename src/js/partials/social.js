$('.social-icon').click(function(){
    $(this).find('.social-icon__circle').toggleClass('circle-animation');
    $(this).toggleClass('active');
    $(this).toggleClass('not-active');
});