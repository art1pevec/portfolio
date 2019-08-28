var htmlSTring = '<div class="competition-screen__item">\
                         <div @click="clickItem" class="competition-screen__item-title">{{ item.title }}</div>\
                         <div v-if="item.visible" class="competition-screen__item-title">{{ item.message }}</div>\
                  </div>';

Vue.component('competitions', {
    props: ['item'],
    methods: {
      clickItem: function() {
          this.item.visible = !this.item.visible;
      }
    },
    template: htmlSTring
})

