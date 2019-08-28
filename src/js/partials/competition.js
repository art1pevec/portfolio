var htmlSTring = '<div class="competition-screen__item">\
                         <div @click="clickItem" class="competition-screen__item-title">{{ item.title }}</div>\
                          <transition name="slide-fade">\
                         <div v-if="item.visible" class="competition-screen__item-more">{{ item.message }}</div>\
                         </transition>\
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

