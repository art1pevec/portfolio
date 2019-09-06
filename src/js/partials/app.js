var main = new Vue({
    el: '#app',
    data: {
        main: false,
        portfolio: false,
        competition: false,
        social_block: false,
        contacts: false,
        about: true,
        dateCopy: new Date(),
        currentTime: 1,
        count: 0,
        typed: true,
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
        dayOfTheWeek: {
            Ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
            En: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
            Fr: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
        },
        screens: {
            array: ['main', 'portfolio', 'competitions', 'contacts', 'about']
        },
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
                } else {
                    minutes = this.nowTime.getMinutes()
                }
            return minutes;
        },

        getTimeHours: function() {
            return this.nowTime.getHours();
        },

        getDateDayWeek: function() {
            var year = this.nowTime.getFullYear();
            var month = this.nowTime.getMonth() + 1;
            var day = this.nowTime.getDate();
            var weekDay = '';

            if (this.localeRu) {
                weekDay = this.dayOfTheWeek.Ru[this.nowTime.getDay() - 1]
            } else if (this.localeEn) {
                weekDay = this.dayOfTheWeek.En[this.nowTime.getDay() - 1]
            } else if (this.localeFr) {
                weekDay = this.dayOfTheWeek.Fr[this.nowTime.getDay() - 1]
            }

            if (month < 10) {
                month = '0' + month;
            }

            if (day < 10) {
                day = '0' + day;
            }

            return weekDay + ', ' + day + '.' + month + '.' + year;
        },

        getDateMain: function() {
            return this.nowTime.getDate();
        }
    },

    updated: function() {
        if (this.typed) {
            var typed = new Typed('.main-screen__img-text', {
                stringsElement: '.typed-strings',
                typeSpeed: 30,
                loop: true,
            });
        }

        if (this.count < 5) {
            this.typed = true;
        }
    },


    mounted: function() {

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
    },

    methods: {

        clickPortfolio: function() {
            this.main = false
            this.competition = false
            this.contacts = false
            this.about = false
            this.portfolio = true
            this.count = 1
        },
        clickCompetition: function() {
            this.main = false
            this.portfolio = false
            this.contacts = false
            this.about = false
            this.competition = true
            this.count = 2
        },
        clickMain: function() {
            this.portfolio = false
            this.competition = false
            this.contacts = false
            this.about = false
            this.main = true
            this.count = 0
        },
        clickContacts: function() {
            this.portfolio = false
            this.competition = false
            this.about = false
            this.main = false
            this.contacts = true
            this.count = 3
        },
        clickAbout: function() {
            this.portfolio = false
            this.competition = false
            this.contacts = false
            this.main = false
            this.about = true
            this.count = 4;
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
            this.typed = false;
        },

        clickLocaleEn: function() {
            this.localeFr = false
            this.localeRu = false
            this.localeEn = true
            localStorage.removeItem('LocaleRu')
            localStorage.removeItem('LocaleFr')
            localStorage.setItem('LocaleEn', true);
            this.typed = false;
        },

        clickLocaleFr: function() {
            this.localeEn = false
            this.localeRu = false
            this.localeFr = true
            localStorage.removeItem('LocaleRu')
            localStorage.removeItem('LocaleEn')
            localStorage.setItem('LocaleFr', true);
            this.typed = false;
        },


    },

})
$(window).bind('mousewheel', function(event){

   var scroll = event.originalEvent.deltaY;

    if (scroll > 0) {
        if (main.count === 4) {
            main.count = 4;
        } else {
            main.count++;
        }

    } else {
        if (main.count === 0) {
            main.count = 0;
        } else {
            main.count--;
        }

    }

    switch (main.count) {
        case 0:
            main.main = true;
            main.portfolio = false;
            main.competition = false;
            main.contacts = false;
            main.about = false;
            break;
        case 1:
            main.main = false;
            main.portfolio = true;
            main.competition = false;
            main.contacts = false;
            main.about = false;
            break;
        case 2:
            main.main = false;
            main.portfolio = false;
            main.competition = true;
            main.contacts = false;
            main.about = false;
            break;
        case 3:
            main.main = false;
            main.portfolio = false;
            main.competition = false;
            main.contacts = true;
            main.about = false;
            break;
        case 4:
            main.main = false;
            main.portfolio = false;
            main.competition = false;
            main.contacts = false;
            main.about = true;
            break;
    }
});
// CLOSE DIVS OUTSIDE THE BLOCKS

$(document).mouseup(function (e) {
    var container = $(".social-icon__popup");
    if (container.has(e.target).length === 0){
        main.social_block = false;
    }
});

