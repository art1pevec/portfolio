var main = new Vue({
    el: '#app',
    data: {
        main: false,
        portfolio: false,
        competition: true,
        social_block: false,
        dateCopy: new Date(),
        competitions: [
            {id: 1, title: 'Поддержка сайтов на 1С-Битрикс', message: 'У вас есть проблема с 1C-Битрикс? Обращайтесь!', visible: true},
            {id: 2, title: 'Сайт с нуля на Wordpress', message: 'Полный цикл разработки, от создания прототипа сайта, до переноса на Ваш хостинг.', visible: false},
            {id: 3, title: 'Интеграция дизайна на CMS', message: 'Есть дизайн сайта? Верстка и интеграция любых Ваших задумок.', visible: false},
            {id: 4, title: 'Создание дизайна сайта', message: '3 этапа. Анализ и прототип, первичная визуализация, завершения проекта. Изи.', visible: false},
            {id: 5, title: 'Редизайн сайта', message: 'Мир не стоит на месте, каждому бизнесу нужно обновляться и дышать свежо. Сделаю красиво.', visible: false},
            {id: 6, title: 'Перенос сайта на хостинг', message: 'Хотите поменять хостинг? Тогда вы по адресу!', visible: false},
            {id: 7, title: 'Современная разработка', message: 'HTML5, CSS3, JS, Vue.js, Gulp4 etc.', visible: false},
            {id: 8, title: 'Оптимизация сайта Google PageSpeed', message: 'Ваш сайт тормозит и долго прогружает картинки? Есть шанс, что вы захотите доверить это профессионалу!', visible: false}
        ],
    },
    methods: {
        clickPortfolio: function() {
            this.main = false
            this.competition = false
            this.portfolio = true
        },
        clickCompetition: function() {
            this.main = false
            this.portfolio = false
            this.competition = true
        },
        clickMain: function() {
            this.main = true
            this.portfolio = false
            this.competition = false
        },
        clickSocial: function() {
            this.social_block = true
        },
        clickSocialClose: function() {
            $('.social-icon').click();
            this.social_block = false
        },

    }

})

// CLOSE DIVS OUTSIDE THE BLOCKS

$(document).mouseup(function (e) {
    var container = $(".social-icon__popup");
    if (container.has(e.target).length === 0){
        main.social_block = false;
    }
});

