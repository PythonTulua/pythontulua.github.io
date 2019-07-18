$(window).scroll(function() {
        if ($("#menu").offset().top > 620) {
            $("#menu").addClass("bg-header");
        } else {
            $("#menu").removeClass("bg-header");
        }
      });