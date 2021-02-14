
$(document).ready(function(){

    $('.carousel--').carousel({
        interval: 6000
      })

    // Add Active Class Navbar Link And Remove From Siblings
    $('nav li a').click(function() {
        $(this).parent().addClass('active').siblings().removeClass('active');

    });


// Ahide Show icon search
      $('.icon-search').on('click',function(){
          $(this).hide();
          $('.icon-close').fadeIn();
            $("input").fadeIn(100);
            $("input").animate({
                opacity: 0.75,
                right: "69"
            });

      });

      $('.icon-close').on('click',function(){
          $(this).hide();
         
          $('.icon-search').show();
          $("input").animate({
            opacity: 0,
            right: "0"
        });
        $("input").fadeOut(500);


      });


  //Scroll To TOP Button Fade
  $('.scroll-top').on('click', function(event) {
    event.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 1000);
});


  //********** Header menu*******//
  $('.nav-icon').click(function() {
    $('.nav-icon').toggleClass('open');
   
        $('.banner .slider').toggleClass('pl');
        if ($('.banner .slider').hasClass('pl')) {
            $('.banner .slider.pl').animate({ width: "93%" }, 1000);
           $('.side-menu').fadeIn(1000);
            $('.carousel-indicators').fadeIn(1000);
            $('.carousel-indicators').removeClass('carousel-anime');

        } else {
        
            $('.banner .slider').animate({ width: "100%" }, 1000);
            $('.side-menu').fadeOut(1000);
             $('.carousel-indicators').addClass('carousel-anime');


        }
});


 //Scroll Link to Section
 $('.navbar-nav li a').on('click', function(e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('#' + $(this).data('scroll')).offset().top-80
    }, 1000);
});



    //If Scroll Fixed top
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('nav').addClass('fixed-top');
            $('.nav-icon').fadeOut();

        } else {
            $('nav').removeClass('fixed-top');
            $('.nav-icon').fadeIn();
        }


        //Button Scroll  FadeIn If Scroll Top Superieur 1000px
        var scrollToTop = $('.scroll-top');
        if ($(window).scrollTop() > 1000) {
            scrollToTop.fadeIn(400);
        } else {
            scrollToTop.fadeOut(400);

        }

    });


    wow = new WOW(
       {
        boxClass:     'wow',      // default
        //animateClass: 'animated', // default
         //offset:       0,          // default
         //mobile:       true,       // default
         //live:         true        // default
       }
      )
      wow.init();

      $('html').niceScroll({
        cursorcolor: "#ff226e",
        cursorwidth: "10px",
        cursorborder: "1px solid #fff",
        cursorborderradius: "20px",
        scrollspeed: "120",
    });

});










