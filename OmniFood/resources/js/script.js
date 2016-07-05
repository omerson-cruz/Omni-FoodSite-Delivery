$(document).ready(function() {
    
    /****************************************************************************/
    /*  Add the ".sticky" class to the nav element so that CSS will be applied  */
    
    $('.js-section-features').waypoint(function(direction) { 
        if (direction == "down"){          // if viewport is approaching the element breakpoint downward
            $('nav').addClass('sticky');
        } else{                            // else when viewport is approaching the breakpoint  upward
            $('nav').removeClass('sticky');
        }
    }, {
        // offset means 60px before it reaches the target element(e.g. '.js-section-features')
        // offset can also be expressed in terms of percent '%'
        offset: '20%'    
        // offset: '60px' //remove the comment to test
        }
    );
    
    /* Scroll to element onButtonClick*/
    $('.js-scroll-to-plans').click(function() {
        $('html, body').animate({
            scrollTop: $('.js-section-plans').offset().top
        }, 1000);
    });
        
    $('.js-scroll-to-start').click(function() {
        $('html, body').animate({
            scrollTop: $('.js-section-features').offset().top
        }, 500);
    }); 
    /*                  END                   */
    /*----------------------------------------*/
    
    
    
    /****************************************************************************************/
    /*  Navigation Scroll  (This is similar behavior to the one above this is more generic  */
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    }); 
    /*                  END                   */
    /*----------------------------------------*/
    
    /********************************************
    /*            Animate on Scroll            */
    
    $('.js-wp-1').waypoint(function(direction) {
        $('.js-wp-1').addClass('animated flipInX');
    }, {
        offset: '50%'
    });
    //////////////////////////////////////////////
    $('.js-wp-2').waypoint(function(direction) {
        $('.js-wp-2').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    //////////////////////////////////////////////
    $('.js-wp-3').waypoint(function(direction) {
        $('.js-wp-3').addClass('animated zoomIn');
    }, {
        offset: '60%'
    });
    //////////////////////////////////////////////
    $('.js-wp-4').waypoint(function(direction) {
        $('.js-wp-4').addClass('animated wobble');
    }, {
        offset: '50%'
    });
    /*                  END                   */
    /*----------------------------------------*/
    
    /********************************************
    /*            Mobile Navigation            */
    
    $('.js-nav-icon').click(function() {
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon i');
        
        nav.slideToggle(200);        
        if (icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');           
        }
    });    
    /*                  END                   */
    /*----------------------------------------*/
        
    
    
//END of .ready()
}); 

