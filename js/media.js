$(window).resize(function(){
   console.log('resize called');
   var width = $(window).width();
   if(width <= 992){
       $('#mediaq').removeClass('text-right').addClass('text-left');
   }
   else{
       $('#mediaq').removeClass('text-left').addClass('text-right');
   }
})
.resize();//trigger the resize event on page load

//taken from http://stackoverflow.com/questions/8943816/changing-a-class-name-with-jquery-given-a-specific-width-range-media-query