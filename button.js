$('div.button1').on('mousedown', function(){
    $(this).addClass('button1-press');
  }).on('mouseup', function() {
    $(this).removeClass('button1-press');
  });