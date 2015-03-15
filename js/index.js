(function($) {

    "use-strict";

    function init(){

      $('.flexslider').flexslider();

      //Thank you to CSS Tricks for this useful smoothscroll
      $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          resetMenu();
          return false;
        }
      }
    });

    //Menu
      var menu = $("#pop-menu");
      var trigger = $("a.pop-menu_trigger");

      var resetMenu = function(){
        menu.removeClass('pop-menu-open');
        menu.addClass('pop-menu-close');
      }

      var overlay = $("<div class='pop-overlay'></div>");
      menu.append(overlay);

      overlay.on('click', function(e){
        resetMenu();
      });

      trigger.on("click", function(e){
        e.stopPropagation();
        e.preventDefault();

        if (menu.hasClass('pop-menu-open')){
          resetMenu();
        }

        else{
          menu.removeClass('pop-menu-close');
          menu.addClass('pop-menu-open');
        }
      });

    };


    init();

}(jQuery));
