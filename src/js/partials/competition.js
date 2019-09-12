var htmlSTring = '<div :data-pos="item.id" @mouseenter="clickItem" class="competition-screen__item">\
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
          });

          var arrEn = main.competitionsEn;

          arrEn.map(function(el){
              if (el.visible == true) {
                  el.visible = false;
              }
          });

          var arrFr = main.competitionsFr;

          arrFr.map(function(el){
              if (el.visible == true) {
                  el.visible = false;
              }
          });

          this.item.visible = !this.item.visible;
      }
    },
    template: htmlSTring
})

$(window).scroll(function(){
    var competition_1 = $('.competition-screen__item[data-pos=1]').offset().top - 300,
        competition_2 = $('.competition-screen__item[data-pos=2]').offset().top - 250,
        competition_3 = $('.competition-screen__item[data-pos=3]').offset().top - 250,
        competition_4 = $('.competition-screen__item[data-pos=4]').offset().top - 250,
        competition_5 = $('.competition-screen__item[data-pos=5]').offset().top - 250,
        competition_6 = $('.competition-screen__item[data-pos=6]').offset().top - 250,
        competition_7 = $('.competition-screen__item[data-pos=7]').offset().top - 250,
        competition_8 = $('.competition-screen__item[data-pos=8]').offset().top - 250,
        currentPos = $(this).scrollTop();

    console.log(currentPos);
    console.log(competition_2);

    if (main.localeRu === true) {
        var arr = main.competitions;
    } else if (main.localeEn === true) {
        var arr = main.competitionsEn;
    } else if (main.localeFr === true) {
        var arr = main.competitionsFr;
    }


    if (currentPos >= competition_1) {

        arr.map(function(el){
            el.visible = false;
            if (el.id == 1) {
                el.visible = true;
            }
        });
    }

    if (currentPos >= competition_2) {

        arr.map(function(el){
            el.visible = false;
            if (el.id == 2) {
                el.visible = true;
            }
        });
    }

    if (currentPos >= competition_3) {

        arr.map(function(el){
            el.visible = false;
            if (el.id == 3) {
                el.visible = true;
            }
        });
    }

    if (currentPos >= competition_4) {

        arr.map(function(el){
            el.visible = false;
            if (el.id == 4) {
                el.visible = true;
            }
        });
    }

    if (currentPos >= competition_5) {

        arr.map(function(el){
            el.visible = false;
            if (el.id == 5) {
                el.visible = true;
            }
        });
    }

    if (currentPos >= competition_6) {

        arr.map(function(el){
            el.visible = false;
            if (el.id == 6) {
                el.visible = true;
            }
        });
    }

    if (currentPos >= competition_7) {

        arr.map(function(el){
            el.visible = false;
            if (el.id == 7) {
                el.visible = true;
            }
        });
    }

    if (currentPos >= competition_8) {

        arr.map(function(el){
            el.visible = false;
            if (el.id == 8) {
                el.visible = true;
            }
        });
    }
});

