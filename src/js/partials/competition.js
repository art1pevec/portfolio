var htmlSTring = '<div @click="clickItem" class="competition-screen__item">\
                         <div class="competition-screen__item-title">{{ item.title }}</div>\
                          <transition name="slide-fade">\
                         <div v-if="item.visible" class="competition-screen__item-more">{{ item.message }}</div>\
                         </transition>\
                  </div>';

Vue.component('competitions', {
    props: ['item'],
    methods: {
      clickItem: function() {
          var arr = main.competitions;

          arr.map(function(el){
             if (el.visible == true) {
                 el.visible = false;
             }
             console.log(el);
          });

          this.item.visible = !this.item.visible;
      }
    },
    template: htmlSTring
})

