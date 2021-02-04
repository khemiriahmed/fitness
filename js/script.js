
$(document).ready(function(){

    $('.carousel').carousel({
        interval: 300000
      })

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

});










