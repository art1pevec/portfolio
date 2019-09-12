@@include('../../bower_components/jquery/dist/jquery.js')

$(window).on('load', function() {
    setTimeout(function(){
        $('.preloader').find('i').fadeOut().end().fadeOut('slow');
    }, 500)
});
@@include('../../bower_components/vue/dist/vue.js')
@@include('../../bower_components/fancybox/dist/jquery.fancybox.js')
@@include('../../bower_components/jquery.maskedinput/dist/jquery.maskedinput.js')
@@include('../../bower_components/typed.js/lib/typed.js')

@@include('partials/main-menu.js')
@@include('partials/header-top.js')
@@include('partials/main-slider.js')
@@include('partials/social.js')
@@include('partials/competition.js')
@@include('partials/app.js')
@@include('partials/feedback.js')
@@include('partials/phone.js')
@@include('partials/top-menu.js')
@@include('partials/scroll.js')
@@include('partials/bottom-menu.js')





