var htmlSTring = '<div class="competition-screen__item">\
                         <div class="competition-screen__item-title">{{ item.title }}</div>\
                         <div class="competition-screen__item-more">{{ item.message }}</div>\
                  </div>';

Vue.component('competitions', {
    props: ['item'],
    methods: {

    },
    template: htmlSTring
})