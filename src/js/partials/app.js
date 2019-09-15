var main = new Vue({
    el: '#app',
    data: {
        main: true,
        portfolio: false,
        competition: false,
        social_block: false,
        contacts: false,
        about: false,
        dateCopy: new Date(),
        currentTime: 1,
        count: 0,
        typed: false,
        nowTime: new Date(),
        competitions: [
            {id: 1, title: 'Поддержка сайтов на 1С-Битрикс', message: 'Написание компонентов, модулей и интеграция верстки.', visible: true},
            {id: 2, title: 'Сайт с нуля на Wordpress', message: 'Полный цикл разработки, от создания прототипа сайта, до переноса на Ваш хостинг.', visible: false},
            {id: 3, title: 'Интеграция дизайна на CMS', message: 'Верстка и интеграция любых Ваших задумок.', visible: false},
            {id: 4, title: 'Создание дизайна сайта', message: '3 этапа. Анализ и прототип, первичная визуализация, завершение проекта.', visible: false},
            {id: 5, title: 'Редизайн сайта', message: 'Мир не стоит на месте, каждому бизнесу нужно обновляться и дышать свежо.', visible: false},
            {id: 6, title: 'Перенос сайта на хостинг', message: 'Быстро и легко', visible: false},
            {id: 7, title: 'Современная разработка', message: 'HTML5, CSS3, JS, Vue.js, Gulp4 etc.', visible: false},
            {id: 8, title: 'Оптимизация сайта Google PageSpeed', message: 'Ваш сайт тормозит и долго прогружает картинки? Нужна оптимизация!', visible: false}
        ],
        competitionsEn: [
            {id: 1, title: 'Maintenance sites on 1C-Bitrix', message: 'Writing components, modules and layout integration.', visible: true},
            {id: 2, title: 'Website on Wordpress', message: 'The full development cycle, from creating a prototype site, to transferring to your hosting.', visible: false},
            {id: 3, title: 'Integration design on CMS', message: 'Layout integration all what do you want,', visible: false},
            {id: 4, title: 'Website design creation', message: '3 stages. Analysis and prototype, initial visualization, completion of the project.', visible: false},
            {id: 5, title: 'Website redesign', message: 'The world does not stand still, every business needs to be updated and breathe freshly.', visible: false},
            {id: 6, title: 'Transfer site to hosting', message: 'Fast and simply!', visible: false},
            {id: 7, title: 'Modern development', message: 'HTML5, CSS3, JS, Vue.js, Gulp4 etc.', visible: false},
            {id: 8, title: 'Website optimization Google PageSpeed', message: 'Does your site slow down and load images for a long time? Need optimization!', visible: false}
        ],
        competitionsFr: [
            {id: 1, title: 'Soutien des sites 1C-Bitrix', message: 'Écriture des composants, modules et intégration votre HTML sur 1C-Bitrix', visible: true},
            {id: 2, title: 'Site web à partir de zéro Wordpress', message: 'Conception complète: du projet au déplacement vers un hébérgeur.', visible: false},
            {id: 3, title: 'Intégration du design sur le CMS', message: 'On crée tout ce que vous voulez', visible: false},
            {id: 4, title: 'Création du design de site web', message: '3 étapes: projet, visualisation primaire, résultat.', visible: false},
            {id: 5, title: 'Redesign du site web', message: 'Le monde de s’arrête pas, le commercial doit être en capacité de se renouveler', visible: false},
            {id: 6, title: 'Migration du site sur hosting', message: 'Vite et facile', visible: false},
            {id: 7, title: 'Développement moderne', message: 'HTML5, CSS3, JS, Vue.js, Gulp4 etc.', visible: false},
            {id: 8, title: 'Optimisation d’un site Internet Google PageSpeed', message: 'Votre site ralentit et les images ne s’affichent pas? Il faut l’optimiser!', visible: false}
        ],
        dayOfTheWeek: {
            Ru: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            En: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            Fr: ['Dimanche','Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
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
                weekDay = this.dayOfTheWeek.Ru[this.nowTime.getDay()]
            } else if (this.localeEn) {
                weekDay = this.dayOfTheWeek.En[this.nowTime.getDay()]
            } else if (this.localeFr) {
                weekDay = this.dayOfTheWeek.Fr[this.nowTime.getDay()]
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
        if (this.count == 0) {
            // this.typed = true;
        }

        if (this.typed) {
            var typed = new Typed('.main-screen__img-text', {
                stringsElement: '.typed-strings',
                typeSpeed: 30,
                loop: true,
            });
        }


    },



    mounted: function() {
    if ($(window).width() > 992 && this.count === 0) {
        var typed = new Typed('.main-screen__img-text', {
            stringsElement: '.typed-strings',
            typeSpeed: 30,
            loop: true,
        });
    }

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
            this.typed = false
            this.main = false
            this.competition = false
            this.contacts = false
            this.about = false
            this.portfolio = true
            this.count = 1
        },
        clickCompetition: function() {
            this.typed = false
            this.main = false
            this.portfolio = false
            this.contacts = false
            this.about = false
            this.competition = true
            this.count = 2
        },
        clickMain: function() {
            this.typed = true
            this.portfolio = false
            this.competition = false
            this.contacts = false
            this.about = false
            this.main = true
            this.count = 0
        },
        clickContacts: function() {
            this.typed = false
            this.portfolio = false
            this.competition = false
            this.about = false
            this.main = false
            this.contacts = true
            this.count = 3
        },
        clickAbout: function() {
            this.typed = false
            this.portfolio = false
            this.competition = false
            this.contacts = false
            this.main = false
            this.about = true
            this.count = 4;
        },
        clickSocial: function() {
            this.typed = false;
            this.social_block = true
        },
        clickSocialClose: function() {
            this.typed = false;
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
if ($(window).width() < 992) {
    main.typed = true;
    main.main = true;
    main.portfolio = true;
    main.competition = true;
    main.contacts = true;
    main.about = true;
}

if ($(window).width() > 992) {

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
                main.typed = true;
                break;
            case 1:
                main.main = false;
                main.portfolio = true;
                main.competition = false;
                main.contacts = false;
                main.about = false;
                main.typed = false;
                break;
            case 2:
                main.main = false;
                main.portfolio = false;
                main.competition = true;
                main.contacts = false;
                main.about = false;
                main.typed = false;
                break;
            case 3:
                main.main = false;
                main.portfolio = false;
                main.competition = false;
                main.contacts = true;
                main.about = false;
                main.typed = false;
                break;
            case 4:
                main.main = false;
                main.portfolio = false;
                main.competition = false;
                main.contacts = false;
                main.about = true;
                main.typed = false;
                break;
        }
    });
}
// CLOSE DIVS OUTSIDE THE BLOCKS


$(document).mouseup(function (e) {
    var container = $(".social-icon__popup");
    if (container.has(e.target).length === 0){
        main.typed = false;
        main.social_block = false;

    }
});

