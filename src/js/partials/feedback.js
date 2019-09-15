$(function(){

   $('.feedback__input-phone').mask('+7(999)-999-99-99');
   $('.feedback__input-phone').click(function(){
      $(this).caret(2);
   });

   $('.feedback__submit-btn').on('click', function(e){
      e.preventDefault();

      var form = $('.feedback__form');

      $.ajax({
         type: 'POST',
         url: form.attr('action'),
         data: form.serialize(),
         success: function(response) {
            $('.feedback__block').hide();
            $('.feedback__access-block').show();

            setTimeout(function(){
               $('.feedback').hide();
            }, 1500);
         }
      });
   });
});
