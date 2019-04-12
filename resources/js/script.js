//$(document).ready(function() {
//    $('h1').click(function() {
//        $(this).css('background-color', '#ff0000');
//    })
//});



$(document).ready(function() {
    
    // For the sticky navigation
    
    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });
    
    // Scroll on buttons
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
    })
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
    })
    
    // Animaton on scroll
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
});




