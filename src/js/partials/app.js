var main = new Vue({
    el: '#app',
    data: {
        main: false,
        portfolio: false,
        competition: true,
        social_block: false,
        dateCopy: new Date(),
        competitions: [
            {id: 1, title: 'Hello1', message: 'message1', visible: false},
            {id: 2, title: 'Hello2', message: 'message2', visible: false},
            {id: 3, title: 'Hello3', message: 'message3', visible: false}
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

