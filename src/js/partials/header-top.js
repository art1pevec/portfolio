$(document).ready(function(){
    $('.header-top__lang-icon').on('click', function(){
        $('.header-top__lang-text-block').css({display: 'flex'});
    });
});

$(document).click(function (e){ // событие клика по веб-документу
    var div = $(".header-top__lang-block"); // тут указываем ID элемента
    var languages = $('.header-top__lang-text-block')
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        languages.hide(); // скрываем его
    }
});