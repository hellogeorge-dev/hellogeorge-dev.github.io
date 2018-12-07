$(document).ready(function(){
// mobile navigation menu 

   $('.nav-toggle').click( function() {
        $('.nav-menu').css('width', '100%');
   });

   $('.close-btn').click( function() {
        $('.nav-menu').css('width', '0%');
   });

   $('.nav-link').click(function() {
       $('.nav-menu').css('width', '0%');
   })

});

