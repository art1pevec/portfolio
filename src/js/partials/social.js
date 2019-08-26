$('.social-icon').click(function(){
    $(this).find('.social-icon__circle').toggleClass('circle-animation');
    $(this).toggleClass('active');
    $(this).toggleClass('not-active');
});

// $('.social-icon__popup-close').on('click', function(){
//     $('.social-icon').toggleClass('not-active');
//     $('.social-icon').toggleClass('active');
// });