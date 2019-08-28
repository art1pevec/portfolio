var main = new Vue({
    el: '#app',
    data: {
        main: false,
        portfolio: false,
        competition: true,
        social_block: false,
        dateCopy: new Date(),
        competitions: [
            {id: 1, title: 'Консультация по 1С-Битрикс: Управление сайтом', message: 'Расскажу про возможности CMS, ограничениях, возможных проблемах и путях их решения. Отвечу на интересующие вопросы.', visible: false},
            {id: 2, title: 'Интеграция вёрстки', message: 'У вас уже есть сверстанные макеты и их надо интегрировать с CMS 1С-Битрикс.', visible: false},
            {id: 3, title: 'Разработка функционала', message: 'Приступлю к разработке функционала сайта до того как будет готова вёрстка.', visible: false},
            {id: 4, title: 'Создание сайтов', message: 'Приступлю к разработке функционала сайта до того как будет готова вёрстка.', visible: false},
            {id: 5, title: 'Разработка технического задания', message: 'Приступлю к разработке функционала сайта до того как будет готова вёрстка.', visible: false}
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

