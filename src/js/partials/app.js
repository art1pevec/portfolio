var main = new Vue({
    el: '#app',
    data: {
        main: true,
        portfolio: false,
        competition: false,
        social_block: false,
        dateCopy: new Date(),
        currentTime: 1,
        nowTime: new Date(),
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
        competitionsEn: [
            {id: 1, title: 'Hello', message: 'hello', visible: true},
            {id: 2, title: 'Сайт с нуля на Wordpress', message: 'Полный цикл разработки, от создания прототипа сайта, до переноса на Ваш хостинг.', visible: false},
            {id: 3, title: 'Интеграция дизайна на CMS', message: 'Есть дизайн сайта? Верстка и интеграция любых Ваших задумок.', visible: false},
            {id: 4, title: 'Создание дизайна сайта', message: '3 этапа. Анализ и прототип, первичная визуализация, завершения проекта. Изи.', visible: false},
            {id: 5, title: 'Редизайн сайта', message: 'Мир не стоит на месте, каждому бизнесу нужно обновляться и дышать свежо. Сделаю красиво.', visible: false},
            {id: 6, title: 'Перенос сайта на хостинг', message: 'Хотите поменять хостинг? Тогда вы по адресу!', visible: false},
            {id: 7, title: 'Современная разработка', message: 'HTML5, CSS3, JS, Vue.js, Gulp4 etc.', visible: false},
            {id: 8, title: 'Оптимизация сайта Google PageSpeed', message: 'Ваш сайт тормозит и долго прогружает картинки? Есть шанс, что вы захотите доверить это профессионалу!', visible: false}
        ],
        competitionsFr: [
            {id: 1, title: 'Soutien des sites 1C-Bitrix', message: 'bonjour', visible: true},
            {id: 2, title: 'Сайт с нуля на Wordpress', message: 'Полный цикл разработки, от создания прототипа сайта, до переноса на Ваш хостинг.', visible: false},
            {id: 3, title: 'Intégration du design sur le CMS', message: 'Есть дизайн сайта? Верстка и интеграция любых Ваших задумок.', visible: false},
            {id: 4, title: 'Création du design de site web', message: '3 этапа. Анализ и прототип, первичная визуализация, завершения проекта. Изи.', visible: false},
            {id: 5, title: 'Redesign du site web', message: 'Мир не стоит на месте, каждому бизнесу нужно обновляться и дышать свежо. Сделаю красиво.', visible: false},
            {id: 6, title: 'Migration du site sur hosting', message: 'Хотите поменять хостинг? Тогда вы по адресу!', visible: false},
            {id: 7, title: 'Développement moderne', message: 'HTML5, CSS3, JS, Vue.js, Gulp4 etc.', visible: false},
            {id: 8, title: 'Optimisation d’un site Internet Google PageSpeed', message: 'Ваш сайт тормозит и долго прогружает картинки? Есть шанс, что вы захотите доверить это профессионалу!', visible: false}
        ],
        localeRu: true,
        localeEn: false,
        localeFr: false,
        locale: ''
    },

    computed: {

        getTimeMinutes: function() {
                var minutes = '';
                if (this.nowTime.getMinutes() < 10) {
                    minutes = '0' + this.nowTime.getMinutes()
                }
                minutes = this.nowTime.getMinutes()


            return minutes;
        },

        getTimeHours: function() {
            return this.nowTime.getHours();
        }
    },


    mounted: function() {

        var typed = new Typed('.main-screen__img-text', {
            stringsElement: '.typed-strings',
            typeSpeed: 30,
            loop: true,
        });

        if(localStorage.LocaleRu) {

            this.localeEn = false;
            this.localeFr = false;
            this.localeRu = true;
        }

        if(localStorage.LocaleEn) {

            this.localeRu = false;
            this.localeFr = false;
            this.localeEn = true;
        }

        if(localStorage.LocaleFr) {

            this.localeRu = false;
            this.localeEn = false;
            this.localeFr = true;
        }
        console.log(localStorage);
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

        clickLocaleRu: function() {
            this.localeFr = false
            this.localeEn = false
            this.localeRu = true
            localStorage.removeItem('LocaleEn')
            localStorage.removeItem('LocaleFr')
            localStorage.setItem('LocaleRu', true);
        },

        clickLocaleEn: function() {
            this.localeFr = false
            this.localeRu = false
            this.localeEn = true
            localStorage.removeItem('LocaleRu')
            localStorage.removeItem('LocaleFr')
            localStorage.setItem('LocaleEn', true);
        },

        clickLocaleFr: function() {
            this.localeEn = false
            this.localeRu = false
            this.localeFr = true
            localStorage.removeItem('LocaleRu')
            localStorage.removeItem('LocaleEn')
            localStorage.setItem('LocaleFr', true);
        },


    },

})



// CLOSE DIVS OUTSIDE THE BLOCKS

$(document).mouseup(function (e) {
    var container = $(".social-icon__popup");
    if (container.has(e.target).length === 0){
        main.social_block = false;
    }
});

