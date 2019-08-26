new Vue({
    el: '#app',
    data: {
        main: true,
        portfolio: false,
        competition: false,
        social_block: false,
        dateCopy: new Date(),
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
