$(document).ready(function(){
    $(window).scroll(function(){
        var cooperation_1 = $('.about-screen__cooperation-item[data-pos=1]').offset().top - 200,
            cooperation_2 = $('.about-screen__cooperation-item[data-pos=2]').offset().top - 200,
            cooperation_3 = $('.about-screen__cooperation-item[data-pos=3]').offset().top - 250,
            cooperation_4 = $('.about-screen__cooperation-item[data-pos=4]').offset().top - 250,
            currentPos = $(this).scrollTop();

        // console.log(cooperation_1);
        // console.log(cooperation_2);
        // console.log(cooperation_3);
        // console.log(cooperation_4);

        // console.log(currentPos);

        if (currentPos >= cooperation_1) {
            $('.about-screen__cooperation-item').removeClass('active');
            $('.about-screen__cooperation-item[data-pos=1]').addClass('active');
        }

        if (currentPos >= cooperation_2) {
            $('.about-screen__cooperation-item').removeClass('active');
            $('.about-screen__cooperation-item[data-pos=2]').addClass('active');
        }

        if (currentPos >= cooperation_3) {
            $('.about-screen__cooperation-item').removeClass('active');
            $('.about-screen__cooperation-item[data-pos=3]').addClass('active');
        }

        if (currentPos >= cooperation_4) {
            $('.about-screen__cooperation-item').removeClass('active');
            $('.about-screen__cooperation-item[data-pos=4]').addClass('active');
        }

    });
});
