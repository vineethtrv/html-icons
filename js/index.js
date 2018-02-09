//Decimal To Hex
function decimalToHex(number){
  if (number < 0){
    number = 0xFFFFFFFF + number + 1;
  }
  return number.toString(16).toUpperCase();
}
// Pop Over
$('li').click(function(){
  var dem =  $(this).find('i').text().charCodeAt(0);
  var code = decimalToHex(dem);
   var $temp = $("<input>");
  var popover = '<div class="popover"><span class="close">&times;</span>Hex Code</div>'

  $('.popover').remove();
   $('li').removeClass('active');
  $(this).addClass('active').append(popover);
  // copy
  $(".popover").append($temp);
  $temp.attr('readonly', true);
  $temp.val('<span> &#x'+ code +';</span>').select();
});

// Close
$(document).on('click', '.close' ,function(){
  $('.popover').fadeOut();
   $('li').removeClass('active');
});

//Out Click
$(document).on('click', function(event) {
  if (!$(event.target).closest('.popover, li').length) {
  $('.popover').fadeOut();
   $('li').removeClass('active');
  }
});
// Emtt search box

$('.emty').click(function(){
  $('.search').val('');
  $(this).fadeOut().removeClass('hide');
  $('li').show();
});

//search
$('.search').keyup(function(){


  // Toogle Header & Clear button
 var val = $(this).val().toLowerCase();
  if(0< val.length){
    $('.header').addClass('hide');
    $('.emty').fadeIn();
  }
  else{
     $('.header').removeClass('hide');
    $('.emty').fadeOut();
    $('.log').hide()
  }

  // find icon
   $('li').each(function()
   {
     var text = $(this).text();
     if(text.indexOf(val)==-1)
       {
         $(this).hide();
       }
     else
       {
           $(this).show();
       }

   })


   if(!$('li').is(':visible')){
      $('.log').show()
   }
   else {
       $('.log').hide()
   }

});
