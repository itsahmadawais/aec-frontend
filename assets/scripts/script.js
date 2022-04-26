$(document).ready(function(){
   //Mobile Menu Toggler
   $("#mobile-menu-btn , #mobile-menu-close-btn").click(function(){
      $(".side-menu").animate({width: 'toggle'});
   });
   //Toggle Dropdown Menu
   $(".c-dropdown-toggle").click(function(){
      $(this).closest('.c-dropdown').find('.c-dropdown-menu').animate({width: 'toggle'},function(){
         if($(this).is(":visible")){
            $("#backward-btn").show();
            $("#mobile-menu-close-btn").hide();
         } else{
            $("#mobile-menu-close-btn").show();
            $("#backward-btn").hide();
         }
      });
   });
   //Close Dropdown
   $("#backward-btn").click(function(){
      $(".side-menu .c-dropdown-menu").slideUp();
      $("#mobile-menu-close-btn").show();
      $("#backward-btn").hide();
   });
});